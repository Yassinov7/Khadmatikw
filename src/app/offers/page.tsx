import { supabase } from "@/lib/supabase";
import { OfferCard } from "@/components/OfferCard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "عروضنا الخاصة | خدماتي KW",
  description: "اكتشف أحدث العروض على خدمات الشاشات، الستلايت، والكاميرات في الكويت بأسعار مميزة.",
};

export default async function OffersPage() {
  const { data: offers } = await supabase
    .from("offers")
    .select("*, product:products(name, image_url)")
    .order("id", { ascending: false });

  return (
    <section className="py-8">
      <h1 className="text-2xl font-bold text-primary mb-6 text-center">
        العروض المتاحة
      </h1>
      {offers && offers.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {offers.map((offer: any) => (
            <OfferCard key={offer.id} offer={offer} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">لا توجد عروض حالياً.</p>
      )}
    </section>
  );
}
