import Link from "next/link";
import Image from "next/image";
import { Phone, MessageCircle, CheckCircle, Star, Clock, Shield, HeadphonesIcon, Trophy, Globe, Tv, Award, PlayCircle, Zap, MapPin } from "lucide-react";
import { IPTVLeagueNav } from "@/components/IPTVLeagueNav";
import { Metadata } from "next";

const kuwaitCities = [
  "مدينة الكويت", "حولى", "الفروانية", "الجهراء", "الأحمدي", "مبارك الكبير",
  "الفنطاس", "السالمية", "الشفافيه", "الرقعي", "الفيحاء", "خيطان",
  "العبدلي", "مشرف", "الصباحية", "الجليب", "الظهر", "العزيزية",
];

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
  "كأس العالم 2026 IPTV",
  "FIFA World Cup 2026 IPTV",
  "بث مباشر كأس العالم",
  "قنوات كأس العالم الكويت",
  "IPTV كأس العالم الكويت",
  "اشتراك IPTV لمشاهدة كأس العالم",
  "أفضل IPTV لكأس العالم",
  "عروض كأس العالم IPTV",
  "خصم كأس العالم IPTV",
  "اشتراك برلين كأس العالم",
  "اشتراك سبايدر كأس العالم",
  "مشاهدة كأس العالم 4K",
  "بث كأس العالم HD",
  "قنوات beIN كأس العالم",
  "مشاهدة منتخب الكويت كأس العالم",
  "World Cup IPTV Kuwait",
];

const worldCupOffers = [
  {
    title: "باقة كأس العالم — برلين",
    discount: "عرض خاص",
    desc: "بث كأس العالم على القنوات الأوروبية بجودة HD. تفعيل فوري في الكويت.",
    href: "/iptv/berlin",
    highlight: true,
  },
  {
    title: "باقة كأس العالم — سبايدر",
    discount: "الأكثر طلباً",
    desc: "قنوات عربية لمشاهدة جميع مباريات كأس العالم 2026 بث مباشر.",
    href: "/iptv/spider",
    highlight: true,
  },
  {
    title: "رسيفر الجني + IPTV",
    discount: "باقة متكاملة",
    desc: "أفضل رسيفر لمشاهدة كأس العالم مع دعم فني كامل.",
    href: "/iptv/genie",
    highlight: false,
  },
  {
    title: "فلاش 4K",
    discount: "جودة 4K",
    desc: "مشاهدة كأس العالم بأعلى جودة بث متاحة بدون تقطيع.",
    href: "/iptv/flash-4k",
    highlight: false,
  },
];

const CANONICAL = "https://satellitealrajaa.com/football/world-cup";
const PAGE_DESCRIPTION =
  "أفضل عروض كأس العالم 2026 IPTV في الكويت. بث مباشر لجميع مباريات كأس العالم بجودة HD و4K. اشتراك برلين وسبايدر مع خصومات خاصة وتفعيل فوري.";
const WHATSAPP =
  "https://wa.me/96550266068?text=مرحبًا، أود الاستفسار عن عروض كأس العالم IPTV في الكويت.";

export const metadata: Metadata = {
  title: "عروض كأس العالم 2026 IPTV الكويت | بث مباشر جميع المباريات HD و 4K",
  description: `${PAGE_DESCRIPTION} اتصل 50266068.`,
  keywords: `${servicesKeywords.join(", ")}, ${kuwaitCities.join(", ")}`,
  openGraph: {
    title: "عروض كأس العالم 2026 IPTV الكويت | بث مباشر HD و 4K",
    description:
      "عروض IPTV لمشاهدة كأس العالم 2026 في الكويت. بث مباشر لجميع المباريات مع اشتراك برلين وسبايدر وتفعيل فوري.",
    url: CANONICAL,
    type: "website",
    locale: "ar_KW",
    images: [
      {
        url: "https://satellitealrajaa.com/sattech/worldcup.jpg",
        width: 1200,
        height: 630,
        alt: "عروض كأس العالم IPTV الكويت - ستلايت الرجاء",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "عروض كأس العالم 2026 IPTV الكويت",
    description: "بث مباشر لجميع مباريات كأس العالم بجودة HD و4K. عروض خاصة في الكويت.",
    images: ["https://satellitealrajaa.com/sattech/worldcup.jpg"],
  },
  alternates: { canonical: CANONICAL },
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

export default function WorldCupIPTVPage() {
  const features = [
    { title: "بث مباشر", desc: "بث مباشر لجميع مباريات كأس العالم 2026 بدون تأخير", icon: <PlayCircle className="text-secondary" size={24} /> },
    { title: "جودة عالية", desc: "مشاهدة بجودة HD و 4K فائقة الوضوح", icon: <Tv className="text-secondary" size={24} /> },
    { title: "جميع المباريات", desc: "جميع مباريات كأس العالم بدون استثناء", icon: <Trophy className="text-secondary" size={24} /> },
    { title: "قنوات متعددة", desc: "قنوات عربية وأوروبية لبث كأس العالم", icon: <Globe className="text-secondary" size={24} /> },
    { title: "دعم فني", desc: "دعم فني متواصل خلال فترة كأس العالم", icon: <HeadphonesIcon className="text-secondary" size={24} /> },
    { title: "عروض خاصة", desc: "خصومات وعروض حصرية على اشتراكات كأس العالم", icon: <Award className="text-secondary" size={24} /> },
  ];

  const benefits = [
    { icon: <Clock className="text-secondary" size={24} />, title: "تفعيل فوري", desc: "تفعيل فوري للاشتراك خلال دقائق" },
    { icon: <Shield className="text-secondary" size={24} />, title: "ضمان الجودة", desc: "ضمان على جودة البث والاستقرار" },
    { icon: <HeadphonesIcon className="text-secondary" size={24} />, title: "دعم فني", desc: "دعم فني متواصل خلال كأس العالم" },
    { icon: <Star className="text-secondary" size={24} />, title: "جودة عالية", desc: "أفضل جودة بث متاحة لكأس العالم" },
  ];

  const faqs = [
    {
      question: "ما هي عروض كأس العالم IPTV المتاحة في الكويت؟",
      answer: "نقدم عروضاً خاصة على اشتراك برلين IPTV واشتراك سبايدر IPTV لمشاهدة كأس العالم 2026. تشمل العروض بث مباشر لجميع المباريات بجودة HD و4K مع تفعيل فوري ودعم فني خلال البطولة. تواصل معنا عبر الواتساب 50266068 للحصول على أحدث الأسعار.",
    },
    {
      question: "كيف يمكنني مشاهدة كأس العالم عبر IPTV؟",
      answer: "يمكنك مشاهدة كأس العالم عبر IPTV من خلال الاشتراك في أحد خدمات IPTV المتاحة مثل اشتراك برلين أو اشتراك سبايدر. نحن نقدم أفضل اشتراكات IPTV لمشاهدة كأس العالم في الكويت مع تفعيل خلال دقائق.",
    },
    {
      question: "ما هي أفضل خدمة IPTV لمشاهدة كأس العالم 2026؟",
      answer: "نوصي باشتراك برلين IPTV للقنوات الأوروبية أو اشتراك سبايدر IPTV للقنوات العربية. كلاهما يوفر بث مباشر لجميع مباريات كأس العالم 2026 بجودة عالية في جميع مناطق الكويت.",
    },
    {
      question: "هل يمكنني مشاهدة جميع مباريات كأس العالم؟",
      answer: "نعم، مع اشتراك IPTV يمكنك مشاهدة جميع مباريات كأس العالم 2026 بدون استثناء. نحن نضمن بث مباشر لجميع المباريات بجودة HD و 4K.",
    },
    {
      question: "هل تتوفر عروض خصم على اشتراك كأس العالم؟",
      answer: "نعم، لدينا عروض موسمية خاصة بكأس العالم على باقات برلين وسبايدر والجني. الأسعار تختلف حسب مدة الاشتراك وعدد الأجهزة. اتصل بنا للحصول على عرض السعر الحالي.",
    },
    {
      question: "ما هي طرق الدفع المتاحة لاشتراك IPTV كأس العالم؟",
      answer: "نقبل جميع طرق الدفع بما في ذلك النقد، البطاقات الائتمانية، والتحويلات البنكية. يمكنك الدفع عند الاستلام في جميع مناطق الكويت.",
    },
    {
      question: "كم يستغرق وقت تفعيل الاشتراك؟",
      answer: "عادة ما يتم تفعيل الاشتراك خلال دقائق بعد إتمام عملية الدفع. نحن نضمن تفعيل فوري مع دعم فني كامل قبل انطلاق مباريات كأس العالم.",
    },
    {
      question: "هل يمكنني استخدام الاشتراك على عدة أجهزة؟",
      answer: "نعم، يمكنك استخدام الاشتراك على عدة أجهزة في نفس الوقت حسب نوع الاشتراك. هذا يسمح لك بمشاهدة كأس العالم على عدة شاشات في المنزل.",
    },
  ];

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "الرئيسية", item: "https://satellitealrajaa.com/" },
      { "@type": "ListItem", position: 2, name: "كأس العالم IPTV", item: CANONICAL },
    ],
  };

  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "عروض كأس العالم IPTV الكويت",
    description:
      "بث مباشر لجميع مباريات كأس العالم 2026 في الكويت عبر IPTV بجودة HD و4K. اشتراك برلين وسبايدر مع عروض خاصة.",
    provider: {
      "@type": "LocalBusiness",
      name: "ستلايت الرجاء",
      telephone: "+96550266068",
      url: "https://satellitealrajaa.com/",
      areaServed: { "@type": "Country", name: "Kuwait" },
    },
    areaServed: kuwaitCities.map((city) => ({ "@type": "City", name: city })),
    serviceType: "IPTV World Cup Streaming",
    url: CANONICAL,
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  const webPageLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "عروض كأس العالم 2026 IPTV الكويت",
    description: PAGE_DESCRIPTION,
    url: CANONICAL,
    inLanguage: "ar",
    isPartOf: { "@type": "WebSite", name: "ستلايت الرجاء", url: "https://satellitealrajaa.com/" },
  };

  return (
    <main className="relative">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageLd) }} />

      {/* Hero */}
      <section className="relative bg-gradient-to-r from-emerald-800 via-green-700 to-emerald-900 text-white min-h-[75vh] flex flex-col justify-center items-center text-center p-6 border-b-4 border-yellow-400">
        <div className="max-w-4xl">
          <div className="inline-block bg-yellow-400 text-emerald-900 px-4 py-1.5 rounded-full text-sm font-bold mb-4">
            عروض حصرية — كأس العالم 2026
          </div>
          <div className="mb-6 flex justify-center">
            <Trophy size={80} className="text-yellow-300" aria-hidden />
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
            عروض كأس العالم IPTV في الكويت
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-95">
            بث مباشر لجميع مباريات كأس العالم 2026 بجودة HD و 4K. اشتراك برلين وسبايدر مع تفعيل فوري ودعم فني 24/7.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:96550266068"
              className="bg-white text-emerald-800 font-bold px-8 py-4 rounded-full shadow-lg hover:bg-gray-100 transition flex items-center justify-center gap-2 text-lg"
            >
              <Phone size={20} /> اتصال: 50266068
            </a>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-400 text-emerald-900 font-bold px-8 py-4 rounded-full shadow-lg hover:bg-yellow-300 transition flex items-center justify-center gap-2 text-lg"
            >
              <MessageCircle size={20} /> عروض واتساب
            </a>
          </div>
        </div>
      </section>

      {/* عروض كأس العالم */}
      <section className="py-16 px-6 bg-gradient-to-b from-yellow-50 to-white" aria-labelledby="world-cup-offers">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 id="world-cup-offers" className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              عروض كأس العالم IPTV — اختر باقتك
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              باقات خاصة لموسم كأس العالم 2026 في الكويت. جميع العروض تشمل بث مباشر لكامل البطولة.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {worldCupOffers.map((offer, i) => (
              <Link
                key={i}
                href={offer.href}
                className={`rounded-2xl p-6 flex flex-col gap-3 hover:shadow-xl transition transform hover:-translate-y-1 border-2 ${
                  offer.highlight
                    ? "bg-gradient-to-br from-emerald-600 to-green-700 text-white border-yellow-400 shadow-lg"
                    : "bg-white border-gray-200 shadow-md"
                }`}
              >
                <span
                  className={`text-xs font-bold px-3 py-1 rounded-full w-fit ${
                    offer.highlight ? "bg-yellow-400 text-emerald-900" : "bg-emerald-100 text-emerald-800"
                  }`}
                >
                  {offer.discount}
                </span>
                <h3 className={`text-xl font-bold ${offer.highlight ? "text-white" : "text-gray-800"}`}>{offer.title}</h3>
                <p className={`text-sm flex-1 ${offer.highlight ? "text-white/90" : "text-gray-600"}`}>{offer.desc}</p>
                <span className={`font-bold text-sm ${offer.highlight ? "text-yellow-300" : "text-primary"}`}>
                  احصل على العرض ←
                </span>
              </Link>
            ))}
          </div>
          <p className="text-center text-gray-500 text-sm mt-8">
            * الأسعار والخصومات تختلف حسب مدة الاشتراك. تواصل معنا للحصول على عرض السعر الفوري.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              مشاهدة كأس العالم IPTV في الكويت — الدليل الشامل
            </h2>
            <p className="text-gray-600 text-lg mb-6">
              كأس العالم 2026 هو الحدث الرياضي الأكبر في العالم، ونحن في ستلايت الرجاء نقدم لك أفضل عروض IPTV لمشاهدة جميع مباريات كأس العالم في الكويت. من خلال اشتراك برلين IPTV أو اشتراك سبايدر IPTV، تستمتع ببث مباشر بجودة HD و 4K فائقة الوضوح.
            </p>
            <p className="text-gray-600 text-lg mb-6">
              سواء كنت في حولي، الفروانية، الجهراء، الأحمدي، أو أي منطقة في الكويت — نوفر تفعيل فوري ودعم فني متواصل خلال فترة كأس العالم. نضمن بثاً مستقراً لجميع مباريات البطولة على قنوات عربية وأوروبية بدون تقطيع.
            </p>
            <p className="text-gray-600 text-lg mb-6">
              عروض كأس العالم IPTV لدينا تشمل خصومات موسمية على باقات برلين وسبايدر والجني وفلاش 4K. فريقنا جاهز لمساعدتك في اختيار الاشتراك المناسب وتفعيله خلال دقائق قبل انطلاق المباريات.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              {["بث مباشر لجميع المباريات", "جودة HD و 4K", "دعم فني 24/7", "عروض وخصومات خاصة"].map((label) => (
                <div key={label} className="flex items-center gap-2">
                  <CheckCircle className="text-green-600 shrink-0" size={20} />
                  <span className="text-gray-700">{label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/sattech/worldcup.jpg"
              alt="عروض كأس العالم IPTV الكويت - بث مباشر مباريات كأس العالم 2026"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* المميزات */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              مميزات مشاهدة كأس العالم عبر IPTV
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              اكتشف لماذا يعتبر IPTV الخيار الأفضل لمشاهدة كأس العالم 2026 في الكويت
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-md p-6 flex flex-col gap-3 hover:shadow-lg transition transform hover:-translate-y-1">
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

      {/* IPTV Services */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">اشتراكات IPTV لكأس العالم</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            أفضل اشتراكات IPTV لمشاهدة كأس العالم في الكويت — عروض خاصة على جميع الباقات
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Link href="/iptv/berlin" className="bg-gradient-to-r from-primary/10 to-green-50 rounded-2xl p-6 hover:shadow-lg transition transform hover:-translate-y-1 border border-primary/20">
            <div className="flex items-center gap-3 mb-3">
              <Tv className="text-primary" size={32} />
              <h3 className="text-xl font-bold text-gray-800">اشتراك برلين</h3>
            </div>
            <p className="text-gray-600 text-sm mb-3">بث كأس العالم على القنوات الأوروبية — عرض خاص</p>
            <span className="text-primary font-bold text-sm">اكتشف العرض ←</span>
          </Link>
          <Link href="/iptv/spider" className="bg-gradient-to-r from-primary/10 to-green-50 rounded-2xl p-6 hover:shadow-lg transition transform hover:-translate-y-1 border-2 border-yellow-400 shadow-md">
            <div className="flex items-center gap-3 mb-3">
              <Tv className="text-primary" size={32} />
              <h3 className="text-xl font-bold text-gray-800">اشتراك سبايدر</h3>
            </div>
            <p className="text-gray-600 text-sm mb-3">بث كأس العالم على القنوات العربية — الأكثر طلباً</p>
            <span className="text-primary font-bold text-sm">اكتشف العرض ←</span>
          </Link>
          <Link href="/iptv/genie" className="bg-gradient-to-r from-primary/10 to-green-50 rounded-2xl p-6 hover:shadow-lg transition transform hover:-translate-y-1 border border-primary/20">
            <div className="flex items-center gap-3 mb-3">
              <Tv className="text-primary" size={32} />
              <h3 className="text-xl font-bold text-gray-800">رسيفر الجني</h3>
            </div>
            <p className="text-gray-600 text-sm mb-3">أفضل رسيفر لمشاهدة كأس العالم</p>
            <span className="text-primary font-bold text-sm">اكتشف العرض ←</span>
          </Link>
          <Link href="/iptv/flash-4k" className="bg-gradient-to-r from-primary/10 to-green-50 rounded-2xl p-6 hover:shadow-lg transition transform hover:-translate-y-1 border border-primary/20">
            <div className="flex items-center gap-3 mb-3">
              <Zap className="text-primary" size={32} />
              <h3 className="text-xl font-bold text-gray-800">فلاش 4K</h3>
            </div>
            <p className="text-gray-600 text-sm mb-3">جودة 4K لمشاهدة كأس العالم</p>
            <span className="text-primary font-bold text-sm">اكتشف العرض ←</span>
          </Link>
        </div>
      </section>

      {/* SEO: مناطق الكويت */}
      <section className="py-12 px-6 bg-emerald-50">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center mb-4">
            <MapPin className="text-primary" size={32} aria-hidden />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            عروض كأس العالم IPTV في جميع مناطق الكويت
          </h2>
          <p className="text-gray-600 mb-8 max-w-3xl mx-auto">
            نوصل خدمة IPTV وعروض كأس العالم إلى جميع محافظات ومناطق الكويت مع تفعيل فوري ودعم محلي.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {kuwaitCities.map((city) => (
              <span key={city} className="px-3 py-1.5 bg-white rounded-full text-sm text-gray-700 border border-emerald-200 shadow-sm">
                كأس العالم IPTV {city}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* الدوريات */}
      <section className="py-8 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">مشاهدة الدوريات الكبرى</h2>
          <p className="text-gray-600">بالإضافة لكأس العالم — جميع الدوريات الأوروبية والخليجية</p>
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

      <IPTVLeagueNav type="both" currentPage="/football/world-cup" />

      {/* لماذا نحن */}
      <section className="bg-gradient-to-r from-primary/5 to-green-50 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">لماذا تختار ستلايت الرجاء لكأس العالم؟</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              خبرة طويلة في IPTV والستلايت — عروض حصرية وأسعار تنافسية لجميع العملاء في الكويت
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition">
                <div className="mb-4 p-3 bg-primary/10 rounded-full">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6 max-w-4xl mx-auto" aria-labelledby="world-cup-faq">
        <div className="text-center mb-12">
          <h2 id="world-cup-faq" className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            الأسئلة الشائعة — عروض كأس العالم IPTV
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            إجابات شاملة حول مشاهدة كأس العالم 2026 عبر IPTV في الكويت
          </p>
        </div>
        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <article key={i} className="bg-white rounded-2xl shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">{faq.question}</h3>
              <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">احجز عرض كأس العالم IPTV الآن</h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-lg">
          لا تفوت مباريات كأس العالم 2026. تواصل معنا للحصول على استشارة مجانية وأفضل عروض IPTV في الكويت.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6 items-center">
          <a
            href="tel:96550266068"
            className="flex items-center gap-2 px-8 py-4 bg-primary hover:bg-primary/90 text-white rounded-full font-bold shadow-lg transition transform hover:scale-105"
          >
            <Phone size={24} /> 50266068
          </a>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-8 py-4 bg-green-600 hover:bg-green-700 text-white rounded-full font-bold shadow-lg transition transform hover:scale-105"
          >
            <MessageCircle size={24} /> واتساب — عروض كأس العالم
          </a>
        </div>
      </section>
    </main>
  );
}
