export const dynamic = "force-dynamic";

import type { MetadataRoute } from "next";
import { supabase } from "@/lib/supabase";
import { slugify } from "@/utils/slugify";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticPages = [
    { url: "https://khadmatikw.vercel.app/", priority: 1 },
    { url: "https://khadmatikw.vercel.app/products", priority: 0.9 },
    { url: "https://khadmatikw.vercel.app/offers", priority: 0.9 },
    { url: "https://khadmatikw.vercel.app/blog", priority: 0.9 },
    { url: "https://khadmatikw.vercel.app/contact", priority: 0.8 },
  ];

  const [productsRes, offersRes, postsRes] = await Promise.all([
    supabase.from("products").select("id, name"),
    supabase.from("offers").select("id, title"),
    supabase.from("blog_posts").select("id, title"),
  ]);

  const dynamicUrls = [];

  for (const p of productsRes.data || []) {
    dynamicUrls.push({
      url: `https://khadmatikw.vercel.app/products/${slugify(p.name)}-${p.id}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    });
  }

  for (const o of offersRes.data || []) {
    dynamicUrls.push({
      url: `https://khadmatikw.vercel.app/offers/${slugify(o.title)}-${o.id}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    });
  }

  for (const b of postsRes.data || []) {
    dynamicUrls.push({
      url: `https://khadmatikw.vercel.app/blog/${slugify(b.title)}-${b.id}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.6,
    });
  }

  return [...staticPages, ...dynamicUrls];
}
