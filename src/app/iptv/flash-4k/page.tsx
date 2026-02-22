// app/iptv/flash-4k/page.tsx
import Image from "next/image";
import { Phone, MessageCircle, CheckCircle, Star, Clock, Shield, HeadphonesIcon, Tv, Radio, Award, Cpu, Sparkles } from "lucide-react";
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
  "فلاش 4K",
  "فلاش 4K IPTV",
  "فلاش 4K الكويت",
  "خدمة فلاش 4K",
  "اشتراكات IPTV فلاش 4K",
  "IPTV فلاش 4K الكويت",
  "رسيفر فلاش 4K",
  "فلاش 4K IPTV الكويت",
  "أفضل فلاش 4K",
  "فلاش 4K IPTV رسيفر",
  "فلاش 4K للكويت",
  "IPTV فلاش 4K سعر",
  "فلاش 4K IPTV سعر",
  "شراء فلاش 4K",
  "رسيفر فلاش 4K IPTV"
];

export const metadata: Metadata = {
  title: "فلاش 4K IPTV في الكويت – أفضل رسيفرات 4K",
  description:
    "احصل على أفضل فلاش 4K IPTV في الكويت. جهاز موثوق وسريع مع جودة 4K فائقة لجميع القنوات. تواصل معنا الآن للحصول على أفضل الأسعار.",
  keywords: `${servicesKeywords.join(", ")}, ${kuwaitCities.join(", ")}`,
  openGraph: {
    title: "فلاش 4K IPTV في الكويت – أفضل رسيفرات 4K",
    description:
      "احصل على أفضل فلاش 4K IPTV في الكويت. جهاز موثوق وسريع مع جودة 4K فائقة لجميع القنوات.",
    url: "https://satellitealrajaa.com/iptv/flash-4k",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "فلاش 4K IPTV في الكويت",
    description:
      "أفضل فلاش 4K IPTV في الكويت مع جودة 4K فائقة وخدمة موثوقة."
  },
  alternates: {
    canonical: "https://satellitealrajaa.com/iptv/flash-4k",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Flash4KPage() {
  const features = [
    { title: "جودة 4K فائقة", desc: "مشاهدة بجودة 4K فائقة الوضوح", icon: <Sparkles className="text-secondary" size={24} /> },
    { title: "أداء قوي", desc: "معالج قوي لضمان أداء سلس وسريع", icon: <Cpu className="text-secondary" size={24} /> },
    { title: "واجهة حديثة", desc: "واجهة مستخدم عصرية وسهلة الاستخدام", icon: <Tv className="text-secondary" size={24} /> },
    { title: "دعم فني", desc: "دعم فني متواصل على مدار الساعة", icon: <HeadphonesIcon className="text-secondary" size={24} /> },
    { title: "تحديثات مستمرة", desc: "تحديثات برمجية مستمرة لتحسين الأداء", icon: <Radio className="text-secondary" size={24} /> },
    { title: "أسعار مناسبة", desc: "أسعار تنافسية ومناسبة للجميع", icon: <Award className="text-secondary" size={24} /> },
  ];

  const benefits = [
    { icon: <Clock className="text-secondary" size={24} />, title: "تركيب سريع", desc: "تركيب وتفعيل سريع خلال دقائق" },
    { icon: <Shield className="text-secondary" size={24} />, title: "ضمان الجودة", desc: "ضمان على جودة الجهاز والأداء" },
    { icon: <HeadphonesIcon className="text-secondary" size={24} />, title: "دعم فني", desc: "دعم فني متواصل بعد الشراء" },
    { icon: <Star className="text-secondary" size={24} />, title: "جودة 4K", desc: "أفضل جودة 4K فائقة الوضوح" },
  ];

  const faqs = [
    {
      question: "ما هي مواصفات فلاش 4K IPTV؟",
      answer: "فلاش 4K IPTV يتميز بمعالج ثماني النواة قوي، ذاكرة وصول عشوائي كبيرة، وذاكرة تخزين داخلية واسعة. فلاش 4K IPTV يدعم جودة 4K فائقة الوضوح مع واجهة مستخدم عصرية وسهلة الاستخدام."
    },
    {
      question: "هل يعمل فلاش 4K IPTV مع جميع اشتراكات IPTV؟",
      answer: "نعم، فلاش 4K IPTV متوافق مع معظم اشتراكات IPTV المتاحة بما في ذلك اشتراك برلين، اشتراك سبايدر، واشتراكات IPTV أخرى. فلاش 4K IPTV يدعم جميع التطبيقات الشائعة."
    },
    {
      question: "ما هي طرق الدفع المتاحة لفلاش 4K IPTV؟",
      answer: "نقبل جميع طرق الدفع لفلاش 4K IPTV بما في ذلك النقد، البطاقات الائتمانية، والتحويلات البنكية. يمكنك الدفع عند الاستلام في جميع مناطق الكويت."
    },
    {
      question: "هل يتم التركيب والتشغيل لفلاش 4K IPTV؟",
      answer: "نعم، نقدم خدمة التركيب والتشغيل الكاملة لفلاش 4K IPTV مع الشراء. فريقنا الفني المحترف يقوم بتركيب فلاش 4K IPTV وتشغيله في منزلك مع ضمان على العمل."
    },
    {
      question: "ما هي الضمانات المتوفرة لفلاش 4K IPTV؟",
      answer: "نقدم ضمان شامل على فلاش 4K IPTV يشمل ضمان على الجهاز وضمان على التركيب والتشغيل. فلاش 4K IPTV يأتي مع دعم فني كامل بعد الشراء."
    },
    {
      question: "ما الفرق بين فلاش 4K IPTV ورسيفر الجني IPTV؟",
      answer: "فلاش 4K IPTV يتميز بجودة 4K فائقة الوضوح ومعالج ثماني النواة، بينما رسيفر الجني IPTV يتميز بمعالج رباعي النواة. كلاهما يوفر أداء ممتاز ولكن فلاش 4K IPTV أفضل للجودة الفائقة."
    }
  ];

  return (
    <main className="relative">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary/90 to-green-700 text-white min-h-[70vh] flex flex-col justify-center items-center text-center p-6">
        <div className="max-w-4xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
            فلاش 4K IPTV
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            أفضل فلاش 4K IPTV في الكويت مع جودة 4K فائقة الوضوح وأداء ممتاز لجميع القنوات.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:96550266068"
              className="bg-white text-primary font-bold px-8 py-4 rounded-full shadow-lg hover:bg-gray-100 transition flex items-center justify-center gap-2 text-lg"
            >
              <Phone size={20} /> اتصال مباشر
            </a>
            <a
              href="https://wa.me/96550266068?text=مرحبًا، أود الاستفسار عن فلاش 4K IPTV."
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">فلاش 4K IPTV الأفضل في الكويت</h2>
            <p className="text-gray-600 text-lg mb-6">
              فلاش 4K IPTV هو أحد أحدث أجهزة استقبال IPTV المتاحة في الكويت. يتميز فلاش 4K IPTV بجودة 4K فائقة الوضوح وأداء ممتاز يضمن تجربة مشاهدة استثنائية. فلاش 4K IPTV يدعم جميع اشتراكات IPTV المتاحة مع واجهة مستخدم عصرية وسهلة الاستخدام.
            </p>
            <p className="text-gray-600 text-lg mb-6">
              نحن في ستلايت الرجاء نقدم أفضل أسعار فلاش 4K IPTV في الكويت مع ضمان الجودة والأداء. فلاش 4K IPTV متوافق مع جميع اشتراكات IPTV الشائعة ويأتي مع دعم فني كامل. فريقنا الفني المحترف جاهز لمساعدتك في اختيار فلاش 4K IPTV المناسب لك وتركيبه وتشغيله.
            </p>
            <p className="text-gray-600 text-lg mb-6">
              فلاش 4K IPTV يتميز بمواصفات تقنية متقدمة تشمل معالج ثماني النواة قوي، ذاكرة وصول عشوائي كبيرة، وذاكرة تخزين داخلية واسعة. فلاش 4K IPTV يدعم جودة 4K فائقة الوضوح مع دعم للبث المباشر والفيديو عند الطلب. فلاش 4K IPTV مناسب للاستخدام المنزلي والتجاري.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <div className="flex items-center gap-2">
                <CheckCircle className="text-green-600" size={20} />
                <span className="text-gray-700">جودة 4K فائقة</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="text-green-600" size={20} />
                <span className="text-gray-700">أداء قوي</span>
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
              src="/sattech/iptv/Flash-4K.png"
              alt="فلاش 4K IPTV"
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">لماذا تختار فلاش 4K IPTV في الكويت؟</h2>
          <div className="text-gray-700 space-y-4 text-lg leading-relaxed">
            <p>
              فلاش 4K IPTV هو الحل الأمثل لمحبي مشاهدة القنوات بجودة 4K فائقة الوضوح في الكويت. يتميز فلاش 4K IPTV بمعالج قوي وأداء ممتاز يضمن تجربة مشاهدة استثنائية بدون تقطيع. فلاش 4K IPTV يدعم جميع اشتراكات IPTV المتاحة مع واجهة مستخدم عصرية وسهلة الاستخدام.
            </p>
            <p>
              فلاش 4K IPTV يتميز بمواصفات تقنية متقدمة تشمل معالج ثماني النواة قوي، ذاكرة وصول عشوائي كبيرة، وذاكرة تخزين داخلية واسعة. فلاش 4K IPTV يدعم جودة 4K فائقة الوضوح مع دعم للبث المباشر والفيديو عند الطلب. فلاش 4K IPTV مناسب للاستخدام المنزلي والتجاري.
            </p>
            <p>
              فلاش 4K IPTV يتميز بسهولة التركيب والتشغيل. يمكنك استخدام فلاش 4K IPTV مع أي اشتراك IPTV متاح. فلاش 4K IPTV يدعم جميع التطبيقات الشائعة ويأتي مع دعم فني كامل. نحن نقدم خدمة التركيب والتشغيل لفلاش 4K IPTV في جميع مناطق الكويت.
            </p>
          </div>
        </div>
      </section>

      {/* المميزات */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">مميزات فلاش 4K IPTV</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              اكتشف لماذا يعتبر فلاش 4K IPTV الخيار الأفضل لمشاهدة القنوات بجودة 4K في الكويت
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
            نقدم إجابات للأسئلة الأكثر شيوعاً حول فلاش 4K IPTV
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
      <IPTVLeagueNav type="both" currentPage="/iptv/flash-4k" />

      {/* أرقام التواصل */}
      <section className="py-16 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">تواصل معنا الآن</h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          لا تتردد في الاتصال بنا للحصول على استشارة مجانية أو لشراء فلاش 4K IPTV
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6 items-center">
          <a
            href="tel:96550266068"
            className="flex items-center gap-2 px-8 py-4 bg-primary hover:bg-primary/90 text-white rounded-full font-bold shadow-lg transition transform hover:scale-105"
          >
            <Phone size={24} /> اتصال مباشر
          </a>
          <a
            href="https://wa.me/96550266068?text=مرحبًا، أود الاستفسار عن فلاش 4K IPTV."
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
