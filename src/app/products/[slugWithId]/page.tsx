import { notFound } from "next/navigation";
import { getAllProductIds, getProductById } from "@/lib/api";
import type { Metadata } from "next";
import { slugify } from "@/utils/slugify";
import ProductDetailsClient from "@/components/product/ProductDetailsClient";

function extractId(slugWithId: string): number | null {
  const match = slugWithId.match(/-(\d+)$/);
  return match ? Number(match[1]) : null;
}

// ✅ ✅✅ الحل هنا: جعل params داخل async await وليس مباشرة
export async function generateMetadata(
  props: { params: Promise<{ slugWithId: string }> }
): Promise<Metadata> {
  const { slugWithId } = await props.params;
  const id = extractId(slugWithId);
  if (!id) return {};

  const product = await getProductById(id);
  if (!product) return {};

  return {
    title: product.name,
    description: product.description || "",
    openGraph: {
      title: product.name,
      description: product.description || "",
      images: [product.image_url || "/default-product.png"],
    },
    robots: "index, follow",
    alternates: {
      canonical: `https://khadmatikw.vercel.app//products/${slugWithId}`,
    },
  };
}

export async function generateStaticParams() {
  const products = await getAllProductIds();
  return products.map((p) => ({
    slugWithId: `${slugify(p.name)}-${p.id}`,
  }));
}

// ✅ وكذلك هنا
export default async function ProductPage(props: { params: Promise<{ slugWithId: string }> }) {
  const { slugWithId } = await props.params;
  const id = extractId(slugWithId);
  if (!id) notFound();

  const product = await getProductById(id);
  if (!product) notFound();

  return <ProductDetailsClient product={product} />;
}
