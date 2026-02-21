// app/web-applications/page.tsx
import { Metadata } from "next";
import Image from "next/image";
import { Mail, Instagram, Link as LinkIcon, Star, Code, Monitor, ShoppingBag, Tablet, Database, Settings, Users, Clock, Zap, Shield } from "lucide-react";

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
  "تطبيقات ويب متكاملة",
  "تطوير تطبيقات ويب",
  "تطبيقات ويب ديناميكية",
  "تطوير تطبيقات ويب مخصصة",
  "تطبيقات ويب متكاملة مع أنظمة أخرى",
  "متاجر إلكترونية",
  "لوحات تحكم",
  "تطبيقات تجارة إلكترونية",
  "نظام إدارة المحتوى",
  "واجهة مستخدم متقدمة"
].join(", ");

// Metadata
export const metadata: Metadata = {
  title: "تطبيقات الويب المتكاملة – تطوير احترافي ووظائف متقدمة",
  description:
    "نطور تطبيقات ويب متكاملة توفر وظائف متقدمة وتجربة مستخدم ممتازة. تطوير مخصص يلبي احتياجات عملك. نشمل متاجر إلكترونية ولوحات تحكم.",
  keywords: `${servicesKeywords}, ${kuwaitCities.join(", ")}`,
  openGraph: {
    title: "تطبيقات الويب المتكاملة – تطوير احترافي ووظائف متقدمة",
    description:
      "نطور تطبيقات ويب متكاملة توفر وظائف متقدمة وتجربة مستخدم ممتازة. تطوير مخصص يلبي احتياجات عملك. نشمل متاجر إلكترونية ولوحات تحكم.",
    url: "https://satellitealrajaa.com/web-applications",
    images: ["/sattech/works/work2.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "تطبيقات الويب المتكاملة",
    description:
      "نطور تطبيقات ويب متكاملة توفر وظائف متقدمة وتجربة مستخدم ممتازة.",
  },
  alternates: {
    canonical: "https://satellitealrajaa.com/web-applications",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function WebApplicationsPage() {
  const appFeatures = [
    { icon: Settings, title: "واجهة مستخدم ممتازة", desc: "نطور واجهات سهلة الاستخدام وتفاعلية." },
    { icon: Database, title: "نظام إدارة محتوى", desc: "نظام سهل لإدارة المحتوى والبيانات." },
    { icon: Zap, title: "تكامل مع أنظمة أخرى", desc: "تكامل سلس مع الأنظمة الأخرى." },
    { icon: Shield, title: "أمان عالي", desc: "نضمن حماية البيانات والخصوصية." },
    { icon: Clock, title: "تحديثات دورية", desc: "نقدم تحديثات دورية لتحسين الأداء." },
    { icon: Users, title: "دعم فني مستمر", desc: "نقدم دعم فني متواصل بعد التسليم." },
  ];

  const appWorks = [
    "/sattech/webdev/dev.png",
    "/sattech/webdev/dev2.jpg",
    "/sattech/webdev/df59f252-a14f-4d59-924b-4dc5d8431892.avif",
    "/sattech/webdev/images (1).jpg",
    "/sattech/webdev/male-web-developer-doing-research-on-development-illustration-svg-download-png-4759504.webp",
  ];

  const stats = [
    { number: "120+", label: "تطبيقات مطورة" },
    { number: "95%", label: "رضا العملاء" },
    { number: "4+", label: "سنوات خبرة" },
    { number: "24/7", label: "دعم فني" },
  ];

  const testimonials = [
    {
      name: "سارة أحمد",
      company: "متجر إلكتروني",
      text: "تطبيق مذهل ووظائف متقدمة. ساعدنا التطبيق في زيادة مبيعاتنا بنسبة 60%."
    },
    {
      name: "محمد خالد",
      company: "شركة تقنية",
      text: "جودة عالية وتسليم في الوقت المحدد. فريق محترف ومتعاون."
    },
    {
      name: "layan يوسف",
      company: "مؤسسة تعليمية",
      text: "لوحة تحكم رائعة وسهولة في الإدارة. نتطلع لتطوير المزيد من المشاريع."
    }
  ];

  const services = [
    { icon: Code, title: "تطبيقات ويب ديناميكية", desc: "تطبيقات تفاعلية مع وظائف متقدمة" },
    { icon: ShoppingBag, title: "متاجر إلكترونية", desc: "منصات تسوق إلكتروني متكاملة" },
    { icon: Monitor, title: "لوحات تحكم", desc: "نظام إدارة سهل الاستخدام" },
    { icon: Tablet, title: "تطبيقات مخصصة", desc: "حلول مخصصة حسب احتياجاتك" },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-900 via-teal-800 to-cyan-900 text-white py-20 px-4">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <div className="mb-6">
            <span className="bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full text-sm font-semibold border border-white/30">
              الأفضل في التطوير
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            تطبيقات الويب <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-cyan-300">المتكاملة</span>
          </h1>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto opacity-90 leading-relaxed">
            نطور تطبيقات ويب متكاملة توفر وظائف متقدمة وتجربة مستخدم ممتازة. نشمل متاجر إلكترونية ولوحات تحكم
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
              className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold px-8 py-4 rounded-xl shadow-xl hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 flex items-center justify-center gap-3 text-lg font-medium"
            >
              <Instagram size={24} /> تواصل عبر إنستغرام
            </a>
            <a
              href="https://crafted-by-yassine.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 bg-gray-200 border-gray-800 text-gray-800 font-bold px-8 py-4 rounded-xl shadow-lg hover:bg-gray-800 hover:text-white transition-all duration-300 flex items-center justify-center gap-3 text-lg font-medium"
            >
              <LinkIcon size={24} /> موقع المبرمج
            </a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-emerald-400">{stat.number}</div>
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
              خدمات <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-teal-600">متقدمة</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              نقدم مجموعة متنوعة من خدمات تطوير تطبيقات الويب المتكاملة
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, i) => (
              <div
                key={i}
                className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 text-center"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-green-100 to-teal-100 flex items-center justify-center text-green-600">
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
              مميزات <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-teal-600">تطبيقاتنا</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              نطور تطبيقات متكاملة تلبي احتياجات عملك وتحقق أهدافك
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {appFeatures.map((feature, i) => (
              <div
                key={i}
                className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3"
              >
                <div className="w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-green-100 to-teal-100 flex items-center justify-center text-green-600">
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
              أعمال <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-teal-600">مميزة</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              نعرض هنا بعض من أبرز أمثلة التطبيقات التي نطورها
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {appWorks.map((img, i) => (
              <div
                key={i}
                className="rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 group"
              >
                <div className="aspect-video overflow-hidden">
                  <Image 
                    src={img} 
                    alt={`مثال تطبيق ${i + 1}`} 
                    width={600}
                    height={400}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                </div>
                <div className="p-6 bg-white">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">نموذج تطبيق رقم {i + 1}</h3>
                  <p className="text-gray-600">تطبيق ويب متكامل لمجال تجاري</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Used */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              التقنيات <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-teal-600">المستخدمة</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              نستخدم أحدث التقنيات لتطوير تطبيقات الويب المتكاملة
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-white/50 text-center hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center text-blue-600">
                <Image src="/sattech/react.png" alt="React" width={60} height={60} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">React & Next.js</h3>
              <p className="text-gray-600">واجهات مستخدم تفاعلية وسريعة</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-white/50 text-center hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center text-green-600">
                <Image src="/sattech/nodejs.png" alt="Node.js" width={60} height={60} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Node.js & Express</h3>
              <p className="text-gray-600">خوادم قوية وقابلة للتطوير</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-white/50 text-center hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center text-purple-600">
                <Image src="/sattech/database-icon.png" alt="Database" width={60} height={60} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">MongoDB & PostgreSQL</h3>
              <p className="text-gray-600">قواعد بيانات موثوقة وآمنة</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-white/50 text-center hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-yellow-100 to-yellow-200 flex items-center justify-center text-yellow-600">
                <Image src="/sattech/api-icon.png" alt="API" width={60} height={60} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">RESTful APIs</h3>
              <p className="text-gray-600">واجهات برمجة تطبيقات قابلة للتكامل</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-gradient-to-r from-green-900 via-teal-800 to-cyan-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              ماذا <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-cyan-300">يقول عملاؤنا</span>
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
                <div className="flex text-emerald-400 mb-4">
                  {[...Array(5)].map((_, idx) => (
                    <Star key={idx} size={20} fill="currentColor" />
                  ))}
                </div>
                <p className="text-lg mb-6 italic">{testimonial.text}</p>
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
            هل ترغب في <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-teal-600">تطبيق متكامل</span>؟
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            نطور تطبيقات ويب متكاملة، متاجر إلكترونية، ولوحات تحكم. احصل على استشارة مجانية وتسعير مخصص لمشروعك
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 items-center">
            <a
              href="mailto:02m.yassine@gmail.com"
              className="bg-gradient-to-r from-green-600 to-teal-700 text-white font-bold px-10 py-5 rounded-2xl shadow-2xl hover:from-green-700 hover:to-teal-800 transition-all duration-300 flex items-center justify-center gap-3 text-xl font-medium"
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