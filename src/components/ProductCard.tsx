import Link from "next/link";
import Image from "next/image";
import { Phone, MessageCircle } from "lucide-react";
import type { Product } from "@/types";
import { slugify } from "@/utils/slugify";

export function ProductCard({ product }: { product: Product }) {
  const whatsappLink = product.contact_info?.whatsapp
    ? `https://wa.me/${product.contact_info.whatsapp.replace(/[^0-9]/g, "")}?text=مرحبًا، أود الاستفسار عن الخدمة: ${encodeURIComponent(product.name)}`
    : null;

  const phoneLink = product.contact_info?.phone
    ? `tel:${product.contact_info.phone.replace(/[^0-9+]/g, "")}`
    : null;

  return (
    <article
      className="bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col h-full"
      itemScope
      itemType="https://schema.org/Service"
    >
      <Link
        href={`/products/${slugify(product.name)}-${product.id}`}
        className="relative w-full h-44 bg-gray-50 block group"
      >
        <div className="relative w-full h-40 sm:h-48 bg-gray-50 rounded-xl overflow-hidden group">
  <Image
    src={product.image_url || "/default-product.png"}
    alt={`صورة الخدمة: ${product.name}`}
    fill
    sizes="(max-width: 768px) 100vw, 300px"
    className="object-contain transition-transform duration-300 group-hover:scale-105"
    itemProp="image"
  />
</div>

      </Link>

      <div className="flex flex-col flex-1 p-4 gap-3">
        {product.category?.name && (
          <span
            className="text-xs text-gray-500 font-medium tracking-wide"
            itemProp="serviceType"
          >
            {product.category.name}
          </span>
        )}

        <Link href={`/products/${slugify(product.name)}-${product.id}`}>
          <h3
            className="text-lg font-extrabold text-primary hover:underline line-clamp-2"
            itemProp="name"
          >
            {product.name}
          </h3>
        </Link>

        {product.description && (
          <p className="text-sm text-gray-600 leading-snug line-clamp-3" itemProp="description">
            {product.description}
          </p>
        )}

        <div className="mt-auto pt-2 flex gap-2 flex-wrap">
          {whatsappLink && (
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-2 rounded-full text-white bg-green-600 hover:bg-green-700 text-sm font-bold transition"
              aria-label={`تواصل عبر واتساب بخصوص: ${product.name}`}
            >
              <MessageCircle size={16} /> واتساب
            </a>
          )}
          {phoneLink && (
            <a
              href={phoneLink}
              className="flex items-center gap-2 px-3 py-2 rounded-full text-white bg-primary hover:bg-primary/90 text-sm font-bold transition"
              aria-label={`اتصال بخصوص الخدمة: ${product.name}`}
            >
              <Phone size={16} /> اتصال
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
