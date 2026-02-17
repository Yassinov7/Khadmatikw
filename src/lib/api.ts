import { supabase } from "./supabase";
import type { Product, Offer } from "@/types";

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

export async function getAllOfferIds(): Promise<Pick<Offer, "id" | "title">[]> {
  const { data, error } = await supabase
    .from("offers")
    .select("id, title");

  if (error || !data) {
    console.error("❌ خطأ في getAllOfferIds:", error);
    return [];
  }

  return data;
}

export async function getOfferById(id: number): Promise<Offer | null> {
  const { data, error } = await supabase
    .from("offers")
    .select("*, product:products(name, image_url, category_id, category:categories(name)), contact_info")
    .eq("id", id)
    .single();

  if (error || !data) {
    console.error("❌ خطأ في getOfferById:", error);
    return null;
  }

  return data;
}

export async function getAllOffers(): Promise<Offer[]> {
  const { data, error } = await supabase
    .from("offers")
    .select("*, product:products(name, image_url, category_id, category:categories(name)), contact_info")
    .order("created_at", { ascending: false });

  if (error || !data) {
    console.error("❌ خطأ في getAllOffers:", error);
    return [];
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
  // Removed SEO fields that don't exist in the database
  const { data, error } = await supabase
    .from("blog_posts")
    .select("id, title, cover_url, content, created_at")
    .eq("id", id)
    .single();
  if (error) return null;
  return data;
}

// Get all categories for sitemap
export async function getAllCategories() {
  const { data, error } = await supabase.from("categories").select("id, name");
  if (error) return [];
  return data;
}

// Search across blog posts, offers, and products
export async function searchSite(query: string) {
  // Search products first (highest priority)
  const { data: products, error: productError } = await supabase
    .from("products")
    .select("id, name, description, image_url, category_id, categories(name)")
    .or(`name.ilike.%${query}%,description.ilike.%${query}%`)
    .order("name");

  // Search offers second priority
  const { data: offers, error: offerError } = await supabase
    .from("offers")
    .select("id, title, description, image_url, product:products(name, image_url, category_id, category:categories(name)), contact_info")
    .or(`title.ilike.%${query}%,description.ilike.%${query}%`)
    .order("title");

  // Search blog posts last priority
  // Removed SEO fields that don't exist in the database
  const { data: blogPosts, error: blogError } = await supabase
    .from("blog_posts")
    .select("id, title, content, created_at")
    .or(`title.ilike.%${query}%,content.ilike.%${query}%`)
    .order("created_at", { ascending: false });

  return {
    products: productError ? [] : products || [],
    offers: offerError ? [] : offers || [],
    blogPosts: blogError ? [] : blogPosts || [],
    error: productError || offerError || blogError
  };
}