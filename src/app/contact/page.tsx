import { Metadata } from "next";
import { ContactCard } from "@/components/ContactCard";
import { Camera, SatelliteDish, Tv2, Wrench, MapPin, Clock, Phone, MessageCircle } from "lucide-react";
import Link from "next/link";

const CONTACTS = [
  {
    name: "خبير",
    role: "تركيب شاشات",
    phone: "96550266068",
    whatsapp: "96550266068",
    icon: <Tv2 size={28} className="text-primary" />,
  },
  {
    name: "خبير",
    role: "صيانة ستلايت",
    phone: "96550266068",
    whatsapp: "96550266068",
    icon: <SatelliteDish size={28} className="text-primary" />,
  },
  {
    name: "متخصص",
    role: "كاميرات مراقبة",
    phone: "96550266068",
    whatsapp: "96550266068",
    icon: <Camera size={28} className="text-primary" />,
  },
  {
    name: "فني",
    role: "صيانة عامة",
    phone: "96550266068",
    whatsapp: "96550266068",
    icon: <Wrench size={28} className="text-primary" />,
  },
];

export const metadata: Metadata = {
  title: "تواصل معنا | ستلايت الرجاء | 50266068",
  description: "اتصل مباشرة بأفراد فريق ستلايت الرجاء في الكويت. فنيون محترفون بخدمتكم عبر الهاتف أو الواتساب. خدمة فورية وموثوقة.",
  keywords: [
    "تواصل معنا",
    "ستلايت الرجاء",
    "فني شاشات الكويت",
    "فني ستلايت",
    "كاميرات مراقبة الكويت",
    "صيانة شاشات",
    "تركيب ستلايت",
    "خدمة فورية الكويت"
  ],
  openGraph: {
    title: "تواصل معنا | ستلايت الرجاء | خدمة فورية وموثوقة",
    description: "أرقام اتصال وواتساب مباشرة لفريق خدماتي لخدمات الشاشات، الستلايت، والكاميرات في الكويت. خدمة فورية وموثوقة.",
    url: "https://satellitealrajaa.com/contact",
    siteName: "ستلايت الرجاء",
    locale: "ar_KW",
    type: "website",
  },
  alternates: {
    canonical: "https://satellitealrajaa.com/contact",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function ContactPage() {
  return (
    <section className="max-w-6xl mx-auto py-12 px-4">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-6">
          تواصل مع فريق ستلايت الرجاء
        </h1>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-12 leading-relaxed">
          فريق عمل محترف ومتخصص في تقديم خدمات الشاشات والستلايت والكاميرات في الكويت
        </p>
      </div>

      {/* Contact Information Cards */}
      <div className="mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-shadow">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="text-primary" size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">اتصال فوري</h3>
            <p className="text-gray-600">رقم الهاتف المباشر لجميع الاستفسارات</p>
            <div className="mt-4 font-bold text-primary text-lg">96550266068</div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-shadow">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="text-primary" size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">واتساب مباشر</h3>
            <p className="text-gray-600">تواصل سريع ومباشر عبر الواتساب</p>
            <div className="mt-4 font-bold text-primary text-lg">96550266068</div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-shadow">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="text-primary" size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">خدمة 24/7</h3>
            <p className="text-gray-600">متاحون لك في جميع الأوقات</p>
            <div className="mt-4 font-bold text-primary text-lg"> 96550266068</div>
          </div>
        </div>

        <ContactCard contacts={CONTACTS} />
      </div>

      {/* Working Hours */}
      <div className="bg-gradient-to-r from-primary to-secondary rounded-3xl p-8 text-white mb-16">
        <h2 className="text-3xl font-extrabold mb-6 text-center">أوقات العمل</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300">
            <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="text-white" size={32} />
            </div>
            <h3 className="text-xl font-bold mb-2">24/7 متوفر دائما</h3>
            <p className="text-lg">في أي وقت تطلبنا تجدنا حاضرين</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300">
            <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="text-white" size={32} />
            </div>
            <h3 className="text-xl font-bold mb-2">خدمة في جميع أنحاء الكويت</h3>
            <p className="text-lg">تغطية شاملة لجميع مناطق الكويت</p>
          </div>
        </div>
      </div>

      {/* Google Map Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-extrabold text-primary mb-6 text-center">موقعنا في الخريطة</h2>
        <div className="overflow-hidden rounded-3xl border border-gray-200 shadow-xl">
          <iframe
            title="خريطة ستلايت الرجاء"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d17408.89872405616!2d48.0245132!3d29.3364041!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fcf9d08cd68d2e3%3A0xea65814e3d172990!2z2LPYqtmE2KfZitiq!5e1!3m2!1sar!2skw!4v1750771538308!5m2!1sar!2skw"
            className="w-full h-64 sm:h-80 md:h-96"
            loading="lazy"
          />
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center bg-gradient-to-br from-gray-50 to-white rounded-3xl p-10 border border-gray-200">
        <h2 className="text-3xl font-extrabold text-primary mb-4">هل تحتاج إلى خدمة فورية؟</h2>
        <p className="text-gray-700 text-lg mb-8 max-w-2xl mx-auto">
          اتصل بنا الآن واحصل على خدمة فورية من فنيين متخصصين
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="tel:96550266068"
            className="bg-gradient-to-r from-primary to-secondary text-white font-bold px-8 py-4 rounded-full hover:from-primary/90 hover:to-secondary/90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            اتصل الآن
          </Link>
          <Link
            href="https://wa.me/96550266068"
            target="_blank"
            className="bg-gradient-to-r from-green-500 to-green-600 text-white font-bold px-8 py-4 rounded-full hover:from-green-600 hover:to-green-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            واتساب
          </Link>
        </div>
      </div>

      <div className="text-center text-gray-500 mt-16 pt-8 border-t border-gray-200">
        جميع الحقوق محفوظة &copy; {new Date().getFullYear()} <span className="text-primary font-bold">ستلايت الرجاء</span>
      </div>
    </section>
  );
}