import type { MetadataRoute } from 'next';
import { supabase } from '@/lib/supabase';
import { slugify } from '@/utils/slugify';

export const revalidate = 3600;

const BASE_URL = 'https://satellitealrajaa.com';

const formatDate = (date: string | Date | null) =>
  date ? new Date(date).toISOString() : new Date().toISOString();

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes = ['', '/products', '/blog', '/contact', '/satellite-service', '/camera-service', '/intercom-service'];

  // المنتجات
  const { data: products } = await supabase
    .from('products')
    .select('id, name, created_at');

  // العروض
  // const { data: offers } = await supabase
  //   .from('offers')
  //   .select('id, title, created_at');

  // المدونات
  const { data: blogPosts } = await supabase
    .from('blog_posts')
    .select('id, title, created_at');

  const allUrls: MetadataRoute.Sitemap = [
    ...staticRoutes.map((route) => ({
      url: `${BASE_URL}${route}`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'daily' as const,
      priority: 1.0,
    })),

    // المنتجات
    ...(products || []).map((product) => ({
      url: `${BASE_URL}/products/${slugify(product.name)}-${product.id}`,
      lastModified: formatDate(product.created_at),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),

    // العروض
    // ...(offers || []).map((offer) => ({
    //   url: `${BASE_URL}/offers/${slugify(offer.title)}-${offer.id}`,
    //   lastModified: formatDate(offer.created_at),
    //   changeFrequency: 'weekly' as const,
    //   priority: 0.8,
    // })),

    // المدونات
    ...(blogPosts || []).map((post) => ({
      url: `${BASE_URL}/blog/${slugify(post.title)}-${post.id}`,
      lastModified: formatDate(post.created_at),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  ];

  return allUrls;
}
