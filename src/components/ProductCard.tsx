import Link from "next/link";
import Image from "next/image";
import { Phone, MessageCircle } from "lucide-react";
import type { Product } from "@/types";

export function ProductCard({ product }: { product: Product }) {
  const whatsappLink = product.contact_info?.whatsapp
    ? `https://wa.me/${product.contact_info.whatsapp.replace(/[^0-9]/g, "")}?text=مرحبًا، أود الاستفسار عن المنتج: ${encodeURIComponent(product.name)}`
    : null;

  const phoneLink = product.contact_info?.phone
    ? `tel:${product.contact_info.phone.replace(/[^0-9+]/g, "")}`
    : null;

  return (
    <div className="bg-white rounded-2xl shadow-md border border-gray-100 flex flex-col h-full transition hover:shadow-lg">
      <Link href={`/products/${product.id}`}>
        <div className="w-full h-44 bg-gray-50 flex items-center justify-center overflow-hidden rounded-t-2xl relative">
          <Image
            src={product.image_url || "/default-product.png"}
            alt={product.name || "منتج"}
            fill
            sizes="(max-width: 768px) 100vw, 300px"
            className="object-contain p-3"
            priority={!!product.image_url}
          />
        </div>
      </Link>
      <div className="p-4 flex flex-col flex-1 gap-2">
        <div className="text-xs text-gray-500">{product.category?.name}</div>
        <Link href={`/products/${product.id}`}>
          <h3 className="text-lg font-bold text-primary hover:underline line-clamp-2">
            {product.name}
          </h3>
        </Link>
        <p className="text-gray-600 text-sm line-clamp-2">{product.description}</p>
        <div className="mt-2 flex items-center gap-2">
          {product.on_sale && product.sale_price ? (
            <>
              <span className="line-through text-gray-400">{product.price} د.ك</span>
              <span className="text-secondary font-bold text-lg">{product.sale_price} د.ك</span>
            </>
          ) : product.price ? (
            <span className="text-primary font-bold text-lg">{product.price} د.ك</span>
          ) : null}
        </div>
        <div className="flex gap-2 mt-auto">
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
      </div>
    </div>
  );
}
