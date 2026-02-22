// app/football/saudi-league/page.tsx
import Link from "next/link";
import Image from "next/image";
import { Phone, MessageCircle, Tv, Activity, CheckCircle, PlayCircle, Globe, HeadphonesIcon, Zap } from "lucide-react";
import { IPTVLeagueNav } from "@/components/IPTVLeagueNav";
import { Metadata } from "next";

const kuwaitCities = [
  "مدينة الكويت", "حولى", "الفروانية", "الجهراء", "الأحمدي", "مبارك الكبير",
  "الفنطاس", "السالمية", "الشفافيه", "الرقعي", "الفيحاء", "خيطان",
  "العبدلي", "مشرف", "الصباحية", "الجليب", "الظهر", "العزيزية"
];

const servicesKeywords = [
  "مشاهدة الدوري السعودي IPTV",
  "الدوري السعودي IPTV الكويت",
  "مشاهدة الدوري السعودي الكويت",
  "بث الدوري السعودي IPTV",
  "قنوات الدوري السعودي",
  "IPTV الدوري السعودي",
  "مشاهدة مباريات الدوري السعودي",
  "بث مباشر الدوري السعودي",
  "قنوات الدوري السعودي الكويت",
  "IPTV الدوري السعودي الكويت",
  "اشتراك IPTV لمشاهدة الدوري السعودي",
  "أفضل IPTV للدوري السعودي",
  "مشاهدة الهلال",
  "مشاهدة النصر",
  "مشاهدة الأهلي السعودي",
  "مشاهدة الاتحاد",
  "دوري روشن السعودي IPTV",
  "قنوات الدوري السعودي الرياضية",
  "بث مباريات الدوري السعودي للمحترفين"
];

export const metadata: Metadata = {
  title: "مشاهدة الدوري السعودي IPTV في الكويت – بث مباشر دوري روشن",
  description:
    "احصل على أفضل اشتراك IPTV لمشاهدة الدوري السعودي (دوري روشن) في الكويت. بث مباشر لجميع مباريات الهلال والنصر والأهلي والاتحاد بجودة HD و 4K. تواصل معنا الآن.",
  keywords: `${servicesKeywords.join(", ")}, ${kuwaitCities.join(", ")}`,
  openGraph: {
    title: "مشاهدة الدوري السعودي IPTV في الكويت – بث مباشر دوري روشن",
    description: "بث مباشر لجميع مباريات الدوري السعودي الهلال والنصر بجودة HD و 4K.",
    url: "https://satellitealrajaa.com/football/saudi-league",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "مشاهدة الدوري السعودي IPTV الكويت",
    description: "أفضل اشتراك IPTV لمشاهدة الدوري السعودي بث مباشر.",
  },
  alternates: { canonical: "https://satellitealrajaa.com/football/saudi-league" },
  robots: { index: true, follow: true },
};

export default function SaudiLeaguePage() {
  const features = [
    { title: "بث مباشر", desc: "بث مباشر لجميع مباريات الدوري السعودي دوري روشن بدون تأخير", icon: <PlayCircle className="text-secondary" size={24} /> },
    { title: "جودة HD و 4K", desc: "مشاهدة مباريات الهلال والنصر بجودة فائقة الوضوح", icon: <Tv className="text-secondary" size={24} /> },
    { title: "قنوات عربية", desc: "قنوات عربية متخصصة لبث الدوري السعودي", icon: <Globe className="text-secondary" size={24} /> },
    { title: "دعم فني", desc: "دعم فني متواصل لمشاهدة الدوري السعودي", icon: <HeadphonesIcon className="text-secondary" size={24} /> },
    { title: "استقرار عالي", desc: "بث مستقر بدون تقطيع أو انقطاع", icon: <Zap className="text-secondary" size={24} /> },
  ];

  const faqs = [
    {
      question: "كيف يمكنني مشاهدة الدوري السعودي عبر IPTV؟",
      answer: "يمكنك مشاهدة الدوري السعودي (دوري روشن) عبر IPTV من خلال الاشتراك في اشتراك سبايدر أو اشتراك برلين. نحن نقدم أفضل اشتراكات IPTV لمشاهدة الدوري السعودي في الكويت بجودة HD و 4K."
    },
    {
      question: "ما هي أفضل خدمة IPTV لمشاهدة الهلال والنصر؟",
      answer: "نوصي باشتراك سبايدر IPTV للقنوات العربية التي تبث الدوري السعودي. يوفر بث مباشر لجميع مباريات دوري روشن السعودي الهلال والنصر والأهلي والاتحاد."
    },
    {
      question: "هل يمكنني مشاهدة جميع مباريات الدوري السعودي؟",
      answer: "نعم، مع اشتراك IPTV يمكنك مشاهدة جميع مباريات الدوري السعودي للمحترفين (دوري روشن) بدون استثناء. نحن نضمن بث مباشر لجميع المباريات بجودة عالية."
    },
  ];

  return (
    <main className="relative">
      <section className="relative bg-gradient-to-r from-primary/90 to-green-700 text-white min-h-[70vh] flex flex-col justify-center items-center text-center p-6">
        <div className="max-w-4xl">
          <div className="mb-6 flex justify-center">
            <Activity size={80} className="text-yellow-300" />
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
            مشاهدة الدوري السعودي IPTV
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            بث مباشر لجميع مباريات الدوري السعودي (دوري روشن) بجودة HD و 4K في الكويت. الهلال، النصر، الأهلي، الاتحاد.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:96550266068" className="bg-white text-primary font-bold px-8 py-4 rounded-full shadow-lg hover:bg-gray-100 transition flex items-center justify-center gap-2 text-lg">
              <Phone size={20} /> اتصال مباشر
            </a>
            <a href="https://wa.me/96550266068?text=مرحبًا، أود الاستفسار عن مشاهدة الدوري السعودي عبر IPTV." target="_blank" rel="noopener noreferrer" className="bg-green-600 text-white font-bold px-8 py-4 rounded-full shadow-lg hover:bg-green-700 transition flex items-center justify-center gap-2 text-lg">
              <MessageCircle size={20} /> واتساب مباشر
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">مشاهدة الدوري السعودي IPTV في الكويت</h2>
            <div className="text-gray-700 space-y-4 text-lg leading-relaxed">
              <p>
                الدوري السعودي للمحترفين (دوري روشن) أصبح أحد أقوى الدوريات في العالم، ونحن في ستلايت الرجاء نقدم لك أفضل طريقة لمشاهدة جميع مباريات الدوري السعودي في الكويت. من خلال اشتراك IPTV، يمكنك الاستمتاع ببث مباشر لجميع مباريات الدوري السعودي بجودة HD و 4K فائقة الوضوح.
              </p>
              <p>
                سواء كنت من مشجعي الهلال أو النصر أو الأهلي أو الاتحاد، مع اشتراك سبايدر IPTV يمكنك مشاهدة جميع مباريات الدوري السعودي على القنوات العربية. نحن نضمن بث مباشر مستقر لجميع مباريات الدوري السعودي بدون تقطيع أو انقطاع.
              </p>
              <p>
                نوفر قنوات عربية متخصصة لبث الدوري السعودي دوري روشن. فريقنا جاهز لمساعدتك في اختيار الاشتراك المناسب وتفعيله خلال دقائق في جميع مناطق الكويت.
              </p>
            </div>
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
                <span className="text-gray-700">قنوات عربية</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="text-green-600" size={20} />
                <span className="text-gray-700">دعم فني 24/7</span>
              </div>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/sattech/iptv/spidertv.png"
              alt="مشاهدة الدوري السعودي IPTV"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">مميزات مشاهدة الدوري السعودي عبر IPTV</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">اكتشف لماذا يعتبر IPTV الخيار الأفضل لمشاهدة الدوري السعودي في الكويت</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-md p-6 flex flex-col gap-3 hover:shadow-lg transition">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-primary/10 rounded-lg">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-primary">{feature.title}</h3>
                </div>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">اختر اشتراك IPTV المناسب لك</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">نحن نقدم أفضل اشتراكات IPTV لمشاهدة الدوري السعودي في الكويت</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Link href="/iptv/spider" className="bg-gradient-to-r from-primary/10 to-green-50 rounded-2xl p-8 hover:shadow-lg transition">
            <Tv className="text-primary mb-4" size={40} />
            <h3 className="text-2xl font-bold text-gray-800 mb-4">اشتراك سبايدر IPTV</h3>
            <p className="text-gray-600">مشاهدة الدوري السعودي على القنوات العربية</p>
          </Link>
          <Link href="/iptv/berlin" className="bg-gradient-to-r from-primary/10 to-green-50 rounded-2xl p-8 hover:shadow-lg transition">
            <Tv className="text-primary mb-4" size={40} />
            <h3 className="text-2xl font-bold text-gray-800 mb-4">اشتراك برلين IPTV</h3>
            <p className="text-gray-600">مشاهدة الدوري السعودي على القنوات الأوروبية</p>
          </Link>
        </div>
      </section>

      <section className="py-8 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">مشاهدة الدوريات الأخرى</h2>
          <p className="text-gray-600">اكتشف صفحات الدوريات الخليجية والأوروبية</p>
        </div>
        <div className="flex flex-wrap gap-3 justify-center">
          <Link href="/football/kuwait-league" className="px-5 py-2.5 bg-white rounded-full font-bold text-primary border-2 border-primary hover:bg-primary hover:text-white transition shadow-md">الدوري الكويتي</Link>
          <Link href="/football/uae-league" className="px-5 py-2.5 bg-white rounded-full font-bold text-primary border-2 border-primary hover:bg-primary hover:text-white transition shadow-md">الدوري الإماراتي</Link>
          <Link href="/football/qatar-league" className="px-5 py-2.5 bg-white rounded-full font-bold text-primary border-2 border-primary hover:bg-primary hover:text-white transition shadow-md">الدوري القطري</Link>
          <Link href="/football/premier-league" className="px-5 py-2.5 bg-white rounded-full font-bold text-primary border-2 border-primary hover:bg-primary hover:text-white transition shadow-md">الدوري الإنجليزي</Link>
          <Link href="/football/world-cup" className="px-5 py-2.5 bg-white rounded-full font-bold text-primary border-2 border-primary hover:bg-primary hover:text-white transition shadow-md">كأس العالم</Link>
        </div>
      </section>

      <IPTVLeagueNav type="both" currentPage="/football/saudi-league" />

      <section className="py-16 px-6 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">الأسئلة الشائعة</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">إجابات للأسئلة الأكثر شيوعاً حول مشاهدة الدوري السعودي عبر IPTV</p>
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

      <section className="py-16 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">تواصل معنا لمشاهدة الدوري السعودي</h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          لا تتردد في الاتصال بنا للحصول على استشارة مجانية أو لحجز اشتراك IPTV لمشاهدة الدوري السعودي دوري روشن
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6 items-center">
          <a href="tel:96550266068" className="flex items-center gap-2 px-8 py-4 bg-primary hover:bg-primary/90 text-white rounded-full font-bold shadow-lg transition">
            <Phone size={24} /> اتصال مباشر
          </a>
          <a href="https://wa.me/96550266068?text=مرحبًا، أود الاستفسار عن مشاهدة الدوري السعودي عبر IPTV." target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-8 py-4 bg-green-600 hover:bg-green-700 text-white rounded-full font-bold shadow-lg transition">
            <MessageCircle size={24} /> واتساب مباشر
          </a>
        </div>
      </section>
    </main>
  );
}
