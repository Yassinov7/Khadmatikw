"use client";
import Image from "next/image";
import { Phone, MessageCircle } from "lucide-react";
import type { Offer } from "@/types";

export default function OfferDetailsClient({ offer }: { offer: Offer }) {
  const whatsapp = offer.contact_info?.whatsapp
    ? `https://wa.me/${offer.contact_info.whatsapp.replace(/[^0-9]/g, "")}?text=مرحبًا، أود الاستفسار عن العرض: ${encodeURIComponent(offer.title)}`
    : null;

  const phone = offer.contact_info?.phone
    ? `tel:${offer.contact_info.phone.replace(/[^0-9+]/g, "")}`
    : null;

  return (
    <main className="max-w-5xl mx-auto px-4 py-8">
      <div className="bg-white rounded-2xl shadow-md border border-gray-100 flex flex-col md:flex-row overflow-hidden">
        <div className="relative w-full md:w-1/2 h-64 bg-background">
          <Image
            src={offer.product?.image_url || "/default-product.png"}
            alt={`صورة العرض: ${offer.title}`}
            fill
            className="object-contain p-4"
            priority
          />
        </div>

        <div className="p-6 flex flex-col gap-4 md:w-1/2">
          <h1 className="text-2xl font-bold text-primary">{offer.title}</h1>
          <p className="text-text leading-relaxed text-sm">{offer.description}</p>

          {offer.discount_percent && (
            <p className="text-xl font-bold text-secondary mt-2">
              خصم بنسبة {offer.discount_percent}% 🎉
            </p>
          )}

          <div className="mt-auto flex flex-wrap gap-3 pt-4">
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
      </div>
    </main>
  );
}
