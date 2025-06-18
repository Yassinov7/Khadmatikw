import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getOfferById, getAllOfferIds } from "@/lib/api";
import { slugify } from "@/utils/slugify";
import Image from "next/image";
import { CalendarDays, MessageCircle, Phone } from "lucide-react";

function extractId(slugWithId: string): number | null {
  const match = slugWithId.match(/-(\d+)$/);
  return match ? Number(match[1]) : null;
}

export async function generateMetadata(
  { params }: { params: { slugWithId: string } }
): Promise<Metadata> {
  const id = extractId(params.slugWithId);
  if (!id) return {};

  const offer = await getOfferById(id);
  if (!offer) return {};

  const keywords = [
    offer.title,
    offer.product?.name,
    offer.product?.category_id && "خصومات",
    "عروض الكويت", "خصم", "خدماتي", "الشاشات", "الستلايت", "الكاميرات"
  ].filter(Boolean).join(", ");

  return {
    title: offer.title,
    description: offer.description || "",
    openGraph: {
      title: offer.title,
      description: offer.description || "",
      images: [offer.product?.image_url || "/default-product.png"],
    },
    keywords,
    alternates: {
      canonical: `https://khadmatikw.vercel.app/offers/${params.slugWithId}`,
    },
    robots: "index, follow",
  };
}

export async function generateStaticParams() {
  const offers = await getAllOfferIds();
  return offers.map((offer) => ({
    slugWithId: `${slugify(offer.title)}-${offer.id}`,
  }));
}

export default async function OfferDetailsPage({ params }: { params: { slugWithId: string } }) {
  const id = extractId(params.slugWithId);
  if (!id) notFound();

  const offer = await getOfferById(id);
  if (!offer) notFound();

  const whatsappLink = offer.contact_info?.whatsapp
    ? `https://wa.me/${offer.contact_info.whatsapp.replace(/[^0-9]/g, "")}?text=مرحبًا، أود الاستفسار عن العرض: ${encodeURIComponent(offer.title)}`
    : null;

  const phoneLink = offer.contact_info?.phone
    ? `tel:${offer.contact_info.phone.replace(/[^0-9+]/g, "")}`
    : null;

  return (
    <article className="max-w-2xl mx-auto bg-white rounded-2xl shadow p-6 my-8">
      <div className="w-full h-56 mb-4 relative rounded-xl overflow-hidden bg-orange-50">
        <Image
          src={offer.product?.image_url || "/default-product.png"}
          alt={offer.title}
          fill
          className="object-contain"
          priority
        />
      </div>

      <h1 className="text-2xl font-bold text-orange-600 mb-2">{offer.title}</h1>

      {offer.product?.name && (
        <p className="text-sm text-gray-600 mb-2">
          <span className="font-bold">المنتج:</span> {offer.product.name}
        </p>
      )}

      {offer.discount_percent && (
        <p className="text-sm font-semibold text-green-600 mb-2">
          خصم {offer.discount_percent}%
        </p>
      )}

      {offer.start_date || offer.end_date ? (
        <p className="text-xs text-orange-700 flex items-center gap-1 mb-2">
          <CalendarDays size={14} />
          {offer.start_date && <>من <time dateTime={offer.start_date}>{offer.start_date}</time></>}
          {offer.end_date && <> إلى <time dateTime={offer.end_date}>{offer.end_date}</time></>}
        </p>
      ) : null}

      <p className="text-gray-700 mb-4">{offer.description}</p>

      <div className="flex gap-2 pt-3">
        {whatsappLink && (
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 px-3 py-2 bg-green-600 hover:bg-green-700 text-white rounded-full text-sm font-bold shadow"
          >
            <MessageCircle size={16} />
            واتساب
          </a>
        )}
        {phoneLink && (
          <a
            href={phoneLink}
            className="flex items-center gap-1 px-3 py-2 bg-primary hover:bg-primary/90 text-white rounded-full text-sm font-bold shadow"
          >
            <Phone size={16} />
            اتصال
          </a>
        )}
      </div>
    </article>
  );
}
