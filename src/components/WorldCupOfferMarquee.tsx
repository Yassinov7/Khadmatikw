'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const MARQUEE_ITEMS = [
  { type: 'text' as const, content: 'عروض كأس العالم 2026 IPTV' },
  { type: 'text' as const, content: 'بث مباشر جميع مباريات كأس العالم HD و 4K' },
  { type: 'link' as const, content: 'اشتراك كأس العالم', href: '/football/world-cup', variant: 'primary' },
  { type: 'text' as const, content: 'خصومات خاصة على برلين وسبايدر' },
  { type: 'link' as const, content: 'عروض IPTV', href: '/football/world-cup', variant: 'primary' },
  { type: 'text' as const, content: 'تفعيل فوري في الكويت' },
  { type: 'link' as const, content: 'اتصال مباشر', href: 'tel:96550266068', variant: 'phone' },
  {
    type: 'link' as const,
    content: 'واتساب',
    href: 'https://wa.me/96550266068?text=مرحبًا، أود الاستفسار عن عروض كأس العالم IPTV.',
    variant: 'whatsapp',
  },
];

function MarqueeItem({ item }: { item: (typeof MARQUEE_ITEMS)[number] }) {
  if (item.type === 'text') {
    return <span className="mx-3 sm:mx-4 text-sm sm:text-base font-bold whitespace-nowrap">{item.content}</span>;
  }
  const className =
    item.variant === 'whatsapp'
      ? 'mx-3 sm:mx-4 bg-white text-green-600 px-3 sm:px-4 py-1 rounded-full font-bold text-xs sm:text-sm hover:bg-gray-100 transition-colors whitespace-nowrap'
      : item.variant === 'phone'
        ? 'mx-3 sm:mx-4 bg-white text-emerald-800 px-3 sm:px-4 py-1 rounded-full font-bold text-xs sm:text-sm hover:bg-gray-100 transition-colors whitespace-nowrap'
        : 'mx-3 sm:mx-4 bg-yellow-400 text-emerald-900 px-3 sm:px-4 py-1 rounded-full font-bold text-xs sm:text-sm hover:bg-yellow-300 transition-colors whitespace-nowrap';

  if (item.href.startsWith('http') || item.href.startsWith('tel:')) {
    return (
      <a
        href={item.href}
        className={className}
        target={item.href.startsWith('http') ? '_blank' : undefined}
        rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
      >
        {item.content}
      </a>
    );
  }
  return (
    <Link href={item.href} className={className}>
      {item.content}
    </Link>
  );
}

export function WorldCupOfferMarquee() {
  const pathname = usePathname();
  const isAdminArea = pathname.startsWith('/admin');

  if (isAdminArea) return null;

  const duplicated = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <div
      className="relative w-full z-[1] bg-gradient-to-r from-emerald-700 via-green-600 to-emerald-700 text-white border-b border-yellow-400/30"
      aria-label="عروض كأس العالم"
    >
      <div className="overflow-hidden py-2 sm:py-2.5">
        <div className="animate-marquee items-center">
          {duplicated.map((item, i) => (
            <MarqueeItem key={i} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
