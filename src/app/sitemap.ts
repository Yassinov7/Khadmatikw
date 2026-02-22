import type { MetadataRoute } from 'next';
import { supabase } from '@/lib/supabase';
import { slugify } from '@/utils/slugify';

export const revalidate = 3600;

const BASE_URL = 'https://satellitealrajaa.com';

const formatDate = (date: string | Date | null) =>
  date ? new Date(date).toISOString() : new Date().toISOString();

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes = [
    { path: '', priority: 1.0, changeFrequency: 'daily' as const },
    { path: '/products', priority: 0.9, changeFrequency: 'daily' as const },
    { path: '/offers', priority: 0.8, changeFrequency: 'daily' as const },
    { path: '/blog', priority: 0.8, changeFrequency: 'daily' as const },
    { path: '/contact', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/web-development-service', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/web-design', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/software-solutions', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/additional-services', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/web-applications', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/satellite-service', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/camera-service', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/intercom-service', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/faq', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/who-is-alrajaa', priority: 0.7, changeFrequency: 'monthly' as const },
    // IPTV subscriptions
    { path: '/iptv/berlin', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/iptv/spider', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/iptv/genie', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/iptv/flash-4k', priority: 0.8, changeFrequency: 'weekly' as const },
    // Football & leagues
    { path: '/football/world-cup', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/football/champions-league', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/football/afc-champions-league', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/football/premier-league', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/football/la-liga', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/football/serie-a', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/football/bundesliga', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/football/kuwait-league', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/football/saudi-league', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/football/uae-league', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/football/qatar-league', priority: 0.8, changeFrequency: 'weekly' as const },
  ];

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

  return [
    // Static routes
    ...staticRoutes.map(route => ({
      url: `${BASE_URL}${route.path}`,
      lastModified: new Date(),
      changeFrequency: route.changeFrequency,
      priority: route.priority
    })),


    // Products
    ...(products || []).map(product => ({
      url: `${BASE_URL}/products/${slugify(product.name)}-${product.id}`,
      lastModified: formatDate(product.created_at),
      changeFrequency: 'weekly' as const,
      priority: 0.8
    })),

    // Offers
    ...(offers || []).map(offer => ({
      url: `${BASE_URL}/offers/${slugify(offer.title)}-${offer.id}`,
      lastModified: formatDate(offer.created_at),
      changeFrequency: 'weekly' as const,
      priority: 0.7
    })),

    // Blog posts
    ...(blogPosts || []).map(post => ({
      url: `${BASE_URL}/blog/${slugify(post.title)}-${post.id}`,
      lastModified: formatDate(post.created_at),
      changeFrequency: 'weekly' as const,
      priority: 0.6
    }))
  ];
}