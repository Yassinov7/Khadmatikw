import type { Metadata } from "next";

export const SITE_URL = "https://satellitealrajaa.com";
export const SITE_NAME = "ستلايت الرجاء";
export const SITE_NAME_EN = "Satellite Alrajaa";
export const PHONE_E164 = "+96550266068";
export const PHONE_DISPLAY = "50266068";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/logo.png`;

export const SOCIAL_LINKS = {
  instagram: "https://www.instagram.com/alrajaa_berlin8k?igsh=ZDI3ZjY4azdueTN1",
  facebook: "https://www.facebook.com/alrajaaberlin8k",
  whatsapp: "https://wa.me/96550266068",
} as const;

export const KUWAIT_CITIES = [
  "مدينة الكويت", "حولى", "الفروانية", "الجهراء", "الأحمدي", "مبارك الكبير",
  "الفنطاس", "السالمية", "الشفافيه", "الرقعي", "الفيحاء", "خيطان",
  "العبدلي", "مشرف", "الصباحية", "الجليب", "الظهر", "العزيزية",
];

export const WORLD_CUP_KEYWORDS = [
  "كأس العالم IPTV",
  "عروض كأس العالم",
  "مشاهدة كأس العالم الكويت",
  "كأس العالم 2026",
  "اشتراك IPTV كأس العالم",
  "بث مباشر كأس العالم",
];

export const DEFAULT_ROBOTS: Metadata["robots"] = {
  index: true,
  follow: true,
  googleBot: {
    index: true,
    follow: true,
    "max-video-preview": -1,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
};

export const NOINDEX_ROBOTS: Metadata["robots"] = {
  index: false,
  follow: true,
  googleBot: { index: false, follow: true },
};

export function absoluteUrl(path = ""): string {
  if (!path) return SITE_URL;
  if (path.startsWith("http")) return path;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

type BuildPageMetadataOptions = {
  title: string;
  description: string;
  path: string;
  keywords?: string | string[];
  ogImage?: string;
  ogType?: "website" | "article";
  noIndex?: boolean;
  publishedTime?: string;
  modifiedTime?: string;
};

export function buildPageMetadata({
  title,
  description,
  path,
  keywords,
  ogImage = DEFAULT_OG_IMAGE,
  ogType = "website",
  noIndex = false,
  publishedTime,
  modifiedTime,
}: BuildPageMetadataOptions): Metadata {
  const canonical = absoluteUrl(path);
  const desc = description.slice(0, 160);
  const keywordList = Array.isArray(keywords)
    ? keywords
    : keywords
      ? keywords.split(",").map((k) => k.trim())
      : undefined;

  return {
    title,
    description: desc,
    ...(keywordList ? { keywords: keywordList } : {}),
    alternates: { canonical },
    robots: noIndex ? NOINDEX_ROBOTS : DEFAULT_ROBOTS,
    openGraph: {
      title,
      description: desc,
      url: canonical,
      siteName: SITE_NAME,
      locale: "ar_KW",
      type: ogType,
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
      ...(publishedTime ? { publishedTime } : {}),
      ...(modifiedTime ? { modifiedTime } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: desc,
      images: [ogImage],
    },
  };
}

export function combineKeywords(...groups: (string | string[])[]): string {
  return groups.flat().join(", ");
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    alternateName: SITE_NAME_EN,
    url: SITE_URL,
    logo: DEFAULT_OG_IMAGE,
    telephone: PHONE_E164,
    sameAs: [SOCIAL_LINKS.instagram, SOCIAL_LINKS.facebook],
    address: {
      "@type": "PostalAddress",
      addressLocality: "حولي",
      addressRegion: "الكويت",
      addressCountry: "KW",
    },
  };
}

export function webSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    inLanguage: "ar",
    publisher: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: SITE_NAME,
    description:
      "خدمات الشاشات والستلايت والكاميرات وعروض كأس العالم IPTV في الكويت. اشتراك برلين وسبايدر مع تركيب وصيانة احترافية.",
    telephone: PHONE_E164,
    url: SITE_URL,
    logo: DEFAULT_OG_IMAGE,
    image: DEFAULT_OG_IMAGE,
    priceRange: "$$",
    areaServed: { "@type": "Country", name: "Kuwait" },
    sameAs: [SOCIAL_LINKS.instagram, SOCIAL_LINKS.facebook],
    address: {
      "@type": "PostalAddress",
      addressLocality: "حولي",
      addressRegion: "الكويت",
      addressCountry: "KW",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function serviceJsonLd(opts: {
  name: string;
  description: string;
  path: string;
  serviceType?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: opts.name,
    description: opts.description,
    serviceType: opts.serviceType ?? opts.name,
    url: absoluteUrl(opts.path),
    provider: {
      "@type": "LocalBusiness",
      name: SITE_NAME,
      telephone: PHONE_E164,
      url: SITE_URL,
    },
    areaServed: KUWAIT_CITIES.map((city) => ({ "@type": "City", name: city })),
  };
}

export function faqPageJsonLd(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}

export function productJsonLd(opts: {
  name: string;
  description: string;
  url: string;
  image?: string;
  category?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: opts.name,
    description: opts.description,
    image: opts.image ? absoluteUrl(opts.image) : DEFAULT_OG_IMAGE,
    category: opts.category,
    brand: { "@type": "Brand", name: SITE_NAME },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "KWD",
      seller: { "@type": "Organization", name: SITE_NAME },
      url: opts.url,
    },
  };
}

export function offerJsonLd(opts: {
  name: string;
  description: string;
  url: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Offer",
    name: opts.name,
    description: opts.description,
    url: opts.url,
    image: opts.image ? absoluteUrl(opts.image) : DEFAULT_OG_IMAGE,
    offeredBy: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
    availability: "https://schema.org/InStock",
    areaServed: { "@type": "Country", name: "Kuwait" },
  };
}

export function articleJsonLd(opts: {
  headline: string;
  description: string;
  url: string;
  image?: string;
  datePublished: string;
  dateModified?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: opts.headline,
    description: opts.description,
    image: opts.image ? absoluteUrl(opts.image) : DEFAULT_OG_IMAGE,
    datePublished: opts.datePublished,
    dateModified: opts.dateModified ?? opts.datePublished,
    author: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      logo: { "@type": "ImageObject", url: DEFAULT_OG_IMAGE },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": opts.url },
  };
}

export function contactPageJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "تواصل مع ستلايت الرجاء",
    url: absoluteUrl("/contact"),
    mainEntity: {
      "@type": "LocalBusiness",
      name: SITE_NAME,
      telephone: PHONE_E164,
      url: SITE_URL,
    },
  };
}

function buildItemListElement(items: { name: string; url: string }[]) {
  return items.map((item, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: item.name,
    item: item.url,
  }));
}

export function itemListJsonLd(opts: {
  name: string;
  description?: string;
  path?: string;
  items: { name: string; url: string }[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: opts.name,
    ...(opts.description ? { description: opts.description } : {}),
    ...(opts.path ? { url: absoluteUrl(opts.path) } : {}),
    numberOfItems: opts.items.length,
    itemListElement: buildItemListElement(opts.items),
  };
}

export function collectionPageJsonLd(opts: {
  name: string;
  description: string;
  path: string;
  items: { name: string; url: string }[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: opts.name,
    description: opts.description,
    url: absoluteUrl(opts.path),
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: opts.items.length,
      itemListElement: buildItemListElement(opts.items),
    },
  };
}
