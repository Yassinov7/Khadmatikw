import { supabase } from "@/lib/supabase";
import { OffersClient } from "@/components/OffersClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "عروضنا الخاصة | خدماتي KW",
  description: "اكتشف أحدث العروض على خدمات الشاشات، الستلايت، والكاميرات في الكويت بأسعار مميزة.",
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
