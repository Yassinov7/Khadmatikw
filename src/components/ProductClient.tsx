"use client";
import { useState } from "react";
import { CategoryBar } from "./CategoryBar";
import { ProductCard } from "./ProductCard";

type Category = { id: number; name: string };
type Product = {
  id: number;
  name: string;
  description?: string;
  image_url?: string;
  price?: number;
  on_sale?: boolean;
  sale_price?: number;
  category?: { name: string };
  category_id?: number;
  contact_info?: { [key: string]: any };
};

const DEFAULT_IMAGE = "/default-product.png";

export function ProductsClient({
  categories,
  products,
}: {
  categories: Category[];
  products: Product[];
}) {
  const [selectedCat, setSelectedCat] = useState<number | undefined>(undefined);

  // الفلترة حسب التصنيف
  const filteredProducts = selectedCat
    ? products.filter((p) => p.category_id === selectedCat)
    : products;

  return (
    <div>
      {/* شريط التصنيفات */}
      <CategoryBar
        categories={categories}
        selectedId={selectedCat}
        onSelect={setSelectedCat}
      />

      {/* شبكة المنتجات */}
      <div className="max-w-6xl mx-auto py-10 px-2 sm:px-6">
        <h1
          className="text-3xl font-bold mb-8"
          style={{ color: "var(--primary)" }}
        >
          جميع المنتجات والخدمات
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {filteredProducts.length ? (
            filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={{
                  ...product,
                  image_url: product.image_url || DEFAULT_IMAGE,
                }}
              />
            ))
          ) : (
            <div className="col-span-full text-center text-gray-400 py-24">
              لا يوجد منتجات في هذا التصنيف حتى الآن.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
