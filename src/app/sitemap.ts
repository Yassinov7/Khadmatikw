import type { MetadataRoute } from 'next';
import { supabase } from '@/lib/supabase';
import { slugify } from '@/utils/slugify';

const BASE_URL = 'https://khadmatikw.com';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes = ['', '/products', '/offers', '/blog', '/contact'];

  // المنتجات
  const { data: products } = await supabase
    .from('products')
    .select('id, name, created_at');

  // العروض
  const { data: offers } = await supabase
    .from('offers')
    .select('id, title, created_at');

  // المدونات
  const { data: blogPosts } = await supabase
    .from('blog_posts')
    .select('id, title, created_at');

  const allUrls: MetadataRoute.Sitemap = [
    ...staticRoutes.map((route) => ({
      url: `${BASE_URL}${route}`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    })),

    // المنتجات
    ...(products || []).map((product) => ({
      url: `${BASE_URL}/products/${slugify(product.name)}-${product.id}`,
      lastModified: product.created_at,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    })),

    // العروض
    ...(offers || []).map((offer) => ({
      url: `${BASE_URL}/offers/${slugify(offer.title)}-${offer.id}`,
      lastModified: offer.created_at,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    })),

    // المدونات
    ...(blogPosts || []).map((post) => ({
      url: `${BASE_URL}/blog/${slugify(post.title)}-${post.id}`,
      lastModified: post.created_at,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    })),
  ];

  return allUrls;
}
