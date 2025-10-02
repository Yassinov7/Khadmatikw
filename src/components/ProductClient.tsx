"use client";
import { useState } from "react";
import { CategoryBar } from "./CategoryBar";
import { ProductCard } from "./ProductCard";
import type { Category, Product } from "@/types";

type Props = {
  categories: Category[];
  products: Product[];
};

export function ProductsClient({ categories, products }: Props) {
  const [selectedId, setSelectedId] = useState<number | undefined>(undefined);

  const filteredProducts = selectedId
    ? products.filter((p) => p.category_id === selectedId)
    : products;

  return (
    <section className="flex flex-col gap-6 pb-10">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-3">
          خدماتنا الفنية المتخصصة
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          نقدم أفضل خدمات الصيانة والتركيب في مجال الشاشات والستلايت والكاميرات في الكويت
        </p>
      </div>

      <CategoryBar
        categories={categories}
        selectedId={selectedId}
        onSelect={setSelectedId}
      />

      {filteredProducts.length === 0 ? (
        <div className="text-center py-16 bg-gray-50 rounded-2xl">
          <div className="text-gray-500 text-lg mb-2">لا توجد خدمات مطابقة</div>
          <button
            onClick={() => setSelectedId(undefined)}
            className="text-primary font-medium hover:underline"
          >
            عرض جميع الخدمات
          </button>
        </div>
      ) : (
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}

      {/* Services intro section */}
      <div className="mt-12 bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">لماذا تختار خدماتنا؟</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
              <h3 className="font-bold text-lg mb-2">خبرة موثوقة</h3>
              <p className="text-sm opacity-90">سنوات من الخبرة في مجال الصيانة والتركيب</p>
            </div>
            <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
              <h3 className="font-bold text-lg mb-2">جودة عالية</h3>
              <p className="text-sm opacity-90">نستخدم أفضل المعدات والتقنيات الحديثة</p>
            </div>
            <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
              <h3 className="font-bold text-lg mb-2">خدمة سريعة</h3>
              <p className="text-sm opacity-90">استجابة سريعة لجميع طلبات الصيانة</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}