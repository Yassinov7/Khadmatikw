import { supabase } from "@/lib/supabase";
import { ProductsClient } from "@/components/ProductClient";

export const revalidate = 600;

export default async function ProductsPage() {
  // جلب كل التصنيفات والمنتجات
  const { data: categories } = await supabase
    .from("categories")
    .select("*")
    .order("id", { ascending: true });

  const { data: products } = await supabase
    .from("products")
    .select("*, category:categories(name)")
    .order("id", { ascending: true });

  return (
    <ProductsClient categories={categories ?? []} products={products ?? []} />
  );
}
