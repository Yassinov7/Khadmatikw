"use client";

import { useState } from "react";
import { CategoryBar } from "./CategoryBar";
import { ProductCard, Product } from "./ProductCard";

type Category = {
  id: number;
  name: string;
};


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
    <div className="flex flex-col gap-6">
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
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
