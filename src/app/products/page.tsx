// app/products/page.tsx
import { supabase } from "@/lib/supabase";
import { ProductsClient } from "@/components/ProductClient";
import { Metadata } from "next";

export const revalidate = 600;

export const metadata: Metadata = {
  title: "جميع الخدمات | خدماتي KW",
  description: "استعرض خدمات الشاشات، الستلايت والكاميرات في الكويت مع تفاصيل وصور واضحة. خدماتنا مخصصة للصيانة والتركيب فقط.",
  keywords: [
    "خدمات الشاشات الكويت",
    "تركيب ستلايت",
    "كاميرات مراقبة",
    "خدمات فنية الكويت",
    "خدماتي KW",
  ],
  openGraph: {
    title: "جميع الخدمات | خدماتي KW",
    description: "كل الخدمات الفنية المتعلقة بالشاشات والستلايت والكاميرات في الكويت. استعرض التفاصيل والصور وتواصل معنا بسهولة.",
    url: "https://khadmatikw.com/products",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "خدمات فنية من خدماتي KW",
    description: "اكتشف أقوى خدمات الصيانة والتركيب للشاشات والستلايت والكاميرات في الكويت.",
  },
  alternates: {
    canonical: "https://khadmatikw.com/products",
  },
  robots: {
    index: true,
    follow: true,
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
    .order("created_at", { ascending: false });

  return (
    <ProductsClient
      categories={categories ?? []}
      products={products ?? []}
    />
  );
}
