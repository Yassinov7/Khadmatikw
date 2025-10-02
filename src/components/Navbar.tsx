"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, Home, Layers, PhoneCall, Blinds, Satellite, Camera, DiscAlbumIcon, Tag, ChevronDown, Search, FileQuestion, ShieldQuestion } from "lucide-react";
import { usePathname } from "next/navigation";
import { SearchComponent } from "./SearchComponent";

export function Navbar() {
  const pathname = usePathname();

  // Hide navbar in admin area (except login page)
  const isAdminArea = pathname.startsWith("/admin") && pathname !== "/admin/login";

  if (isAdminArea) {
    return null; // Don't render navbar in admin area
  }

  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  // Services dropdown links
  const serviceLinks = [
    { label: "الستلايت", href: "/satellite-service", icon: <Satellite size={16} className="text-secondary" /> },
    { label: "كاميرات", href: "/camera-service", icon: <Camera size={16} className="text-secondary" /> },
    { label: "انتركم", href: "/intercom-service", icon: <DiscAlbumIcon size={16} className="text-secondary" /> },
    { label: "من نحن؟", href: "/who-is-alrajaa", icon: <ShieldQuestion size={16} className="text-secondary" /> },
    { label: "اسئلة شائعة", href: "/faq", icon: <FileQuestion size={16} className="text-secondary" /> },
  ];

  return (
    <nav className="w-full bg-background shadow-sm sticky top-0 z-50 border-b border-gray-100" role="navigation" aria-label="Main navigation">
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
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
          <span className="text-2xl font-extrabold text-primary tracking-wide hidden sm:block" style={{ letterSpacing: "1px" }}>
            ستلايت<span className="text-secondary"> الرجاء </span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-2 flex-1">
          {/* Search component for desktop */}
          <div className="flex-1 max-w-md mx-6">
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
            <ul className="flex gap-1 items-center text-base font-bold">
              <li>
                <Link
                  href="/"
                  className="flex items-center gap-1 px-4 py-2 rounded-lg hover:bg-primary/10 transition-colors text-primary hover:text-secondary"
                >
                  <Home size={20} className="md:mr-2 text-secondary" />
                  <span>الرئيسية</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="flex items-center gap-1 px-4 py-2 rounded-lg hover:bg-primary/10 transition-colors text-primary hover:text-secondary"
                >
                  <Layers size={20} className="md:mr-2 text-secondary" />
                  <span>الخدمات</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/offers"
                  className="flex items-center gap-1 px-4 py-2 rounded-lg hover:bg-primary/10 transition-colors text-primary hover:text-secondary"
                >
                  <Tag size={20} className="md:mr-2 text-secondary" />
                  <span>العروض</span>
                </Link>
              </li>
              <li className="relative">
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="flex items-center gap-1 px-4 py-2 rounded-lg hover:bg-primary/10 transition-colors text-primary hover:text-secondary"
                  aria-haspopup="true"
                  aria-expanded={servicesOpen}
                >
                  <span>خدمات أخرى</span>
                  <ChevronDown size={16} className={`transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                </button>

                {/* Services dropdown */}
                {servicesOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-100 z-50">
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
                  className="flex items-center gap-1 px-4 py-2 rounded-lg hover:bg-primary/10 transition-colors text-primary hover:text-secondary"
                >
                  <Blinds size={20} className="md:mr-2 text-secondary" />
                  <span>المدونة</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="flex items-center gap-1 px-4 py-2 rounded-lg hover:bg-primary/10 transition-colors text-primary hover:text-secondary"
                >
                  <PhoneCall size={20} className="md:mr-2 text-secondary" />
                  <span>تواصل معنا</span>
                </Link>
              </li>
            </ul>
          )}
        </div>

        {/* Mobile Controls */}
        <div className="flex items-center gap-3 md:hidden">
          {/* Mobile Search */}
          {searchOpen ? (
            <div className="flex items-center absolute left-16 right-16 md:relative md:left-auto md:right-auto">
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

      {/* Mobile Menu */}
      {open && !searchOpen && (
        <div className="fixed inset-0 z-[99] bg-black/40 flex justify-end md:hidden transition">
          <div className="w-64 bg-background h-full shadow-lg flex flex-col p-6 gap-3 animate-in fade-in slide-in-from-right">
            <button
              className="self-end mb-4 p-1"
              onClick={() => setOpen(false)}
              aria-label="إغلاق القائمة"
            >
              <X size={32} className="text-primary" />
            </button>

            <Link
              href="/"
              className="flex items-center gap-2 px-4 py-3 rounded-lg text-lg font-bold text-primary hover:bg-primary/10 transition"
              onClick={() => setOpen(false)}
            >
              <Home size={20} className="md:mr-2 text-secondary" />
              <span>الرئيسية</span>
            </Link>
            <Link
              href="/products"
              className="flex items-center gap-2 px-4 py-3 rounded-lg text-lg font-bold text-primary hover:bg-primary/10 transition"
              onClick={() => setOpen(false)}
            >
              <Layers size={20} className="md:mr-2 text-secondary" />
              <span>الخدمات</span>
            </Link>
            <Link
              href="/offers"
              className="flex items-center gap-2 px-4 py-3 rounded-lg text-lg font-bold text-primary hover:bg-primary/10 transition"
              onClick={() => setOpen(false)}
            >
              <Tag size={20} className="md:mr-2 text-secondary" />
              <span>العروض</span>
            </Link>
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="flex items-center justify-between w-full px-4 py-3 rounded-lg text-lg font-bold text-primary hover:bg-primary/10 transition"
            >
              <span>خدمات أخرى</span>
              <ChevronDown size={20} className={`transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
            </button>

            {servicesOpen && (
              <div className="mt-2 mr-4 space-y-2">
                {serviceLinks.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-primary/10 hover:text-primary rounded-lg transition"
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
              className="flex items-center gap-2 px-4 py-3 rounded-lg text-lg font-bold text-primary hover:bg-primary/10 transition"
              onClick={() => setOpen(false)}
            >
              <Blinds size={20} className="md:mr-2 text-secondary" />
              <span>المدونة</span>
            </Link>
            <Link
              href="/contact"
              className="flex items-center gap-2 px-4 py-3 rounded-lg text-lg font-bold text-primary hover:bg-primary/10 transition"
              onClick={() => setOpen(false)}
            >
              <PhoneCall size={20} className="md:mr-2 text-secondary" />
              <span>تواصل معنا</span>
            </Link>
          </div>
          {/* Close drawer when clicking outside */}
          <div className="flex-1" onClick={() => setOpen(false)} />
        </div>
      )}
    </nav>
  );
}