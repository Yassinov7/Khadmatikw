// src/app/offers/page.tsx
import { supabase } from "@/lib/supabase";
import { OfferClient } from "@/components/OfferClient";
import { Metadata } from "next";
import Link from "next/link";
import { Layers } from "lucide-react";
import { slugify } from "@/utils/slugify";
import { getAllOffers } from "@/lib/api";

export const revalidate = 3600; // Revalidate every hour

export const metadata: Metadata = {
    title: "العروض الخاصة | ستلايت الرجاء | 50266068",
    description: "اكتشف أحدث العروض والتخفيضات الخاصة على خدمات الشاشات والستلايت والكاميرات في الكويت. عروض حصرية لفترة محدودة.",
    keywords: [
        "عروض خاصة",
        "تخفيضات",
        "ستلايت الرجاء",
        "خدمات الشاشات الكويت",
        "تركيب ستلايت",
        "كاميرات مراقبة",
        "عروض فنية",
        "خصومات الكويت"
    ],
    openGraph: {
        title: "العروض الخاصة | ستلايت الرجاء",
        description: "اكتشف أحدث العروض والتخفيضات الخاصة على خدمات الشاشات والستلايت والكاميرات في الكويت.",
        url: "https://satellitealrajaa.com/offers",
        siteName: "ستلايت الرجاء",
        locale: "ar_KW",
        type: "website",
    },
    alternates: {
        canonical: "https://satellitealrajaa.com/offers",
    },
    twitter: {
        card: "summary_large_image",
        title: "العروض الخاصة من ستلايت الرجاء",
        description: "عروض حصرية على خدمات الشاشات والستلايت والكاميرات في الكويت.",
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

export default async function OffersPage() {
    // جلب كل العروض الأحدث أولاً
    const offers = await getAllOffers();

    // Add slug to each offer for proper linking
    const offersWithSlug = offers.map(offer => ({
        ...offer,
        slug: `${slugify(offer.title)}-${offer.id}`
    }));

    // Structured data for SEO
    const offersPageStructuredData = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "العروض الخاصة | ستلايت الرجاء",
        "description": "اكتشف أحدث العروض والتخفيضات الخاصة على خدمات الشاشات والستلايت والكاميرات في الكويت.",
        "url": "https://satellitealrajaa.com/offers",
        "itemListElement": offersWithSlug.map((offer, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "item": {
                "@type": "Offer",
                "name": offer.title,
                "description": offer.description,
                "image": offer.image_url || "/default-offer.png",
                "startDate": offer.start_date,
                "endDate": offer.end_date,
                "url": `https://satellitealrajaa.com/offers/${offer.slug}`
            }
        }))
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(offersPageStructuredData) }}
            />
            <div className="flex justify-center my-8">
                <Link href="/products" className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-full hover:from-primary/90 hover:to-secondary/90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                    <Layers size={20} />
                    <span className="font-bold">عرض جميع الخدمات</span>
                </Link>
            </div>
            <OfferClient offers={offersWithSlug} />
        </>
    );
}