import Image from "next/image";
import Link from "next/link";
import { Monitor, SatelliteDish, Camera, PenTool } from "lucide-react";

const features = [
  {
    title: "تركيب وصيانة الشاشات",
    icon: <Monitor size={32} className="text-primary" />,
    desc: "خدمة احترافية لتركيب الشاشات بجميع الأحجام والأنواع، مع ضبط وتثبيت آمن.",
  },
  {
    title: "أنظمة الستلايت والريسيفر",
    icon: <SatelliteDish size={32} className="text-secondary" />,
    desc: "بيع، تركيب وبرمجة أنظمة الستلايت وأجهزة الاستقبال بأحدث التقنيات.",
  },
  {
    title: "كاميرات المراقبة",
    icon: <Camera size={32} className="text-primary" />,
    desc: "توريد وتركيب جميع أنواع كاميرات المراقبة السلكية واللاسلكية.",
  },
  {
    title: "دعم فني وصيانة سريعة",
    icon: <PenTool size={32} className="text-secondary" />,
    desc: "خدمات إصلاح فوري وصيانة دورية للأجهزة بأيدي خبراء محترفين.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 pt-10 font-[Noto Kufi Arabic,sans-serif]">
      <main className="w-full max-w-3xl flex flex-col items-center gap-6 mb-10">
        <Image
          src="/logo.png"
          alt="شعار خدماتي KW"
          width={120}
          height={120}
          priority
          className="rounded-xl mb-2"
        />
        <h1 className="text-4xl md:text-5xl font-bold mb-2 text-center text-primary">
          خدماتي KW
        </h1>
        <p className="text-xl md:text-2xl text-center mb-4 text-secondary">
          كل حلول الشاشات، الستلايت والكاميرات في الكويت
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full justify-center">
          <Link href="/products" className="w-full sm:w-auto">
            <button className="w-full px-8 py-3 rounded-lg text-white text-lg font-bold shadow transition mb-2 sm:mb-0 bg-primary hover:bg-primary/80">
              استعرض الخدمات
            </button>
          </Link>
          <Link href="/offers" className="w-full sm:w-auto">
            <button className="w-full px-8 py-3 rounded-lg text-white text-lg font-bold shadow transition bg-secondary hover:bg-secondary/80">
              عروض اليوم
            </button>
          </Link>
          <Link href="/contact" className="w-full sm:w-auto">
            <button className="w-full px-8 py-3 rounded-lg text-white text-lg font-bold shadow transition bg-primary hover:bg-primary/80">
              تواصل معنا
            </button>
          </Link>
        </div>
      </main>
      <section className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-2 gap-6 my-12">
        {features.map((f, i) => (
          <div
            key={f.title}
            className="flex items-start gap-4 bg-white rounded-2xl shadow p-5 border border-gray-100"
          >
            <div className="shrink-0">{f.icon}</div>
            <div>
              <h2 className={`font-bold text-lg mb-1 ${i % 2 === 0 ? "text-primary" : "text-secondary"}`}>
                {f.title}
              </h2>
              <p className="text-gray-700 text-sm">{f.desc}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
