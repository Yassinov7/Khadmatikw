"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const MARQUEE_ITEMS = [
  { type: "text" as const, content: "عروض كأس العالم 2026 IPTV" },
  { type: "text" as const, content: "بث مباشر بجودة HD و 4K" },
  { type: "link" as const, content: "اشتراك كأس العالم", href: "/football/world-cup", variant: "primary" },
  { type: "text" as const, content: "خصومات خاصة على برلين وسبايدر" },
  { type: "link" as const, content: "عروض IPTV", href: "/football/world-cup", variant: "primary" },
  { type: "text" as const, content: "تفعيل فوري في الكويت" },
  { type: "link" as const, content: "اتصال مباشر", href: "tel:96550266068", variant: "phone" },
  {
    type: "link" as const,
    content: "واتساب",
    href: "https://wa.me/96550266068?text=مرحبًا، أود الاستفسار عن عروض كأس العالم IPTV.",
    variant: "whatsapp",
  },
];

function MarqueeItem({ item }: { item: (typeof MARQUEE_ITEMS)[number] }) {
  if (item.type === "text") {
    return (
      <span className="mx-4 whitespace-nowrap text-sm font-semibold text-white sm:text-base">{item.content}</span>
    );
  }

  const commonClasses =
    "mx-4 inline-flex items-center rounded-full px-4 py-2 text-xs font-bold transition sm:text-sm";

  const className =
    item.variant === "whatsapp"
      ? `${commonClasses} bg-white text-emerald-700 hover:bg-emerald-50`
      : item.variant === "phone"
      ? `${commonClasses} bg-white text-slate-900 hover:bg-slate-100`
      : `${commonClasses} bg-yellow-400 text-slate-900 hover:bg-yellow-300`;

  const isExternal = item.href.startsWith("http") || item.href.startsWith("tel:");
  if (isExternal) {
    return (
      <a href={item.href} className={className} target={item.href.startsWith("http") ? "_blank" : undefined} rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}>
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
  if (pathname.startsWith("/admin")) return null;

  const duplicated = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-emerald-700 via-green-600 to-cyan-500 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.25),_transparent_35%)] opacity-40" />
      <div className="relative mx-auto flex min-h-[68px] items-center overflow-hidden px-4 py-3 sm:px-6">
        <div className="flex items-center gap-3 rounded-full bg-black/10 px-4 py-2 text-sm backdrop-blur-sm sm:px-6 sm:py-3">
          <span className="font-semibold">أحدث العروض</span>
          <span className="inline-flex h-2 w-2 rounded-full bg-white/80" />
          <span className="text-slate-100/90">تابع باقات IPTV والأحداث الرياضية مباشرة</span>
        </div>

        <div className="ml-auto hidden items-center gap-3 text-xs text-white/90 sm:flex">
          <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1">تصفح سريع</span>
          <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1">دعم فني 24/7</span>
        </div>
      </div>

      <div className="relative overflow-hidden border-t border-white/10">
        <div className="animate-marquee flex items-center whitespace-nowrap py-3">
          {duplicated.map((item, index) => (
            <MarqueeItem key={`${item.content}-${index}`} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
