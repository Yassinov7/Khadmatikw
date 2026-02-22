// app/football/world-cup/page.tsx
import Link from "next/link";
import Image from "next/image";
import { Phone, MessageCircle, CheckCircle, Star, Clock, Shield, HeadphonesIcon, Trophy, Globe, Tv, Award, PlayCircle } from "lucide-react";
import { IPTVLeagueNav } from "@/components/IPTVLeagueNav";
import { Metadata } from "next";

// جميع مدن الكويت
const kuwaitCities = [
  "مدينة الكويت", "حولى", "الفروانية", "الجهراء", "الأحمدي", "مبارك الكبير",
  "الفنطاس", "السالمية", "الشفافيه", "الرقعي", "الفيحاء", "خيطان",
  "العبدلي", "مشرف", "الصباحية", "الجليب", "الظهر", "العزيزية"
];

// الكلمات المفتاحية
const servicesKeywords = [
  "مشاهدة كأس العالم IPTV",
  "كأس العالم IPTV الكويت",
  "مشاهدة كأس العالم الكويت",
  "بث كأس العالم IPTV",
  "قنوات كأس العالم",
  "IPTV كأس العالم",
  "اشتراك IPTV كأس العالم",
  "مشاهدة مباريات كأس العالم",
  "كأس العالم 2026",
  "مشاهدة كأس العالم مجانا",
  "بث مباشر كأس العالم",
  "قنوات كأس العالم الكويت",
  "IPTV كأس العالم الكويت",
  "اشتراك IPTV لمشاهدة كأس العالم",
  "أفضل IPTV لكأس العالم"
];

export const metadata: Metadata = {
  title: "مشاهدة كأس العالم IPTV في الكويت – بث مباشر جميع المباريات",
  description:
    "احصل على أفضل اشتراك IPTV لمشاهدة كأس العالم في الكويت. بث مباشر لجميع مباريات كأس العالم بجودة HD و 4K. تواصل معنا الآن للحصول على أفضل الأسعار.",
  keywords: `${servicesKeywords.join(", ")}, ${kuwaitCities.join(", ")}`,
  openGraph: {
    title: "مشاهدة كأس العالم IPTV في الكويت – بث مباشر جميع المباريات",
    description:
      "احصل على أفضل اشتراك IPTV لمشاهدة كأس العالم في الكويت. بث مباشر لجميع مباريات كأس العالم بجودة HD و 4K.",
    url: "https://satellitealrajaa.com/football/world-cup",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "مشاهدة كأس العالم IPTV في الكويت",
    description:
      "أفضل اشتراك IPTV لمشاهدة كأس العالم في الكويت مع بث مباشر لجميع المباريات."
  },
  alternates: {
    canonical: "https://satellitealrajaa.com/football/world-cup",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function WorldCupIPTVPage() {
  const features = [
    { title: "بث مباشر", desc: "بث مباشر لجميع مباريات كأس العالم بدون تأخير", icon: <PlayCircle className="text-secondary" size={24} /> },
    { title: "جودة عالية", desc: "مشاهدة بجودة HD و 4K فائقة الوضوح", icon: <Tv className="text-secondary" size={24} /> },
    { title: "جميع المباريات", desc: "جميع مباريات كأس العالم بدون استثناء", icon: <Trophy className="text-secondary" size={24} /> },
    { title: "قنوات متعددة", desc: "قنوات عربية وأوروبية لبث كأس العالم", icon: <Globe className="text-secondary" size={24} /> },
    { title: "دعم فني", desc: "دعم فني متواصل خلال فترة كأس العالم", icon: <HeadphonesIcon className="text-secondary" size={24} /> },
    { title: "أسعار مناسبة", desc: "أسعار تنافسية لاشتراكات كأس العالم", icon: <Award className="text-secondary" size={24} /> },
  ];

  const benefits = [
    { icon: <Clock className="text-secondary" size={24} />, title: "تفعيل فوري", desc: "تفعيل فوري للاشتراك خلال دقائق" },
    { icon: <Shield className="text-secondary" size={24} />, title: "ضمان الجودة", desc: "ضمان على جودة البث والاستقرار" },
    { icon: <HeadphonesIcon className="text-secondary" size={24} />, title: "دعم فني", desc: "دعم فني متواصل خلال كأس العالم" },
    { icon: <Star className="text-secondary" size={24} />, title: "جودة عالية", desc: "أفضل جودة بث متاحة لكأس العالم" },
  ];

  const faqs = [
    {
      question: "كيف يمكنني مشاهدة كأس العالم عبر IPTV؟",
      answer: "يمكنك مشاهدة كأس العالم عبر IPTV من خلال الاشتراك في أحد خدمات IPTV المتاحة مثل اشتراك برلين أو اشتراك سبايدر. نحن نقدم أفضل اشتراكات IPTV لمشاهدة كأس العالم في الكويت."
    },
    {
      question: "ما هي أفضل خدمة IPTV لمشاهدة كأس العالم؟",
      answer: "نوصي باشتراك برلين IPTV أو اشتراك سبايدر IPTV لمشاهدة كأس العالم. كلاهما يوفر بث مباشر لجميع مباريات كأس العالم بجودة عالية."
    },
    {
      question: "هل يمكنني مشاهدة جميع مباريات كأس العالم؟",
      answer: "نعم، مع اشتراك IPTV يمكنك مشاهدة جميع مباريات كأس العالم بدون استثناء. نحن نضمن بث مباشر لجميع المباريات بجودة HD و 4K."
    },
    {
      question: "ما هي طرق الدفع المتاحة لاشتراك IPTV كأس العالم؟",
      answer: "نقبل جميع طرق الدفع بما في ذلك النقد، البطاقات الائتمانية، والتحويلات البنكية. يمكنك الدفع عند الاستلام في جميع مناطق الكويت."
    },
    {
      question: "كم يستغرق وقت تفعيل الاشتراك؟",
      answer: "عادة ما يتم تفعيل الاشتراك خلال دقائق بعد إتمام عملية الدفع. نحن نضمن تفعيل فوري مع دعم فني كامل."
    },
    {
      question: "هل يمكنني استخدام الاشتراك على عدة أجهزة؟",
      answer: "نعم، يمكنك استخدام الاشتراك على عدة أجهزة في نفس الوقت حسب نوع الاشتراك. هذا يسمح لك بمشاهدة كأس العالم على عدة شاشات."
    }
  ];

  return (
    <main className="relative">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary/90 to-green-700 text-white min-h-[70vh] flex flex-col justify-center items-center text-center p-6">
        <div className="max-w-4xl">
          <div className="mb-6 flex justify-center">
            <Trophy size={80} className="text-yellow-300" />
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
            مشاهدة كأس العالم IPTV
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            بث مباشر لجميع مباريات كأس العالم بجودة HD و 4K في الكويت. احصل على أفضل اشتراك IPTV لمشاهدة كأس العالم الآن.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:96550266068"
              className="bg-white text-primary font-bold px-8 py-4 rounded-full shadow-lg hover:bg-gray-100 transition flex items-center justify-center gap-2 text-lg"
            >
              <Phone size={20} /> اتصال مباشر
            </a>
            <a
              href="https://wa.me/96550266068?text=مرحبًا، أود الاستفسار عن مشاهدة كأس العالم عبر IPTV."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 text-white font-bold px-8 py-4 rounded-full shadow-lg hover:bg-green-700 transition flex items-center justify-center gap-2 text-lg"
            >
              <MessageCircle size={20} /> واتساب مباشر
            </a>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">مشاهدة كأس العالم IPTV في الكويت</h2>
            <p className="text-gray-600 text-lg mb-6">
              كأس العالم هو الحدث الرياضي الأكبر في العالم، ونحن نقدم لك أفضل طريقة لمشاهدة جميع مباريات كأس العالم في الكويت. من خلال اشتراك IPTV، يمكنك الاستمتاع ببث مباشر لجميع مباريات كأس العالم بجودة HD و 4K فائقة الوضوح.
            </p>
            <p className="text-gray-600 text-lg mb-6">
              نحن في ستلايت الرجاء نقدم أفضل اشتراكات IPTV لمشاهدة كأس العالم في الكويت. سواء كنت تفضل اشتراك برلين IPTV أو اشتراك سبايدر IPTV، نحن نضمن لك بث مباشر مستقر لجميع مباريات كأس العالم بدون تقطيع أو انقطاع.
            </p>
            <p className="text-gray-600 text-lg mb-6">
              مع اشتراك IPTV، يمكنك مشاهدة جميع مباريات كأس العالم على قنوات عربية وأوروبية متعددة. نحن نقدم دعم فني متواصل خلال فترة كأس العالم لضمان أفضل تجربة مشاهدة. فريقنا جاهز لمساعدتك في اختيار الاشتراك المناسب لك وتفعيله خلال دقائق.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <div className="flex items-center gap-2">
                <CheckCircle className="text-green-600" size={20} />
                <span className="text-gray-700">بث مباشر لجميع المباريات</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="text-green-600" size={20} />
                <span className="text-gray-700">جودة HD و 4K</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="text-green-600" size={20} />
                <span className="text-gray-700">دعم فني 24/7</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="text-green-600" size={20} />
                <span className="text-gray-700">أسعار مناسبة</span>
              </div>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/sattech/worldcup.jpg"
              alt="مشاهدة كأس العالم IPTV"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* المميزات */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">مميزات مشاهدة كأس العالم عبر IPTV</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              اكتشف لماذا يعتبر IPTV الخيار الأفضل لمشاهدة كأس العالم في الكويت
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-md p-6 flex flex-col gap-3 hover:shadow-lg transition transform hover:-translate-y-1">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-primary">{feature.title}</h3>
                </div>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IPTV Services Links */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">اختر اشتراك IPTV المناسب لك</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            نحن نقدم أفضل اشتراكات IPTV لمشاهدة كأس العالم في الكويت
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Link href="/iptv/berlin" className="bg-gradient-to-r from-primary/10 to-green-50 rounded-2xl p-6 hover:shadow-lg transition transform hover:-translate-y-1">
            <div className="flex items-center gap-3 mb-3">
              <Tv className="text-primary" size={32} />
              <h3 className="text-xl font-bold text-gray-800">اشتراك برلين</h3>
            </div>
            <p className="text-gray-600 text-sm mb-3">بث كأس العالم على القنوات الأوروبية</p>
            <span className="text-primary font-bold text-sm">اكتشف المزيد →</span>
          </Link>
          <Link href="/iptv/spider" className="bg-gradient-to-r from-primary/10 to-green-50 rounded-2xl p-6 hover:shadow-lg transition transform hover:-translate-y-1">
            <div className="flex items-center gap-3 mb-3">
              <Tv className="text-primary" size={32} />
              <h3 className="text-xl font-bold text-gray-800">اشتراك سبايدر</h3>
            </div>
            <p className="text-gray-600 text-sm mb-3">بث كأس العالم على القنوات العربية</p>
            <span className="text-primary font-bold text-sm">اكتشف المزيد →</span>
          </Link>
          <Link href="/iptv/genie" className="bg-gradient-to-r from-primary/10 to-green-50 rounded-2xl p-6 hover:shadow-lg transition transform hover:-translate-y-1">
            <div className="flex items-center gap-3 mb-3">
              <Tv className="text-primary" size={32} />
              <h3 className="text-xl font-bold text-gray-800">رسيفر الجني</h3>
            </div>
            <p className="text-gray-600 text-sm mb-3">أفضل رسيفر لمشاهدة كأس العالم</p>
            <span className="text-primary font-bold text-sm">اكتشف المزيد →</span>
          </Link>
          <Link href="/iptv/flash-4k" className="bg-gradient-to-r from-primary/10 to-green-50 rounded-2xl p-6 hover:shadow-lg transition transform hover:-translate-y-1">
            <div className="flex items-center gap-3 mb-3">
              <Tv className="text-primary" size={32} />
              <h3 className="text-xl font-bold text-gray-800">فلاش 4K</h3>
            </div>
            <p className="text-gray-600 text-sm mb-3">جودة 4K لمشاهدة كأس العالم</p>
            <span className="text-primary font-bold text-sm">اكتشف المزيد →</span>
          </Link>
        </div>
      </section>

      {/* الدوريات الأخرى */}
      <section className="py-8 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">مشاهدة الدوريات الكبرى</h2>
          <p className="text-gray-600">اكتشف صفحات الدوريات الأوروبية والخليجية</p>
        </div>
        <div className="flex flex-wrap gap-3 justify-center">
          <Link href="/football/premier-league" className="px-5 py-2.5 bg-white rounded-full font-bold text-primary border-2 border-primary hover:bg-primary hover:text-white transition shadow-md">
            الدوري الإنجليزي
          </Link>
          <Link href="/football/la-liga" className="px-5 py-2.5 bg-white rounded-full font-bold text-primary border-2 border-primary hover:bg-primary hover:text-white transition shadow-md">
            الدوري الإسباني
          </Link>
          <Link href="/football/saudi-league" className="px-5 py-2.5 bg-white rounded-full font-bold text-primary border-2 border-primary hover:bg-primary hover:text-white transition shadow-md">
            الدوري السعودي
          </Link>
          <Link href="/football/kuwait-league" className="px-5 py-2.5 bg-white rounded-full font-bold text-primary border-2 border-primary hover:bg-primary hover:text-white transition shadow-md">
            الدوري الكويتي
          </Link>
        </div>
      </section>

      {/* روابط التنقل الشاملة */}
      <IPTVLeagueNav type="both" currentPage="/football/world-cup" />

      {/* لماذا نحن؟ */}
      <section className="bg-gradient-to-r from-primary/5 to-green-50 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">لماذا تختارنا لمشاهدة كأس العالم؟</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              نحن نضمن أفضل خدمة وأسعار مناسبة لجميع العملاء في الكويت
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition">
                <div className="mb-4 p-3 bg-primary/10 rounded-full">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-6 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">الأسئلة الشائعة</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            نقدم إجابات للأسئلة الأكثر شيوعاً حول مشاهدة كأس العالم عبر IPTV
          </p>
        </div>
        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* أرقام التواصل */}
      <section className="py-16 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">تواصل معنا الآن</h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          لا تتردد في الاتصال بنا للحصول على استشارة مجانية أو لحجز اشتراك IPTV لمشاهدة كأس العالم
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6 items-center">
          <a
            href="tel:96550266068"
            className="flex items-center gap-2 px-8 py-4 bg-primary hover:bg-primary/90 text-white rounded-full font-bold shadow-lg transition transform hover:scale-105"
          >
            <Phone size={24} /> اتصال مباشر
          </a>
          <a
            href="https://wa.me/96550266068?text=مرحبًا، أود الاستفسار عن مشاهدة كأس العالم عبر IPTV."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-8 py-4 bg-green-600 hover:bg-green-700 text-white rounded-full font-bold shadow-lg transition transform hover:scale-105"
          >
            <MessageCircle size={24} /> واتساب مباشر
          </a>
        </div>
      </section>
    </main>
  );
}
