import { notFound } from "next/navigation";
import { getProductById, getAllProductIds } from "@/lib/api";
import { slugify } from "@/utils/slugify";
import { generateMetadata as metadataFn } from "./metadata";
import ProductClient from "@/components/product/ProductClient";

function extractId(slugWithId: string): number | null {
  const match = slugWithId.match(/-(\d+)$/);
  return match ? Number(match[1]) : null;
}

export const generateStaticParams = async () => {
  const products = await getAllProductIds();
  return products.map((p) => ({
    slugWithId: `${slugify(p.name)}-${p.id}`,
  }));
};

export const generateMetadata = metadataFn;

export default async function Page({ params }: { params: { slugWithId: string } }) {
  const id = extractId(params.slugWithId);
  if (!id) notFound();

  const product = await getProductById(id);
  if (!product) notFound();

  return <ProductClient product={product} />;
}
