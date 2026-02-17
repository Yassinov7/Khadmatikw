// app/web-development-service/page.tsx
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
  "تطوير مواقع ويب الكويت",
  "تصميم مواقع الكترونية",
  "برمجة تطبيقات الويب",
  "خدمات تطوير الويب الاحترافية",
  "تصميم واجهات المستخدم",
  "تطبيقات ويب ديناميكية",
  "تصميم مواقع ريسبونسيف"
].join(", ");

// Metadata
export const metadata: Metadata = {
  title: "خدمات تطوير المواقع في الكويت – تصميم وبرمجة احترافية",
  description:
    "خدمة تطوير وتصميم المواقع الإلكترونية في الكويت بجودة عالية وخبرة مميزة. نقدم جميع أنواع المواقع الاحترافية مع تصميمات حديثة وبرمجة مخصصة.",
  keywords: `${servicesKeywords}, ${kuwaitCities.join(", ")}`,
  openGraph: {
    title: "خدمات تطوير المواقع في الكويت – تصميم وبرمجة احترافية",
    description:
      "أفضل خدمات تطوير وتصميم المواقع الإلكترونية في جميع مدن الكويت، مع تصميمات حديثة وبرمجة مخصصة وضمان الجودة.",
    url: "https://satellitealrajaa.com/web-development-service",
    images: ["/sattech/works/work1.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "خدمات تطوير المواقع في الكويت",
    description:
      "خدمة احترافية لتصميم وتطوير المواقع الإلكترونية الحديثة مع برمجة مخصصة وضمان الجودة.",
  },
  alternates: {
    canonical: "https://satellitealrajaa.com/web-development-service",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function WebDevelopmentServicePage() {
  const serviceDescriptions = [
    { title: "تصميم مواقع ويب", desc: "تصميم مواقع احترافية ومتجاوبة تناسب جميع الأجهزة." },
    { title: "تطوير تطبيقات الويب", desc: "برمجة تطبيقات ويب ديناميكية باستخدام أحدث التقنيات." },
    { title: "تصميم واجهات المستخدم", desc: "تصميم واجهات جذابة وسهلة الاستخدام لتحسين تجربة الزائر." },
    { title: "إدارة المحتوى CMS", desc: "نظام إدارة محتوى سهل الاستخدام لإدارة موقعك بنفسك." },
    { title: "تحسين محركات البحث SEO", desc: "تحسين موقعك للظهور في نتائج البحث الأولى." },
    { title: "صيانة وتحديث المواقع", desc: "صيانة دورية وتحديثات مستمرة لضمان استقرار الموقع." },
  ];

  const webdevIllustrations: string[] = [
    "/sattech/webdev/dev.png",
    "/sattech/webdev/dev2.jpg",
    "/sattech/webdev/df59f252-a14f-4d59-924b-4dc5d8431892.avif",
    "/sattech/webdev/images (1).jpg",
    "/sattech/webdev/male-web-developer-doing-research-on-development-illustration-svg-download-png-4759504.webp",
  ];


  return (
    <main className="relative">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-primary to-indigo-800 text-white min-h-[70vh] flex flex-col justify-center items-center text-center p-6 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-20 left-10 w-64 h-64 bg-white rounded-full mix-blend-soft-light filter blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-64 h-64 bg-yellow-300 rounded-full mix-blend-soft-light filter blur-3xl"></div>
        </div>
        <div className="relative z-10 max-w-4xl">
          <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
            <span className="text-sm font-semibold">الخدمة الأفضل</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold mb-4 leading-tight">
            تصميم وتطوير المواقع الاحترافية
          </h1>
          <p className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto opacity-90">
            تصميم وبرمجة المواقع الإلكترونية بجودة عالية وتقنيات حديثة في جميع مدن الكويت.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:963998246359"
              className="bg-white text-primary font-bold px-8 py-4 rounded-xl shadow-lg hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2 text-lg font-bold"
            >
              <Phone size={20} /> اتصال مباشر
            </a>
            <a
              href="https://wa.me/963998246359?text=مرحبًا، أود الاستفسار عن خدمات تطوير وتصميم المواقع الإلكترونية."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-green-500 to-teal-600 text-white font-bold px-8 py-4 rounded-xl shadow-lg hover:from-green-600 hover:to-teal-700 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2 text-lg font-bold"
            >
              <MessageCircle size={20} /> واتساب مباشر
            </a>
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-6">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span>48 ساعة استجابة</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span>ضمان الجودة</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span>دعم فني 24/7</span>
            </div>
          </div>
        </div>
      </section>

      {/* أبرز الخدمات */}
      <section className="py-20 px-6 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block bg-indigo-500/10 text-indigo-700 px-4 py-1 rounded-full mb-4">
              <span className="font-semibold">خدماتنا المميزة</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">أبرز الخدمات التي نقدمها</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">نقدم مجموعة متنوعة من الخدمات البرمجية لتناسب جميع احتياجات عملك</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                  <line x1="3" y1="9" x2="21" y2="9" />
                  <line x1="9" y1="21" x2="9" y2="9" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">تصميم المواقع الاستعراضية</h3>
              <p className="text-gray-600 mb-6">نقوم بتصميم مواقع جذابة تفاعلية تلبي متطلبات عملك وتحقيق أهدافك التسويقية</p>
              <Link href="/web-design" className="inline-block bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white px-6 py-3 rounded-lg font-bold shadow-lg transition-all duration-300">
                اكتشف المزيد
              </Link>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                  <line x1="8" y1="21" x2="16" y2="21" />
                  <line x1="12" y1="17" x2="12" y2="21" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">تطبيقات الويب المتكاملة</h3>
              <p className="text-gray-600 mb-6">نطور تطبيقات ويب متكاملة توفر وظائف متقدمة وتجربة مستخدم ممتازة</p>
              <Link href="/web-applications" className="inline-block bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 text-white px-6 py-3 rounded-lg font-bold shadow-lg transition-all duration-300">
                اكتشف المزيد
              </Link>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-600">
                  <polygon points="12 2 2 7 12 12 22 7 12 2" />
                  <polyline points="2 17 12 22 22 17" />
                  <polyline points="2 12 12 17 22 12" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">الحلول البرمجية</h3>
              <p className="text-gray-600 mb-6">نقدم حلولاً برمجية مخصصة تناسب احتياجات عملك وتساعد في تحسين العمليات</p>
              <Link href="/software-solutions" className="inline-block bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white px-6 py-3 rounded-lg font-bold shadow-lg transition-all duration-300">
                اكتشف المزيد
              </Link>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-yellow-100 to-yellow-200 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-600">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                  <line x1="12" y1="17" x2="12.01" y2="17" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">خدمات إضافية</h3>
              <p className="text-gray-600 mb-6">نقدم خدمات دعم وصيانة مستمرة لضمان استمرارية عمل أنظمتك بكفاءة</p>
              <Link href="/additional-services" className="inline-block bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-white px-6 py-3 rounded-lg font-bold shadow-lg transition-all duration-300">
                اكتشف المزيد
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* خدماتنا */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full mb-4">
            <span className="font-semibold">خدماتنا المميزة</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">ما الذي نقدمه لك</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">نقدم مجموعة متنوعة من خدمات تطوير المواقع الإلكترونية لتلبية احتياجات عملك</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceDescriptions.map((service, i) => (
            <div
              key={i}
              className="bg-gradient-to-b from-white to-gray-50 rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="mb-4 flex justify-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                    <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                      <span className="text-white font-bold text-xs">{i+1}</span>
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-center text-primary mb-4">{service.title}</h3>
              <p className="text-gray-600 text-center">{service.desc}</p>
              <div className="mt-6 text-center">
                <div className="inline-block text-primary/20 group-hover:text-primary/40 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                    <path d="M5 12h14" />
                    <path d="M12 5v14" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* قسم أعمالنا */}
      <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block bg-blue-500/10 text-blue-700 px-4 py-1 rounded-full mb-4">
              <span className="font-semibold">الحلول البرمجية</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">أمثلة على الحلول البرمجية</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">نعرض هنا بعض من أبرز الأمثلة على الحلول البرمجية والخدمات التي نقدمها</p>
          </div>
          
          <div className="relative">
            <div className="flex overflow-x-auto pb-10 space-x-6 scrollbar-hide">
              {webdevIllustrations.map((img, i) => (
                <div 
                  key={i}
                  className="flex-shrink-0 w-80 snap-center"
                >
                  <div className="relative rounded-2xl overflow-hidden shadow-xl h-96 group">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                    <Image 
                      src={img} 
                      alt={`مثال على الحلول البرمجية ${i + 1}`} 
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110" 
                    />
                    <div className="absolute bottom-0 left-0 right-0 z-20 p-6 text-white">
                      <h3 className="text-xl font-bold mb-1">الحل #{i + 1}</h3>
                      <p className="text-sm opacity-90 mb-3">مثال على الحلول البرمجية</p>
                      <div className="flex gap-2">
                        <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs">تصميم واجهة</span>
                        <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs">تطوير</span>
                        <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs">تحليل</span>
                      </div>
                    </div>
                    <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                        <circle cx="11" cy="11" r="8" />
                        <path d="M21 21l-4.3-4.3" />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="absolute top-1/2 -left-4 -translate-y-1/2 z-30">
              <button className="w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-primary hover:bg-gray-100 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>
            </div>
            <div className="absolute top-1/2 -right-4 -translate-y-1/2 z-30">
              <button className="w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-primary hover:bg-gray-100 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* عروض رمضان المميزة */}
      <section className="py-16 px-6 bg-gradient-to-r from-orange-500 to-red-600 text-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="inline-block bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full mb-6">
            <span className="font-bold text-lg">_special offer</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">عروض مميزة في شهر رمضان المبارك</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-5xl font-bold mb-2">25%</div>
              <h3 className="text-xl font-bold mb-2">خصم على تصميم المواقع</h3>
              <p className="opacity-90">احصل على خصم 25% على جميع خدمات تصميم المواقع</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-5xl font-bold mb-2">50%</div>
              <h3 className="text-xl font-bold mb-2">خصم على تطوير التطبيقات</h3>
              <p className="opacity-90">احصل على نصف السعر لتطوير تطبيقات الويب</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-5xl font-bold mb-2">+1</div>
              <h3 className="text-xl font-bold mb-2">هدية مجانية</h3>
              <p className="opacity-90">احصل على استضافة مجانية لمدة سنة مع كل موقع</p>
            </div>
          </div>
          <div className="mt-12 inline-block bg-white text-red-600 px-8 py-4 rounded-xl font-bold text-lg shadow-2xl animate-pulse">
            العرض ساري حتى نهاية رمضان 
          </div>
        </div>
      </section>

      {/* لماذا نحن؟ */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block bg-white/50 px-4 py-1 rounded-full mb-4 border border-white/30 backdrop-blur-sm">
              <span className="font-semibold text-gray-700">لماذا نحن الأفضل</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">نتميز عن الآخرين</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              نقدم أفضل خدمات تطوير وتصميم المواقع الإلكترونية بأسعار مناسبة وجودة عالية مع ضمان الجودة.
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

      {/* أزرار الانتقال */}
      <section className="py-20 px-6 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-2 rounded-full mb-6">
            <span className="font-semibold">استكشف أكثر</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-800 mb-6">اكتشف المزيد من خدماتنا</h2>
          <p className="text-gray-600 mb-10 max-w-2xl mx-auto">نقدم مجموعة متنوعة من الخدمات الأخرى التي قد تهمك</p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link
              href="/products"
              className="px-8 py-4 bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-700 text-white rounded-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-lg"
            >
              خدمات أخرى
            </Link>
            <Link
              href="/blog"
              className="px-8 py-4 bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 text-white rounded-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-lg"
            >
              مقالات ونصائح
            </Link>
          </div>
        </div>
      </section>

      {/* تواصل معنا */}
      <section className="py-20 px-6 bg-gradient-to-r from-indigo-900 via-primary to-blue-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full mb-6">
            <span className="font-semibold">نخدمك على مدار الساعة</span>
          </div>
          <h2 className="text-4xl font-bold mb-6">هل لديك مشروع ترغب في تنفيذه؟</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto opacity-90">اتصل بنا الآن للحصول على استشارة مجانية وتقدير تكلفة المشروع</p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 items-center">
            <a
              href="tel:963998246359"
              className="flex items-center gap-3 px-8 py-4 bg-white text-primary rounded-xl font-bold shadow-xl hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1 text-lg"
            >
              <Phone size={24} /> اتصال مباشر
            </a>
            <a
              href="https://wa.me/963998246359?text=مرحبًا، أود الاستفسار عن خدمات تطوير وتصميم المواقع الإلكترونية."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl font-bold shadow-xl hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:-translate-y-1 text-lg"
            >
              <MessageCircle size={24} /> واتساب مباشر
            </a>
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-8 text-lg">
            <div className="flex items-center gap-2">
              <Phone size={20} />
              <span>963998246359+</span>
            </div>
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              <span>info@satellitealrajaa.com</span>
            </div>
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span>الكويت</span>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}