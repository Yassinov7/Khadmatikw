import { getProductById } from "@/lib/api";
import { Metadata } from "next";

function extractId(slugWithId: string): number | null {
  const match = slugWithId.match(/-(\d+)$/);
  return match ? Number(match[1]) : null;
}

export async function generateMetadata({ params }: { params: { slugWithId: string } }): Promise<Metadata> {
  const id = extractId(params.slugWithId);
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
  };
}
