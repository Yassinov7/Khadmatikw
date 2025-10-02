"use client";
import Image from "next/image";
import { Phone, MessageCircle, ArrowLeft, Wrench } from "lucide-react";
import type { Product } from "@/types";
import Link from "next/link";
import { ProductCard } from "@/components/ProductCard";

export const revalidate = 600;

export default function ProductDetailsClient({ product, relatedProducts }: { product: Product; relatedProducts: Product[] }) {
  const whatsapp = product.contact_info?.whatsapp
    ? `https://wa.me/${product.contact_info.whatsapp.replace(/[^0-9]/g, "")}?text=مرحبًا، أود الاستفسار عن الخدمة: ${encodeURIComponent(product.name)}`
    : null;

  const phone = product.contact_info?.phone
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
    <main className="max-w-6xl mx-auto px-4 py-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productStructuredData) }}
      />

      <Link
        href="/products"
        className="flex items-center text-primary font-medium mb-6 hover:text-secondary transition-colors"
      >
        <ArrowLeft className="ml-2" size={20} />
        العودة إلى جميع الخدمات
      </Link>

      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/2 relative h-80 md:h-auto bg-gradient-to-br from-gray-50 to-gray-100">
            {product.image_url ? (
              <Image
                src={product.image_url}
                alt={`صورة الخدمة: ${product.name} - ستلايت الرجاء`}
                fill
                className="object-contain p-8"
                priority
              />
            ) : (
              <div className="flex items-center justify-center h-full">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-24 h-24 flex items-center justify-center">
                  <Wrench className="text-gray-400" size={48} />
                </div>
              </div>
            )}
          </div>

          <div className="p-8 md:w-1/2 flex flex-col">
            {product.category?.name && (
              <div className="inline-block text-sm text-primary font-bold tracking-wide uppercase bg-primary/10 px-3 py-1 rounded-full mb-4">
                {product.category.name}
              </div>
            )}

            <h1 className="text-3xl font-bold text-primary mb-4">{product.name}</h1>

            {product.description && (
              <div className="text-gray-700 leading-relaxed text-base whitespace-pre-line mb-8 flex-1">
                {product.description}
              </div>
            )}

            <div className="mt-6 pt-6 border-t border-gray-100">
              <h2 className="text-lg font-bold text-primary mb-4">تواصل معنا</h2>
              <div className="flex flex-wrap gap-4">
                {whatsapp && (
                  <a
                    href={whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-full shadow-md text-base font-bold transition"
                  >
                    <MessageCircle size={20} />
                    واتساب
                  </a>
                )}
                {phone && (
                  <a
                    href={phone}
                    className="flex items-center gap-3 px-6 py-3 bg-primary hover:bg-primary/90 text-white rounded-full shadow-md text-base font-bold transition"
                  >
                    <Phone size={20} />
                    اتصال
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related services section */}
      {relatedProducts && relatedProducts.length > 0 && (
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-primary mb-6 text-center">خدمات أخرى قد تهمك</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <ProductCard key={relatedProduct.id} product={relatedProduct} />
            ))}
          </div>
        </div>
      )}

      {/* Why choose us section */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-secondary mb-6 text-center">لماذا تختار ستلايت الرجاء ؟</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-right">
          <div className="bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/10 rounded-2xl p-6 text-center">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h3 className="font-bold text-lg mb-2">خدمة سريعة</h3>
            <p className="text-gray-600 text-sm">استجابة فورية لجميع طلبات الصيانة</p>
          </div>

          <div className="bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/10 rounded-2xl p-6 text-center">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="font-bold text-lg mb-2">جودة مضمونة</h3>
            <p className="text-gray-600 text-sm">ضمان على جميع أعمال الصيانة والتركيب</p>
          </div>

          <div className="bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/10 rounded-2xl p-6 text-center">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-bold text-lg mb-2">دعم فني</h3>
            <p className="text-gray-600 text-sm">فريق دعم فني متاح على مدار الساعة</p>
          </div>

          <div className="bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/10 rounded-2xl p-6 text-center">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="font-bold text-lg mb-2">خبرة عائلية</h3>
            <p className="text-gray-600 text-sm">عقود من الخبرة في المجال الفني</p>
          </div>
        </div>
      </div>
    </main>
  );
}