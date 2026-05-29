import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin', '/admin/*', '/search'],
      },
    ],
    sitemap: 'https://satellitealrajaa.com/sitemap.xml',
    host: 'https://satellitealrajaa.com'
  };
}