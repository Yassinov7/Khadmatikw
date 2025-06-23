import { Metadata } from "next";
import { ContactCard } from "@/components/ContactCard";
import { Camera, SatelliteDish, Tv2, Wrench } from "lucide-react";

const CONTACTS = [
  {
    name: "خبير",
    role: "تركيب شاشات",
    phone: "96550266068",
    whatsapp: "96565013345",
    icon: <Tv2 size={28} className="text-primary" />,
  },
  {
    name: "خبير",
    role: "صيانة ستلايت",
    phone: "96550266068",
    whatsapp: "96565013345",
    icon: <SatelliteDish size={28} className="text-primary" />,
  },
  {
    name: "متخصص",
    role: "كاميرات مراقبة",
    phone: "96550266068",
    whatsapp: "96565013345",
    icon: <Camera size={28} className="text-primary" />,
  },
  {
    name: "فني",
    role: "صيانة عامة",
    phone: "96550266068",
    whatsapp: "96565013345",
    icon: <Wrench size={28} className="text-primary" />,
  },
];

export const metadata: Metadata = {
  title: "تواصل معنا | خدماتي KW",
  description: "اتصل مباشرة بأفراد فريق خدماتي KW في الكويت. فنيون محترفون بخدمتكم عبر الهاتف أو الواتساب.",
  openGraph: {
    title: "تواصل معنا | خدماتي KW",
    description: "أرقام اتصال وواتساب مباشرة لفريق خدماتي لخدمات الشاشات، الستلايت، والكاميرات في الكويت.",
    url: "https://khadmatikw.com/contact",
    type: "website",
  },
  alternates: {
    canonical: "https://khadmatikw.com/contact",
  },
  robots: "index, follow",
};

export default function ContactPage() {
  return (
    <section className="max-w-6xl mx-auto py-12 px-4">
      {/* Structured Data SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "خدماتي KW",
            contactPoint: CONTACTS.map((c) => ({
              "@type": "ContactPoint",
              name: c.name,
              contactType: "Customer Support",
              telephone: `+${c.phone}`,
              sameAs: `https://wa.me/${c.whatsapp}`,
              areaServed: "KW",
            })),
          }),
        }}
      />

      <h1 className="text-3xl md:text-4xl font-extrabold text-primary text-center mb-4">
        تواصل مع فريق خدماتي
      </h1>
      <p className="text-center text-gray-700 text-lg max-w-3xl mx-auto mb-10">
        إليك قائمة بأرقام التواصل المباشر مع الفنيين المختصين حسب مجالات الخدمة. يمكنك الاتصال أو المراسلة عبر واتساب.
      </p>

      <ContactCard contacts={CONTACTS} />

      {/* Google Map */}
      <div className="w-full rounded-xl overflow-hidden border border-gray-100 shadow-sm mt-10">
        <iframe
          title="خريطة خدماتي KW"
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3478.1617865036774!2d48.01891368490148!3d29.336253982145514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjnCsDIwJzEwLjUiTiA0OMKwMDEnMDAuMiJF!5e0!3m2!1sar!2sbg!4v1750270359813!5m2!1sar!2sbg"
          className="w-full h-56"
          loading="lazy"
        />
      </div>

      <div className="text-xs text-gray-400 text-center mt-8">
        جميع الحقوق محفوظة &copy; {new Date().getFullYear()} خدماتي KW
      </div>
    </section>
  );
}
