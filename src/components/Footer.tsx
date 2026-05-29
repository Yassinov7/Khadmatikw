"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import {
  MapPin,
  CodeXmlIcon,
  ArrowUp,
  Home,
  Layers,
  PhoneCall,
  Blinds,
  Satellite,
  Camera,
  DiscAlbumIcon,
  Tag,
  FileQuestion,
  ShieldQuestion,
  Mail,
  Clock,
  Instagram,
  MessageCircle,
  Tv,
  Trophy,
  Activity,
  Facebook,
} from "lucide-react";

export function Footer() {
  const pathname = usePathname();
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScroll(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const isAdminArea = pathname.startsWith("/admin") && pathname !== "/admin/login";
  if (isAdminArea) return null;

  const mainLinks = [
    { label: "الرئيسية", href: "/", icon: Home },
    { label: "عروض كأس العالم", href: "/football/world-cup", icon: Trophy },
    { label: "الخدمات", href: "/products", icon: Layers },
    { label: "العروض", href: "/offers", icon: Tag },
    { label: "المدونة", href: "/blog", icon: Blinds },
    { label: "تواصل معنا", href: "/contact", icon: PhoneCall },
  ];

  const serviceLinks = [
    { label: "فني ستلايت", href: "/satellite-service", icon: Satellite },
    { label: "فني كاميرات", href: "/camera-service", icon: Camera },
    { label: "فني انتركم", href: "/intercom-service", icon: DiscAlbumIcon },
    { label: "من نحن؟", href: "/who-is-alrajaa", icon: ShieldQuestion },
    { label: "اسئلة شائعة", href: "/faq", icon: FileQuestion },
  ];

  const devServiceLinks = [
    { label: "تصميم واجهات", href: "/web-design", icon: CodeXmlIcon },
    { label: "تطبيقات ويب", href: "/web-applications", icon: CodeXmlIcon },
    { label: "حلول برمجية", href: "/software-solutions", icon: CodeXmlIcon },
    { label: "صيانة ودعم", href: "/additional-services", icon: CodeXmlIcon },
  ];

  const iptvLinks = [
    { label: "اشتراك برلين", href: "/iptv/berlin", icon: Tv },
    { label: "اشتراك سبايدر", href: "/iptv/spider", icon: Tv },
    { label: "رسيفر الجني", href: "/iptv/genie", icon: Tv },
    { label: "فلاش 4K", href: "/iptv/flash-4k", icon: Tv },
  ];

  const footballLinks = [
    { label: "كأس العالم", href: "/football/world-cup", icon: Trophy },
    { label: "دوري أبطال أوروبا", href: "/football/champions-league", icon: Activity },
    { label: "أبطال آسيا", href: "/football/afc-champions-league", icon: Activity },
    { label: "الدوري الإنجليزي", href: "/football/premier-league", icon: Activity },
    { label: "الدوري الإسباني", href: "/football/la-liga", icon: Activity },
    { label: "الدوري الإيطالي", href: "/football/serie-a", icon: Activity },
    { label: "الدوري الألماني", href: "/football/bundesliga", icon: Activity },
    { label: "الدوري الكويتي", href: "/football/kuwait-league", icon: Activity },
    { label: "الدوري السعودي", href: "/football/saudi-league", icon: Activity },
    { label: "الدوري الإماراتي", href: "/football/uae-league", icon: Activity },
    { label: "الدوري القطري", href: "/football/qatar-league", icon: Activity },
  ];

  const contactInfo = [
    { icon: <PhoneCall size={16} />, text: "96550266068" },
    { icon: <Mail size={16} />, text: "info@satellitealrajaa.com" },
    { icon: <MapPin size={16} />, text: "الكويت، حولي" },
    { icon: <Clock size={16} />, text: "24/7 متاح" },
  ];

  const socialLinks = [
    {
      icon: <Instagram size={20} />,
      href: "https://www.instagram.com/alrajaa_berlin8k?igsh=ZDI3ZjY4azdueTN1",
      label: "إنستغرام",
    },
    {
      icon: <Facebook size={20} />,
      href: "https://www.facebook.com/alrajaaberlin8k",
      label: "فيسبوك",
    },
    {
      icon: <MessageCircle size={20} />,
      href: "https://wa.me/96550266068?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D8%8C%20%D8%A3%D9%88%D8%AF%20%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%20%D8%B9%D9%86%20%D8%AE%D8%AF%D9%85%D8%A7%D8%AA%D9%83%D9%85",
      label: "واتساب",
    },
  ];

  return (
    <footer className="bg-slate-950 text-slate-200">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 xl:grid-cols-[1.8fr_1fr_1fr_1fr]">
          <div className="rounded-[2rem] bg-slate-900/90 p-8 shadow-2xl shadow-emerald-500/10">
            <div className="flex items-center gap-4">
              <Image src="/logo.png" alt="شعار ستلايت الرجاء" width={68} height={68} className="rounded-3xl border border-slate-800 bg-slate-950" />
              <div>
                <h2 className="text-2xl font-extrabold text-white">ستلايت الرجاء</h2>
                <p className="mt-1 text-sm text-slate-400">خدمات الستلايت، الكاميرات، الانتركم وعروض IPTV بجودة عالية.</p>
              </div>
            </div>

            <div className="mt-8 space-y-4 text-sm text-slate-300">
              <p>نحن هنا لدعمك طوال الوقت بخدمات سريعة وموثوقة في الكويت.</p>
              <div className="grid gap-3 sm:grid-cols-2">
                <a
                  href="tel:96550266068"
                  className="rounded-3xl bg-emerald-600 px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-emerald-500"
                >
                  اتصل بنا الآن
                </a>
                <a
                  href="https://wa.me/96550266068"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-3xl bg-white px-4 py-3 text-center text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
                >
                  دردشة واتساب
                </a>
              </div>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center gap-3 rounded-3xl bg-slate-950/80 px-4 py-3 text-sm text-slate-300">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-600 text-white">{item.icon}</span>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <Link
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-slate-800 text-white transition hover:-translate-y-1 hover:bg-emerald-600"
                  aria-label={social.label}
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-1">
            <div className="rounded-[2rem] bg-slate-900/90 p-6 shadow-xl shadow-slate-950/20">
              <h3 className="text-lg font-bold text-white">روابط سريعة</h3>
              <ul className="mt-5 space-y-3 text-sm text-slate-300">
                {mainLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="flex items-center gap-3 transition hover:text-emerald-300">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-800 text-emerald-400">{<link.icon size={16} />}</span>
                      <span>{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[2rem] bg-slate-900/90 p-6 shadow-xl shadow-slate-950/20">
              <h3 className="text-lg font-bold text-white">خدماتنا</h3>
              <ul className="mt-5 space-y-3 text-sm text-slate-300">
                {serviceLinks.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="flex items-center gap-3 transition hover:text-emerald-300">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-800 text-emerald-400">{<item.icon size={16} />}</span>
                      <span>{item.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-1">
            <div className="rounded-[2rem] bg-slate-900/90 p-6 shadow-xl shadow-slate-950/20">
              <h3 className="text-lg font-bold text-white">اشتراكات IPTV</h3>
              <ul className="mt-5 space-y-3 text-sm text-slate-300">
                {iptvLinks.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="flex items-center gap-3 transition hover:text-emerald-300">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-800 text-emerald-400">{<item.icon size={16} />}</span>
                      <span>{item.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[2rem] bg-slate-900/90 p-6 shadow-xl shadow-slate-950/20">
              <h3 className="text-lg font-bold text-white">كرة القدم</h3>
              <ul className="mt-5 max-h-64 overflow-y-auto space-y-3 pr-2 text-sm text-slate-300">
                {footballLinks.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="flex items-center gap-3 transition hover:text-emerald-300">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-800 text-emerald-400">{<item.icon size={16} />}</span>
                      <span>{item.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-800 pt-6 text-sm text-slate-500">
          <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
            <p className="text-center xl:text-start">
              جميع الحقوق محفوظة © {new Date().getFullYear()} ستلايت الرجاء.
            </p>
            <p className="text-center xl:text-end">
              تصميم وتطوير بواسطة <Link href="https://www.instagram.com/mhmmdyassine" target="_blank" rel="noopener noreferrer" className="text-emerald-300 hover:underline">م. محمد</Link>
            </p>
          </div>
        </div>
      </div>

      {showScroll && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 left-6 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-2xl shadow-emerald-500/30 transition hover:scale-105"
          aria-label="العودة للأعلى"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </footer>
  );
}
