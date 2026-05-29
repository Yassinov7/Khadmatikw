import { notFound } from "next/navigation";
import { getAllProductIds, getProductById } from "@/lib/api";
import type { Metadata } from "next";
import { slugify } from "@/utils/slugify";
import ProductDetailsClient from "@/components/product/ProductDetailsClient";
import { supabase } from "@/lib/supabase";
import { JsonLd } from "@/components/JsonLd";
import { absoluteUrl, buildPageMetadata, productJsonLd } from "@/lib/seo";

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

  const description = product.description
    ? product.description.substring(0, 160)
    : "خدمة فنية مقدمة من ستلايت الرجاء في الكويت.";
  const ogImage = product.image_url ? absoluteUrl(product.image_url) : undefined;

  return buildPageMetadata({
    title: `${product.name} | 50266068`,
    description,
    path: `/products/${slugWithId}`,
    keywords: [product.name, "ستلايت الرجاء", "الكويت", product.category?.name || "خدمة فنية"],
    ogImage,
  });
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

  // Fetch related products (same category or random if no category)
  let relatedProducts = [];
  if (product.category_id) {
    const { data } = await supabase
      .from("products")
      .select("*")
      .neq("id", id)
      .eq("category_id", product.category_id)
      .limit(3);
    relatedProducts = data || [];
  }

  // If we don't have enough related products, fetch some random ones
  if (relatedProducts.length < 3) {
    const needed = 3 - relatedProducts.length;
    const { data } = await supabase
      .from("products")
      .select("*")
      .neq("id", id)
      .limit(needed);
    relatedProducts = [...relatedProducts, ...(data || [])];
  }

  const productUrl = absoluteUrl(`/products/${slugWithId}`);
  const description = product.description?.substring(0, 160) ?? "خدمة فنية من ستلايت الرجاء في الكويت.";

  return (
    <>
      <JsonLd
        data={productJsonLd({
          name: product.name,
          description,
          url: productUrl,
          image: product.image_url ?? undefined,
          category: product.category?.name,
        })}
      />
      <ProductDetailsClient product={product} relatedProducts={relatedProducts} />
    </>
  );
}