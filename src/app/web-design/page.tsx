// app/web-design/page.tsx
import { Metadata } from "next";
import Image from "next/image";
import { Mail, Instagram, Link as LinkIcon, Phone, MessageCircle, Star, Palette, Monitor, Smartphone, Globe, Code, Zap, Shield, Users, Award, Clock } from "lucide-react";

// جميع مدن الكويت
const kuwaitCities = [
  "مدينة الكويت", "حولى", "الفروانية", "الجهراء", "الأحمدي", "مبارك الكبير", "الفنطاس", "السالمية",
  "الشفافيه", "الرقعي", "الفيحاء", "خيطان", "العبدلي", "مشرف", "الصباحية", "الجليب", "الظهر", "العزيزية",
  // Expanding beyond Kuwait
  "الرياض", "الدمام", "جدة", "دبي", "أبوظبي", "الشارقة", "القاهرة", "الإسكندرية", "بغداد", "عمان",
  "المنامة", "الكويت", "طرابلس", "تونس", "الجزائر", "الرباط", "نواكشوط", "بيروت", "عمان الأردن"
];

// الخدمات والكلمات المفتاحية
const servicesKeywords = [
  "تصميم مواقع ويب الكويت",
  "تصميم مواقع الكترونية",
  "تصميم مواقع استعراضية",
  "تصميم واجهات المستخدم",
  "تصميم مواقع ريسبونسيف",
  "مواقع ويب ثابتة",
  "مواقع تعريفية",
  "مواقع لعرض الأعمال",
  "مواقع لعرض الخدمات"
].join(", ");

// Metadata
export const metadata: Metadata = {
  title: "تصميم المواقع الاستعراضية – تصميمات احترافية وجذابة",
  description:
    "نقوم بتصميم مواقع جذابة تفاعلية تلبي متطلبات عملك وتحقيق أهدافك التسويقية. نشمل تصميم المواقع الثابتة لعرض الأعمال والخدمات.",
  keywords: `${servicesKeywords}, ${kuwaitCities.join(", ")}`,
  openGraph: {
    title: "تصميم المواقع الاستعراضية – تصميمات احترافية وجذابة",
    description:
      "نقوم بتصميم مواقع جذابة تفاعلية تلبي متطلبات عملك وتحقيق أهدافك التسويقية. نشمل تصميم المواقع الثابتة لعرض الأعمال والخدمات.",
    url: "https://satellitealrajaa.com/web-design",
    images: ["/sattech/works/work1.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "تصميم المواقع الاستعراضية",
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
    { icon: Palette, title: "تصميمات جذابة", desc: "نستخدم أحدث التقنيات لتصميم واجهات جذابة تجذب الزوار." },
    { icon: Smartphone, title: "متجاوب مع جميع الأجهزة", desc: "مواقع تتوافق مع جميع أحجام الشاشات والأجهزة." },
    { icon: Star, title: "تحسين تجربة المستخدم", desc: "نركز على تحسين تجربة المستخدم لزيادة التفاعل." },
    { icon: Zap, title: "أداء عالي", desc: "مواقع سريعة التحميل وتؤدي أداءً متميزًا." },
    { icon: Globe, title: "تحسين محركات البحث", desc: "نضمن تهيئة جيدة لمحركات البحث." },
    { icon: Shield, title: "تحديثات دورية", desc: "نقدم تحديثات دورية لمواكبة أحدث التوجهات." },
  ];

  const designWorks = [
    "/sattech/webdev/dev.png",
    "/sattech/webdev/dev2.jpg",
    "/sattech/webdev/df59f252-a14f-4d59-924b-4dc5d8431892.avif",
    "/sattech/webdev/images (1).jpg",
    "/sattech/webdev/male-web-developer-doing-research-on-development-illustration-svg-download-png-4759504.webp",
  ];

  const stats = [
    { number: "150+", label: "مشاريع ناجحة" },
    { number: "98%", label: "رضا العملاء" },
    { number: "5+", label: "سنوات خبرة" },
    { number: "24/7", label: "دعم فني" },
  ];

  const testimonials = [
    {
      name: "أحمد محمد",
      company: "شركة تجارية",
      text: "تصميم مذهل وخدمة ممتازة. ساعدنا الموقع في زيادة عملائنا بنسبة 40%."
    },
    {
      name: "فاطمة علي",
      company: "مطعم",
      text: "موقع جذاب وسهل الاستخدام. فريق عمل متعاون وسريع الإنجاز."
    },
    {
      name: "خالد عبدالله",
      company: "مؤسسة تعليمية",
      text: "الجودة عالية والتسليم في الوقت المحدد. نتطلع للعمل معهم مرة أخرى."
    }
  ];

  const services = [
    { icon: Monitor, title: "مواقع ويب ثابتة", desc: "تصميم مواقع استعراضية لعرض الأعمال والخدمات" },
    { icon: Smartphone, title: "تصميم متجاوب", desc: "مواقع تتوافق مع جميع الأجهزة الذكية" },
    { icon: Globe, title: "تحسين SEO", desc: "تحسين محركات البحث لزيادة ظهور موقعك" },
    { icon: Code, title: "تطوير واجهات", desc: "واجهات مستخدم تفاعلية وسهلة الاستخدام" },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 via-purple-800 to-indigo-900 text-white py-20 px-4">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <div className="mb-6">
            <span className="bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full text-sm font-semibold border border-white/30">
              الأفضل في المنطقة
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            تصميم المواقع <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500">الاستعراضية</span>
          </h1>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto opacity-90 leading-relaxed">
            نقوم بتصميم مواقع جذابة تفاعلية تلبي متطلبات عملك وتحقيق أهدافك التسويقية. نشمل تصميم المواقع الثابتة لعرض الأعمال والخدمات
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <a
              href="mailto:02m.yassine@gmail.com"
              className="bg-white text-primary font-bold px-8 py-4 rounded-xl shadow-xl hover:bg-gray-100 transition-all duration-300 flex items-center justify-center gap-3 text-lg font-medium"
            >
              <Mail size={24} /> تواصل عبر البريد
            </a>
            <a
              href="https://instagram.com/mhmmdyassine"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold px-8 py-4 rounded-xl shadow-xl hover:from-green-600 hover:to-emerald-700 transition-all duration-300 flex items-center justify-center gap-3 text-lg font-medium"
            >
              <Instagram size={24} /> تواصل عبر إنستغرام
            </a>
            <a
              href="https://crafted-by-yassine.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-gray-800 bg-gray-200 text-gray-800 font-bold px-8 py-4 rounded-xl shadow-lg hover:bg-gray-800 hover:text-white transition-all duration-300 flex items-center justify-center gap-3 text-lg font-medium"
            >
              <LinkIcon size={24} /> موقع المبرمج
            </a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-yellow-400">{stat.number}</div>
                <div className="text-gray-300 mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              خدمات <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">متنوعة</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              نقدم مجموعة متنوعة من خدمات تصميم المواقع لتناسب احتياجاتك
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, i) => (
              <div
                key={i}
                className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 text-center"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center text-blue-600">
                  <service.icon size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{service.title}</h3>
                <p className="text-gray-600 text-lg">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              لماذا <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">تصميم احترافي</span>؟
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              نقدم تصميمات مبتكرة تلبي احتياجات عملك وتحقق أهدافك التسويقية
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {designFeatures.map((feature, i) => (
              <div
                key={i}
                className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3"
              >
                <div className="w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center text-blue-600">
                  <feature.icon size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{feature.title}</h3>
                <p className="text-gray-600 text-lg">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              أعمال <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">مميزة</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              نعرض هنا بعض من أبرز أمثلة التصميمات التي نقدمها
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {designWorks.map((img, i) => (
              <div
                key={i}
                className="rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 group"
              >
                <div className="aspect-video overflow-hidden">
                  <Image 
                    src={img} 
                    alt={`مثال تصميم ${i + 1}`} 
                    width={600}
                    height={400}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                </div>
                <div className="p-6 bg-white">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">نموذج تصميم رقم {i + 1}</h3>
                  <p className="text-gray-600">تصميم احترافي لمجال تجاري</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-900 via-purple-800 to-indigo-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              ماذا <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500">يقول عملاؤنا</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              نحن فخورون بخدمة عملائنا ومساعدتهم في تحقيق أهدافهم
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <div
                key={i}
                className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20"
              >
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, idx) => (
                    <Star key={idx} size={20} fill="currentColor" />
                  ))}
                </div>
                <p className="text-lg mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <div className="font-bold text-lg">{testimonial.name}</div>
                  <div className="text-gray-300">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            هل ترغب في <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">تصميم احترافي</span>؟
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            نقوم بتصميم مواقع جذابة تفاعلية لعرض أعمالك وخدماتك. احصل على استشارة مجانية وتسعير مخصص لمشروعك
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 items-center">
            <a
              href="mailto:02m.yassine@gmail.com"
              className="bg-gradient-to-r from-blue-600 to-purple-700 text-white font-bold px-10 py-5 rounded-2xl shadow-2xl hover:from-blue-700 hover:to-purple-800 transition-all duration-300 flex items-center justify-center gap-3 text-xl font-medium"
            >
              <Mail size={28} /> تواصل عبر البريد
            </a>
            <a
              href="https://instagram.com/mhmmdyassine"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-gray-800 text-gray-800 font-bold px-10 py-5 rounded-2xl shadow-lg hover:bg-gray-800 hover:text-white transition-all duration-300 flex items-center justify-center gap-3 text-xl font-medium"
            >
              <Instagram size={28} /> تواصل عبر إنستغرام
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}