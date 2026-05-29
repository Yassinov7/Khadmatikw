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

type DropdownType = "football" | "iptv" | "webDev" | "services";

type MenuItem = {
  label: string;
  href: string;
};

type CategoryMenuItem = {
  id: DropdownType;
  title: string;
  icon: typeof Trophy;
  items: MenuItem[];
};

const NAV_LINKS = [
  { label: "الرئيسية", href: "/", icon: Home },
  { label: "الخدمات", href: "/products", icon: Layers },
  { label: "العروض", href: "/offers", icon: Tag },
  { label: "المدونة", href: "/blog", icon: Blinds },
  { label: "تواصل", href: "/contact", icon: PhoneCall },
];

const FOOTBALL_LINKS: MenuItem[] = [
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

const IPTV_LINKS: MenuItem[] = [
  { label: "اشتراك برلين", href: "/iptv/berlin" },
  { label: "اشتراك سبايدر", href: "/iptv/spider" },
  { label: "رسيفر الجني", href: "/iptv/genie" },
  { label: "فلاش 4K", href: "/iptv/flash-4k" },
];

const DEV_LINKS: MenuItem[] = [
  { label: "تصميم واجهات", href: "/web-design" },
  { label: "تطبيقات ويب", href: "/web-applications" },
  { label: "حلول برمجية", href: "/software-solutions" },
  { label: "صيانة ودعم", href: "/additional-services" },
];

const SERVICE_LINKS: MenuItem[] = [
  { label: "الستلايت", href: "/satellite-service" },
  { label: "الكاميرات", href: "/camera-service" },
  { label: "الانتركم", href: "/intercom-service" },
  { label: "من نحن؟", href: "/who-is-alrajaa" },
  { label: "الأسئلة الشائعة", href: "/faq" },
];

const CATEGORY_MENU: CategoryMenuItem[] = [
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

  const [activeDropdown, setActiveDropdown] =
    useState<DropdownType | null>(null);

  const [expandedMobile, setExpandedMobile] = useState<
    Record<DropdownType, boolean>
  >({
    football: false,
    iptv: false,
    webDev: false,
    services: false,
  });

  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

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
      if (
        navRef.current &&
        !navRef.current.contains(event.target as Node)
      ) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () =>
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
  }, []);

  const isActive = (href: string) =>
    pathname === href ||
    (href !== "/" && pathname.startsWith(href));

  const closeDrawerDeferred = () =>
    window.setTimeout(() => setDrawerOpen(false), 0);

  const toggleDropdown = (key: DropdownType) => {
    setActiveDropdown((current) =>
      current === key ? null : key
    );
  };

  const toggleMobileSection = (key: DropdownType) => {
    setExpandedMobile((current) => ({
      ...current,
      [key]: !current[key],
    }));
  };

  const isAdminArea =
    pathname.startsWith("/admin") &&
    pathname !== "/admin/login";

  if (isAdminArea) return null;

  return (
    <>
      <header
        className={`w-full z-30 transition duration-300 ${
          scrolled
            ? "backdrop-blur bg-white/90 shadow-sm border-b border-slate-200"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between gap-3 px-4 py-4">
          <Link
            href="/"
            className="group flex items-center gap-3"
          >
            <div className="relative flex h-12 w-12 items-center justify-center rounded-3xl border border-slate-200 bg-gradient-to-br from-emerald-600 to-cyan-500 text-white shadow-lg shadow-cyan-500/10 transition-transform duration-300 group-hover:-translate-y-0.5">
              <Image
                src="/logo.png"
                alt="شعار ستلايت الرجاء"
                width={38}
                height={38}
                className="rounded-2xl"
                priority
              />
            </div>

            <div className="hidden sm:flex flex-col leading-tight">
              <span className="text-base font-black text-slate-900">
                ستلايت الرجاء
              </span>

              <span className="text-xs text-slate-500">
                خدمات تقنية وفنية متكاملة
              </span>
            </div>
          </Link>

          <div className="relative hidden lg:flex flex-1 items-center justify-between gap-4">
            <nav
              ref={navRef}
              className="flex items-center gap-2 overflow-x-auto overflow-y-visible pb-1"
            >
              {NAV_LINKS.slice(0, 3).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`nav-pill ${
                    isActive(link.href)
                      ? "nav-pill-active"
                      : "nav-pill-inactive"
                  }`}
                >
                  <link.icon
                    size={16}
                    className="text-secondary"
                  />
                  <span>{link.label}</span>
                </Link>
              ))}

              {CATEGORY_MENU.map((menu) => (
                <button
                  key={menu.id}
                  type="button"
                  className={`nav-pill ${
                    activeDropdown === menu.id
                      ? "nav-pill-active"
                      : "nav-pill-inactive"
                  }`}
                  onClick={(event) => {
                    event.stopPropagation();
                    toggleDropdown(menu.id);
                  }}
                  aria-expanded={
                    activeDropdown === menu.id
                  }
                >
                  <menu.icon
                    size={16}
                    className="text-secondary"
                  />

                  <span>{menu.title}</span>

                  <ChevronDown
                    size={14}
                    className={`text-slate-500 transition-transform ${
                      activeDropdown === menu.id
                        ? "rotate-180"
                        : ""
                    }`}
                  />
                </button>
              ))}
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}