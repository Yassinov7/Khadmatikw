"use client";
import { useState } from "react";
import { CategoryBar } from "./CategoryBar";
import { OfferCard, Offer } from "./OfferCard";

type Category = {
  id: number;
  name: string;
};

type Props = {
  categories: Category[];
  offers: Offer[];
};

export function OffersClient({ categories, offers }: Props) {
  const [selectedId, setSelectedId] = useState<number | undefined>(undefined);

  // ربط العرض بالتصنيف (عبر المنتج المرتبط)
  const filteredOffers = selectedId
    ? offers.filter((o) => o.product?.category_id === selectedId)
    : offers;

  return (
    <section className="py-8">
      <h1 className="text-2xl font-bold text-primary mb-6 text-center">
        العروض المتاحة
      </h1>
      <CategoryBar
        categories={categories}
        selectedId={selectedId}
        onSelect={setSelectedId}
      />
      {filteredOffers.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-8">
          {filteredOffers.map((offer) => (
            <OfferCard key={offer.id} offer={offer} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 mt-10">لا توجد عروض حاليا.</p>
      )}
    </section>
  );
}
