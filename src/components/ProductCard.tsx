"use client";
import Link from "next/link";
import Image from "next/image";
import { Phone, MessageCircle, Wrench } from "lucide-react";
import type { Product } from "@/types";
import { slugify } from "@/utils/slugify";

export function ProductCard({ product }: { product: Product }) {
  const whatsappLink = product.contact_info?.whatsapp
    ? `https://wa.me/${product.contact_info.whatsapp.replace(/[^0-9]/g, "")}?text=مرحبًا، أود الاستفسار عن الخدمة: ${encodeURIComponent(product.name)}`
    : null;

  const phoneLink = product.contact_info?.phone
    ? `tel:${product.contact_info.phone.replace(/[^0-9+]/g, "")}`
    : null;

  // Structured data for SEO
  const productStructuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": product.name,
    "description": product.description,
    "category": product.category?.name,
    "image": product.image_url || "/default-product.png",
    "provider": {
      "@type": "LocalBusiness",
      "name": "ستلايت الرجاء",
      "telephone": "+96550266068",
      "areaServed": "KW"
    },
    "serviceType": product.category?.name || "خدمة فنية"
  };

  return (
    <article
      className="bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full group"
      itemScope
      itemType="https://schema.org/Service"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productStructuredData) }}
      />

      <div className="relative w-full h-48 bg-gradient-to-br from-gray-50 to-gray-100">
        <Link
          href={`/products/${slugify(product.name)}-${product.id}`}
          className="block w-full h-full"
        >
          <div className="relative w-full h-full flex items-center justify-center p-4">
            {product.image_url ? (
              <Image
                src={product.image_url}
                alt={`صورة الخدمة: ${product.name} - ستلايت الرجاء`}
                fill
                sizes="(max-width: 768px) 100vw, 300px"
                className="object-contain transition-transform duration-500 group-hover:scale-105"
                itemProp="image"
              />
            ) : (
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 flex items-center justify-center">
                <Wrench className="text-gray-400" size={32} />
              </div>
            )}
          </div>
        </Link>
      </div>

      <div className="flex flex-col flex-1 p-5 gap-3">
        {product.category?.name && (
          <span
            className="text-xs text-primary font-bold tracking-wide uppercase"
            itemProp="serviceType"
          >
            {product.category.name}
          </span>
        )}

        <Link href={`/products/${slugify(product.name)}-${product.id}`}>
          <h3
            className="text-xl font-bold text-primary hover:text-secondary transition-colors line-clamp-2"
            itemProp="name"
          >
            {product.name}
          </h3>
        </Link>

        {product.description && (
          <p className="text-gray-600 text-sm leading-relaxed line-clamp-3" itemProp="description">
            {product.description}
          </p>
        )}

        <div className="mt-auto pt-4 flex gap-3 flex-wrap">
          {whatsappLink && (
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full text-white bg-green-600 hover:bg-green-700 text-sm font-bold transition shadow-md"
              aria-label={`تواصل عبر واتساب بخصوص: ${product.name}`}
            >
              <MessageCircle size={16} /> واتساب
            </a>
          )}
          {phoneLink && (
            <a
              href={phoneLink}
              className="flex items-center gap-2 px-4 py-2 rounded-full text-white bg-primary hover:bg-primary/90 text-sm font-bold transition shadow-md"
              aria-label={`اتصال بخصوص الخدمة: ${product.name}`}
            >
              <Phone size={16} /> اتصال
            </a>
          )}
        </div>

        <Link
          href={`/products/${slugify(product.name)}-${product.id}`}
          className="mt-2 text-primary text-sm font-bold hover:text-secondary transition-colors flex items-center justify-end"
        >
          تفاصيل الخدمة
          <svg xmlns="http://www.w3.org/2000/svg" className="mr-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </Link>
      </div>
    </article>
  );
}