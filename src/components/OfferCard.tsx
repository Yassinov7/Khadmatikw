import Image from "next/image";
import { Phone, MessageCircle, Percent } from "lucide-react";

export type Offer = {
  id: number;
  title: string;
  description?: string;
  discount_percent?: number;
  start_date?: string;
  end_date?: string;
  product?: { name: string; image_url?: string; category_id?: number; };
  contact_info?: {
    phone?: string;
    whatsapp?: string;
    [key: string]: string | undefined;
  };
};

const DEFAULT_IMAGE = "/default-product.png";

export function OfferCard({ offer }: { offer: Offer }) {
  const whatsappLink = offer.contact_info?.whatsapp
    ? `https://wa.me/${offer.contact_info.whatsapp.replace(/[^0-9]/g, "")}?text=مرحبًا، أود الاستفسار عن العرض: ${encodeURIComponent(offer.title)}`
    : null;

  const phoneLink = offer.contact_info?.phone
    ? `tel:${offer.contact_info.phone.replace(/[^0-9+]/g, "")}`
    : null;

  return (
    <div className="bg-white rounded-2xl shadow-md border border-gray-100 flex flex-col h-full transition hover:shadow-lg">
      <div className="w-full h-44 bg-gray-50 flex items-center justify-center overflow-hidden rounded-t-2xl relative">
        {offer.product?.image_url ? (
          <Image
            src={offer.product.image_url}
            alt={offer.product.name || offer.title}
            fill
            sizes="(max-width: 600px) 100vw, 33vw"
            className="object-contain p-3"
            priority={!!offer.product.image_url}
          />
        ) : (
          <Image
            src={DEFAULT_IMAGE}
            alt={offer.product?.name || offer.title}
            fill
            sizes="(max-width: 600px) 100vw, 33vw"
            className="object-contain p-3"
          />
        )}
        {!offer.product?.image_url && (
          <Percent
            size={56}
            className="absolute text-secondary opacity-20 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          />
        )}
      </div>
      <div className="p-4 flex flex-col flex-1 gap-2">
        {offer.discount_percent !== undefined && (
          <div className="text-xs text-secondary font-bold flex items-center gap-1">
            <Percent size={14} /> خصم {offer.discount_percent}%
          </div>
        )}
        <h3 className="text-lg font-bold text-primary">{offer.title}</h3>
        {offer.product?.name && (
          <div className="text-xs text-gray-400 mb-1">
            منتج: {offer.product.name}
          </div>
        )}
        <p className="text-gray-600 text-sm line-clamp-2">{offer.description}</p>
        {(offer.start_date || offer.end_date) && (
          <div className="text-xs text-gray-500">
            {offer.start_date && <>من {offer.start_date} </>}
            {offer.end_date && <>حتى {offer.end_date}</>}
          </div>
        )}
        <div className="flex gap-2 mt-auto">
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
      </div>
    </div>
  );
}
