import Link from "next/link";
import Image from "next/image";
import { Phone, MessageCircle } from "lucide-react";
import type { Product } from "@/types";
import { slugify } from "@/utils/slugify";

export function ProductCard({ product }: { product: Product }) {
  const whatsappLink = product.contact_info?.whatsapp
    ? `https://wa.me/${product.contact_info.whatsapp.replace(/[^0-9]/g, "")}?text=مرحبًا، أود الاستفسار عن المنتج: ${encodeURIComponent(product.name)}`
    : null;

  const phoneLink = product.contact_info?.phone
    ? `tel:${product.contact_info.phone.replace(/[^0-9+]/g, "")}`
    : null;

  return (
    <article
      className="bg-white rounded-2xl shadow-md border border-gray-200 flex flex-col h-full transition hover:shadow-lg"
      itemScope
      itemType="https://schema.org/Product"
    >
      <Link href={`/products/${slugify(product.name)}-${product.id}`}>
        <div className="w-full h-44 bg-gray-50 flex items-center justify-center rounded-t-2xl relative">
          <Image
            src={product.image_url || "/default-product.png"}
            alt={`صورة منتج: ${product.name}`}
            fill
            sizes="(max-width: 768px) 100vw, 300px"
            className="object-contain p-3"
            priority
            itemProp="image"
          />
        </div>
      </Link>

      <div className="p-4 flex flex-col flex-1 gap-2">
        {product.category?.name && (
          <span className="text-xs text-gray-500 font-medium" itemProp="category">
            {product.category.name}
          </span>
        )}

        <Link href={`/products/${slugify(product.name)}-${product.id}`}>
          <h3
            className="text-lg font-bold text-primary hover:underline line-clamp-2"
            itemProp="name"
          >
            {product.name}
          </h3>
        </Link>

        <p className="text-sm text-gray-600 truncate" itemProp="description">
          {product.description?.slice(0, 40)}
          {product.description && product.description.length > 40 && (
            <>
              ...{" "}
              <Link
                href={`/products/${slugify(product.name)}-${product.id}`}
                className="text-primary hover:underline font-medium"
              >
                اقرأ المزيد
              </Link>
            </>
          )}
        </p>

        <div className="mt-2 flex items-center gap-2" itemProp="offers" itemScope itemType="https://schema.org/Offer">
          {product.on_sale && product.sale_price ? (
            <>
              <span className="line-through text-gray-400">
                {product.price} د ك
              </span>
              <span
                className="text-secondary font-bold px-2 text-2xl"
                itemProp="price"
              >
                {product.sale_price} د ك
              </span>
              <meta itemProp="priceCurrency" content="KWD" />
            </>
          ) : product.price ? (
            <>
              <span
                className="text-primary font-bold px-2 text-2xl"
                itemProp="price"
              >
                {product.price} د ك
              </span>
              <meta itemProp="priceCurrency" content="KWD" />
            </>
          ) : null}
        </div>

        <div className="flex gap-2 mt-auto pt-3">
          {whatsappLink && (
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 px-3 py-2 bg-green-600 hover:bg-green-700 text-white rounded-full text-sm font-bold shadow"
              aria-label={`تواصل عبر واتساب بخصوص: ${product.name}`}
            >
              <MessageCircle size={16} />
              واتساب
            </a>
          )}
          {phoneLink && (
            <a
              href={phoneLink}
              className="flex items-center gap-1 px-3 py-2 bg-primary hover:bg-primary/90 text-white rounded-full text-sm font-bold shadow"
              aria-label={`اتصل بخصوص المنتج: ${product.name}`}
            >
              <Phone size={16} />
              اتصال
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
