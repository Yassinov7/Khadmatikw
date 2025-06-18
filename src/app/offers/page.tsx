import { supabase } from "@/lib/supabase";
import { OffersClient } from "@/components/OffersClient";
import { Metadata } from "next";

export const revalidate = 600;

export const metadata: Metadata = {
  title: "أحدث العروض والخصومات | خدماتي KW",
  description: "استكشف أفضل العروض على خدمات الشاشات، الستلايت، الكاميرات وتركيبها في الكويت. خصومات حصرية وخدمات فنية مميزة مع تواصل سريع عبر واتساب وهاتف.",
  keywords: [
    "عروض خدماتي", "خصومات الكويت", "عروض شاشات", "عروض ستلايت", "عروض كاميرات",
    "صيانة شاشات", "تركيب ستلايت", "تركيب كاميرات", "خدماتي KW", "عروض اليوم"
  ],
  openGraph: {
    title: "عروض خاصة وخصومات حقيقية | خدماتي KW",
    description: "جميع عروض وخصومات خدمات الشاشات، الستلايت والكاميرات في الكويت. احصل على أفضل الأسعار وخدمة تركيب وصيانة احترافية.",
    url: "https://khadmatikw.vercel.app/offers",
    type: "website",
  },
  alternates: {
    canonical: "https://khadmatikw.vercel.app/offers",
  },
  twitter: {
    card: "summary_large_image",
    title: "عروض وخصومات خدماتي KW",
    description: "اكتشف أقوى عروض الشاشات والستلايت والكاميرات وخدمات التركيب والصيانة في الكويت.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default async function OffersPage() {
  const { data: categories } = await supabase
    .from("categories")
    .select("*")
    .order("id", { ascending: true });

  const { data: offers } = await supabase
    .from("offers")
    .select("*, product:products(name, image_url, category_id)")
    .order("id", { ascending: false });

  return (
    <OffersClient
      categories={categories ?? []}
      offers={offers ?? []}
    />
  );
}
