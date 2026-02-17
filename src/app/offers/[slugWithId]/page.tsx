// src/app/offers/[slugWithId]/page.tsx
import { notFound } from "next/navigation";
import { getAllOfferIds, getOfferById } from "@/lib/api";
import type { Metadata } from "next";
import { slugify } from "@/utils/slugify";
import OfferDetailsClient from "@/components/offer/OfferDetailsClient";
import { supabase } from "@/lib/supabase";

// استخراج id من نهاية السلاج
function extractId(slugWithId: string): number | null {
    const match = slugWithId.match(/-(\d+)$/);
    return match ? Number(match[1]) : null;
}

// إنشاء المسارات الساكنة
export async function generateStaticParams() {
    const offers = await getAllOfferIds();
    return offers.map((o) => ({
        slugWithId: `${slugify(o.title)}-${o.id}`,
    }));
}

export async function generateMetadata(
    props: { params: Promise<{ slugWithId: string }> }
): Promise<Metadata> {
    const { slugWithId } = await props.params;
    const id = extractId(slugWithId);
    if (!id) return {};

    const offer = await getOfferById(id);
    if (!offer) return {};

    const description = offer.description ? `${offer.description.substring(0, 160)}...` : "عرض خاص من ستلايت الرجاء في الكويت.";
    const canUrl = `https://satellitealrajaa.com/offers/${slugWithId}`;
    const baseKeywords = [
        "عرض خاص",
        "ستلايت الرجاء",
        "خدمة فنية",
        "الكويت",
    ];

    const titleWords: string[] = offer.title
        .split(" ")
        .filter((w: string) => w.length > 2);

    const keywords: string[] = [...new Set([...titleWords, ...baseKeywords])];

    return {
        title: `${offer.title} | 50266068`,
        description,
        keywords,
        openGraph: {
            title: `${offer.title} | 50266068`,
            description,
            images: [offer.image_url || "/default-offer.png"],
            url: canUrl,
            siteName: "ستلايت الرجاء",
            locale: "ar_KW",
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title: `${offer.title} | 50266068`,
            description,
            images: [offer.image_url || "/default-offer.png"],
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
        alternates: {
            canonical: canUrl,
        },
    };
}

// صفحة التفاصيل
export default async function OfferPage(props: { params: Promise<{ slugWithId: string }> }) {
    const { slugWithId } = await props.params;
    const id = extractId(slugWithId);
    if (!id) notFound();

    const offer = await getOfferById(id);
    if (!offer) notFound();

    // Fetch related offers (same product category or random if no category)
    let relatedOffers = [];
    if (offer.product?.category_id) {
        const { data } = await supabase
            .from("offers")
            .select("*, product:products(name, category:categories(name))")
            .neq("id", id)
            .eq("product.category_id", offer.product.category_id)
            .limit(3);
        relatedOffers = data || [];
    }

    // If we don't have enough related offers, fetch some random ones
    if (relatedOffers.length < 3) {
        const needed = 3 - relatedOffers.length;
        const { data } = await supabase
            .from("offers")
            .select("*, product:products(name, category:categories(name))")
            .neq("id", id)
            .limit(needed);
        relatedOffers = [...relatedOffers, ...(data || [])];
    }

    return (
        <OfferDetailsClient offer={offer} relatedOffers={relatedOffers} />
    );
}