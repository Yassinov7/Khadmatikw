// app/additional-services/page.tsx
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Phone, MessageCircle } from "lucide-react";

// جميع مدن الكويت
const kuwaitCities = [
  "مدينة الكويت", "حولى", "الفروانية", "الجهراء", "الأحمدي", "مبارك الكبير", "الفنطاس", "السالمية",
  "الشفافيه", "الرقعي", "الفيحاء", "خيطان", "العبدلي", "مشرف", "الصباحية", "الجليب", "الظهر", "العزيزية"
];

// الخدمات والكلمات المفتاحية
const servicesKeywords = [
  "خدمات دعم فني",
  "صيانة أنظمة",
  "تحديثات دورية",
  "استشارات تقنية",
  "صيانة ودعم مستمر"
].join(", ");

// Metadata
export const metadata: Metadata = {
  title: "خدمات إضافية في الكويت – دعم وصيانة مستمرة لأنظمتك",
  description:
    "نقدم خدمات دعم وصيانة مستمرة لضمان استمرارية عمل أنظمتك بكفاءة. دعم فني متكامل وتحديثات دورية.",
  keywords: `${servicesKeywords}, ${kuwaitCities.join(", ")}`,
  openGraph: {
    title: "خدمات إضافية في الكويت – دعم وصيانة مستمرة لأنظمتك",
    description:
      "نقدم خدمات دعم وصيانة مستمرة لضمان استمرارية عمل أنظمتك بكفاءة. دعم فني متكامل وتحديثات دورية.",
    url: "https://satellitealrajaa.com/additional-services",
    images: ["/sattech/works/work4.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "خدمات إضافية في الكويت",
    description:
      "نقدم خدمات دعم وصيانة مستمرة لضمان استمرارية عمل أنظمتك بكفاءة.",
  },
  alternates: {
    canonical: "https://satellitealrajaa.com/additional-services",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function AdditionalServicesPage() {
  const additionalServices = [
    { title: "دعم فني مستمر", desc: "نقدم دعم فني على مدار الساعة لحل أي مشاكل." },
    { title: "صيانة دورية", desc: "نقوم بصيانة دورية للأنظمة لضمان استمرارية العمل." },
    { title: "تحديثات أمنية", desc: "نقدم تحديثات أمنية دورية لحماية أنظمتك." },
    { title: "تحسين الأداء", desc: "نحسن أداء أنظمتك لزيادة الكفاءة." },
    { title: "استشارات تقنية", desc: "نقدم استشارات تقنية لتحسين العمليات." },
    { title: "تدريب المستخدمين", desc: "نقدم تدريبًا لمستخدمي الأنظمة." },
  ];

  const serviceWorks = [
    "/sattech/webdev/dev.png",
    "/sattech/webdev/dev2.jpg",
    "/sattech/webdev/df59f252-a14f-4d59-924b-4dc5d8431892.avif",
    "/sattech/webdev/images (1).jpg",
    "/sattech/webdev/male-web-developer-doing-research-on-development-illustration-svg-download-png-4759504.webp",
  ];

  return (
    <main className="relative">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-yellow-600 via-orange-700 to-red-800 text-white min-h-[60vh] flex flex-col justify-center items-center text-center p-6">
        <div className="relative z-10 max-w-4xl">
          <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
            <span className="text-sm font-semibold">الرقم 1 في الكويت</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
            خدمات إضافية
          </h1>
          <p className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto">
            نقدم خدمات دعم وصيانة مستمرة لضمان استمرارية عمل أنظمتك بكفاءة
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:96550266068"
              className="bg-white text-primary font-bold px-6 py-3 rounded-xl shadow-lg hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              <Phone size={20} /> اتصال مباشر
            </a>
            <a
              href="https://wa.me/96550266068?text=مرحبًا، أود الاستفسار عن خدمات الدعم والصيانة."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-green-500 to-teal-600 text-white font-bold px-6 py-3 rounded-xl shadow-lg hover:from-green-600 hover:to-teal-700 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              <MessageCircle size={20} /> واتساب مباشر
            </a>
          </div>
        </div>
      </section>

      {/* Ramadan Offers Banner */}
      <section className="py-6 px-6 bg-gradient-to-r from-orange-500 to-red-600 text-white text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">عروض مميزة في شهر رمضان المبارك</h2>
        <p className="text-lg">خصم 20% على جميع خدمات الدعم والصيانة</p>
        <div className="mt-4 inline-block bg-white text-red-600 px-6 py-2 rounded-lg font-bold shadow-lg animate-pulse">
          العرض ساري حتى نهاية رمضان 1447ه
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">خدماتنا الإضافية</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">نقدم خدمات دعم وصيانة متكاملة لضمان استمرارية عمل أنظمتك</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {additionalServices.map((service, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-yellow-100 to-yellow-200 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-600">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                  <line x1="12" y1="17" x2="12.01" y2="17" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-center text-primary mb-4">{service.title}</h3>
              <p className="text-gray-600 text-center">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Service Examples */}
      <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">أمثلة على الخدمات</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">نعرض هنا بعض من أبرز أمثلة الخدمات الإضافية التي نقدمها</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {serviceWorks.map((img, i) => (
              <div
                key={i}
                className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105"
              >
                <div className="aspect-square overflow-hidden">
                  <Image 
                    src={img} 
                    alt={`مثال خدمة ${i + 1}`} 
                    width={300}
                    height={300}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110" 
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div className="text-white">
                    <h3 className="font-bold">خدمة #{i + 1}</h3>
                    <p className="text-sm opacity-80">نموذج خدمة إضافية</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6 bg-gradient-to-br from-yellow-50 to-orange-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">لماذا تختارنا؟</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              نقدم أفضل خدمات الدعم والصيانة بأسعار مناسبة وجودة عالية مع ضمان الجودة.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100 flex items-center justify-center">
                <Image src="/sattech/fast.png" alt="سرعة" width={60} height={60} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">سرعة الاستجابة</h3>
              <p className="text-gray-600">نقدم استجابة سريعة لحل أي مشاكل تقنية</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
                <Image src="/sattech/quality.avif" alt="جودة" width={60} height={60} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">جودة مضمونة</h3>
              <p className="text-gray-600">نستخدم أحدث التقنيات لضمان جودة الخدمة</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-purple-100 flex items-center justify-center">
                <Image src="/sattech/trusted.png" alt="ثقة" width={60} height={60} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">احترافية وثقة</h3>
              <p className="text-gray-600">فريق عمل محترف مع سنوات من الخبرة في المجال</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-yellow-100 flex items-center justify-center">
                <Image src="/sattech/safe.png" alt="امان" width={60} height={60} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">أمان البيانات</h3>
              <p className="text-gray-600">نضمن حماية بيانات عملائنا وسرية معلوماتهم</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-indigo-900 via-primary to-blue-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">هل ترغب في خدمات دعم وصيانة؟</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto opacity-90">اتصل بنا الآن للحصول على استشارة مجانية وتقدير تكلفة المشروع</p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 items-center">
            <a
              href="tel:96550266068"
              className="flex items-center gap-3 px-8 py-4 bg-white text-primary rounded-xl font-bold shadow-xl hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1 text-lg"
            >
              <Phone size={24} /> اتصال مباشر
            </a>
            <a
              href="https://wa.me/96550266068?text=مرحبًا، أود الاستفسار عن خدمات الدعم والصيانة."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl font-bold shadow-xl hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:-translate-y-1 text-lg"
            >
              <MessageCircle size={24} /> واتساب مباشر
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}