// app/iptv/berlin/page.tsx
import Link from "next/link";
import Image from "next/image";
import { Phone, MessageCircle, CheckCircle, Star, Clock, Shield, HeadphonesIcon, Tv, Radio, Globe, Zap, Award } from "lucide-react";
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
  "اشتراك برلين",
  "برلين IPTV",
  "اشتراك برلين الكويت",
  "خدمة برلين IPTV",
  "اشتراكات IPTV برلين",
  "IPTV برلين الكويت",
  "اشتراك برلين IPTV الكويت",
  "أفضل اشتراك برلين",
  "برلين IPTV الكويت",
  "اشتراك IPTV برلين",
  "برلين IPTV اشتراك",
  "اشتراك برلين للكويت",
  "IPTV برلين سعر",
  "اشتراك برلين IPTV سعر",
  "برلين IPTV اشتراك شهري",
  "اشتراك برلين IPTV سنوي"
];

export const metadata: Metadata = {
  title: "اشتراك برلين IPTV في الكويت – أفضل اشتراكات IPTV",
  description:
    "احصل على أفضل اشتراك برلين IPTV في الكويت. خدمة موثوقة وسريعة مع جودة عالية لجميع القنوات الأوروبية والعالمية. تواصل معنا الآن للحصول على أفضل الأسعار.",
  keywords: `${servicesKeywords.join(", ")}, ${kuwaitCities.join(", ")}`,
  openGraph: {
    title: "اشتراك برلين IPTV في الكويت – أفضل اشتراكات IPTV",
    description:
      "احصل على أفضل اشتراك برلين IPTV في الكويت. خدمة موثوقة وسريعة مع جودة عالية لجميع القنوات الأوروبية والعالمية.",
    url: "https://satellitealrajaa.com/iptv/berlin",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "اشتراك برلين IPTV في الكويت",
    description:
      "أفضل اشتراك برلين IPTV في الكويت مع جودة عالية وخدمة موثوقة."
  },
  alternates: {
    canonical: "https://satellitealrajaa.com/iptv/berlin",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function BerlinIPTVPage() {
  const features = [
    { title: "قنوات أوروبية", desc: "آلاف القنوات الأوروبية بجودة عالية", icon: <Globe className="text-secondary" size={24} /> },
    { title: "قنوات عالمية", desc: "مجموعة واسعة من القنوات العالمية", icon: <Radio className="text-secondary" size={24} /> },
    { title: "جودة HD و 4K", desc: "مشاهدة بجودة عالية HD و 4K", icon: <Tv className="text-secondary" size={24} /> },
    { title: "دعم فني", desc: "دعم فني متواصل على مدار الساعة", icon: <HeadphonesIcon className="text-secondary" size={24} /> },
    { title: "استقرار عالي", desc: "إشارة مستقرة بدون تقطيع", icon: <Zap className="text-secondary" size={24} /> },
    { title: "أسعار مناسبة", desc: "أسعار تنافسية ومناسبة للجميع", icon: <Award className="text-secondary" size={24} /> },
  ];

  const benefits = [
    { icon: <Clock className="text-secondary" size={24} />, title: "تفعيل سريع", desc: "تفعيل فوري للاشتراك خلال دقائق" },
    { icon: <Shield className="text-secondary" size={24} />, title: "ضمان الجودة", desc: "ضمان على جودة الخدمة والاستقرار" },
    { icon: <HeadphonesIcon className="text-secondary" size={24} />, title: "دعم فني", desc: "دعم فني متواصل بعد الاشتراك" },
    { icon: <Star className="text-secondary" size={24} />, title: "جودة عالية", desc: "أفضل جودة صورة وصوت متاحة" },
  ];

  const faqs = [
    {
      question: "ما هي مدة الاشتراك المتاحة لاشتراك برلين IPTV؟",
      answer: "نقدم اشتراكات شهرية وسنوية لاشتراك برلين IPTV تناسب احتياجاتك. اشتراك برلين IPTV الشهري مثالي للاختبار، بينما اشتراك برلين IPTV السنوي يوفر توفيراً كبيراً في التكلفة."
    },
    {
      question: "هل يعمل اشتراك برلين IPTV على جميع الأجهزة؟",
      answer: "نعم، اشتراك برلين IPTV يعمل على جميع الأجهزة الذكية والتلفزيونات الذكية. يمكنك استخدام اشتراك برلين IPTV على Android، iOS، Smart TV، Apple TV، Fire TV، وأجهزة الكمبيوتر."
    },
    {
      question: "ما هي طرق الدفع المتاحة لاشتراك برلين IPTV؟",
      answer: "نقبل جميع طرق الدفع لاشتراك برلين IPTV بما في ذلك النقد، البطاقات الائتمانية، والتحويلات البنكية. يمكنك الدفع عند الاستلام في جميع مناطق الكويت."
    },
    {
      question: "كم يستغرق وقت تفعيل اشتراك برلين IPTV؟",
      answer: "عادة ما يتم تفعيل اشتراك برلين IPTV خلال دقائق بعد إتمام عملية الدفع. نحن نضمن تفعيل فوري لاشتراك برلين IPTV مع دعم فني كامل."
    },
    {
      question: "هل يمكن استخدام اشتراك برلين IPTV على عدة أجهزة؟",
      answer: "نعم، يمكنك استخدام اشتراك برلين IPTV على عدة أجهزة في نفس الوقت حسب نوع الاشتراك. اشتراك برلين IPTV يدعم الاستخدام المتعدد."
    },
    {
      question: "ما هي القنوات المتوفرة في اشتراك برلين IPTV؟",
      answer: "اشتراك برلين IPTV يتضمن أكثر من 5000 قناة أوروبية وعالمية تشمل القنوات الألمانية، الفرنسية، الإيطالية، الإسبانية، البريطانية، والعديد من القنوات الرياضية والأفلام."
    }
  ];

  return (
    <main className="relative">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary/90 to-green-700 text-white min-h-[70vh] flex flex-col justify-center items-center text-center p-6">
        <div className="max-w-4xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
            اشتراك برلين IPTV
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            أفضل اشتراك برلين IPTV في الكويت مع آلاف القنوات الأوروبية والعالمية بجودة عالية.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:96550266068"
              className="bg-white text-primary font-bold px-8 py-4 rounded-full shadow-lg hover:bg-gray-100 transition flex items-center justify-center gap-2 text-lg"
            >
              <Phone size={20} /> اتصال مباشر
            </a>
            <a
              href="https://wa.me/96550266068?text=مرحبًا، أود الاستفسار عن اشتراك برلين IPTV."
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">اشتراك برلين IPTV الأفضل في الكويت</h2>
            <p className="text-gray-600 text-lg mb-6">
              اشتراك برلين IPTV هو أحد أفضل خيارات البث التلفزيوني عبر الإنترنت المتاحة في الكويت. يوفر لك هذا الاشتراك تجربة مشاهدة استثنائية مع آلاف القنوات الأوروبية والعالمية بجودة عالية تصل إلى 4K. اشتراك برلين IPTV يتميز بخوادم قوية ومستقرة تضمن استقرار الإشارة بدون تقطيع أو انقطاع.
            </p>
            <p className="text-gray-600 text-lg mb-6">
              نحن في ستلايت الرجاء نقدم أفضل أسعار اشتراك برلين IPTV في الكويت مع ضمان الجودة والاستقرار. اشتراك برلين IPTV متوافق مع جميع الأجهزة الذكية والتلفزيونات الذكية، مما يجعله الخيار الأمثل لعشاق القنوات الأوروبية. فريقنا الفني المحترف جاهز لمساعدتك في اختيار الاشتراك المناسب لك وتفعيله خلال دقائق.
            </p>
            <p className="text-gray-600 text-lg mb-6">
              اشتراك برلين IPTV يشمل قنوات ألمانية، فرنسية، إيطالية، إسبانية، بريطانية، وأكثر من 5000 قناة أوروبية وعالمية. جميع القنوات متوفرة بجودة HD و 4K مع دعم للبث المباشر والفيديو عند الطلب. اشتراك برلين IPTV مناسب للعائلات الكبيرة حيث يمكن استخدامه على عدة أجهزة في نفس الوقت.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <div className="flex items-center gap-2">
                <CheckCircle className="text-green-600" size={20} />
                <span className="text-gray-700">آلاف القنوات</span>
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
                src="/sattech/iptv/berlin.png"
                alt="اشتراك برلين IPTV"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
          </div>
        </div>
      </section>

      {/* Detailed Content Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">لماذا تختار اشتراك برلين IPTV في الكويت؟</h2>
          <div className="text-gray-700 space-y-4 text-lg leading-relaxed">
            <p>
              اشتراك برلين IPTV هو الحل الأمثل لمحبي القنوات الأوروبية في الكويت. يتميز اشتراك برلين IPTV بخوادم سريعة ومستقرة موزعة في جميع أنحاء أوروبا، مما يضمن جودة بث ممتازة بدون تقطيع. اشتراك برلين IPTV يوفر أكثر من 5000 قناة تلفزيونية تشمل جميع القنوات الأوروبية الشهيرة.
            </p>
            <p>
              اشتراك برلين IPTV يشمل قنوات رياضية أوروبية مثل الدوري الألماني، الدوري الإنجليزي، الدوري الإسباني، والدوري الإيطالي. كما يتضمن اشتراك برلين IPTV قنوات أفلام ومسلسلات أوروبية بجودة عالية. اشتراك برلين IPTV مناسب بشكل خاص للمقيمين الأوروبيين في الكويت الذين يرغبون بمتابعة قنوات بلادهم الأصلية.
            </p>
            <p>
              اشتراك برلين IPTV يتميز بسهولة الاستخدام والتثبيت. يمكنك استخدام اشتراك برلين IPTV على أي جهاز ذكي أو تلفزيون ذكي. اشتراك برلين IPTV يدعم جميع التطبيقات الشائعة مثل Smart TV، Android TV، Apple TV، و Fire TV. نحن نقدم دعم فني كامل لمساعدتك في إعداد اشتراك برلين IPTV على جهازك.
            </p>
          </div>
        </div>
      </section>

      {/* المميزات */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">مميزات اشتراك برلين IPTV</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              اكتشف لماذا يعتبر اشتراك برلين IPTV الخيار الأفضل لمشاهدة القنوات الأوروبية في الكويت
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

      {/* لماذا نحن؟ */}
      <section className="bg-gradient-to-r from-primary/5 to-green-50 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">لماذا تختارنا؟</h2>
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
            نقدم إجابات للأسئلة الأكثر شيوعاً حول اشتراك برلين IPTV
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

      {/* روابط التنقل */}
      <IPTVLeagueNav type="both" currentPage="/iptv/berlin" />

      {/* أرقام التواصل */}
      <section className="py-16 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">تواصل معنا الآن</h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          لا تتردد في الاتصال بنا للحصول على استشارة مجانية أو لحجز اشتراك برلين IPTV
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6 items-center">
          <a
            href="tel:96550266068"
            className="flex items-center gap-2 px-8 py-4 bg-primary hover:bg-primary/90 text-white rounded-full font-bold shadow-lg transition transform hover:scale-105"
          >
            <Phone size={24} /> اتصال مباشر
          </a>
          <a
            href="https://wa.me/96550266068?text=مرحبًا، أود الاستفسار عن اشتراك برلين IPTV."
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
