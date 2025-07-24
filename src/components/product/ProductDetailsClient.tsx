"use client";
import Image from "next/image";
import { Phone, MessageCircle } from "lucide-react";
import type { Product } from "@/types";
import Link from "next/link";

export const revalidate = 600;

export default function ProductDetailsClient({ product }: { product: Product }) {
  const whatsapp = product.contact_info?.whatsapp
    ? `https://wa.me/${product.contact_info.whatsapp.replace(/[^0-9]/g, "")}?text=مرحبًا، أود الاستفسار عن الخدمة: ${encodeURIComponent(product.name)}`
    : null;

  const phone = product.contact_info?.phone
    ? `tel:${product.contact_info.phone.replace(/[^0-9+]/g, "")}`
    : null;

  return (
    <main className="max-w-5xl mx-auto px-4 py-10">
      <div className="bg-white rounded-2xl shadow-md border border-gray-100 flex flex-col md:flex-row overflow-hidden">
        <div className="relative w-full md:w-1/2 h-64 md:h-auto bg-background">
          <Image
            src={product.image_url || "/default-product.png"}
            alt={`صورة الخدمة: ${product.name}`}
            fill
            className="object-contain p-4"
            priority
          />
        </div>

        <div className="p-6 flex flex-col gap-4 md:w-1/2">
          {product.category?.name && (
            <div className="text-sm text-gray-500 font-medium">{product.category.name}</div>
          )}

          <h1 className="text-2xl font-bold text-primary">{product.name}</h1>

          {product.description && (
            <p className="text-gray-700 leading-relaxed text-sm whitespace-pre-line">
              {product.description}
            </p>
          )}

          <div className="flex flex-wrap gap-3 pt-4 mt-auto">
            {whatsapp && (
              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-full shadow text-sm font-bold"
              >
                <MessageCircle size={16} />
                واتساب
              </a>
            )}
            {phone && (
              <a
                href={phone}
                className="flex items-center gap-2 px-4 py-2 bg-primary hover:bg-primary/90 text-white rounded-full shadow text-sm font-bold"
              >
                <Phone size={16} />
                اتصال
              </a>
            )}
          </div>
          <div className="flex flex-wrap gap-3 pt-4 mt-auto">
            <Link href="/products" className="w-full sm:w-auto">
            <button className="w-auto px-8 py-3 rounded-lg text-white text-lg font-bold shadow transition bg-secondary hover:bg-secondary/80">
            شاهد باقي الخدمات
            </button>
          </Link>
          <Link href="/contact" className="w-auto ">
        <button className="w-auto px-8 py-3 rounded-lg text-white text-lg font-bold shadow transition bg-primary hover:bg-primary/80 ">
            العودة للصفحة الرئيسية
        </button>
    </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
