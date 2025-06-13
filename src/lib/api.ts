import { supabase } from "./supabase";
import type { Product } from "@/types";

export async function getAllProductIds(): Promise<Pick<Product, "id" | "name">[]> {
  const { data, error } = await supabase
    .from("products")
    .select("id, name");

  if (error || !data) {
    console.error("❌ خطأ في getAllProductIds:", error);
    return [];
  }

  return data;
}

export async function getProductById(id: number): Promise<Product | null> {
  const { data, error } = await supabase
    .from("products")
    .select("*, categories(name), contact_info")
    .eq("id", id)
    .single();

  if (error || !data) {
    console.error("❌ خطأ في getProductById:", error);
    return null;
  }

  return data;
}

export async function getAllBlogPostIds() {
  const { data, error } = await supabase.from("blog_posts").select("id, title");
  if (error) return [];
  return data;
}

// جلب تدوينة واحدة
export async function getBlogPostById(id: number) {
  const { data, error } = await supabase.from("blog_posts").select("*").eq("id", id).single();
  if (error) return null;
  return data;
}