"use client"
import { useEffect, useState } from "react";
import { MapPin, CodeXmlIcon, ArrowUp, Home, Layers, PhoneCall, Blinds, Satellite, Camera, DiscAlbumIcon, Tag, FileQuestion, ShieldQuestion, Mail, Clock, Instagram, MessageCircle, Tv, Trophy, Activity, Facebook } from "lucide-react";
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
    { label: "عروض كأس العالم", href: "/football/world-cup", icon: <Trophy size={16} /> },
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

  // Development service links
  const devServiceLinks = [
    { label: "تصميم واجهات", href: "/web-design", icon: <CodeXmlIcon size={16} /> },
    { label: "تطبيقات ويب", href: "/web-applications", icon: <CodeXmlIcon size={16} /> },
    { label: "حلول برمجية", href: "/software-solutions", icon: <CodeXmlIcon size={16} /> },
    { label: "صيانة ودعم", href: "/additional-services", icon: <CodeXmlIcon size={16} /> },
  ];

  // IPTV subscriptions links
  const iptvLinks = [
    { label: "اشتراك برلين", href: "/iptv/berlin", icon: <Tv size={16} /> },
    { label: "اشتراك سبايدر", href: "/iptv/spider", icon: <Tv size={16} /> },
    { label: "رسيفر الجني", href: "/iptv/genie", icon: <Tv size={16} /> },
    { label: "فلاش 4K", href: "/iptv/flash-4k", icon: <Tv size={16} /> },
  ];

  // Football & leagues links
  const footballLinks = [
    { label: "كأس العالم", href: "/football/world-cup", icon: <Trophy size={16} /> },
    { label: "دوري أبطال أوروبا", href: "/football/champions-league", icon: <Activity size={16} /> },
    { label: "أبطال آسيا", href: "/football/afc-champions-league", icon: <Activity size={16} /> },
    { label: "الدوري الإنجليزي", href: "/football/premier-league", icon: <Activity size={16} /> },
    { label: "الدوري الإسباني", href: "/football/la-liga", icon: <Activity size={16} /> },
    { label: "الدوري الإيطالي", href: "/football/serie-a", icon: <Activity size={16} /> },
    { label: "الدوري الألماني", href: "/football/bundesliga", icon: <Activity size={16} /> },
    { label: "الدوري الكويتي", href: "/football/kuwait-league", icon: <Activity size={16} /> },
    { label: "الدوري السعودي", href: "/football/saudi-league", icon: <Activity size={16} /> },
    { label: "الدوري الإماراتي", href: "/football/uae-league", icon: <Activity size={16} /> },
    { label: "الدوري القطري", href: "/football/qatar-league", icon: <Activity size={16} /> },
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
    { icon: <Instagram size={20} />, href: "https://www.instagram.com/alrajaa_berlin8k?igsh=ZDI3ZjY4azdueTN1", label: "إنستغرام" },
    { icon: <Facebook size={20} />, href: "https://www.facebook.com/alrajaaberlin8k", label: "فيسبوك" },
    { icon: <MessageCircle size={20} />, href: "https://wa.me/96550266068?text=%D9%85%D8%B1%D8%AD%D8%A8%D9%8B%D8%A7%D8%8C%20%D8%A3%D9%88%D8%AF%20%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%20%D8%B9%D9%86%20%D8%AE%D8%AF%D9%85%D8%A7%D8%AA%D9%83%D9%85", label: "واتساب" },
  ];

  return (
    <footer
      className="bg-gradient-to-b from-slate-900 to-slate-800 border-t border-slate-700 py-10 sm:py-12 text-slate-200 relative"
      aria-label="Footer"
    >
      <div className="container mx-auto px-4">
        <div className="mb-10 rounded-2xl bg-gradient-to-r from-emerald-700 via-green-600 to-emerald-700 text-white p-5 md:p-6 flex flex-col md:flex-row items-center justify-between gap-4 shadow-lg">
          <div className="text-center md:text-right">
            <p className="font-extrabold text-lg">عروض كأس العالم IPTV</p>
            <p className="text-sm text-white/90">بث مباشر بجودة HD و 4K مع دعم فني 24/7</p>
          </div>
          <Link href="/football/world-cup" className="px-5 py-2.5 rounded-xl bg-yellow-400 text-emerald-900 font-bold text-sm hover:bg-yellow-300 transition">
            اكتشف العروض
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7 gap-8 mb-12">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/logo.png"
                alt="شعار ستلايت الرجاء"
                width={60}
                height={60}
                className="rounded-xl shadow-lg"
              />
              <div>
                <h3 className="text-xl font-bold text-white">ستلايت الرجاء</h3>
                <p className="text-xs text-slate-400">خدمات فنية متميزة</p>
              </div>
            </div>
            <p className="text-slate-300 mb-6 leading-relaxed text-sm sm:text-base">
              نقدم أفضل الخدمات الفنية في مجال الستلايت، الكاميرات، وانتركوم وعروض كأس العالم IPTV في الكويت.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center gap-3 text-sm">
                  <span className="text-primary bg-primary/10 p-2 rounded-lg">{item.icon}</span>
                  <span className="text-slate-300">{item.text}</span>
                </div>
              ))}
            </div>

            {/* Social Media */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  className="bg-slate-700 p-3 rounded-xl border border-slate-600 text-white hover:bg-primary transition-all duration-300 hover:-translate-y-0.5"
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Main Navigation */}
          <div className="lg:col-span-1">
            <h3 className="text-base sm:text-lg font-bold text-white mb-3 sm:mb-4 flex items-center gap-2">
              <Home size={20} className="text-secondary" />
              روابط رئيسية
            </h3>
            <ul className="space-y-3">
              {mainLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-3 text-slate-300 hover:text-yellow-400 transition-colors py-2 group text-sm sm:text-base"
                  >
                    <span className="text-primary group-hover:text-secondary transition-colors">{link.icon}</span>
                    <span className="group-hover:text-secondary transition-colors">{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-1">
            <h3 className="text-base sm:text-lg font-bold text-white mb-3 sm:mb-4 flex items-center gap-2">
              <Layers size={20} className="text-secondary" />
              خدماتنا
            </h3>
            <ul className="space-y-3">
              {serviceLinks.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="flex items-center gap-3 text-slate-300 hover:text-yellow-400 transition-colors py-2 group text-sm sm:text-base"
                  >
                    <span className="text-primary group-hover:text-secondary transition-colors">{service.icon}</span>
                    <span className="group-hover:text-secondary transition-colors">{service.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Development Services */}
          <div className="lg:col-span-1">
            <h3 className="text-base sm:text-lg font-bold text-white mb-3 sm:mb-4 flex items-center gap-2">
              <CodeXmlIcon size={20} className="text-secondary" />
              تطوير ويب
            </h3>
            <ul className="space-y-3">
              {devServiceLinks.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="flex items-center gap-3 text-slate-300 hover:text-yellow-400 transition-colors py-2 group text-sm sm:text-base"
                  >
                    <span className="text-primary group-hover:text-secondary transition-colors">{service.icon}</span>
                    <span className="group-hover:text-secondary transition-colors">{service.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* IPTV Subscriptions */}
          <div className="lg:col-span-1">
            <h3 className="text-base sm:text-lg font-bold text-white mb-3 sm:mb-4 flex items-center gap-2">
              <Tv size={20} className="text-secondary" />
              اشتراكات IPTV
            </h3>
            <ul className="space-y-3">
              {iptvLinks.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="flex items-center gap-3 text-slate-300 hover:text-yellow-400 transition-colors py-2 group text-sm sm:text-base"
                  >
                    <span className="text-primary group-hover:text-secondary transition-colors">{service.icon}</span>
                    <span className="group-hover:text-secondary transition-colors">{service.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Football & Leagues */}
          <div className="lg:col-span-1">
            <h3 className="text-base sm:text-lg font-bold text-white mb-3 sm:mb-4 flex items-center gap-2">
              <Trophy size={20} className="text-secondary" />
              كرة القدم والدوريات
            </h3>
            <ul className="space-y-2 max-h-64 overflow-y-auto pr-2">
              {footballLinks.map((league) => (
                <li key={league.href}>
                  <Link
                    href={league.href}
                    className="flex items-center gap-2 text-slate-300 hover:text-yellow-400 transition-colors py-1.5 group text-sm"
                  >
                    <span className="text-primary group-hover:text-secondary transition-colors flex-shrink-0">{league.icon}</span>
                    <span className="group-hover:text-secondary transition-colors">{league.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div className="lg:col-span-1">
            <h3 className="text-base sm:text-lg font-bold text-white mb-3 sm:mb-4 flex items-center gap-2">
              <PhoneCall size={20} className="text-secondary" />
              تواصل معنا
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/contact"
                  className="inline-block bg-primary hover:bg-secondary text-white px-4 py-2 rounded-lg transition-colors text-sm font-medium"
                >
                  صفحة التواصل
                </Link>
              </li>
              <li className="text-gray-600 text-sm leading-relaxed">
                للحصول على استشارة فورية أو لحجز موعد، اتصل بنا مباشرة
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-700">
          {/* Rights and Credits */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="text-center md:text-start text-sm text-slate-400">
              <div className="font-medium">
                جميع الحقوق محفوظة &copy; {new Date().getFullYear()}{" "}
                <span className="text-yellow-400 font-bold">ستلايت الرجاء</span>
              </div>
              <div className="mt-2 text-xs text-gray-500 flex flex-wrap justify-center md:justify-start gap-2">
                تم التطوير بكل حب بواسطة{" "}
                <a
                  href="https://www.instagram.com/mhmmdyassine"
                  target="_blank"
                  rel="noopener"
                  className="text-secondary hover:underline decoration-dotted font-bold relative group inline-flex items-center gap-1"
                >
                  م. محمد
                  <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 text-[10px] bg-black text-white px-2 py-1 rounded shadow-lg opacity-0 group-hover:opacity-100 transition whitespace-nowrap z-10">
                    تابعني على إنستغرام
                  </span>
                  <CodeXmlIcon size={12} className="inline text-secondary" />
                </a>
              </div>
            </div>

            {/* Legal Notice */}
            <div className="text-center text-xs text-slate-400 max-w-md bg-slate-700/50 rounded-lg py-2 px-3">
              هذا الموقع مخصص لعرض خدمات فنية فقط. جميع الحقوق محفوظة © {new Date().getFullYear()}.
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScroll && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-20 left-4 sm:bottom-6 sm:left-6 z-50 bg-primary hover:bg-primary/90 text-white p-3 rounded-full shadow-lg transition-all hover:shadow-xl safe-bottom"
          aria-label="العودة للأعلى"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </footer>
  );
}