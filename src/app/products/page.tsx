// app/products/page.tsx
import { supabase } from "@/lib/supabase";
import { ProductsClient } from "@/components/ProductClient";
import { Metadata } from "next";

export const revalidate = 600;

export const metadata: Metadata = {
  title: "جميع المنتجات | خدماتي KW",
  description: "استعرض جميع خدمات ومنتجات الشاشات، الستلايت والكاميرات في الكويت مع تفاصيل وصور وأسعار مميزة. اكتشف أفضل العروض من خدماتي KW.",
  openGraph: {
    title: "جميع المنتجات | خدماتي KW",
    description: "كل المنتجات والخدمات الفنية للشاشات والستلايت والكاميرات في الكويت. أسعار، صور، تفاصيل وأحدث العروض.",
    url: "https://khadmatikw.vercel.app/products",
    type: "website",
  },
  alternates: {
    canonical: "https://khadmatikw.vercel.app/products",
  },
  twitter: {
    card: "summary_large_image",
    title: "منتجات وخدمات خدماتي KW",
    description: "اكتشف أقوى خدمات ومنتجات الشاشات والستلايت والكاميرات وخدمات التركيب والصيانة في الكويت.",
  },
};
export default async function ProductsPage() {
  const { data: categories } = await supabase
    .from("categories")
    .select("*")
    .order("id", { ascending: true });

  const { data: products } = await supabase
    .from("products")
    .select("*, category:categories(name)")
    .order("id", { ascending: true });

  return (
    <ProductsClient
      categories={categories ?? []}
      products={products ?? []}
    />
  );
}
