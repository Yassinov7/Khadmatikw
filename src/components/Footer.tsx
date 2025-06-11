import { PhoneCall, MapPin, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer
      className="bg-slate-100 border-t border-gray-200 py-8 mt-12 text-center text-gray-700 text-sm"
      aria-label="Footer"
    >
      <div className="container mx-auto flex flex-col items-center gap-3">
        <div className="flex flex-col sm:flex-row items-center gap-3 mb-2">
          <a
            href="https://wa.me/96550266068"
            target="_blank"
            rel="noopener nofollow"
            className="flex items-center gap-1 px-3 py-2 rounded-full text-white font-bold bg-green-600 hover:bg-green-700 transition shadow"
            aria-label="تواصل عبر واتساب"
          >
            <MessageCircle size={18} /> واتساب
          </a>
          <a
            href="tel:96550266068"
            className="flex items-center gap-1 px-3 py-2 rounded-full text-white font-bold bg-primary hover:bg-primary/90 transition shadow"
            aria-label="اتصال هاتفي"
          >
            <PhoneCall size={18} /> 96550266068
          </a>
          <span className="flex items-center gap-1 px-3 py-2 rounded-full text-primary bg-primary/10 font-bold">
            <MapPin size={18} /> الكويت، حولي
          </span>
        </div>
        <div className="text-xs text-gray-500 mt-2">
          جميع الحقوق محفوظة &copy; {new Date().getFullYear()} <span className="text-primary font-bold">خدماتي KW</span>
        </div>
      </div>
    </footer>
  );
}
