"use client";
import Link from "next/link";
import Image from "next/image";
import { Phone, MessageCircle, Wrench, ChevronRight } from "lucide-react";
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
    <article className="card-modern rounded-[2rem] group overflow-hidden">
      <Link
        href={`/products/${slugify(product.name)}-${product.id}`}
        className="block relative h-60 bg-slate-100 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/10 via-transparent to-transparent pointer-events-none" />
        <div className="relative w-full h-full flex items-center justify-center p-4">
          {product.image_url ? (
            <Image
              src={product.image_url}
              alt={`صورة الخدمة: ${product.name} - ستلايت الرجاء`}
              fill
              sizes="(max-width: 768px) 100vw, 300px"
              className="object-contain transition-transform duration-700 group-hover:scale-105"
            />
          ) : (
            <div className="bg-slate-200 border-2 border-dashed rounded-3xl w-20 h-20 flex items-center justify-center">
              <Wrench className="text-slate-400" size={32} />
            </div>
          )}
        </div>
      </Link>

      <div className="p-6 flex flex-col gap-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          {product.category?.name && (
            <span className="text-xs uppercase tracking-[0.22em] text-primary/90 bg-primary/10 rounded-full px-3 py-1 font-semibold">
              {product.category.name}
            </span>
          )}
          <span className="text-xs text-slate-500">خدمة متكاملة</span>
        </div>

        <Link href={`/products/${slugify(product.name)}-${product.id}`}>
          <h3 className="text-2xl font-extrabold text-slate-900 hover:text-secondary transition-colors line-clamp-2">
            {product.name}
          </h3>
        </Link>

        {product.description && (
          <p className="text-sm text-slate-600 leading-relaxed line-clamp-3">
            {product.description}
          </p>
        )}

        <div className="mt-auto grid gap-3 sm:grid-cols-2">
          {whatsappLink && (
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-full bg-green-600 px-4 py-3 text-sm font-bold text-white transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-lg"
              aria-label={`تواصل عبر واتساب بخصوص: ${product.name}`}
            >
              <MessageCircle size={16} /> واتساب
            </a>
          )}
          {phoneLink && (
            <a
              href={phoneLink}
              className="flex items-center justify-center gap-2 rounded-full bg-primary px-4 py-3 text-sm font-bold text-white transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-lg"
              aria-label={`اتصال بخصوص الخدمة: ${product.name}`}
            >
              <Phone size={16} /> اتصال
            </a>
          )}
        </div>

        <Link
          href={`/products/${slugify(product.name)}-${product.id}`}
          className="mt-2 inline-flex items-center justify-end gap-1 text-primary text-sm font-semibold hover:text-secondary transition-colors"
        >
          تفاصيل الخدمة
          <ChevronRight size={18} />
        </Link>
      </div>
    </article>
  );
}