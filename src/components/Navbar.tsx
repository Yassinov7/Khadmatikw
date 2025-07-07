"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, Home, Layers, PhoneCall, Blinds } from "lucide-react";

const links = [
  { label: "الرئيسية", href: "/", icon: <Home size={20} className="md:mr-2 text-secondary" /> },
  { label: "الخدمات", href: "/products", icon: <Layers size={20} className="md:mr-2 text-secondary" /> },
  { label: "المدونة", href: "/blog", icon: <Blinds size={20} className="md:mr-2 text-secondary" /> },
  { label: "تواصل معنا", href: "/contact", icon: <PhoneCall size={20} className="md:mr-2 text-secondary" /> },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-background shadow-sm sticky top-0 z-50 border-b border-gray-100" role="navigation" aria-label="Main navigation">
      <div className="container mx-auto flex items-center justify-between py-2 px-4">
        {/* الشعار */}
        <Link href="/" className="flex items-center gap-2" aria-label="الانتقال للرئيسية">
          <Image
            src="/logo.png"
            alt="شعار ستلايت الرجاء"
            width={40}
            height={40}
            className="rounded border border-primary shadow"
            priority
          />
          <span className="text-xl font-extrabold text-primary tracking-wide " style={{ letterSpacing: "2px" }}>
          ستلايت<span className="text-secondary">الرجاء</span>
          </span>
        </Link>

        {/* روابط الديسكتوب */}
        <ul className="hidden md:flex gap-2 items-center text-base font-bold">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="flex items-center gap-1 px-2 py-2 rounded-lg hover:bg-primary/10 transition-colors text-primary hover:text-secondary"
              >
                {link.icon}
                <span>{link.label}</span>
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
          <Menu size={28} className="text-primary" />
        </button>
      </div>

      {/* القائمة الجانبية في الجوال */}
      {open && (
        <div className="fixed inset-0 z-[99] bg-black/40 flex justify-end md:hidden transition">
          <div className="w-64 bg-background h-full shadow-lg flex flex-col p-6 gap-3 animate-in fade-in slide-in-from-right">
            <button
              className="self-end mb-4 p-1"
              onClick={() => setOpen(false)}
              aria-label="إغلاق القائمة"
            >
              <X size={32} className="text-primary" />
            </button>
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center gap-2 px-4 py-3 rounded-lg text-lg font-bold text-primary hover:bg-primary/10 transition"
                tabIndex={0}
                onClick={() => setOpen(false)}
              >
                {link.icon}
                <span>{link.label}</span>
              </Link>
            ))}
          </div>
          {/* إغلاق drawer عند الضغط خارجها */}
          <div className="flex-1" onClick={() => setOpen(false)} />
        </div>
      )}
    </nav>
  );
}
