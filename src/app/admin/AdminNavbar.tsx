"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, Home, Tag, Package, TrendingUp, FileText, LogOut, Globe } from "lucide-react";
import { supabase } from "@/lib/supabase";

const links = [
  { label: "لوحة التحكم", href: "/admin/dashboard", icon: <Home className="w-5 h-5" /> },
  { label: "التصنيفات", href: "/admin/categories", icon: <Tag className="w-5 h-5" /> },
  { label: "المنتجات", href: "/admin/products", icon: <Package className="w-5 h-5" /> },
  { label: "العروض", href: "/admin/offers", icon: <TrendingUp className="w-5 h-5" /> },
  { label: "المدونة", href: "/admin/blog", icon: <FileText className="w-5 h-5" /> },
];

export default function AdminNavbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Hide admin navbar on login page
  if (pathname === "/admin/login") {
    return null;
  }

  const handleLogout = async () => {
    await supabase.auth.signOut();
    window.location.href = "/admin/login";
  };

  return (
    <nav className="bg-white shadow sticky top-0 z-30 border-b">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/admin/dashboard" className="text-lg font-bold text-primary flex items-center">
            <span>لوحة المشرف</span>
          </Link>
        </div>

        <div className="hidden md:flex items-center space-x-1 space-x-reverse">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`flex items-center px-3 py-2 rounded-lg text-sm font-medium transition ${pathname === link.href
                ? "bg-primary/10 text-primary"
                : "text-gray-600 hover:bg-gray-100"
                }`}
            >
              <span className="mr-2">{link.icon}</span>
              {link.label}
            </Link>
          ))}
          <Link
            href="/"
            target="_blank"
            className="flex items-center px-3 py-2 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-100 transition mr-2"
          >
            <Globe className="w-5 h-5 ml-2" />
            عرض الموقع
          </Link>
          <button
            onClick={handleLogout}
            className="flex items-center px-3 py-2 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-100 transition mr-2"
          >
            <LogOut className="w-5 h-5 ml-2" />
            تسجيل الخروج
          </button>
        </div>

        <button
          className="md:hidden text-gray-600"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden bg-white shadow-lg ${open ? "block" : "hidden"}`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`flex items-center px-3 py-2 rounded-md text-base font-medium ${pathname === link.href
                ? "bg-primary/10 text-primary"
                : "text-gray-600 hover:bg-gray-100"
                }`}
              onClick={() => setOpen(false)}
            >
              <span className="ml-3">{link.icon}</span>
              {link.label}
            </Link>
          ))}
          <Link
            href="/"
            target="_blank"
            className="flex items-center w-full px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:bg-gray-100"
            onClick={() => setOpen(false)}
          >
            <Globe className="w-5 h-5 ml-3" />
            عرض الموقع
          </Link>
          <button
            onClick={() => {
              handleLogout();
              setOpen(false);
            }}
            className="flex items-center w-full px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:bg-gray-100"
          >
            <LogOut className="w-5 h-5 ml-3" />
            تسجيل الخروج
          </button>
        </div>
      </div>
    </nav>
  );
}