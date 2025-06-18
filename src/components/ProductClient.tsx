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
    <section className="flex flex-col gap-6">
      <h1 className="text-2xl font-bold text-primary mb-6 text-center">
        الخدمات والمنتجات
      </h1>
      <CategoryBar
        categories={categories}
        selectedId={selectedId}
        onSelect={setSelectedId}
      />
      {filteredProducts.length === 0 ? (
        <div className="text-center text-gray-500 py-10">
          لا توجد منتجات مطابقة.
        </div>
      ) : (
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </section>
  );
}
