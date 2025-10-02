// app/products/page.tsx
import { supabase } from "@/lib/supabase";
import { ProductsClient } from "@/components/ProductClient";
import { Metadata } from "next";
import Link from "next/link";
import { Tag } from "lucide-react";

export const revalidate = 3600; // Revalidate every hour

export const metadata: Metadata = {
  title: "جميع الخدمات | ستلايت الرجاء | 50266068",
  description: "استعرض خدمات الشاشات، الستلايت والكاميرات في الكويت مع تفاصيل وصور واضحة. خدماتنا مخصصة للصيانة والتركيب فقط.",
  keywords: [
    "خدمات الشاشات الكويت",
    "تركيب ستلايت",
    "كاميرات مراقبة",
    "خدمات فنية الكويت",
    "ستلايت الرجاء",
    "صيانة شاشات",
    "فني كاميرات",
    "فني ستلايت الكويت"
  ],
  openGraph: {
    title: "جميع الخدمات | ستلايت الرجاء",
    description: "كل الخدمات الفنية المتعلقة بالشاشات والستلايت والكاميرات في الكويت. استعرض التفاصيل والصور وتواصل معنا بسهولة.",
    url: "https://satellitealrajaa.com/products",
    siteName: "ستلايت الرجاء",
    locale: "ar_KW",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "خدمات فنية من ستلايت الرجاء",
    description: "اكتشف أقوى خدمات الصيانة والتركيب للشاشات والستلايت والكاميرات في الكويت.",
  },
  alternates: {
    canonical: "https://satellitealrajaa.com/products",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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

  // Structured data for SEO
  const productsPageStructuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "جميع الخدمات | ستلايت الرجاء",
    "description": "استعرض خدمات الشاشات، الستلايت والكاميرات في الكويت مع تفاصيل وصور واضحة.",
    "url": "https://satellitealrajaa.com/products",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": products?.map((product, index) => ({
        "@type": "Service",
        "position": index + 1,
        "name": product.name,
        "description": product.description,
        "url": `https://satellitealrajaa.com/products/${product.name.replace(/\s+/g, "-")}-${product.id}`
      })) || []
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productsPageStructuredData) }}
      />
      <div className="flex justify-center my-6">
        <Link href="/offers" className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition shadow-md">
          <Tag size={16} />
          <span>عرض العروض الخاصة</span>
        </Link>
      </div>
      <ProductsClient
        categories={categories ?? []}
        products={products ?? []}
      />
    </>
  );
}