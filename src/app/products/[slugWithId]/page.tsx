import { notFound } from "next/navigation";
import { getAllProductIds, getProductById } from "@/lib/api";
import type { Metadata } from "next";
import { slugify } from "@/utils/slugify";
import Image from "next/image";
import { Phone, MessageCircle } from "lucide-react";

function extractId(slugWithId: string): number | null {
  const match = slugWithId.match(/-(\d+)$/);
  return match ? Number(match[1]) : null;
}

// ✅ تحسين SEO والـ OG و Twitter
export async function generateMetadata({ params }: { params: { slugWithId: string } }): Promise<Metadata> {
  const id = extractId(params.slugWithId);
  if (!id) return {};

  const product = await getProductById(id);
  if (!product) return {};

  const title = `${product.name} | خدماتي KW`;
  const description = product.description || "عرض مميز على المنتج من خدماتي KW";
  const image = product.image_url || "/default-product.png";
  const url = `https://yourdomain.com/products/${params.slugWithId}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      images: [{ url: image }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
    alternates: {
      canonical: url,
    },
  };
}

// ✅ توليد روابط ثابتة
export async function generateStaticParams() {
  const products = await getAllProductIds();
  return products.map((p) => ({
    slugWithId: `${slugify(p.name)}-${p.id}`,
  }));
}

export default async function ProductPage({ params }: { params: { slugWithId: string } }) {
  const id = extractId(params.slugWithId);
  if (!id) notFound();

  const product = await getProductById(id);
  if (!product) notFound();

  const whatsapp = product.contact_info?.whatsapp
    ? `https://wa.me/${product.contact_info.whatsapp.replace(/[^0-9]/g, "")}?text=مرحبًا، أود الاستفسار عن المنتج: ${encodeURIComponent(product.name)}`
    : null;

  const phone = product.contact_info?.phone
    ? `tel:${product.contact_info.phone.replace(/[^0-9+]/g, "")}`
    : null;

  return (
    <main className="max-w-5xl mx-auto px-4 py-8">
      <article className="bg-white rounded-2xl shadow-md border border-gray-100 flex flex-col md:flex-row overflow-hidden">
        <div className="relative w-full md:w-1/2 h-64 bg-background" aria-label={`صورة المنتج: ${product.name}`}>
          <Image
            src={product.image_url || "/default-product.png"}
            alt={`صورة المنتج: ${product.name}`}
            fill
            className="object-contain p-4"
            priority
          />
        </div>

        <div className="p-6 flex flex-col gap-4 md:w-1/2">
          <h1 className="text-2xl font-bold text-primary leading-snug">{product.name}</h1>
          <p className="text-text text-sm leading-relaxed">{product.description}</p>

          <section aria-label="السعر">
            {product.on_sale && product.sale_price ? (
              <>
                <span className="line-through text-gray-400 mr-2" aria-hidden="true">{product.price} د.ك</span>
                <span className="text-secondary px-2 text-2xl font-bold">{product.sale_price} د.ك</span>
              </>
            ) : (
              <span className="text-primary text-xl font-bold">{product.price} د.ك</span>
            )}
          </section>

          <div className="flex flex-wrap gap-3 pt-4 mt-auto">
            {whatsapp && (
              <a
                href={whatsapp}
                target="_blank"
                rel="noopener"
                aria-label={`تواصل عبر واتساب مع البائع حول المنتج ${product.name}`}
                className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-full shadow text-sm font-bold"
              >
                <MessageCircle size={16} /> واتساب
              </a>
            )}
            {phone && (
              <a
                href={phone}
                aria-label={`اتصل بالبائع حول المنتج ${product.name}`}
                className="flex items-center gap-2 px-4 py-2 bg-primary hover:bg-blue-800 text-white rounded-full shadow text-sm font-bold"
              >
                <Phone size={16} /> اتصال
              </a>
            )}
          </div>
        </div>
      </article>
    </main>
  );
}
