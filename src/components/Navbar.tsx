"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "الرئيسية", href: "/" },
  { label: "كل الخدمات", href: "/products" },
  { label: "العروض", href: "/offers" },
  { label: "تواصل معنا", href: "/contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="w-full bg-white shadow-sm sticky top-0 z-50 border-b border-gray-100"
      style={{ background: "var(--background)" }}
    >
      <div className="container mx-auto flex items-center justify-between py-2 px-4">
        <Link href="/" className="flex items-center gap-2">
          <img src="/logo.png" alt="شعار خدماتي KW" className="w-10 h-10 rounded" />
          <span className="text-xl font-bold" style={{ color: "var(--primary)" }}>
            خدماتي KW
          </span>
        </Link>
        {/* الروابط في الديسكتوب */}
        <ul className="hidden md:flex gap-2 items-center text-base font-bold">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="px-4 py-2 rounded-lg hover:bg-[color:var(--primary)]/10 transition"
                style={{ color: "var(--primary)" }}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        {/* زر القائمة في الجوال */}
        <button
          className="md:hidden p-2 rounded hover:bg-gray-100"
          onClick={() => setOpen(true)}
          aria-label="افتح القائمة"
        >
          <Menu size={28} style={{ color: "var(--primary)" }} />
        </button>
      </div>
      {/* القائمة الجانبية في الجوال */}
      {open && (
        <div className="fixed inset-0 z-50 bg-black/40 flex justify-end md:hidden">
          <div className="w-64 bg-white h-full shadow-lg flex flex-col p-6 gap-4">
            <button
              className="self-end mb-4 p-1"
              onClick={() => setOpen(false)}
              aria-label="إغلاق القائمة"
            >
              <X size={32} style={{ color: "var(--primary)" }} />
            </button>
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-4 py-3 rounded-lg text-lg font-bold hover:bg-[color:var(--primary)]/10 transition"
                style={{ color: "var(--primary)" }}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
          {/* أغلق drawer عند الضغط خارجها */}
          <div className="flex-1" onClick={() => setOpen(false)} />
        </div>
      )}
    </nav>
  );
}
