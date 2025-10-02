// app/intercom-service/page.tsx
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Phone, MessageCircle, CheckCircle, Star, Clock, Shield, Volume2, HeadphonesIcon } from "lucide-react";

// جميع المدن الكويتية
const kuwaitCities = [
  "مدينة الكويت", "حولى", "الفروانية", "الجهراء", "الأحمدي", "مبارك الكبير", "الفنطاس", "السالمية",
  "الشفافيه", "الرقعي", "الفيحاء", "خيطان", "العبدلي", "مشرف", "الصباحية", "الجليب", "الظهر", "العزيزية"
];

// الخدمات والكلمات المفتاحية
const servicesKeywords = [
  "فني انتركم الكويت",
  "تركيب انتركم",
  "صيانة انتركم",
  "خدمة انتركم احترافية",
  "تصليح انتركم",
  "انتركم فيديو",
  "انتركم صوتي",
  "انتركم ذكي"
].join(", ");

// Metadata
export const metadata: Metadata = {
  title: "فني انتركم الكويت – تركيب وصيانة احترافية",
  description:
    "خدمة تركيب وصيانة أنظمة الانتركم في الكويت بجودة عالية وخبرة مميزة. نقدم جميع أنواع الانتركم الصوتي والفيديو مع صيانة وضمان.",
  keywords: `${servicesKeywords}, ${kuwaitCities.join(", ")}`,
  openGraph: {
    title: "فني انتركم الكويت – تركيب وصيانة أنظمة الاتصال الداخلي",
    description:
      "خدمة تركيب وصيانة أنظمة الانتركم في الكويت، مع ضمان الجودة وخدمة ما بعد البيع. تواصل معنا الآن للحصول على أفضل خدمة سريعة وموثوقة.",
    url: "https://satellitealrajaa.com/intercom-service",
    images: ["/intercom-service-og.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "فني انتركم الكويت",
    description:
      "خدمة احترافية لتركيب وصيانة أنظمة الانتركم الصوتي والفيديو مع ضمان.",
  },
  alternates: {
    canonical: "https://satellitealrajaa.com/intercom-service",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function IntercomServicePage() {
  const serviceDescriptions = [
    { title: "تركيب انتركم فيديو", desc: "تركيب أنظمة انتركم بالفيديو عالية الوضوح للمنازل والمكاتب." },
    { title: "صيانة الانتركم", desc: "كشف وإصلاح الأعطال بدقة لضمان أفضل أداء للنظام." },
    { title: "انتركم صوتي", desc: "تركيب وصيانة أنظمة الانتركم الصوتي التقليدية والحديثة." },
    { title: "انتركم ذكي", desc: "حلول الانتركم الذكي مع إمكانية التحكم عن بُعد." },
    { title: "توصيل شبكي", desc: "ربط أنظمة الانتركم بالشبكة الداخلية أو الإنترنت." },
    { title: "خدمة ما بعد البيع", desc: "دعم فني وصيانة دورية لضمان استمرارية العمل." },
  ];

  const works = [
    "/sattech/intercom/work2.jpg",
    "/sattech/intercom/work1.jpeg",
    "/sattech/intercom/work3.jpg",
    "/sattech/intercom/work4.jpeg",
    "/sattech/intercom/work6.jpg",
  ];

  const benefits = [
    { icon: <Volume2 className="text-secondary" size={24} />, title: "اتصال واضح", desc: "جودة صوت عالية وبدون تشويش" },
    { icon: <Shield className="text-secondary" size={24} />, title: "أمان مضمون", desc: "أنظمة آمنة ومحمية بكلمات مرور" },
    { icon: <HeadphonesIcon className="text-secondary" size={24} />, title: "دعم فني", desc: "دعم فني متواصل بعد إتمام العمل" },
    { icon: <Star className="text-secondary" size={24} />, title: "جودة عالية", desc: "نستخدم أفضل المعدات والتقنيات الحديثة" },
  ];

  const faqs = [
    {
      question: "ما هي مدة ضمان تركيب الانتركم؟",
      answer: "نقدم ضماناً شاملاً لمدة سنة على جميع أعمال التركيب والصيانة، مع إمكانية تمديد الضمان."
    },
    {
      question: "هل تقدمون خدمات في جميع مناطق الكويت؟",
      answer: "نعم، نقدم خدماتنا في جميع مدن ومقاطعات الكويت بما في ذلك مدينة الكويت، حولي، الفروانية، الجهراء، الأحمدي، ومبارك الكبير."
    },
    {
      question: "ما هي طرق الدفع المتاحة؟",
      answer: "نقبل多种 طرق الدفع بما في ذلك النقد، البطاقات الائتمانية، والتحويلات البنكية."
    },
    {
      question: "كم يستغرق وقت تركيب نظام الانتركم؟",
      answer: "يعتمد الوقت على عدد الوحدات وتعقيد النظام، عادة ما يتراوح بين 1-3 ساعات."
    }
  ];

  return (
    <main className="relative">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary/90 to-green-700 text-white min-h-[70vh] flex flex-col justify-center items-center text-center p-6">
        <div className="max-w-4xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
            فني انتركم الكويت
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            تركيب وصيانة أنظمة الانتركم الصوتي والفيديو بجودة عالية في جميع مدن الكويت.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:96550266068"
              className="bg-white text-primary font-bold px-8 py-4 rounded-full shadow-lg hover:bg-gray-100 transition flex items-center justify-center gap-2 text-lg"
            >
              <Phone size={20} /> اتصال مباشر
            </a>
            <a
              href="https://wa.me/96550266068?text=مرحبًا، أود الاستفسار عن خدمات تركيب وصيانة الانتركم."
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">أفضل خدمات الانتركم في الكويت</h2>
            <p className="text-gray-600 text-lg mb-6">
              نقدم خدمات تركيب وصيانة أنظمة الانتركم بجودة عالية وخبرة تمتد لأكثر من 10 سنوات في مجال أنظمة الاتصال الداخلية في الكويت.
              فريقنا من الفنيين المحترفين مزود بأحدث الأدوات والمعدات لضمان أفضل النتائج لعملائنا.
            </p>
            <p className="text-gray-600 text-lg mb-6">
              نعمل مع أفضل ماركات الانتركم لتقديم حلول اتصال داخلية متكاملة تناسب احتياجاتك سواء للأفراد أو الشركات، مع ضمان استقرار النظام وجودة الصوت.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <div className="flex items-center gap-2">
                <CheckCircle className="text-green-600" size={20} />
                <span className="text-gray-700">فنيين محترفين</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="text-green-600" size={20} />
                <span className="text-gray-700">معدات حديثة</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="text-green-600" size={20} />
                <span className="text-gray-700">ضمان على العمل</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="text-green-600" size={20} />
                <span className="text-gray-700">خدمة سريعة</span>
              </div>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/sattech/hero-intercom.jpg"
              alt="فني انتركم محترف في العمل"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* خدماتنا */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">خدماتنا المميزة</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              نقدم مجموعة شاملة من خدمات الانتركم لتلبية جميع احتياجاتك في الاتصال الداخلي
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceDescriptions.map((service, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow-md p-6 flex flex-col gap-3 hover:shadow-lg transition transform hover:-translate-y-1"
              >
                <h3 className="text-xl font-bold text-primary">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* قسم أعمالنا */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">أعمالنا السابقة</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            نعرض بعض من أحدث أعمال تركيب وصيانة الانتركم التي قمنا بها لعملائنا
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {works.map((img, i) => (
            <div
              key={i}
              className="relative w-full h-32 sm:h-40 rounded-xl overflow-hidden shadow hover:shadow-lg transition transform hover:scale-105"
            >
              <Image src={img} alt={`عمل انتركم ${i + 1}`} fill className="object-cover" />
            </div>
          ))}
        </div>
      </section>

      {/* لماذا نحن؟ */}
      <section className="bg-gradient-to-r from-primary/5 to-green-50 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">لماذا تختارنا؟</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              نحن نضمن سرعة التنفيذ، جودة العمل، وأسعار مناسبة لجميع العملاء في الكويت
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
            نقدم إجابات للأسئلة الأكثر شيوعاً حول خدمات الانتركم
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

      {/* أزرار الانتقال */}
      <section className="py-16 px-6 max-w-4xl mx-auto text-center bg-gray-50 rounded-3xl">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">اكتشف المزيد</h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          تصفح خدماتنا الأخرى وعروضنا الحصرية
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <Link
            href="/products"
            className="px-8 py-4 bg-primary hover:bg-primary/90 text-white rounded-full font-bold shadow-lg transition transform hover:scale-105"
          >
            خدمات أخرى
          </Link>
          <Link
            href="/blog"
            className="px-8 py-4 bg-green-600 hover:bg-green-700 text-white rounded-full font-bold shadow-lg transition transform hover:scale-105"
          >
            مقالات ونصائح
          </Link>
        </div>
      </section>

      {/* تواصل معنا */}
      <section className="py-16 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">تواصل معنا الآن</h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          لا تتردد في الاتصال بنا للحصول على استشارة مجانية أو لحجز موعد لتركيب أو صيانة الانتركم
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6 items-center">
          <a
            href="tel:96550266068"
            className="flex items-center gap-2 px-8 py-4 bg-primary hover:bg-primary/90 text-white rounded-full font-bold shadow-lg transition transform hover:scale-105"
          >
            <Phone size={24} /> اتصال مباشر
          </a>
          <a
            href="https://wa.me/96550266068?text=مرحبًا، أود الاستفسار عن خدمات تركيب وصيانة الانتركم."
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