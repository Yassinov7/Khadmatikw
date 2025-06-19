// src/app/sitemap.xml/route.ts
import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { slugify } from "@/utils/slugify";

const BASE_URL = "https://khadmatikw.vercel.app";

export async function GET() {
  const staticRoutes = [
    "/", "/products", "/offers", "/blog", "/contact"
  ];

  const urls: string[] = [...staticRoutes];

  // المنتجات
  const { data: products } = await supabase
    .from("products")
    .select("id, name");
  products?.forEach((p) => {
    urls.push(`/products/${slugify(p.name)}-${p.id}`);
  });

  // العروض
  const { data: offers } = await supabase
    .from("offers")
    .select("id, title");
  offers?.forEach((o) => {
    urls.push(`/offers/${slugify(o.title)}-${o.id}`);
  });

  // المقالات
  const { data: posts } = await supabase
    .from("blog_posts")
    .select("id, title");
  posts?.forEach((p) => {
    urls.push(`/blog/${slugify(p.title)}-${p.id}`);
  });

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls.map((url) => `
    <url>
      <loc>${BASE_URL}${url}</loc>
      <changefreq>daily</changefreq>
      <priority>0.7</priority>
    </url>`).join("")}
</urlset>`.trim();

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml"
    },
  });
}
