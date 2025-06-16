"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "لوحة التحكم", href: "/admin/dashboard" },
  { label: "التصنيفات", href: "/admin/categories" },
  { label: "المنتجات", href: "/admin/products" },
  { label: "العروض", href: "/admin/offers" },
  { label: "المدونة", href: "/admin/blog" },
];

export default function AdminNavbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow sticky top-15 z-30 border-b">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="text-lg font-bold text-primary">لوحة المشرف</div>
        <button
          className="sm:hidden text-gray-600"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
        <ul
          className={`sm:flex gap-4 text-sm font-bold text-text ${
            open ? "block mt-3" : "hidden sm:flex"
          }`}
          dir="rtl"
        >
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`block py-1 sm:py-0 hover:text-primary transition ${
                  pathname === link.href ? "text-primary" : ""
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
