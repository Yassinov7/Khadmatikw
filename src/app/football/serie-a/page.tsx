// app/football/serie-a/page.tsx
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
  "مشاهدة الدوري الإيطالي IPTV",
  "الدوري الإيطالي IPTV الكويت",
  "مشاهدة الدوري الإيطالي الكويت",
  "بث الدوري الإيطالي IPTV",
  "قنوات الدوري الإيطالي",
  "IPTV الدوري الإيطالي",
  "Serie A IPTV",
  "مشاهدة يوفنتوس",
  "مشاهدة ميلان",
  "مشاهدة إنتر ميلان",
  "بث مباشر الدوري الإيطالي",
  "قنوات الدوري الإيطالي الكويت",
  "مشاهدة نابولي",
  "الدوري الإيطالي سيري أ",
  "اشتراك IPTV لمشاهدة الدوري الإيطالي",
  "أفضل IPTV للدوري الإيطالي",
  "قنوات بي إن سبورت الدوري الإيطالي",
  "بث مباريات يوفنتوس وميلان"
];

export const metadata: Metadata = {
  title: "مشاهدة الدوري الإيطالي IPTV في الكويت – بث مباشر Serie A",
  description:
    "احصل على أفضل اشتراك IPTV لمشاهدة الدوري الإيطالي (Serie A) في الكويت. بث مباشر لجميع مباريات يوفنتوس وميلان وإنتر ميلان ونابولي بجودة HD و 4K. تواصل معنا الآن.",
  keywords: `${servicesKeywords.join(", ")}, ${kuwaitCities.join(", ")}`,
  openGraph: {
    title: "مشاهدة الدوري الإيطالي IPTV في الكويت – بث مباشر Serie A",
    description: "بث مباشر لجميع مباريات الدوري الإيطالي يوفنتوس وميلان وإنتر بجودة HD و 4K.",
    url: "https://satellitealrajaa.com/football/serie-a",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "مشاهدة الدوري الإيطالي IPTV الكويت",
    description: "أفضل اشتراك IPTV لمشاهدة الدوري الإيطالي بث مباشر.",
  },
  alternates: { canonical: "https://satellitealrajaa.com/football/serie-a" },
  robots: { index: true, follow: true },
};

export default function SerieAPage() {
  const features = [
    { title: "بث مباشر", desc: "بث مباشر لجميع مباريات الدوري الإيطالي سيري أ بدون تأخير", icon: <PlayCircle className="text-secondary" size={24} /> },
    { title: "جودة HD و 4K", desc: "مشاهدة مباريات يوفنتوس وميلان وإنتر بجودة فائقة", icon: <Tv className="text-secondary" size={24} /> },
    { title: "قنوات متعددة", desc: "قنوات عربية وأوروبية لبث الدوري الإيطالي", icon: <Globe className="text-secondary" size={24} /> },
    { title: "دعم فني", desc: "دعم فني متواصل لمشاهدة الدوري الإيطالي", icon: <HeadphonesIcon className="text-secondary" size={24} /> },
    { title: "استقرار عالي", desc: "بث مستقر بدون تقطيع أو انقطاع", icon: <Zap className="text-secondary" size={24} /> },
  ];

  const faqs = [
    {
      question: "كيف يمكنني مشاهدة الدوري الإيطالي عبر IPTV؟",
      answer: "يمكنك مشاهدة الدوري الإيطالي (Serie A) عبر IPTV من خلال الاشتراك في اشتراك برلين أو اشتراك سبايدر. نحن نقدم أفضل اشتراكات IPTV لمشاهدة الدوري الإيطالي في الكويت بجودة HD و 4K."
    },
    {
      question: "ما هي أفضل خدمة IPTV لمشاهدة يوفنتوس وميلان؟",
      answer: "نوصي باشتراك برلين IPTV للقنوات الأوروبية أو اشتراك سبايدر IPTV للقنوات العربية. كلاهما يوفر بث مباشر لجميع مباريات الدوري الإيطالي سيري أ."
    },
    {
      question: "هل يمكنني مشاهدة جميع مباريات الدوري الإيطالي؟",
      answer: "نعم، مع اشتراك IPTV يمكنك مشاهدة جميع مباريات الدوري الإيطالي (Serie A) بدون استثناء. نحن نضمن بث مباشر لجميع المباريات بجودة عالية."
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
            مشاهدة الدوري الإيطالي IPTV
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            بث مباشر لجميع مباريات الدوري الإيطالي (Serie A) بجودة HD و 4K في الكويت. يوفنتوس، ميلان، إنتر ميلان، نابولي.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:96550266068" className="bg-white text-primary font-bold px-8 py-4 rounded-full shadow-lg hover:bg-gray-100 transition flex items-center justify-center gap-2 text-lg">
              <Phone size={20} /> اتصال مباشر
            </a>
            <a href="https://wa.me/96550266068?text=مرحبًا، أود الاستفسار عن مشاهدة الدوري الإيطالي عبر IPTV." target="_blank" rel="noopener noreferrer" className="bg-green-600 text-white font-bold px-8 py-4 rounded-full shadow-lg hover:bg-green-700 transition flex items-center justify-center gap-2 text-lg">
              <MessageCircle size={20} /> واتساب مباشر
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">مشاهدة الدوري الإيطالي IPTV في الكويت</h2>
            <div className="text-gray-700 space-y-4 text-lg leading-relaxed">
              <p>
                الدوري الإيطالي (Serie A) هو أحد أعرق الدوريات في أوروبا. نحن في ستلايت الرجاء نقدم لك أفضل طريقة لمشاهدة جميع مباريات الدوري الإيطالي في الكويت. من خلال اشتراك IPTV، يمكنك الاستمتاع ببث مباشر لجميع مباريات الدوري الإيطالي بجودة HD و 4K فائقة الوضوح.
              </p>
              <p>
                سواء كنت من مشجعي يوفنتوس أو ميلان أو إنتر ميلان أو نابولي، مع اشتراك برلين IPTV أو اشتراك سبايدر IPTV يمكنك مشاهدة جميع مباريات الدوري الإيطالي سيري أ على قنوات عربية وأوروبية متعددة. نحن نضمن بث مباشر مستقر لجميع المباريات بدون تقطيع أو انقطاع.
              </p>
              <p>
                نوفر قنوات بي إن سبورت والقنوات الأوروبية الرسمية لبث الدوري الإيطالي. فريقنا جاهز لمساعدتك في اختيار الاشتراك المناسب وتفعيله خلال دقائق في جميع مناطق الكويت.
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
              alt="مشاهدة الدوري الإيطالي IPTV"
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">مميزات مشاهدة الدوري الإيطالي عبر IPTV</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">اكتشف لماذا يعتبر IPTV الخيار الأفضل لمشاهدة الدوري الإيطالي في الكويت</p>
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
          <p className="text-gray-600 max-w-2xl mx-auto">نحن نقدم أفضل اشتراكات IPTV لمشاهدة الدوري الإيطالي في الكويت</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Link href="/iptv/berlin" className="bg-gradient-to-r from-primary/10 to-green-50 rounded-2xl p-8 hover:shadow-lg transition">
            <Tv className="text-primary mb-4" size={40} />
            <h3 className="text-2xl font-bold text-gray-800 mb-4">اشتراك برلين IPTV</h3>
            <p className="text-gray-600">مشاهدة الدوري الإيطالي على القنوات الأوروبية وبي إن سبورت</p>
          </Link>
          <Link href="/iptv/spider" className="bg-gradient-to-r from-primary/10 to-green-50 rounded-2xl p-8 hover:shadow-lg transition">
            <Tv className="text-primary mb-4" size={40} />
            <h3 className="text-2xl font-bold text-gray-800 mb-4">اشتراك سبايدر IPTV</h3>
            <p className="text-gray-600">مشاهدة الدوري الإيطالي على القنوات العربية</p>
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
          <Link href="/football/bundesliga" className="px-5 py-2.5 bg-white rounded-full font-bold text-primary border-2 border-primary hover:bg-primary hover:text-white transition shadow-md">الدوري الألماني</Link>
          <Link href="/football/world-cup" className="px-5 py-2.5 bg-white rounded-full font-bold text-primary border-2 border-primary hover:bg-primary hover:text-white transition shadow-md">كأس العالم</Link>
        </div>
      </section>

      <IPTVLeagueNav type="both" currentPage="/football/serie-a" />

      <section className="py-16 px-6 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">الأسئلة الشائعة</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">إجابات للأسئلة الأكثر شيوعاً حول مشاهدة الدوري الإيطالي عبر IPTV</p>
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
        <h2 className="text-3xl font-bold text-gray-800 mb-8">تواصل معنا لمشاهدة الدوري الإيطالي</h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          لا تتردد في الاتصال بنا للحصول على استشارة مجانية أو لحجز اشتراك IPTV لمشاهدة الدوري الإيطالي سيري أ
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6 items-center">
          <a href="tel:96550266068" className="flex items-center gap-2 px-8 py-4 bg-primary hover:bg-primary/90 text-white rounded-full font-bold shadow-lg transition">
            <Phone size={24} /> اتصال مباشر
          </a>
          <a href="https://wa.me/96550266068?text=مرحبًا، أود الاستفسار عن مشاهدة الدوري الإيطالي عبر IPTV." target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-8 py-4 bg-green-600 hover:bg-green-700 text-white rounded-full font-bold shadow-lg transition">
            <MessageCircle size={24} /> واتساب مباشر
          </a>
        </div>
      </section>
    </main>
  );
}
