import Image from "next/image";
import { Phone, MessageCircle, Percent, CalendarDays } from "lucide-react";
import type { Offer } from "@/types";

const DEFAULT_IMAGE = "/default-product.png";

export function OfferCard({ offer }: { offer: Offer }) {
  const whatsappLink = offer.contact_info?.whatsapp
    ? `https://wa.me/${offer.contact_info.whatsapp.replace(/[^0-9]/g, "")}?text=مرحبًا، أود الاستفسار عن العرض: ${encodeURIComponent(offer.title)}`
    : null;

  const phoneLink = offer.contact_info?.phone
    ? `tel:${offer.contact_info.phone.replace(/[^0-9+]/g, "")}`
    : null;

  return (
    <article
      className="bg-white rounded-2xl shadow-md border border-orange-200 flex flex-col h-full transition hover:shadow-lg overflow-hidden"
      itemScope
      itemType="https://schema.org/Offer"
    >
      {/* صورة العرض */}
      <div className="w-full h-44 bg-orange-50 flex items-center justify-center relative">
        {offer.product?.image_url ? (
          <Image
            src={offer.product.image_url}
            alt={`صورة ${offer.product.name || offer.title}`}
            fill
            sizes="(max-width: 600px) 100vw, 33vw"
            className="object-contain p-3"
            priority
          />
        ) : (
          <Image
            src={DEFAULT_IMAGE}
            alt={`صورة العرض: ${offer.title}`}
            fill
            sizes="(max-width: 600px) 100vw, 33vw"
            className="object-contain p-3"
          />
        )}

        {/* شارة الخصم */}
        {offer.discount_percent !== undefined && (
          <div className="absolute top-2 right-2 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow flex items-center gap-1">
            <Percent size={12} />
            خصم {offer.discount_percent}%
          </div>
        )}
      </div>

      {/* محتوى العرض */}
      <div className="p-4 flex flex-col flex-1 gap-2">
        <h3
          className="text-lg font-bold text-orange-600"
          itemProp="name"
        >
          {offer.title}
        </h3>

        {offer.product?.name && (
          <p className="text-xs text-gray-500 mb-1">
            <span className="font-semibold">المنتج:</span> {offer.product.name}
          </p>
        )}

        <p className="text-sm text-gray-700 line-clamp-3" itemProp="description">
          {offer.description}
        </p>
      </div>

      {/* شريط التواريخ المميز */}
      {(offer.start_date || offer.end_date) && (
        <div className="bg-orange-50 text-orange-700 text-xs font-semibold px-4 py-2 flex items-center gap-2 border-t border-orange-100">
          <CalendarDays size={14} className="text-orange-500" />
          {offer.start_date && (
            <>
              من{" "}
              <time itemProp="validFrom" dateTime={offer.start_date}>
                {offer.start_date}
              </time>
            </>
          )}
          {offer.end_date && (
            <>
              {" "}إلى{" "}
              <time itemProp="validThrough" dateTime={offer.end_date}>
                {offer.end_date}
              </time>
            </>
          )}
        </div>
      )}

      {/* روابط التواصل */}
      <div className="p-4 pt-2 flex gap-2 mt-auto">
        {whatsappLink && (
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener"
            className="flex items-center gap-1 px-3 py-2 bg-green-600 hover:bg-green-700 text-white rounded-full text-sm font-bold shadow"
            aria-label={`تواصل عبر واتساب حول العرض: ${offer.title}`}
          >
            <MessageCircle size={16} />
            واتساب
          </a>
        )}
        {phoneLink && (
          <a
            href={phoneLink}
            className="flex items-center gap-1 px-3 py-2 bg-primary hover:bg-primary/90 text-white rounded-full text-sm font-bold shadow"
            aria-label={`اتصل للاستفسار عن العرض: ${offer.title}`}
          >
            <Phone size={16} />
            اتصال
          </a>
        )}
      </div>
    </article>
  );
}
