import { Metadata } from "next";
import { Phone, MessageCircle } from "lucide-react";

const CONTACTS = [
  {
    name: "صياح",
    role: "فني تركيب شاشات",
    phone: "96550266068",
    whatsapp: "96565013345",
  },
  {
    name: "عيسى",
    role: "خبير صيانة ستلايت",
    phone: "96550112233",
    whatsapp: "96566112233",
  },
  {
    name: "موسى",
    role: "متخصص كاميرات مراقبة",
    phone: "96550778899",
    whatsapp: "96566778899",
  },
  {
    name: "عمر",
    role: "فني صيانة عامة",
    phone: "96550445566",
    whatsapp: "96565445566",
  },
];

export const metadata: Metadata = {
  title: "تواصل معنا | خدماتي KW",
  description: "اتصل مباشرة بأفراد فريق خدماتي KW في الكويت. فنيون محترفون بخدمتكم عبر الهاتف أو الواتساب.",
  openGraph: {
    title: "تواصل معنا | خدماتي KW",
    description: "أرقام اتصال وواتساب مباشرة لفريق خدماتي لخدمات الشاشات، الستلايت، والكاميرات في الكويت.",
    url: "https://khadmatikw.vercel.app/contact",
    type: "website",
  },
  alternates: {
    canonical: "https://khadmatikw.vercel.app/contact",
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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {CONTACTS.map((person, index) => (
          <div
            key={index}
            className="bg-white shadow border border-gray-200 rounded-2xl p-5 flex flex-col items-center text-center gap-3"
          >
            <div className="text-xl font-bold text-gray-800">{person.name}</div>
            <div className="text-sm text-gray-500">{person.role}</div>

            <div className="flex flex-col gap-2 w-full mt-3">
              <a
                href={`tel:${person.phone}`}
                className="flex items-center justify-center gap-2 px-4 py-2 bg-primary hover:bg-primary/90 text-white rounded-full text-sm font-bold shadow"
              >
                <Phone size={16} /> اتصال مباشر
              </a>
              <a
                href={`https://wa.me/${person.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-full text-sm font-bold shadow"
              >
                <MessageCircle size={16} /> واتساب
              </a>
            </div>
          </div>
        ))}
      </div>

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
