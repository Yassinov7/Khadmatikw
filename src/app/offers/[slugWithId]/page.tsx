import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getAllOfferIds, getOfferById } from "@/lib/api";
import { slugify } from "@/utils/slugify";
import OfferDetailsClient from "@/components/offer/OfferDetailsClient";

function extractId(slugWithId: string): number | null {
  const match = slugWithId.match(/-(\d+)$/);
  return match ? Number(match[1]) : null;
}

function extractKeywords(text?: string): string[] {
  if (!text) return [];
  const stopwords = ["من", "على", "إلى", "هذا", "في", "عن", "الذي", "و", "أو", "ثم", "مع", "أن", "كما"];
  return text
    .split(/[\s،.]+/)
    .map(w => w.trim())
    .filter(w => w.length > 2 && !stopwords.includes(w))
    .slice(0, 10);
}

export async function generateMetadata(
  props: { params: Promise<{ slugWithId: string }> }
): Promise<Metadata> {
  const { slugWithId } = await props.params;
  const id = extractId(slugWithId);
  if (!id) return {};

  const offer = await getOfferById(id);
  if (!offer) return {};

  const dynamicKeywords = [
    ...extractKeywords(offer.title),
    ...extractKeywords(offer.description),
    ...(offer.product?.name ? [offer.product.name] : []),
  ];

  const keywords = [
    ...dynamicKeywords,
    "خصومات",
    "عروض الكويت",
    "خدمات الشاشات",
    "خدمات الستلايت",
    "خدماتي KW",
  ]
    .filter(Boolean)
    .join(", ");

  return {
    title: offer.title,
    description: offer.description || "اكتشف هذا العرض من خدماتي KW في الكويت.",
    openGraph: {
      title: offer.title,
      description: offer.description || "",
      images: [offer.product?.image_url || "/default-product.png"],
    },
    keywords,
    alternates: {
      canonical: `https://khadmatikw.com/offers/${slugWithId}`,
    },
    robots: "index, follow",
  };
}

export async function generateStaticParams() {
  const offers = await getAllOfferIds();
  return offers.map((o) => ({
    slugWithId: `${slugify(o.title)}-${o.id}`,
  }));
}

export default async function OfferPage(props: { params: Promise<{ slugWithId: string }> }) {
  const { slugWithId } = await props.params;
  const id = extractId(slugWithId);
  if (!id) notFound();

  const offer = await getOfferById(id);
  if (!offer) notFound();

  return <OfferDetailsClient offer={offer} />;
}
