import { Metadata } from "next";
import { Phone, MessageCircle, Mail, MapPin } from "lucide-react";
import ContactItem from './../../components/ContactItem';
// بيانات الاتصال
const CONTACTS = {
  phone: "96550266068",
  whatsapp: "96565013345",
  address: "الكويت، حولي",
  email: "02m.yassine@gmail.com",
};

export const metadata: Metadata = {
  title: "تواصل معنا | خدماتي KW",
  description: "تواصل مع فريق خدماتي KW لأي استفسار أو طلب خدمات الشاشات، الستلايت والكاميرات في الكويت. نحن هنا لخدمتك 24/7.",
  openGraph: {
    title: "تواصل معنا | خدماتي KW",
    description: "خدمات فنية متكاملة للشاشات والستلايت والكاميرات في الكويت - اتصل الآن لأي استفسار أو دعم فني.",
    url: "https://khadmatikw.vercel.app/contact",
    type: "website",
  },
  alternates: {
    canonical: "https://khadmatikw.vercel.app/contact",
  },
};

export default function ContactPage() {
  return (
    <section className="max-w-xl mx-auto py-12 px-4 flex flex-col items-center gap-7">
      {/* Structured Data للـ SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "خدماتي KW",
            telephone: `+${CONTACTS.phone}`,
            email: CONTACTS.email,
            address: {
              "@type": "PostalAddress",
              addressCountry: "KW",
              addressLocality: CONTACTS.address,
            },
            url: "https://khadmatikw.vercel.app/contact",
            sameAs: [`https://wa.me/${CONTACTS.whatsapp}`],
          }),
        }}
      />

      <h1 className="text-3xl md:text-4xl font-extrabold text-primary text-center mb-2 tracking-tight">
        تواصل معنا
      </h1>
      <p className="text-lg text-center text-gray-700 mb-4">
        فريق <span className="text-primary font-bold">خدماتي KW</span> جاهز دائمًا لدعمك وخدمتك في جميع أنحاء الكويت.<br />
        يمكنك التواصل معنا مباشرة عبر الطرق التالية:
      </p>

      {/* عناصر الاتصال */}
      <div className="flex flex-col gap-5 w-full">
        {/* هاتف */}
        <ContactItem
          icon={<Phone size={28} className="text-primary" />}
          title="هاتف"
          value={CONTACTS.phone}
          link={`tel:${CONTACTS.phone}`}
          copy
        />
        {/* واتساب */}
        <ContactItem
          icon={<MessageCircle size={28} className="text-green-600" />}
          title="واتساب"
          value={CONTACTS.whatsapp}
          link={`https://wa.me/${CONTACTS.whatsapp}`}
          external
          copy
        />
        {/* بريد إلكتروني */}
        <ContactItem
          icon={<Mail size={28} className="text-secondary" />}
          title="البريد "
          value={CONTACTS.email}
          link={`mailto:${CONTACTS.email}`}
          copy
        />
        {/* العنوان */}
        <ContactItem
          icon={<MapPin size={28} className="text-blue-600" />}
          title="العنوان"
          value={CONTACTS.address}
        />
      </div>

      {/* خريطة صغيرة (اختياري) */}
      <div className="w-full rounded-xl overflow-hidden border border-gray-100 shadow-sm mt-7">
        <iframe
          title="خريطة الموقع"
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3478.1617865036774!2d48.01891368490148!3d29.336253982145514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjnCsDIwJzEwLjUiTiA0OMKwMDEnMDAuMiJF!5e0!3m2!1sar!2sbg!4v1750270359813!5m2!1sar!2sbg"
          className="w-full h-56"
          allowFullScreen
          loading="lazy"
        />
      </div>

      <div className="text-xs text-gray-400 text-center mt-8">
        جميع الحقوق محفوظة &copy; {new Date().getFullYear()} خدماتي KW
      </div>
    </section>
  );
}
