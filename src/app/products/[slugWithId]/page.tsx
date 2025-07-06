import { notFound } from "next/navigation";
import { getAllProductIds, getProductById } from "@/lib/api";
import type { Metadata } from "next";
import { slugify } from "@/utils/slugify";
import ProductDetailsClient from "@/components/product/ProductDetailsClient";

// استخراج id من نهاية slug
function extractId(slugWithId: string): number | null {
  const match = slugWithId.match(/-(\d+)$/);
  return match ? Number(match[1]) : null;
}

// تنسيق SEO بدون دلالات تجارية
export async function generateMetadata(
  props: { params: Promise<{ slugWithId: string }> }
): Promise<Metadata> {
  const { slugWithId } = await props.params;
  const id = extractId(slugWithId);
  if (!id) return {};

  const product = await getProductById(id);
  if (!product) return {};

  const canUrl = `https://khadmatikw.com/products/${slugWithId}`;

  return {
    title: product.name,
    description: "صفحة معلومات ضمن موقع خدماتي KW.",
    openGraph: {
      title: product.name,
      description: "صفحة استعراض عامة ضمن خدماتي KW.",
      images: [product.image_url || "/default-product.png"],
    },
    twitter: {
      card: "summary_large_image",
      title: product.name,
      description: "تعرف على محتوى هذه الصفحة من خدماتي KW.",
    },
    keywords: ["خدماتي KW", "معلومات", "صفحة عامة", "الكويت"],
    robots: "index, follow",
    alternates: {
      canonical: canUrl,
    },
  };
}

// توليد الروابط الثابتة
export async function generateStaticParams() {
  const products = await getAllProductIds();
  return products.map((p) => ({
    slugWithId: `${slugify(p.name)}-${p.id}`,
  }));
}

// صفحة التفاصيل
export default async function ProductPage(props: { params: Promise<{ slugWithId: string }> }) {
  const { slugWithId } = await props.params;
  const id = extractId(slugWithId);
  if (!id) notFound();

  const product = await getProductById(id);
  if (!product) notFound();

  return (
    <ProductDetailsClient product={product} />
  );
}
