"use client";
import Image from "next/image";
import { Phone, MessageCircle, Percent, CalendarDays } from "lucide-react";
import type { Offer } from "@/types";

export default function OfferDetailsClient({ offer }: { offer: Offer }) {
  const whatsapp = offer.contact_info?.whatsapp
    ? `https://wa.me/${offer.contact_info.whatsapp.replace(/[^0-9]/g, "")}?text=مرحبًا، أود الاستفسار عن العرض: ${encodeURIComponent(offer.title)}`
    : null;

  const phone = offer.contact_info?.phone
    ? `tel:${offer.contact_info.phone.replace(/[^0-9+]/g, "")}`
    : null;

  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <article
        className="bg-white rounded-2xl shadow-md border border-orange-200 flex flex-col overflow-hidden"
        itemScope
        itemType="https://schema.org/Offer"
      >
        {/* صورة العرض */}
        <div className="relative w-full h-64 bg-orange-50">
          <Image
            src={offer.product?.image_url || "/default-product.png"}
            alt={`صورة العرض: ${offer.title}`}
            fill
            className="object-contain p-4"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />

          {offer.discount_percent !== undefined && (
            <div className="absolute top-3 right-3 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow flex items-center gap-1">
              <Percent size={12} />
              خصم {offer.discount_percent}%
            </div>
          )}
        </div>

        {/* تفاصيل العرض */}
        <div className="p-6 flex flex-col gap-3">
          <h1 className="text-2xl font-bold text-orange-600" itemProp="name">
            {offer.title}
          </h1>

          {offer.product?.name && (
            <p className="text-sm text-gray-500">
              <span className="font-semibold">المنتج:</span> {offer.product.name}
            </p>
          )}

          <p className="text-base text-gray-700 leading-relaxed" itemProp="description">
            {offer.description}
          </p>

          {(offer.start_date || offer.end_date) && (
            <div className="bg-orange-50 text-orange-700 text-xs font-semibold px-4 py-2 flex items-center gap-2 rounded border border-orange-100 mt-2">
              <CalendarDays size={14} className="text-orange-500" />
              {offer.start_date && (
                <>
                  من <time itemProp="validFrom" dateTime={offer.start_date}>{offer.start_date}</time>
                </>
              )}
              {offer.end_date && (
                <>
                  {" "}إلى <time itemProp="validThrough" dateTime={offer.end_date}>{offer.end_date}</time>
                </>
              )}
            </div>
          )}

          <div className="flex gap-3 pt-4 mt-4 flex-wrap">
            {whatsapp && (
              <a
                href={whatsapp}
                target="_blank"
                rel="noopener"
                className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-full shadow text-sm font-bold"
              >
                <MessageCircle size={16} /> واتساب
              </a>
            )}
            {phone && (
              <a
                href={phone}
                className="flex items-center gap-2 px-4 py-2 bg-primary hover:bg-primary/90 text-white rounded-full shadow text-sm font-bold"
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
