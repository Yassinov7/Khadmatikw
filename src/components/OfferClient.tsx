"use client";
import { useState } from "react";
import { OfferCard } from "./OfferCard";
import type { Offer } from "@/types";
import { slugify } from "@/utils/slugify";

type Props = {
    offers: Offer[];
};

export function OfferClient({ offers }: Props) {
    const [selectedOfferId, setSelectedOfferId] = useState<number | undefined>(undefined);

    // Add slug to each offer for proper linking
    const offersWithSlug = offers.map(offer => ({
        ...offer,
        slug: `${slugify(offer.title)}-${offer.id}`
    }));

    const filteredOffers = selectedOfferId
        ? offersWithSlug.filter((o) => o.id === selectedOfferId)
        : offersWithSlug;

    return (
        <section className="flex flex-col gap-8 pb-16">
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-4">
                    العروض الخاصة المتوفرة
                </h1>
                <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                    اكتشف أحدث العروض والتخفيضات الحصرية على خدماتنا الفنية
                </p>
            </div>

            {offersWithSlug.length === 0 ? (
                <div className="text-center py-20 bg-gradient-to-br from-gray-50 to-white rounded-3xl shadow-lg">
                    <div className="text-gray-500 text-xl mb-4">لا توجد عروض خاصة حالياً</div>
                    <button
                        onClick={() => setSelectedOfferId(undefined)}
                        className="text-primary font-bold hover:underline text-lg"
                    >
                        تحديث الصفحة
                    </button>
                </div>
            ) : (
                <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    {offersWithSlug.map((offer) => (
                        <div key={offer.id} className="transform transition-transform hover:-translate-y-2">
                            <OfferCard offer={offer} />
                        </div>
                    ))}
                </div>
            )}

            {/* Offers intro section */}
            <div className="mt-16 bg-gradient-to-r from-primary to-secondary rounded-3xl p-10 text-white shadow-xl">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-extrabold mb-6">لماذا تختار عروضنا؟</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                        <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all">
                            <h3 className="font-bold text-xl mb-3">عروض حصرية</h3>
                            <p className="text-sm opacity-90">تخفيضات خاصة غير متوفرة في أي مكان آخر</p>
                        </div>
                        <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all">
                            <h3 className="font-bold text-xl mb-3">جودة عالية</h3>
                            <p className="text-sm opacity-90">نفس جودة الخدمات المدفوعة الكاملة</p>
                        </div>
                        <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all">
                            <h3 className="font-bold text-xl mb-3">فترة محدودة</h3>
                            <p className="text-sm opacity-90">عروض لفترة زمنية محدودة فقط</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default OfferClient;