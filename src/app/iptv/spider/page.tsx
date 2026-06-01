// app/iptv/spider/page.tsx
import Link from "next/link";
import Image from "next/image";
import { Phone, MessageCircle, CheckCircle, Star, Clock, Shield, HeadphonesIcon, Tv, Radio, Globe, Zap, Award } from "lucide-react";
import { IPTVLeagueNav } from "@/components/IPTVLeagueNav";
import { Metadata } from "next";
import { PageSeoSchemas } from "@/components/PageSeoSchemas";

// جميع مدن الكويت
const kuwaitCities = [
  "مدينة الكويت", "حولى", "الفروانية", "الجهراء", "الأحمدي", "مبارك الكبير",
  "الفنطاس", "السالمية", "الشفافيه", "الرقعي", "الفيحاء", "خيطان",
  "العبدلي", "مشرف", "الصباحية", "الجليب", "الظهر", "العزيزية"
];

// الكلمات المفتاحية
const servicesKeywords = [
  "اشتراك سبايدر",
  "سبايدر IPTV",
  "اشتراك سبايدر الكويت",
  "خدمة سبايدر IPTV",
  "اشتراكات IPTV سبايدر",
  "IPTV سبايدر الكويت",
  "اشتراك سبايدر IPTV الكويت",
  "أفضل اشتراك سبايدر",
  "سبايدر IPTV الكويت",
  "اشتراك IPTV سبايدر",
  "سبايدر IPTV اشتراك",
  "اشتراك سبايدر للكويت",
  "IPTV سبايدر سعر",
  "اشتراك سبايدر IPTV سعر",
  "سبايدر IPTV اشتراك شهري",
  "اشتراك سبايدر IPTV سنوي",
  "سبايدر قنوات عربية",
  "سبايدر IPTV beIN",
  "اشتراك سبايدر مباشر",
  "سبايدر IPTV 2026"
];

export const metadata: Metadata = {
  title: "اشتراك سبايدر IPTV في الكويت – افضل اشتراكات IPTV عربية",
  description:
    "احصل على أفضل اشتراك سبايدر IPTV في الكويت مع بث مباشر لمباريات كأس العالم. قنوات عربية وعالمية بجودة HD و4K، خدمة موثوقة ودعم فني مستمر. تواصل الآن للحصول على تفعيل سريع.",
  keywords: `${servicesKeywords.join(", ")}, ${kuwaitCities.join(", ")}, IPTV عربي, قنوات عربية, اشتراك سبايدر مباشر, beIN سبايدر, بث عربي`,
  openGraph: {
    title: "اشتراك سبايدر IPTV في الكويت – افضل اشتراكات IPTV عربية",
    description:
      "احصل على أفضل اشتراك سبايدر IPTV في الكويت مع بث مباشر لمباريات كأس العالم. قنوات عربية وعالمية بجودة HD و4K، خدمة موثوقة ودعم فني مستمر. تواصل الآن للحصول على تفعيل سريع.",
    url: "https://satellitealrajaa.com/iptv/spider",
    type: "website",
    images: [
      {
        url: "https://satellitealrajaa.com/sattech/iptv/spider-og.jpg",
        width: 1200,
        height: 630,
        alt: "اشتراك سبايدر IPTV في الكويت - قنوات عربية وعالمية بجودة HD و4K",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "اشتراك سبايدر IPTV في الكويت",
    description:
      "أفضل اشتراك سبايدر IPTV في الكويت مع جودة عالية وخدمة موثوقة.",
    images: ["https://satellitealrajaa.com/sattech/iptv/spider-og.jpg"],
  },
  alternates: {
    canonical: "https://satellitealrajaa.com/iptv/spider",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function SpiderIPTVPage() {
  const features = [
    { title: "قنوات عربية", desc: "آلاف القنوات العربية بجودة عالية", icon: <Globe className="text-secondary" size={24} /> },
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
      question: "ما هي مدة الاشتراك المتاحة لاشتراك سبايدر IPTV؟",
      answer: "نقدم اشتراكات شهرية وسنوية لاشتراك سبايدر IPTV تناسب احتياجاتك. اشتراك سبايدر IPTV الشهري مثالي للاختبار، بينما اشتراك سبايدر IPTV السنوي يوفر توفيراً كبيراً في التكلفة."
    },
    {
      question: "هل يعمل اشتراك سبايدر IPTV على جميع الأجهزة؟",
      answer: "نعم، اشتراك سبايدر IPTV يعمل على جميع الأجهزة الذكية والتلفزيونات الذكية. يمكنك استخدام اشتراك سبايدر IPTV على Android، iOS， Smart TV، Apple TV، Fire TV، وأجهزة الكمبيوتر."
    },
    {
      question: "ما هي القنوات العربية المتوفرة في اشتراك سبايدر IPTV؟",
      answer: "اشتراك سبايدر IPTV يتضمن جميع القنوات العربية الشهيرة من جميع الدول العربية مثل MBC، beIN Sports، Rotana، LBC، Al Jazeera، Al Arabiya، والعديد من القنوات الأخرى."
    },
    {
      question: "كم يستغرق وقت تفعيل اشتراك سبايدر IPTV؟",
      answer: "عادة ما يتم تفعيل اشتراك سبايدر IPTV خلال دقائق بعد إتمام عملية الدفع. نحن نضمن تفعيل فوري لاشتراك سبايدر IPTV مع دعم فني كامل."
    },
    {
      question: "هل يمكن استخدام اشتراك سبايدر IPTV على عدة أجهزة؟",
      answer: "نعم، يمكنك استخدام اشتراك سبايدر IPTV على عدة أجهزة في نفس الوقت حسب نوع الاشتراك. اشتراك سبايدر IPTV يدعم الاستخدام المتعدد."
    },
    {
      question: "ما هي طرق الدفع المتاحة لاشتراك سبايدر IPTV؟",
      answer: "نقبل جميع طرق الدفع لاشتراك سبايدر IPTV بما في ذلك النقد، البطاقات الائتمانية، والتحويلات البنكية. يمكنك الدفع عند الاستلام في جميع مناطق الكويت."
    }
  ];

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "الرئيسية", item: "https://satellitealrajaa.com/" },
      { "@type": "ListItem", position: 2, name: "اشتراك سبايدر IPTV", item: "https://satellitealrajaa.com/iptv/spider" },
    ],
  };

  return (
    <>
    <PageSeoSchemas
      serviceName={"اشتراك سبايدر IPTV في الكويت – أفضل اشتراكات IPTV"}
      serviceDescription={"احصل على أفضل اشتراك سبايدر IPTV في الكويت. خدمة موثوقة وسريعة مع جودة عالية لجميع القنوات العربية والعالمية. تواصل معنا الآن للحصول على أفضل الأسعار."}
      path={"/iptv/spider"} faqs={faqs}
    />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
    <main className="relative">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary/90 to-green-700 text-white min-h-[70vh] flex flex-col justify-center items-center text-center p-6">
        <div className="max-w-4xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
            اشتراك سبايدر IPTV
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            أفضل اشتراك سبايدر IPTV في الكويت مع آلاف القنوات العربية والعالمية بجودة عالية.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:96550266068"
              className="bg-white text-primary font-bold px-8 py-4 rounded-full shadow-lg hover:bg-gray-100 transition flex items-center justify-center gap-2 text-lg"
            >
              <Phone size={20} /> اتصال مباشر
            </a>
            <a
              href="https://wa.me/96550266068?text=مرحبًا، أود الاستفسار عن اشتراك سبايدر IPTV."
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">اشتراك سبايدر IPTV الأفضل في الكويت</h2>
            <p className="text-gray-600 text-lg mb-6">
              اشتراك سبايدر IPTV هو الحل الأمثل لمحبي القنوات العربية والعالمية في الكويت. يتميز اشتراك سبايدر IPTV بخوادم سريعة ومستقرة موزعة في جميع أنحاء العالم، مما يضمن جودة بث ممتازة بدون تقطيع. اشتراك سبايدر IPTV يوفر أكثر من 8000 قناة تلفزيونية تشمل جميع القنوات العربية الشهيرة.
            </p>
            <p className="text-gray-600 text-lg mb-6">
              نحن في ستلايت الرجاء نقدم أفضل أسعار اشتراك سبايدر IPTV في الكويت مع ضمان الجودة والاستقرار. اشتراك سبايدر IPTV متوافق مع جميع الأجهزة الذكية والتلفزيونات الذكية، مما يجعله الخيار الأمثل لعشاق القنوات العربية. فريقنا الفني المحترف جاهز لمساعدتك في اختيار الاشتراك المناسب لك وتفعيله خلال دقائق.
            </p>
            <p className="text-gray-600 text-lg mb-6">
              يوفر اشتراك سبايدر IPTV تدفق قنوات عربية سريعة مع تجربة مشاهدة بدون تقطيع. يدعم اشتراك سبايدر بث مباريات المباريات العربية والقنوات الرياضية والإخبارية والترفيهية عبر الإنترنت في الكويت.
            </p>
            <p className="text-gray-600 text-lg mb-6">
              استمتع أيضاً بمكتبة أفلام ومسلسلات عربية وعالمية ضمن باقة اشتراك سبايدر IPTV. نقدّم خدمة ممتازة وسرعة عالية في البث لتستمتع بالمحتوى الترفيهي بجودة HDTV و4K.
            </p>
            <p className="text-gray-600 text-lg mb-6">
              اشتراك سبايدر IPTV يشمل قنوات عربية من جميع الدول العربية، قنوات رياضية عربية وعالمية، قنوات أفلام ومسلسلات، وقنوات أخبار. جميع القنوات متوفرة بجودة HD و 4K مع دعم للبث المباشر والفيديو عند الطلب. اشتراك سبايدر IPTV مناسب للعائلات الكبيرة حيث يمكن استخدامه على عدة أجهزة في نفس الوقت.
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
              src="/sattech/iptv/spidertv.png"
              alt="اشتراك سبايدر IPTV"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* مشاهدة المباريات والربط الداخلي */}
      <section className="py-16 px-6 max-w-6xl mx-auto bg-white rounded-3xl shadow-xl">
        <div className="prose prose-lg max-w-none text-gray-700">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">سبايدر IPTV لمتابعة مباريات كأس العالم 2026</h2>
          <p>
            اشتراك سبايدر IPTV يقدم لك أفضل تجربة لمتابعة المباريات العربية والدولية في الكويت. يمكنك مشاهدة مباريات كأس العالم عبر القنوات العربية المباشرة بجودة HD و4K بدون تأخير، مع استقرار جيد وخدمة دعم فني متاحة دائماً.
          </p>
          <p>
            إذا كنت تبحث عن بث مباشر لمباريات كأس العالم، فإن اشتراك سبايدر IPTV هو الخيار الأمثل. لمزيد من الخيارات الأوروبية، تحقق من <Link href="/iptv/berlin" className="text-primary font-semibold">اشتراك برلين IPTV</Link>، وللعروض الخاصة تابع <Link href="/football/world-cup" className="text-primary font-semibold">عروض كأس العالم IPTV</Link> في الكويت.
          </p>
          <ul className="list-disc list-inside space-y-3 text-gray-600">
            <li>بث مباشر لجميع المباريات العربية عبر قنوات IPTV سبايدر.</li>
            <li>دعم مشاهدة على تلفزيون ذكي، Android TV، Apple TV، و Fire TV.</li>
            <li>استقرار بث عالي بدون تقطيع خلال أوقات المباريات المهمة.</li>
            <li>تفعيل فوري وخدمة عملاء سريعة لمتابعة كأس العالم في الكويت.</li>
          </ul>
        </div>
      </section>

      {/* Detailed Content Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">لماذا تختار اشتراك سبايدر IPTV في الكويت؟</h2>
          <div className="text-gray-700 space-y-4 text-lg leading-relaxed">
            <p>
              اشتراك سبايدر IPTV هو الحل الأمثل لمحبي القنوات العربية في الكويت. يتميز اشتراك سبايدر IPTV بخوادم سريعة ومستقرة موزعة في جميع أنحاء العالم، مما يضمن جودة بث ممتازة بدون تقطيع. اشتراك سبايدر IPTV يوفر أكثر من 8000 قناة تلفزيونية تشمل جميع القنوات العربية الشهيرة من جميع الدول العربية.
            </p>
            <p>
              اشتراك سبايدر IPTV يشمل قنوات رياضية عربية وعالمية مثل قنوات beIN Sports، قنوات MBC الرياضية، قنوات ESPN، وقنوات رياضية أخرى. كما يتضمن اشتراك سبايدر IPTV قنوات أفلام ومسلسلات عربية بجودة عالية. اشتراك سبايدر IPTV مناسب بشكل خاص للعائلات العربية في الكويت الذين يرغبون بمتابعة قنواتهم المفضلة.
            </p>
            <p>
              اشتراك سبايدر IPTV يتميز بسهولة الاستخدام والتثبيت. يمكنك استخدام اشتراك سبايدر IPTV على أي جهاز ذكي أو تلفزيون ذكي. اشتراك سبايدر IPTV يدعم جميع التطبيقات الشائعة مثل Smart TV، Android TV، Apple TV، و Fire TV. نحن نقدم دعم فني كامل لمساعدتك في إعداد اشتراك سبايدر IPTV على جهازك.
            </p>
          </div>
        </div>
      </section>

      {/* محتوى إضافي موسع — سبايدر ومحتوى عربي غني */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 items-center">
          <div className="rounded-3xl overflow-hidden shadow-lg bg-emerald-50 p-4">
            <Image
              src="/sattech/iptv/library.jpg"
              alt="مكتبة سبايدر IPTV - قنوات عربية وأفلام" 
              width={720}
              height={520}
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
          <div className="prose text-gray-700 text-lg leading-relaxed">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">سبايدر IPTV — قلب المحتوى العربي</h2>
            <p>
              اشتراك سبايدر مكرّس لتقديم أفضل القنوات العربية بجودة عالية، مع توليفة واسعة من القنوات الترفيهية، الإخبارية والرياضية. مكتبة سبايدر تضم آلاف الحلقات من المسلسلات العربية والبرامج المحلية التي يصعب إيجادها في مكان واحد، كما نوفر قوائم تشغيل مُنظَّمة حسب النوع والبلد لتسهيل العثور على المحتوى المفضل بسرعة.
            </p>
            <p>
              كما يتضمن الاشتراك ميزات متقدمة مثل استئناف المشاهدة، دعم ترجمات متعددة، وخيار مشاهدة المحتوى بدقة 4K حيثما أمكن. سواء كنت تبحث عن متابعة الدوري المحلي أو مشاهدة أحدث المسلسلات، سبايدر يوفر تجربة مشاهدة غنية وموثوقة مع دعم فني سريع على مدار الساعة.
            </p>
          </div>
        </div>
      </section>

      {/* المميزات */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">مميزات اشتراك سبايدر IPTV</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              اكتشف لماذا يعتبر اشتراك سبايدر IPTV الخيار الأفضل لمشاهدة القنوات العربية في الكويت
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
            نقدم إجابات للأسئلة الأكثر شيوعاً حول اشتراك سبايدر IPTV
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
      <IPTVLeagueNav type="both" currentPage="/iptv/spider" />

      {/* أرقام التواصل */}
      <section className="py-16 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">تواصل معنا الآن</h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          لا تتردد في الاتصال بنا للحصول على استشارة مجانية أو لحجز اشتراك سبايدر IPTV
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6 items-center">
          <a
            href="tel:96550266068"
            className="flex items-center gap-2 px-8 py-4 bg-primary hover:bg-primary/90 text-white rounded-full font-bold shadow-lg transition transform hover:scale-105"
          >
            <Phone size={24} /> اتصال مباشر
          </a>
          <a
            href="https://wa.me/96550266068?text=مرحبًا، أود الاستفسار عن اشتراك سبايدر IPTV."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-8 py-4 bg-green-600 hover:bg-green-700 text-white rounded-full font-bold shadow-lg transition transform hover:scale-105"
          >
            <MessageCircle size={24} /> واتساب مباشر
          </a>
        </div>
      </section>
    </main>
    </>
  );
}
