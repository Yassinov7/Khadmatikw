"use client"
import { useEffect, useState } from "react";
import { MapPin, CodeXmlIcon, ArrowUp, Home, Layers, PhoneCall, Blinds, Satellite, Camera, DiscAlbumIcon, Tag, FileQuestion, ShieldQuestion, Mail, Clock, Instagram, MessageCircle } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export function Footer() {
  const pathname = usePathname();
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScroll(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  // Hide footer in admin area (except login page)
  const isAdminArea = pathname.startsWith("/admin") && pathname !== "/admin/login";

  if (isAdminArea) {
    return null; // Don't render footer in admin area
  }

  // Main navigation links
  const mainLinks = [
    { label: "الرئيسية", href: "/", icon: <Home size={16} /> },
    { label: "الخدمات", href: "/products", icon: <Layers size={16} /> },
    { label: "العروض", href: "/offers", icon: <Tag size={16} /> },
    { label: "المدونة", href: "/blog", icon: <Blinds size={16} /> },
    { label: "تواصل معنا", href: "/contact", icon: <PhoneCall size={16} /> },
  ];

  // Service links
  const serviceLinks = [
    { label: "فني ستلايت", href: "/satellite-service", icon: <Satellite size={16} /> },
    { label: "فني كاميرات", href: "/camera-service", icon: <Camera size={16} /> },
    { label: "فني انتركم", href: "/intercom-service", icon: <DiscAlbumIcon size={16} /> },
    { label: "من نحن؟", href: "/who-is-alrajaa", icon: <ShieldQuestion size={16} /> },
    { label: "اسئلة شائعة", href: "/faq", icon: <FileQuestion size={16} /> },
  ];

  // Contact information
  const contactInfo = [
    { icon: <PhoneCall size={16} />, text: "96550266068" },
    { icon: <Mail size={16} />, text: "info@satellitealrajaa.com" },
    { icon: <MapPin size={16} />, text: "الكويت، حولي" },
    { icon: <Clock size={16} />, text: "24/7 متاح" },
  ];

  // Social media links
  const socialLinks = [
    { icon: <Instagram size={20} />, href: "https://www.instagram.com/satkuwait?igsh=cmN4OXF6dTU0djRy", label: "إنستغرام" },
    { icon: <MessageCircle size={20} />, href: "https://wa.me/96550266068?text=%D9%85%D8%B1%D8%AD%D8%A8%D9%8B%D8%A7%D8%8C%20%D8%A3%D9%88%D8%AF%20%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%20%D8%B9%D9%86%20%D8%AE%D8%AF%D9%85%D8%A7%D8%AA%D9%83%D9%85", label: "واتساب" },
    // { icon: <Twitter size={20} />, href: "#", label: "تويتر" },
  ];

  return (
    <footer
      className="bg-slate-50 border-t border-gray-200 py-12 text-gray-700 relative"
      aria-label="Footer"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/logo.png"
                alt="شعار ستلايت الرجاء"
                width={60}
                height={60}
                className="rounded-xl shadow-md"
              />
              <div>
                <h3 className="text-xl font-bold text-primary">ستلايت الرجاء</h3>
                <p className="text-xs text-gray-500">خدمات فنية متميزة</p>
              </div>
            </div>
            <p className="text-gray-600 mb-4">
              نقدم أفضل الخدمات الفنية في مجال الستلايت، الكاميرات، وانتركوم في الكويت.
            </p>

            {/* Contact Info */}
            <div className="space-y-2 mb-4">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center gap-2 text-sm">
                  <span className="text-primary">{item.icon}</span>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>

            {/* Social Media */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  className="bg-white p-2 rounded-full shadow border border-gray-200 text-primary hover:bg-primary hover:text-white transition-colors"
                  aria-label={social.label}
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Main Navigation */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-bold text-primary mb-4">روابط رئيسية</h3>
            <ul className="space-y-2">
              {mainLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 hover:text-secondary transition-colors py-1"
                  >
                    {link.icon}
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-bold text-primary mb-4">خدماتنا</h3>
            <ul className="space-y-2">
              {serviceLinks.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="flex items-center gap-2 hover:text-secondary transition-colors py-1"
                  >
                    {service.icon}
                    <span>{service.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-bold text-primary mb-4">تواصل معنا</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/contact"
                  className="inline-block bg-primary hover:bg-secondary text-white px-4 py-2 rounded-lg transition-colors"
                >
                  صفحة التواصل
                </Link>
              </li>
              <li className="text-gray-600">
                للحصول على استشارة فورية أو لحجز موعد، اتصل بنا مباشرة
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-300">
          {/* Rights and Credits */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="text-center md:text-start text-sm text-gray-600">
              <div>
                جميع الحقوق محفوظة &copy; {new Date().getFullYear()}{" "}
                <span className="text-primary font-bold">ستلايت الرجاء</span>
              </div>
              <div className="mt-1 text-xs text-gray-500">
                تم التطوير بكل حب بواسطة{" "}
                <a
                  href="https://www.instagram.com/mhmmdyassine"
                  target="_blank"
                  rel="noopener"
                  className="text-secondary hover:underline decoration-dotted font-bold relative group"
                >
                  م. محمد
                  <span className="absolute bottom-full mb-1 left-1/2 -translate-x-1/2 text-[10px] bg-black text-white px-2 py-1 rounded shadow opacity-0 group-hover:opacity-100 transition">
                    تابعني على إنستغرام
                  </span>
                </a>
                <CodeXmlIcon size={14} className="inline text-secondary ml-1" />
              </div>
            </div>

            {/* Legal Notice */}
            <div className="text-center text-xs text-gray-500 max-w-md">
              هذا الموقع مخصص لعرض خدمات فنية فقط. جميع المعلومات والوسائط المقدمة تخضع للحقوق القانونية لصاحب الموقع، وأي استخدام غير مصرح به يعرض صاحبه للمساءلة.
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScroll && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 left-6 z-50 bg-primary hover:bg-primary/90 text-white p-3 rounded-full shadow-lg transition-all hover:shadow-xl"
          aria-label="العودة للأعلى"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </footer>
  );
}