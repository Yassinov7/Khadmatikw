"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import {
  Menu,
  X,
  Home,
  Layers,
  PhoneCall,
  Blinds,
  Tag,
  ChevronDown,
  Search,
  Code,
  PlusSquare,
  Tv,
  Trophy,
} from "lucide-react";
import { usePathname } from "next/navigation";
import { SearchComponent } from "./SearchComponent";

type MenuCategoryId = "football" | "iptv" | "webDev" | "services";
type MenuItem = { label: string; href: string };
type CategoryMenu = { id: MenuCategoryId; title: string; icon: typeof Trophy; items: MenuItem[] };

const NAV_LINKS = [
  { label: "الرئيسية", href: "/", icon: Home },
  { label: "الخدمات", href: "/products", icon: Layers },
  { label: "العروض", href: "/offers", icon: Tag },
  { label: "المدونة", href: "/blog", icon: Blinds },
  { label: "تواصل", href: "/contact", icon: PhoneCall },
];

const FOOTBALL_LINKS = [
  { label: "كأس العالم", href: "/football/world-cup" },
  { label: "دوري أبطال أوروبا", href: "/football/champions-league" },
  { label: "أبطال آسيا", href: "/football/afc-champions-league" },
  { label: "الدوري الإنجليزي", href: "/football/premier-league" },
  { label: "الدوري الإسباني", href: "/football/la-liga" },
  { label: "الدوري الإيطالي", href: "/football/serie-a" },
  { label: "الدوري الألماني", href: "/football/bundesliga" },
  { label: "الدوري الكويتي", href: "/football/kuwait-league" },
  { label: "الدوري السعودي", href: "/football/saudi-league" },
  { label: "الدوري الإماراتي", href: "/football/uae-league" },
  { label: "الدوري القطري", href: "/football/qatar-league" },
];

const IPTV_LINKS = [
  { label: "اشتراك برلين", href: "/iptv/berlin" },
  { label: "اشتراك سبايدر", href: "/iptv/spider" },
  { label: "رسيفر الجني", href: "/iptv/genie" },
  { label: "فلاش 4K", href: "/iptv/flash-4k" },
];

const DEV_LINKS = [
  { label: "تصميم واجهات", href: "/web-design" },
  { label: "تطبيقات ويب", href: "/web-applications" },
  { label: "حلول برمجية", href: "/software-solutions" },
  { label: "صيانة ودعم", href: "/additional-services" },
];

const SERVICE_LINKS = [
  { label: "الستلايت", href: "/satellite-service" },
  { label: "الكاميرات", href: "/camera-service" },
  { label: "الانتركم", href: "/intercom-service" },
  { label: "من نحن؟", href: "/who-is-alrajaa" },
  { label: "الأسئلة الشائعة", href: "/faq" },
];

const CATEGORY_MENU: CategoryMenu[] = [
  {
    id: "football",
    title: "كرة القدم",
    icon: Trophy,
    items: FOOTBALL_LINKS,
  },
  {
    id: "iptv",
    title: "اشتراكات IPTV",
    icon: Tv,
    items: IPTV_LINKS,
  },
  {
    id: "webDev",
    title: "خدمات برمجية",
    icon: Code,
    items: DEV_LINKS,
  },
  {
    id: "services",
    title: "خدمات إضافية",
    icon: PlusSquare,
    items: SERVICE_LINKS,
  },
];

export function Navbar() {
  const pathname = usePathname();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<MenuCategoryId | null>(null);
  const [expandedMobile, setExpandedMobile] = useState<Record<MenuCategoryId, boolean>>({
    football: false,
    iptv: false,
    webDev: false,
    services: false,
  });

  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("drawer-open", drawerOpen);
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setDrawerOpen(false);
      }
    };
    if (drawerOpen) {
      window.addEventListener("keydown", onKeyDown);
    }
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [drawerOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isActive = (href: string) => pathname === href || (href !== "/" && pathname.startsWith(href));

  const closeDrawerDeferred = () => window.setTimeout(() => setDrawerOpen(false), 0);
  const toggleDropdown = (key: MenuCategoryId) => setActiveDropdown((current) => (current === key ? null : key));
  const toggleMobileSection = (key: MenuCategoryId) => setExpandedMobile((current) => ({ ...current, [key]: !current[key] }));

  const isAdminArea = pathname.startsWith("/admin") && pathname !== "/admin/login";
  if (isAdminArea) return null;

  return (
    <>
      <header className={`w-full z-30 transition duration-300 ${scrolled ? "backdrop-blur bg-white/90 shadow-sm border-b border-slate-200" : "bg-transparent"}`}>
        <div className="container mx-auto flex items-center justify-between gap-3 px-4 py-4">
          <Link href="/" className="group flex items-center gap-3">
            <div className="relative flex h-12 w-12 items-center justify-center rounded-3xl border border-slate-200 bg-gradient-to-br from-emerald-600 to-cyan-500 text-white shadow-lg shadow-cyan-500/10 transition-transform duration-300 group-hover:-translate-y-0.5">
              <Image src="/logo.png" alt="شعار ستلايت الرجاء" width={38} height={38} className="rounded-2xl" priority />
            </div>
            <div className="hidden sm:flex flex-col leading-tight">
              <span className="text-base font-black text-slate-900">ستلايت الرجاء</span>
              <span className="text-xs text-slate-500">خدمات تقنية وفنية متكاملة</span>
            </div>
          </Link>

          <div className="relative hidden lg:flex flex-1 items-center justify-between gap-4">
            <nav ref={navRef} className="flex items-center gap-2 overflow-x-auto overflow-y-visible pb-1">
              {NAV_LINKS.slice(0, 3).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`nav-pill ${isActive(link.href) ? "nav-pill-active" : "nav-pill-inactive"}`}
                >
                  <link.icon size={16} className="text-secondary" />
                  <span>{link.label}</span>
                </Link>
              ))}

              {CATEGORY_MENU.map((menu) => (
                <button
                  key={menu.id}
                  type="button"
                  className={`nav-pill ${activeDropdown === menu.id ? "nav-pill-active" : "nav-pill-inactive"}`}
                  onClick={(event) => {
                    event.stopPropagation();
                    toggleDropdown(menu.id);
                  }}
                  aria-expanded={activeDropdown === menu.id}
                >
                  <menu.icon size={16} className="text-secondary" />
                  <span>{menu.title}</span>
                  <ChevronDown size={14} className={`text-slate-500 transition-transform ${activeDropdown === menu.id ? "rotate-180" : ""}`} />
                </button>
              ))}
            </nav>

            {activeDropdown && (
              <div className="absolute left-0 top-full right-0 z-50 mt-3 px-4">
                <div className="mx-auto w-full max-w-5xl overflow-hidden rounded-3xl border border-slate-200 bg-white p-4 shadow-2xl">
                  <div className="grid gap-2 sm:grid-cols-2">
                    {CATEGORY_MENU.find((menu) => menu.id === activeDropdown)?.items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="rounded-2xl px-3 py-3 text-sm text-slate-700 transition hover:bg-slate-50 hover:text-primary"
                        onClick={() => setActiveDropdown(null)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}

            <div className="flex items-center gap-2">
              <button
                onClick={() => setSearchOpen((current) => !current)}
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50"
                aria-label="فتح البحث"
              >
                <Search size={16} />
                <span>بحث</span>
              </button>
              <Link
                href="/contact"
                className="hidden xl:inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-600 to-cyan-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition hover:brightness-110"
              >
                <PhoneCall size={16} />
                تواصل الآن
              </Link>
            </div>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setSearchOpen((current) => !current)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:bg-slate-50"
              aria-label="بحث"
            >
              <Search size={20} />
            </button>
            <button
              onClick={() => setDrawerOpen(true)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:bg-slate-50"
              aria-label="فتح القائمة"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>

        {searchOpen && (
          <div className="border-t border-slate-200 bg-slate-50/95 py-4 px-4 lg:hidden">
            <div className="flex items-center gap-3 rounded-3xl border border-slate-200 bg-white p-3 shadow-sm">
              <SearchComponent />
              <button
                onClick={() => setSearchOpen(false)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-100 text-slate-600 transition hover:bg-slate-200"
                aria-label="إغلاق البحث"
              >
                <X size={20} />
              </button>
            </div>
          </div>
        )}
      </header>

      {drawerOpen && !searchOpen && (
        <>
          <div className="drawer-backdrop" onClick={() => setDrawerOpen(false)} aria-hidden="true" />
          <aside className="drawer-panel" role="dialog" aria-modal="true" aria-label="قائمة التنقل">
            <div className="flex items-center justify-between gap-3 border-b border-slate-200 p-4">
              <div>
                <p className="text-base font-black text-slate-900">ستلايت الرجاء</p>
                <p className="text-sm text-slate-500">قائمة سريعة ومتنقلة</p>
              </div>
              <button
                type="button"
                className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 text-slate-600 transition hover:bg-slate-100"
                onClick={() => setDrawerOpen(false)}
                aria-label="إغلاق القائمة"
              >
                <X size={24} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
              <div className="space-y-3">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`flex items-center gap-3 rounded-3xl border px-4 py-3 text-base font-semibold transition ${
                      isActive(link.href) ? "border-emerald-500 bg-emerald-50 text-emerald-700" : "border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50"
                    }`}
                    onClick={closeDrawerDeferred}
                  >
                    <link.icon size={18} className="text-secondary" />
                    <span>{link.label}</span>
                  </Link>
                ))}
              </div>

              <div className="rounded-[2rem] border border-slate-200 bg-gradient-to-br from-slate-950 to-slate-900 px-4 py-4 text-white shadow-xl">
                <p className="text-sm font-semibold text-slate-200">عروض مميزة الآن</p>
                <p className="mt-2 text-sm text-slate-400 leading-relaxed">تابع أفضل باقات كأس العالم IPTV والاشتراكات الفنية في الكويت.</p>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <Link
                    href="/football/world-cup"
                    className="rounded-2xl bg-emerald-500 px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-emerald-400"
                    onClick={closeDrawerDeferred}
                  >
                    العروض الحالية
                  </Link>
                  <a
                    href="https://wa.me/96550266068"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-2xl bg-white px-4 py-3 text-center text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
                    onClick={closeDrawerDeferred}
                  >
                    واتساب مباشر
                  </a>
                </div>
              </div>

              <div className="space-y-3">
                {CATEGORY_MENU.map((menu) => (
                  <div key={menu.id} className="rounded-3xl border border-slate-200 bg-white shadow-sm">
                    <button
                      type="button"
                      className="flex w-full items-center justify-between gap-3 px-4 py-4 text-right font-semibold text-slate-900"
                      onClick={() => toggleMobileSection(menu.id)}
                      aria-expanded={expandedMobile[menu.id]}
                    >
                      <span className="flex items-center gap-3">
                        <menu.icon size={18} className="text-secondary" />
                        {menu.title}
                      </span>
                      <ChevronDown
                        size={18}
                        className={`transition-transform ${expandedMobile[menu.id] ? "rotate-180" : ""}`}
                      />
                    </button>
                    {expandedMobile[menu.id] && (
                      <div className="space-y-2 border-t border-slate-100 px-4 pb-4">
                        {menu.items.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="block rounded-2xl px-4 py-3 text-sm text-slate-700 transition hover:bg-slate-50"
                            onClick={closeDrawerDeferred}
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </>
      )}
    </>
  );
}
