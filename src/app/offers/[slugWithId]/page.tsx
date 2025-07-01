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
  const canUrl = `https://khadmatikw.com/offers/${slugWithId}`;
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
      canonical: `${canUrl}`,
    },
    robots: "index, follow",
  };
}



export default async function OfferPage(props: { params: Promise<{ slugWithId: string }> }) {
  const { slugWithId } = await props.params;
  const id = extractId(slugWithId);
  if (!id) notFound();

  const offer = await getOfferById(id);
  if (!offer) notFound();
  const structuredData = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": offer.title,
  "description": offer.description ?? "",
  "review": {
    "@type": "Review",
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": "4.4",
      "bestRating": "5"
    },
    "author": {
      "@type": "Person",
      "name": "صياح الناجي"
    }
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.4",
    "reviewCount": "1"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "KWD",
    "price": (offer.discount_percent ?? 0).toFixed(2),
    "priceValidUntil": "2028-12-31",
    "availability": "http://schema.org/InStock",
    "itemCondition": "https://schema.org/NewCondition",
    "hasMerchantReturnPolicy": {
      "@type": "MerchantReturnPolicy",
      "returnPolicyCategory": "https://schema.org/Returnable",
      "merchantReturnDays": 1,
      "returnMethod": "https://schema.org/ReturnByMail",
      "returnFees": "https://schema.org/FreeReturn"
    },
    "shippingDetails": {
      "@type": "OfferShippingDetails",
      "shippingRate": {
        "@type": "MonetaryAmount",
        "value": "0.00",
        "currency": "KWD"
      },
      "shippingDestination": {
        "@type": "DefinedRegion",
        "addressCountry": "KW"
      },
      "deliveryTime": {
        "@type": "ShippingDeliveryTime",
        "handlingTime": {
          "@type": "QuantitativeValue",
          "minValue": 0.5,
          "maxValue": 3,
          "unitCode": "h"
        },
        "transitTime": {
          "@type": "QuantitativeValue",
          "minValue": 2,
          "maxValue": 4,
          "unitCode": "h"
        }
      }
    }
  }
};
  return <> 
            <OfferDetailsClient offer={offer}/> 
            {/* بيانات Structured Data بصيغة JSON-LD لتحسين ظهور العرض في Google */}
            <script type="application/ld+json" suppressHydrationWarning>
              {JSON.stringify(structuredData)}
            </script>
        </>;
}
