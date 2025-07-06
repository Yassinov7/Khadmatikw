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
    .slice(0, 10);
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

  const canUrl = `https://khadmatikw.com/products/${slugWithId}`;
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
    description: product.description || "اكتشف هذه الخدمة من خدماتي KW في الكويت. نوفر أفضل خدمات الصيانة والتركيب للشاشات والستلايت والكاميرات.",
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
    "@type": "Service",
    "name": product.name,
    "description": product.description ?? "",
    "image": product.image_url || "/default-product.png",
    "serviceType": product.category?.name ?? "",
    "provider": {
      "@type": "Organization",
      "name": "خدماتي KW",
      "areaServed": {
        "@type": "Place",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "KW"
        }
      }
    }
  };

  return (
    <>
      <ProductDetailsClient product={product} />
      <script type="application/ld+json" suppressHydrationWarning>
        {JSON.stringify(structuredData)}
      </script>
    </>
  );
}
