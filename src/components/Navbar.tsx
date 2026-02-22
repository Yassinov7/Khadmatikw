"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { MonitorSmartphone , Menu, X, Home, Layers, PhoneCall, Blinds, Satellite, Camera, DiscAlbumIcon, Tag, ChevronDown, Search, FileQuestion, ShieldQuestion, Code, PlusSquare, Tv, Trophy } from "lucide-react";
import { usePathname } from "next/navigation";
import { SearchComponent } from "./SearchComponent";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [webDevOpen, setWebDevOpen] = useState(false);
  const [iptvOpen, setIptvOpen] = useState(false);
  const [footballOpen, setFootballOpen] = useState(false);
  
  // Refs for dropdown containers
  const iptvRef = useRef<HTMLLIElement>(null);
  const footballRef = useRef<HTMLLIElement>(null);
  const webDevRef = useRef<HTMLLIElement>(null);
  const servicesRef = useRef<HTMLLIElement>(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (iptvRef.current && !iptvRef.current.contains(event.target as Node)) {
        setIptvOpen(false);
      }
      if (footballRef.current && !footballRef.current.contains(event.target as Node)) {
        setFootballOpen(false);
      }
      if (webDevRef.current && !webDevRef.current.contains(event.target as Node)) {
        setWebDevOpen(false);
      }
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
        setServicesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Hide navbar in admin area (except login page)
  const isAdminArea = pathname.startsWith("/admin") && pathname !== "/admin/login";

  if (isAdminArea) {
    return null; // Don't render navbar in admin area
  }

  // Services dropdown links
  const serviceLinks = [
    { label: "الستلايت", href: "/satellite-service", icon: <Satellite size={16} className="text-secondary" /> },
    { label: "كاميرات", href: "/camera-service", icon: <Camera size={16} className="text-secondary" /> },
    { label: "انتركم", href: "/intercom-service", icon: <DiscAlbumIcon size={16} className="text-secondary" /> },
    { label: "من نحن؟", href: "/who-is-alrajaa", icon: <ShieldQuestion size={16} className="text-secondary" /> },
    { label: "اسئلة شائعة", href: "/faq", icon: <FileQuestion size={16} className="text-secondary" /> },
  ];
  

  // Web development services dropdown links
  const webDevLinks = [
    { label: "تصميم واجهات", href: "/web-design", icon: <MonitorSmartphone size={16} className="text-secondary" /> },
    { label: "تطبيقات ويب", href: "/web-applications", icon: <MonitorSmartphone size={16} className="text-secondary" /> },
    { label: "حلول برمجية", href: "/software-solutions", icon: <MonitorSmartphone size={16} className="text-secondary" /> },
    { label: "صيانة ودعم", href: "/additional-services", icon: <MonitorSmartphone size={16} className="text-secondary" /> },
  ];

  // IPTV subscriptions dropdown links
  const iptvLinks = [
    { label: "اشتراك برلين", href: "/iptv/berlin", icon: <Tv size={16} className="text-secondary" /> },
    { label: "اشتراك سبايدر", href: "/iptv/spider", icon: <Tv size={16} className="text-secondary" /> },
    { label: "رسيفر الجني", href: "/iptv/genie", icon: <Tv size={16} className="text-secondary" /> },
    { label: "فلاش 4K", href: "/iptv/flash-4k", icon: <Tv size={16} className="text-secondary" /> },
  ];

  // Football & leagues pages dropdown links
  const footballLinks = [
    { label: "كأس العالم", href: "/football/world-cup", icon: <Trophy size={16} className="text-secondary" /> },
    { label: "دوري أبطال أوروبا", href: "/football/champions-league", icon: <Trophy size={16} className="text-secondary" /> },
    { label: "أبطال آسيا", href: "/football/afc-champions-league", icon: <Trophy size={16} className="text-secondary" /> },
    { label: "الدوري الإنجليزي", href: "/football/premier-league", icon: <Trophy size={16} className="text-secondary" /> },
    { label: "الدوري الإسباني", href: "/football/la-liga", icon: <Trophy size={16} className="text-secondary" /> },
    { label: "الدوري الإيطالي", href: "/football/serie-a", icon: <Trophy size={16} className="text-secondary" /> },
    { label: "الدوري الألماني", href: "/football/bundesliga", icon: <Trophy size={16} className="text-secondary" /> },
    { label: "الدوري الكويتي", href: "/football/kuwait-league", icon: <Trophy size={16} className="text-secondary" /> },
    { label: "الدوري السعودي", href: "/football/saudi-league", icon: <Trophy size={16} className="text-secondary" /> },
    { label: "الدوري الإماراتي", href: "/football/uae-league", icon: <Trophy size={16} className="text-secondary" /> },
    { label: "الدوري القطري", href: "/football/qatar-league", icon: <Trophy size={16} className="text-secondary" /> },
  ];

  return (
    <nav className="w-full bg-background shadow-sm sticky top-0 z-[100] border-b border-gray-100" role="navigation" aria-label="Main navigation">
      <div className="container mx-auto flex items-center justify-between py-3 px-4 max-w-full">
        {/* الشعار */}
        <Link href="/" className="flex items-center gap-3 flex-shrink-0" aria-label="الانتقال للرئيسية">
          <Image
            src="/logo.png"
            alt="شعار ستلايت الرجاء"
            width={45}
            height={45}
            className="rounded-lg border border-primary shadow"
            priority
          />
          {/* Text logo hidden on mobile when search is open */}
          <span className={`text-2xl font-extrabold text-primary tracking-wide ${searchOpen ? 'md:inline hidden' : ''}`} style={{ letterSpacing: "1px" }}>
            ستلايت<span className="text-secondary"> الرجاء </span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-2 flex-1 min-w-0">
          {/* Search component for desktop */}
          <div className="flex-1 max-w-md mx-4 min-w-0">
            {searchOpen ? (
              <div className="flex items-center">
                <SearchComponent />
                <button
                  onClick={() => setSearchOpen(false)}
                  className="ml-2 p-2 text-gray-500 hover:text-gray-700"
                  aria-label="إغلاق البحث"
                >
                  <X size={20} />
                </button>
              </div>
            ) : (
              <button
                onClick={() => setSearchOpen(true)}
                className="flex items-center gap-2 w-full px-4 py-2 border border-gray-300 rounded-full text-gray-500 hover:text-gray-700 hover:border-gray-400 transition"
                aria-label="فتح البحث"
              >
                <Search size={16} />
                <span className="text-sm">بحث...</span>
              </button>
            )}
          </div>

          {/* Navigation Links (hidden when search is open) */}
          {!searchOpen && (
            <ul className="flex gap-0.5 items-center text-sm font-semibold flex-wrap">
              <li>
                <Link
                  href="/"
                  className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg hover:bg-primary/10 transition-colors text-primary hover:text-secondary"
                >
                  <Home size={16} className="lg:mr-1.5 text-secondary hidden lg:inline" />
                  <span>الرئيسية</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg hover:bg-primary/10 transition-colors text-primary hover:text-secondary"
                >
                  <Layers size={16} className="lg:mr-1.5 text-secondary hidden lg:inline" />
                  <span>الخدمات</span>
                </Link>
              </li>
              
              <li>
                <Link
                  href="/offers"
                  className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg hover:bg-primary/10 transition-colors text-primary hover:text-secondary"
                >
                  <Tag size={16} className="lg:mr-1.5 text-secondary hidden lg:inline" />
                  <span>العروض</span>
                </Link>
              </li>
              <li className="relative" ref={iptvRef}>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setIptvOpen(!iptvOpen);
                    setFootballOpen(false);
                    setWebDevOpen(false);
                    setServicesOpen(false);
                  }}
                  className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg hover:bg-primary/10 transition-colors text-primary hover:text-secondary relative z-[100]"
                  aria-haspopup="true"
                  aria-expanded={iptvOpen}
                >
                  <Tv size={16} className="lg:mr-1.5 text-secondary hidden lg:inline" />
                  <span>IPTV</span>
                  <ChevronDown size={14} className={`transition-transform ${iptvOpen ? 'rotate-180' : ''}`} />
                </button>

                {/* IPTV subscriptions dropdown */}
                {iptvOpen && (
                  <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-2xl border border-gray-200 z-[9999]">
                    <div className="py-2">
                      {iptvLinks.map((service) => (
                        <Link
                          key={service.href}
                          href={service.href}
                          className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-primary/10 hover:text-primary transition-colors"
                          onClick={() => setIptvOpen(false)}
                        >
                          {service.icon}
                          <span>{service.label}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </li>

              {/* Football leagues dropdown */}
              <li className="relative" ref={footballRef}>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setFootballOpen(!footballOpen);
                    setIptvOpen(false);
                    setWebDevOpen(false);
                    setServicesOpen(false);
                  }}
                  className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg hover:bg-primary/10 transition-colors text-primary hover:text-secondary relative z-[100]"
                  aria-haspopup="true"
                  aria-expanded={footballOpen}
                >
                  <Trophy size={16} className="lg:mr-1.5 text-secondary hidden lg:inline" />
                  <span>كرة القدم</span>
                  <ChevronDown size={14} className={`transition-transform ${footballOpen ? 'rotate-180' : ''}`} />
                </button>

                {footballOpen && (
                  <div className="absolute right-0 mt-2 w-64 bg-white rounded-xl shadow-2xl border border-gray-200 z-[9999] max-h-[70vh] overflow-y-auto">
                    <div className="py-2">
                      {footballLinks.map((league) => (
                        <Link
                          key={league.href}
                          href={league.href}
                          className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-primary/10 hover:text-primary transition-colors"
                          onClick={() => setFootballOpen(false)}
                        >
                          {league.icon}
                          <span>{league.label}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </li>
              <li className="relative" ref={webDevRef}>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setWebDevOpen(!webDevOpen);
                    setIptvOpen(false);
                    setFootballOpen(false);
                    setServicesOpen(false);
                  }}
                  className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg hover:bg-primary/10 transition-colors text-primary hover:text-secondary relative z-[100]"
                  aria-haspopup="true"
                  aria-expanded={webDevOpen}
                >
                  <Code size={16} className="lg:mr-1.5 text-secondary hidden lg:inline" />
                  <span>برمجية</span>
                  <ChevronDown size={14} className={`transition-transform ${webDevOpen ? 'rotate-180' : ''}`} />
                </button>

                {/* Web Development Services dropdown */}
                {webDevOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-2xl border border-gray-200 z-[9999]">
                    <div className="py-2">
                      {webDevLinks.map((service) => (
                        <Link
                          key={service.href}
                          href={service.href}
                          className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-primary/10 hover:text-primary transition-colors"
                          onClick={() => setWebDevOpen(false)}
                        >
                          {service.icon}
                          <span>{service.label}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </li>
              <li className="relative" ref={servicesRef}>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setServicesOpen(!servicesOpen);
                    setIptvOpen(false);
                    setFootballOpen(false);
                    setWebDevOpen(false);
                  }}
                  className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg hover:bg-primary/10 transition-colors text-primary hover:text-secondary relative z-[100]"
                  aria-haspopup="true"
                  aria-expanded={servicesOpen}
                >
                  <PlusSquare size={16} className="lg:mr-1.5 text-secondary hidden lg:inline" />
                  <span>المزيد</span>
                  <ChevronDown size={14} className={`transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                </button>

                {/* Services dropdown */}
                {servicesOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-2xl border border-gray-200 z-[9999]">
                    <div className="py-2">
                      {serviceLinks.map((service) => (
                        <Link
                          key={service.href}
                          href={service.href}
                          className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-primary/10 hover:text-primary transition-colors"
                          onClick={() => setServicesOpen(false)}
                        >
                          {service.icon}
                          <span>{service.label}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </li>
              <li>
                <Link
                  href="/blog"
                  className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg hover:bg-primary/10 transition-colors text-primary hover:text-secondary"
                >
                  <Blinds size={16} className="lg:mr-1.5 text-secondary hidden lg:inline" />
                  <span>المدونة</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg hover:bg-primary/10 transition-colors text-primary hover:text-secondary"
                >
                  <PhoneCall size={16} className="lg:mr-1.5 text-secondary hidden lg:inline" />
                  <span>تواصل</span>
                </Link>
              </li>
            </ul>
          )}
        </div>

        {/* Mobile Controls */}
        <div className="flex items-center gap-3 md:hidden">
          {/* Mobile Search */}
          {searchOpen ? (
            <div className="flex items-center absolute right-16 md:relative md:left-auto md:right-auto">
              <SearchComponent />
              <button
                onClick={() => setSearchOpen(false)}
                className="mr-2 p-2 text-gray-500 hover:text-gray-700"
                aria-label="إغلاق البحث"
              >
                <X size={20} />
              </button>
            </div>
          ) : (
            <button
              onClick={() => setSearchOpen(true)}
              className="p-2 text-gray-500 hover:text-gray-700"
              aria-label="فتح البحث"
            >
              <Search size={20} />
            </button>
          )}

          {/* Mobile Menu Button (hidden when search is open) */}
          {!searchOpen && (
            <button
              className="p-2 rounded hover:bg-gray-100"
              onClick={() => setOpen(true)}
              aria-label="افتح القائمة"
            >
              <Menu size={28} className="text-primary" />
            </button>
          )}
        </div>
      </div>

      {/* Mobile Menu - Sidebar from left */}
      {open && !searchOpen && (
        <div className="fixed inset-0 z-[99] flex justify-start md:hidden transition">
          {/* Sidebar - first in DOM, slides from left */}
          <div
            className="relative z-[100] w-72 min-w-[280px] bg-background h-full shadow-2xl flex flex-col p-6 gap-3 animate-in fade-in slide-in-from-left overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-xl font-bold text-primary">
                ستلايت<span className="text-secondary"> الرجاء </span>
              </span>
              <button
                className="p-1"
                onClick={() => setOpen(false)}
                aria-label="إغلاق القائمة"
              >
                <X size={32} className="text-primary" />
              </button>
            </div>

            <Link
              href="/"
              className="flex items-center gap-2 px-4 py-3 rounded-lg text-lg font-bold text-primary hover:bg-primary/10 transition [touch-action:manipulation] active:bg-primary/20"
              onClick={() => { setOpen(false); }}
            >
              <Home size={20} className="md:mr-2 text-secondary" />
              <span>الرئيسية</span>
            </Link>
            <Link
              href="/products"
              className="flex items-center gap-2 px-4 py-3 rounded-lg text-lg font-bold text-primary hover:bg-primary/10 transition [touch-action:manipulation] active:bg-primary/20"
              onClick={() => { setOpen(false); }}
            >
              <Layers size={20} className="md:mr-2 text-secondary" />
              <span>الخدمات</span>
            </Link>
            
            <Link
              href="/offers"
              className="flex items-center gap-2 px-4 py-3 rounded-lg text-lg font-bold text-primary hover:bg-primary/10 transition [touch-action:manipulation] active:bg-primary/20"
              onClick={() => { setOpen(false); }}
            >
              <Tag size={20} className="md:mr-2 text-secondary" />
              <span>العروض</span>
            </Link>

            {/* Football leagues (mobile) */}
            <button
              onClick={() => setFootballOpen(!footballOpen)}
              className="flex items-center justify-between w-full px-4 py-3 rounded-lg text-lg font-bold text-primary hover:bg-primary/10 transition"
            >
              <Trophy size={20} className="md:mr-2 text-secondary" />
              <span>كرة القدم</span>
              <ChevronDown size={20} className={`transition-transform ${footballOpen ? 'rotate-180' : ''}`} />
            </button>

            {footballOpen && (
              <div className="mt-2 mr-4 space-y-2">
                {footballLinks.map((league) => (
                  <Link
                    key={league.href}
                    href={league.href}
                    className="flex items-center gap-2 px-4 py-2.5 text-sm text-gray-700 hover:bg-primary/10 hover:text-primary rounded-lg transition min-h-[44px] [touch-action:manipulation] active:bg-primary/20"
                    onClick={() => {
                      setOpen(false);
                      setFootballOpen(false);
                    }}
                  >
                    {league.icon}
                    <span>{league.label}</span>
                  </Link>
                ))}
              </div>
            )}
            <button
              onClick={() => setIptvOpen(!iptvOpen)}
              className="flex items-center justify-between w-full px-4 py-3 rounded-lg text-lg font-bold text-primary hover:bg-primary/10 transition"
            >
              <Tv size={20} className="md:mr-2 text-secondary" />
              <span>اشتراكات IPTV</span>
              <ChevronDown size={20} className={`transition-transform ${iptvOpen ? 'rotate-180' : ''}`} />
            </button>

            {iptvOpen && (
              <div className="mt-2 mr-4 space-y-2">
                {iptvLinks.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="flex items-center gap-2 px-4 py-2.5 text-sm text-gray-700 hover:bg-primary/10 hover:text-primary rounded-lg transition min-h-[44px] [touch-action:manipulation] active:bg-primary/20"
                    onClick={() => {
                      setOpen(false);
                      setIptvOpen(false);
                    }}
                  >
                    {service.icon}
                    <span>{service.label}</span>
                  </Link>
                ))}
              </div>
            )}
            <button
              onClick={() => setWebDevOpen(!webDevOpen)}
              className="flex items-center justify-between w-full px-4 py-3 rounded-lg text-lg font-bold text-primary hover:bg-primary/10 transition"
            >                  
              <Code size={20} className="md:mr-2 text-secondary" />
              <span>خدمات برمجية</span>
              <ChevronDown size={20} className={`transition-transform ${webDevOpen ? 'rotate-180' : ''}`} />
            </button>

            {webDevOpen && (
              <div className="mt-2 mr-4 space-y-2">
                {webDevLinks.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="flex items-center gap-2 px-4 py-2.5 text-sm text-gray-700 hover:bg-primary/10 hover:text-primary rounded-lg transition min-h-[44px] [touch-action:manipulation] active:bg-primary/20"
                    onClick={() => {
                      setOpen(false);
                      setWebDevOpen(false);
                    }}
                  >
                    {service.icon}
                    <span>{service.label}</span>
                  </Link>
                ))}
              </div>
            )}
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="flex items-center justify-between w-full px-4 py-3 rounded-lg text-lg font-bold text-primary hover:bg-primary/10 transition"
            >
              <PlusSquare size={20} className="md:mr-2 text-secondary" />
              <span>خدمات أخرى</span>
              <ChevronDown size={20} className={`transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
            </button>

            {servicesOpen && (
              <div className="mt-2 mr-4 space-y-2">
                {serviceLinks.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="flex items-center gap-2 px-4 py-2.5 text-sm text-gray-700 hover:bg-primary/10 hover:text-primary rounded-lg transition min-h-[44px] [touch-action:manipulation] active:bg-primary/20"
                    onClick={() => {
                      setOpen(false);
                      setServicesOpen(false);
                    }}
                  >
                    {service.icon}
                    <span>{service.label}</span>
                  </Link>
                ))}
              </div>
            )}
            <Link
              href="/blog"
              className="flex items-center gap-2 px-4 py-3 rounded-lg text-lg font-bold text-primary hover:bg-primary/10 transition [touch-action:manipulation] active:bg-primary/20"
              onClick={() => setOpen(false)}
            >
              <Blinds size={20} className="md:mr-2 text-secondary" />
              <span>المدونة</span>
            </Link>
            <Link
              href="/contact"
              className="flex items-center gap-2 px-4 py-3 rounded-lg text-lg font-bold text-primary hover:bg-primary/10 transition [touch-action:manipulation] active:bg-primary/20"
              onClick={() => setOpen(false)}
            >
              <PhoneCall size={20} className="md:mr-2 text-secondary" />
              <span>تواصل معنا</span>
            </Link>
          </div>
          {/* Overlay - behind sidebar (z-0), closes on tap when clicking dark area */}
          <div
            className="absolute inset-0 bg-black/40 z-0"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />
        </div>
      )}
    </nav>
  );
}