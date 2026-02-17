// app/web-design/page.tsx
import { Metadata } from "next";
import Image from "next/image";
import { Phone, MessageCircle } from "lucide-react";

// جميع مدن الكويت
const kuwaitCities = [
  "مدينة الكويت", "حولى", "الفروانية", "الجهراء", "الأحمدي", "مبارك الكبير", "الفنطاس", "السالمية",
  "الشفافيه", "الرقعي", "الفيحاء", "خيطان", "العبدلي", "مشرف", "الصباحية", "الجليب", "الظهر", "العزيزية"
];

// الخدمات والكلمات المفتاحية
const servicesKeywords = [
  "تصميم مواقع ويب الكويت",
  "تصميم مواقع الكترونية",
  "تصميم مواقع استعراضية",
  "تصميم واجهات المستخدم",
  "تصميم مواقع ريسبونسيف"
].join(", ");

// Metadata
export const metadata: Metadata = {
  title: "تصميم المواقع الاستعراضية في الكويت – تصميمات احترافية وجذابة",
  description:
    "نقوم بتصميم مواقع جذابة تفاعلية تلبي متطلبات عملك وتحقيق أهدافك التسويقية. تصميمات متجاوبة تلبي احتياجات عملك.",
  keywords: `${servicesKeywords}, ${kuwaitCities.join(", ")}`,
  openGraph: {
    title: "تصميم المواقع الاستعراضية في الكويت – تصميمات احترافية وجذابة",
    description:
      "نقوم بتصميم مواقع جذابة تفاعلية تلبي متطلبات عملك وتحقيق أهدافك التسويقية. تصميمات متجاوبة تلبي احتياجات عملك.",
    url: "https://satellitealrajaa.com/web-design",
    images: ["/sattech/works/work1.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "تصميم المواقع الاستعراضية في الكويت",
    description:
      "نقوم بتصميم مواقع جذابة تفاعلية تلبي متطلبات عملك وتحقيق أهدافك التسويقية.",
  },
  alternates: {
    canonical: "https://satellitealrajaa.com/web-design",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function WebDesignPage() {
  const designFeatures = [
    { title: "تصميمات جذابة", desc: "نستخدم أحدث التقنيات لتصميم واجهات جذابة تجذب الزوار." },
    { title: "متجاوب مع جميع الأجهزة", desc: "مواقع تتوافق مع جميع أحجام الشاشات والأجهزة." },
    { title: "تحسين تجربة المستخدم", desc: "نركز على تحسين تجربة المستخدم لزيادة التفاعل." },
    { title: "أداء عالي", desc: "مواقع سريعة التحميل وتؤدي أداءً متميزًا." },
    { title: "تحسين محركات البحث", desc: "نضمن تهيئة جيدة لمحركات البحث." },
    { title: "تحديثات دورية", desc: "نقدم تحديثات دورية لمواكبة أحدث التوجهات." },
  ];

  const designWorks = [
    "/sattech/webdev/dev.png",
    "/sattech/webdev/dev2.jpg",
    "/sattech/webdev/df59f252-a14f-4d59-924b-4dc5d8431892.avif",
    "/sattech/webdev/images (1).jpg",
    "/sattech/webdev/male-web-developer-doing-research-on-development-illustration-svg-download-png-4759504.webp",
  ];

  return (
    <main className="relative">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 text-white min-h-[60vh] flex flex-col justify-center items-center text-center p-6">
        <div className="relative z-10 max-w-4xl">
          <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
            <span className="text-sm font-semibold">الرقم 1 في الكويت</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
            تصميم المواقع الاستعراضية
          </h1>
          <p className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto">
            نقوم بتصميم مواقع جذابة تفاعلية تلبي متطلبات عملك وتحقيق أهدافك التسويقية
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:963998246359"
              className="bg-white text-primary font-bold px-6 py-3 rounded-xl shadow-lg hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              <Phone size={20} /> اتصال مباشر
            </a>
            <a
              href="https://wa.me/963998246359?text=مرحبًا، أود الاستفسار عن خدمات تصميم المواقع الاستعراضية."
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
        <p className="text-lg">خصم 25% على جميع خدمات تصميم المواقع الاستعراضية</p>
        <div className="mt-4 inline-block bg-white text-red-600 px-6 py-2 rounded-lg font-bold shadow-lg animate-pulse">
          العرض ساري حتى نهاية رمضان 1447ه
        </div>
      </section>

      {/* Design Features */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">مميزات تصميماتنا</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">نقدم تصميمات مبتكرة تلبي احتياجات عملك وتحقق أهدافك التسويقية</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {designFeatures.map((feature, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                  <line x1="3" y1="9" x2="21" y2="9" />
                  <line x1="9" y1="21" x2="9" y2="9" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-center text-primary mb-4">{feature.title}</h3>
              <p className="text-gray-600 text-center">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Design Examples */}
      <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">أمثلة على التصميمات</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">نعرض هنا بعض من أبرز أمثلة التصميمات التي نقدمها</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {designWorks.map((img, i) => (
              <div
                key={i}
                className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105"
              >
                <div className="aspect-square overflow-hidden">
                  <Image 
                    src={img} 
                    alt={`مثال تصميم ${i + 1}`} 
                    width={300}
                    height={300}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110" 
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div className="text-white">
                    <h3 className="font-bold">تصميم #{i + 1}</h3>
                    <p className="text-sm opacity-80">نموذج تصميم ويب</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">لماذا تختارنا؟</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              نقدم أفضل خدمات تصميم المواقع الاستعراضية بأسعار مناسبة وجودة عالية مع ضمان الجودة.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100 flex items-center justify-center">
                <Image src="/sattech/fast.png" alt="سرعة" width={60} height={60} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">سرعة التنفيذ</h3>
              <p className="text-gray-600">نلتزم بالمواعيد المحددة ونقوم بالتسليم في الوقت المحدد</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
                <Image src="/sattech/quality.avif" alt="جودة" width={60} height={60} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">جودة مضمونة</h3>
              <p className="text-gray-600">نستخدم أحدث التقنيات لضمان جودة المنتج النهائي</p>
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
          <h2 className="text-4xl font-bold mb-6">هل ترغب في تصميم موقع احترافي؟</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto opacity-90">اتصل بنا الآن للحصول على استشارة مجانية وتقدير تكلفة المشروع</p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 items-center">
            <a
              href="tel:963998246359"
              className="flex items-center gap-3 px-8 py-4 bg-white text-primary rounded-xl font-bold shadow-xl hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1 text-lg"
            >
              <Phone size={24} /> اتصال مباشر
            </a>
            <a
              href="https://wa.me/963998246359?text=مرحبًا، أود الاستفسار عن خدمات تصميم المواقع الاستعراضية."
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