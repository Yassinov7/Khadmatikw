// app/football/bundesliga/page.tsx
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
  "مشاهدة الدوري الألماني IPTV",
  "الدوري الألماني IPTV الكويت",
  "مشاهدة الدوري الألماني الكويت",
  "بث الدوري الألماني IPTV",
  "قنوات الدوري الألماني",
  "IPTV الدوري الألماني",
  "Bundesliga IPTV",
  "مشاهدة بايرن ميونخ",
  "مشاهدة بوروسيا دورتموند",
  "بث مباشر الدوري الألماني",
  "قنوات الدوري الألماني الكويت",
  "مشاهدة باير ليفركوزن",
  "الدوري الألماني البوندسليغا",
  "اشتراك IPTV لمشاهدة الدوري الألماني",
  "أفضل IPTV للدوري الألماني",
  "قنوات بي إن سبورت الدوري الألماني",
  "بث مباريات بايرن ميونخ"
];

export const metadata: Metadata = {
  title: "مشاهدة الدوري الألماني IPTV في الكويت – بث مباشر Bundesliga",
  description:
    "احصل على أفضل اشتراك IPTV لمشاهدة الدوري الألماني (Bundesliga) في الكويت. بث مباشر لجميع مباريات بايرن ميونخ وبوروسيا دورتموند وباير ليفركوزن بجودة HD و 4K. تواصل معنا الآن.",
  keywords: `${servicesKeywords.join(", ")}, ${kuwaitCities.join(", ")}`,
  openGraph: {
    title: "مشاهدة الدوري الألماني IPTV في الكويت – بث مباشر Bundesliga",
    description: "بث مباشر لجميع مباريات الدوري الألماني بايرن ميونخ ودورتموند بجودة HD و 4K.",
    url: "https://satellitealrajaa.com/football/bundesliga",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "مشاهدة الدوري الألماني IPTV الكويت",
    description: "أفضل اشتراك IPTV لمشاهدة الدوري الألماني بث مباشر.",
  },
  alternates: { canonical: "https://satellitealrajaa.com/football/bundesliga" },
  robots: { index: true, follow: true },
};

export default function BundesligaPage() {
  const features = [
    { title: "بث مباشر", desc: "بث مباشر لجميع مباريات الدوري الألماني البوندسليغا بدون تأخير", icon: <PlayCircle className="text-secondary" size={24} /> },
    { title: "جودة HD و 4K", desc: "مشاهدة مباريات بايرن ميونخ ودورتموند بجودة فائقة", icon: <Tv className="text-secondary" size={24} /> },
    { title: "قنوات متعددة", desc: "قنوات عربية وأوروبية لبث الدوري الألماني", icon: <Globe className="text-secondary" size={24} /> },
    { title: "دعم فني", desc: "دعم فني متواصل لمشاهدة الدوري الألماني", icon: <HeadphonesIcon className="text-secondary" size={24} /> },
    { title: "استقرار عالي", desc: "بث مستقر بدون تقطيع أو انقطاع", icon: <Zap className="text-secondary" size={24} /> },
  ];

  const faqs = [
    {
      question: "كيف يمكنني مشاهدة الدوري الألماني عبر IPTV؟",
      answer: "يمكنك مشاهدة الدوري الألماني (Bundesliga) عبر IPTV من خلال الاشتراك في اشتراك برلين أو اشتراك سبايدر. نحن نقدم أفضل اشتراكات IPTV لمشاهدة الدوري الألماني في الكويت بجودة HD و 4K."
    },
    {
      question: "ما هي أفضل خدمة IPTV لمشاهدة بايرن ميونخ؟",
      answer: "نوصي باشتراك برلين IPTV للقنوات الأوروبية أو اشتراك سبايدر IPTV للقنوات العربية. كلاهما يوفر بث مباشر لجميع مباريات الدوري الألماني البوندسليغا."
    },
    {
      question: "هل يمكنني مشاهدة جميع مباريات الدوري الألماني؟",
      answer: "نعم، مع اشتراك IPTV يمكنك مشاهدة جميع مباريات الدوري الألماني (Bundesliga) بدون استثناء. نحن نضمن بث مباشر لجميع المباريات بجودة عالية."
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
            مشاهدة الدوري الألماني IPTV
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            بث مباشر لجميع مباريات الدوري الألماني (Bundesliga) بجودة HD و 4K في الكويت. بايرن ميونخ، بوروسيا دورتموند، باير ليفركوزن.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:96550266068" className="bg-white text-primary font-bold px-8 py-4 rounded-full shadow-lg hover:bg-gray-100 transition flex items-center justify-center gap-2 text-lg">
              <Phone size={20} /> اتصال مباشر
            </a>
            <a href="https://wa.me/96550266068?text=مرحبًا، أود الاستفسار عن مشاهدة الدوري الألماني عبر IPTV." target="_blank" rel="noopener noreferrer" className="bg-green-600 text-white font-bold px-8 py-4 rounded-full shadow-lg hover:bg-green-700 transition flex items-center justify-center gap-2 text-lg">
              <MessageCircle size={20} /> واتساب مباشر
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">مشاهدة الدوري الألماني IPTV في الكويت</h2>
            <div className="text-gray-700 space-y-4 text-lg leading-relaxed">
              <p>
                الدوري الألماني (Bundesliga) هو أحد أقوى الدوريات في أوروبا. نحن في ستلايت الرجاء نقدم لك أفضل طريقة لمشاهدة جميع مباريات الدوري الألماني في الكويت. من خلال اشتراك IPTV، يمكنك الاستمتاع ببث مباشر لجميع مباريات الدوري الألماني بجودة HD و 4K فائقة الوضوح.
              </p>
              <p>
                سواء كنت من مشجعي بايرن ميونخ أو بوروسيا دورتموند أو باير ليفركوزن، مع اشتراك برلين IPTV أو اشتراك سبايدر IPTV يمكنك مشاهدة جميع مباريات الدوري الألماني البوندسليغا على قنوات عربية وأوروبية متعددة. نحن نضمن بث مباشر مستقر لجميع المباريات بدون تقطيع أو انقطاع.
              </p>
              <p>
                نوفر قنوات بي إن سبورت والقنوات الأوروبية الرسمية لبث الدوري الألماني. فريقنا جاهز لمساعدتك في اختيار الاشتراك المناسب وتفعيله خلال دقائق في جميع مناطق الكويت.
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
                <span className="text-gray-700">قنوات بي إن سبورت</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="text-green-600" size={20} />
                <span className="text-gray-700">دعم فني 24/7</span>
              </div>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/sattech/iptv/berlin.png"
              alt="مشاهدة الدوري الألماني IPTV"
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">مميزات مشاهدة الدوري الألماني عبر IPTV</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">اكتشف لماذا يعتبر IPTV الخيار الأفضل لمشاهدة الدوري الألماني في الكويت</p>
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
          <p className="text-gray-600 max-w-2xl mx-auto">نحن نقدم أفضل اشتراكات IPTV لمشاهدة الدوري الألماني في الكويت</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Link href="/iptv/berlin" className="bg-gradient-to-r from-primary/10 to-green-50 rounded-2xl p-8 hover:shadow-lg transition">
            <Tv className="text-primary mb-4" size={40} />
            <h3 className="text-2xl font-bold text-gray-800 mb-4">اشتراك برلين IPTV</h3>
            <p className="text-gray-600">مشاهدة الدوري الألماني على القنوات الأوروبية وبي إن سبورت</p>
          </Link>
          <Link href="/iptv/spider" className="bg-gradient-to-r from-primary/10 to-green-50 rounded-2xl p-8 hover:shadow-lg transition">
            <Tv className="text-primary mb-4" size={40} />
            <h3 className="text-2xl font-bold text-gray-800 mb-4">اشتراك سبايدر IPTV</h3>
            <p className="text-gray-600">مشاهدة الدوري الألماني على القنوات العربية</p>
          </Link>
        </div>
      </section>

      <section className="py-8 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">مشاهدة الدوريات الأخرى</h2>
          <p className="text-gray-600">اكتشف صفحات الدوريات الأوروبية والخليجية</p>
        </div>
        <div className="flex flex-wrap gap-3 justify-center">
          <Link href="/football/premier-league" className="px-5 py-2.5 bg-white rounded-full font-bold text-primary border-2 border-primary hover:bg-primary hover:text-white transition shadow-md">الدوري الإنجليزي</Link>
          <Link href="/football/la-liga" className="px-5 py-2.5 bg-white rounded-full font-bold text-primary border-2 border-primary hover:bg-primary hover:text-white transition shadow-md">الدوري الإسباني</Link>
          <Link href="/football/serie-a" className="px-5 py-2.5 bg-white rounded-full font-bold text-primary border-2 border-primary hover:bg-primary hover:text-white transition shadow-md">الدوري الإيطالي</Link>
          <Link href="/football/world-cup" className="px-5 py-2.5 bg-white rounded-full font-bold text-primary border-2 border-primary hover:bg-primary hover:text-white transition shadow-md">كأس العالم</Link>
        </div>
      </section>

      <IPTVLeagueNav type="both" currentPage="/football/bundesliga" />

      <section className="py-16 px-6 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">الأسئلة الشائعة</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">إجابات للأسئلة الأكثر شيوعاً حول مشاهدة الدوري الألماني عبر IPTV</p>
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
        <h2 className="text-3xl font-bold text-gray-800 mb-8">تواصل معنا لمشاهدة الدوري الألماني</h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          لا تتردد في الاتصال بنا للحصول على استشارة مجانية أو لحجز اشتراك IPTV لمشاهدة الدوري الألماني البوندسليغا
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6 items-center">
          <a href="tel:96550266068" className="flex items-center gap-2 px-8 py-4 bg-primary hover:bg-primary/90 text-white rounded-full font-bold shadow-lg transition">
            <Phone size={24} /> اتصال مباشر
          </a>
          <a href="https://wa.me/96550266068?text=مرحبًا، أود الاستفسار عن مشاهدة الدوري الألماني عبر IPTV." target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-8 py-4 bg-green-600 hover:bg-green-700 text-white rounded-full font-bold shadow-lg transition">
            <MessageCircle size={24} /> واتساب مباشر
          </a>
        </div>
      </section>
    </main>
  );
}
