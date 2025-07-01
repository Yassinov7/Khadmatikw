import { notFound } from "next/navigation";
import { getAllProductIds, getProductById } from "@/lib/api";
import type { Metadata } from "next";
import { slugify } from "@/utils/slugify";
import ProductDetailsClient from "@/components/product/ProductDetailsClient";

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
    .slice(0, 10); // نحصرها لأهم 10 كلمات
}

export async function generateMetadata(
  props: { params: Promise<{ slugWithId: string }> }
): Promise<Metadata> {
  const { slugWithId } = await props.params;
  const id = extractId(slugWithId);
  if (!id) return {};

  const product = await getProductById(id);
  if (!product) return {};

  const dynamicKeywords = [
    ...extractKeywords(product.name),
    ...extractKeywords(product.description),
    ...(product.category?.name ? [product.category.name] : []),
  ];
  const canUrl= `https://khadmatikw.com/products/${slugWithId}`;
  const keywords = [
    ...dynamicKeywords,
    "خدمات الكويت",
    "الشاشات",
    "الستلايت",
    "الكاميرات",
    "خدماتي KW",
  ]
    .filter(Boolean)
    .join(", ");

  return {
    title: product.name,
    description: product.description || "اكتشف هذا المنتج من خدماتي KW في الكويت. نوفر أفضل خدمات الصيانة والتركيب للشاشات والستلايت والكاميرات.",
    openGraph: {
      title: product.name,
      description: product.description || "",
      images: [product.image_url || "/default-product.png"],
    },
    keywords,
    alternates: {
      canonical: `${canUrl}`,
    },
    robots: "index, follow",
  };
}

export async function generateStaticParams() {
  const products = await getAllProductIds();
  return products.map((p) => ({
    slugWithId: `${slugify(p.name)}-${p.id}`,
  }));
}

export default async function ProductPage(props: { params: Promise<{ slugWithId: string }> }) {
  const { slugWithId } = await props.params;
  const id = extractId(slugWithId);
  if (!id) notFound();

  const product = await getProductById(id);
  if (!product) notFound();

  const structuredData = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": product.name,
  "description": product.description ?? "",
  "image": product.image_url || "/default-product.png",
  "category": product.category?.name ?? "",
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
    "priceValidUntil": "2028-12-31",
    "price": (product.on_sale ? product.sale_price : product.price)?.toFixed(2) || "0.00",
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
    <ProductDetailsClient product={product} />
    <script type="application/ld+json" suppressHydrationWarning>
      {JSON.stringify(structuredData)}
    </script>
  </>;
}
