import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { DEFAULT_OG_IMAGE, buildPageMetadata, localBusinessJsonLd } from "@/lib/seo";
import { Monitor, SatelliteDish, Camera, PenTool, Tag, Wrench, Shield, Clock, Headphones, Star, CheckCircle, Award, Users, Trophy, Tv, PlayCircle } from "lucide-react";
import { ContactCard } from "@/components/ContactCard";
import { ProductCard } from "@/components/ProductCard";
import BlogCard from "@/components/BlogCard";
import { OfferCard } from "@/components/OfferCard";
import { supabase } from "@/lib/supabase";

export const revalidate = 3600; // Revalidate every hour

const features = [
  {
    title: "تركيب وصيانة الشاشات",
    icon: <Monitor size={32} className="text-primary" />,
    desc: "خدمة احترافية لتركيب الشاشات بجميع الأحجام وال_TYPES، مع ضبط وتثبيت آمن.",
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

const CONTACTS = [
  {
    name: "خبير",
    role: "تركيب شاشات",
    phone: "96550266068",
    whatsapp: "96550266068",
    icon: <Monitor size={32} className="text-primary" />,
    location: "الكويت"
  },
  {
    name: "خبير",
    role: "صيانة ستلايت",
    phone: "96550266068",
    whatsapp: "96550266068",
    icon: <SatelliteDish size={32} className="text-secondary" />,
    location: "الكويت"
  },
  {
    name: "متخصص",
    role: "كاميرات مراقبة",
    phone: "96550266068",
    whatsapp: "96550266068",
    icon: <Camera size={32} className="text-primary" />,
    location: "الكويت"
  },
  {
    name: "فني",
    role: "صيانة عامة",
    phone: "96550266068",
    whatsapp: "96550266068",
    icon: <PenTool size={32} className="text-secondary" />,
    location: "الكويت"
  },
];

const TESTIMONIALS = [
  {
    name: "سارة",
    title: "عميلة سعيدة",
    text: "خدمة ممتازة وسريعة، تم تثبيت اشتراك IPTV بكفاءة عالية وأصبح لدينا بث مباريات كأس العالم بدون أي انقطاع.",
    rating: 5,
  },
  {
    name: "خالد",
    title: "مستخدم مستمر",
    text: "من أفضل الفرق في الكويت، تعامل مهني وأسعار مناسبة. دعمهم الفني كان متعاونًا جدًا خلال تثبيت الجهاز.",
    rating: 5,
  },
  {
    name: "نوره",
    title: "عميلة عربية",
    text: "اشتراك IPTV برلين يعمل بأداء رائع، والصورة واضحة جدًا. أنصح أي شخص يبحث عن بث كأس العالم بتجربتهم.",
    rating: 5,
  },
];

export const metadata: Metadata = buildPageMetadata({
  title: "ستلايت الرجاء | عروض كأس العالم IPTV الكويت | شاشات وستلايت | 50266068",
  description:
    "عروض كأس العالم 2026 IPTV في الكويت. بث مباشر لجميع مباريات كأس العالم بجودة HD و4K. خدمات الشاشات والستلايت والكاميرات مع اشتراك برلين وسبايدر، مكتبة أفلام ومسلسلات كبيرة، واستشارة مجانية. خدمة ممتازة لكل عشاق الترفيه.",
  path: "/",
  keywords: [
    "عروض كأس العالم IPTV",
    "مشاهدة كأس العالم الكويت",
    "كأس العالم 2026 IPTV",
    "اشتراك IPTV كأس العالم",
    "بث مباشر كأس العالم",
    "خدمات الشاشات في الكويت",
    "تركيب ستلايت",
    "كاميرات مراقبة الكويت",
    "ستلايت الرجاء",
    "برلين IPTV",
    "سبايدر IPTV",
    "مكتبة أفلام ومسلسلات",
    "قنوات ومسلسلات",
    "خدمة ممتازة",
    "استشارة مجانية",
    "IPTV مجاني",
    "مشاهدة أفلام مجانية",
    "مكتبة IPTV واسعة",
  ],
  ogImage: DEFAULT_OG_IMAGE,
});

export default async function HomePage() {
  const { data: products } = await supabase.from("products").select("*").order("id", { ascending: false }).limit(6);
  const { data: blogPosts } = await supabase.from("blog_posts").select("*").order("id", { ascending: false }).limit(3);
  const { data: offers } = await supabase.from("offers").select("*, product:products(name, category:categories(name))").order("created_at", { ascending: false }).limit(3);

  const safeBlogs = blogPosts ?? [];
  const safeProducts = products ?? [];
  const safeOffers = offers ?? [];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 pt-10 font-[Noto Kufi Arabic,sans-serif]">
      <JsonLd data={localBusinessJsonLd()} />

      {/* Hero Section */}
      <section className="w-full max-w-6xl flex flex-col items-center gap-6 mb-16 text-center">
        <div className="relative w-32 h-32 mb-4">
          <Image
            src="/logo.png"
            alt="شعار ستلايت الرجاء"
            fill
            priority
            className="rounded-xl object-contain"
          />
        </div>

        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-center text-primary">
          ستلايت الرجاء
        </h1>

        <p className="text-xl md:text-2xl text-center mb-6 text-secondary font-medium max-w-3xl">
          كل حلول الشاشات، الستلايت، والكاميرات تحت سقف واحد في الكويت.
        </p>

        <p className="text-lg md:text-xl text-center mb-6 text-gray-700 leading-relaxed max-w-3xl">
          فني ستلايت محترف يغطي جميع مناطق الكويت.<br />
          تركيب وصيانة ستلايت بجودة عالية وبسرعة فائقة.<br />
          محل ستلايت الرجاء جاهز لخدمتكم على مدار الساعة.
        </p>

        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-6 mb-8 w-full max-w-3xl">
          <p className="text-lg md:text-xl text-center text-cyan-700 font-semibold">
            استمتع بأفضل اشتراكات IPTV، اشتراك برلين، واشتراك سبايدر.<br />
            جودة عالية، أسعار مناسبة، وخدمة سريعة ومضمونة.
          </p>
        </div>

        {/* عروض كأس العالم — بانر رئيسي */}
        <section className="w-full max-w-5xl mb-10 rounded-2xl overflow-hidden shadow-2xl border-2 border-yellow-400/50 bg-gradient-to-br from-emerald-700 via-green-600 to-emerald-800 text-white p-8 md:p-10 text-center relative">
          <div className="flex justify-center mb-4">
            <Trophy size={56} className="text-yellow-300" aria-hidden />
          </div>
          <h2 className="text-2xl md:text-4xl font-extrabold mb-3">
            عروض كأس العالم 2026 IPTV في الكويت
          </h2>
          <p className="text-base md:text-lg opacity-95 mb-6 max-w-2xl mx-auto leading-relaxed">
            بث مباشر لجميع مباريات كأس العالم بجودة HD و4K. اشتراك برلين، سبايدر، والجني مع تفعيل فوري ودعم فني 24/7 خلال البطولة.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-6 text-sm">
            <span className="flex items-center gap-1 bg-white/15 px-3 py-1.5 rounded-full"><PlayCircle size={16} /> بث مباشر</span>
            <span className="flex items-center gap-1 bg-white/15 px-3 py-1.5 rounded-full"><Tv size={16} /> HD و 4K</span>
            <span className="flex items-center gap-1 bg-white/15 px-3 py-1.5 rounded-full"><Trophy size={16} /> جميع المباريات</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/football/world-cup"
              className="px-8 py-4 rounded-xl bg-yellow-400 text-emerald-900 font-bold text-lg hover:bg-yellow-300 transition shadow-lg"
            >
              عروض كأس العالم IPTV
            </Link>
            <a
              href="https://wa.me/96550266068?text=مرحبًا، أود الاستفسار عن عروض كأس العالم IPTV."
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-xl bg-white/20 border border-white/40 font-bold text-lg hover:bg-white/30 transition"
            >
              استفسار واتساب
            </a>
          </div>
        </section>

        <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full justify-center">
          <Link href="/products" className="w-full sm:w-auto">
            <button className="w-full px-8 py-4 rounded-xl text-white text-lg font-bold shadow-lg transition mb-2 sm:mb-0 bg-primary hover:bg-primary/90 hover:shadow-xl transform hover:-translate-y-0.5">
              استعرض الخدمات
            </button>
          </Link>
          <Link href="/offers" className="w-full sm:w-auto">
            <button className="w-full px-8 py-4 rounded-xl text-white text-lg font-bold shadow-lg transition mb-2 sm:mb-0 bg-red-500 hover:bg-red-600 hover:shadow-xl flex items-center justify-center gap-2 transform hover:-translate-y-0.5">
              <Tag size={20} />
              العروض الخاصة
            </button>
          </Link>
          <Link href="/contact" className="w-full sm:w-auto">
            <button className="w-full px-8 py-4 rounded-xl text-white text-lg font-bold shadow-lg transition bg-secondary hover:bg-secondary/90 hover:shadow-xl transform hover:-translate-y-0.5">
              تواصل معنا
            </button>
          </Link>
        </div>
      </section>

      <section className="py-16 px-6 bg-white rounded-3xl shadow-xl max-w-6xl w-full mx-auto">
        <div className="grid gap-10 lg:grid-cols-2 items-center">
          <div className="prose text-gray-700 leading-relaxed text-lg">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">عروض كأس العالم 2026 في الصفحة الرئيسية — تجربة IPTV لا تُقارن</h2>
            <p>
              في ستلايت الرجاء، نضع بين يديك عالمًا متكاملاً من الترفيه والمباريات مع عروض كأس العالم 2026 المخصصة لمشاهدي الكويت. هذا الموسم، نقدم باقات IPTV حصرية ترتبط مباشرة بمباريات كأس العالم، لتشاهد كل مباراة كما لو كنت في الاستاد. اشتراك برلين IPTV يفتح لك أبوب القنوات الأوروبية العالمية، بينما اشتراك سبايدر IPTV يمنحك تغطية عربية كاملة لكل المباريات والتحليلات الرياضية والبرامج الحصرية. مع عرض كأس العالم، نوفر لك تفعيل سريع، دعم فني مباشر، وأسعار خاصة لفترة البطولة، مما يجعل مشاهدة مباريات كأس العالم من المنزل تجربة سلسة وممتعة.
            </p>
            <p>
              لقد صممنا عروضنا لتناسب جميع الاحتياجات: إذا كنت من عشاق المباريات الأوروبية وتريد البث بجودة HD فائقة، فإن اشتراك برلين IPTV هو الخيار المثالي. أما إذا كنت تبحث عن القنوات العربية الرئيسية مثل beIN Sports وMBC للأحداث الرياضية، فاشتراك سبايدر IPTV يقدم لك هذه القنوات ضمن باقات مرنة وبسعر منافس. كما نقدم خيارات مخصصة تشمل رسيفر الجني و فلاش 4K وعلى رأسها باقات خاصة لعرض كأس العالم بدقة 4K، لتستمتع بالصورة الحقيقية والتفاصيل الدقيقة في كل مباراة.
            </p>
            <p>
              الفارق الذي نقدمه لا يقتصر على نوعية القنوات فحسب، بل على التجربة الكاملة أيضًا. فكر في باقة IPTV مع دعم فني متواصل على مدار الساعة، تفعيل خلال دقائق، وخدمة عملاء قادرة على إعداد الجهاز وشرح التشغيل خطوة بخطوة. لدى ستلايت الرجاء، نقوم بتجهيز قائمة مشاهدة جاهزة لمباريات كأس العالم، ونضاف إليها مكتبة أفلام ومسلسلات عربية وعالمية حتى تستمر متعتك بعد انتهاء المباريات. هذه العروض تساعد العائلة على متابعة البطولة كاملة دون الحاجة للبحث عن القنوات أو تغيير الإعدادات في كل مرة.
            </p>
            <p>
              نقدم لك عروض كأس العالم التي تغطي جميع مناطق الكويت دون استثناء: مدينة الكويت، حولي، الفروانية، الأحمدي، الجهراء، مبارك الكبير، والعديد من المناطق الأخرى. يمكنك اختيار الباقة المناسبة لك سواء كنت ترغب ببث مباشر لمباراة واحدة، أو باقة كاملة للمنافسة بأكملها، أو حتى باقة متكاملة تشمل قنوات أفلام ومسلسلات. كل هذه الخيارات متاحة بأسعار تنافسية ودون التزام طويل الأمد، مع إمكانية تجربة الخدمة أولاً قبل اختيار الاشتراك النهائي.
            </p>
            <p>
              إن العروض الخاصة بكأس العالم تمنحك فرصة الحصول على باقة برلين أو سبايدر مع خصم إضافي، بالإضافة إلى باقات متكاملة تجمع بين اشتراك IPTV وجهاز رسيفر الجني أو فلاش 4K. هذا يجعل تجربتك أفضل من أي وقت مضى، فبطولة كأس العالم تحتاج إلى خدمة بث قوية ومستقرة، ونحن نضمن لك ذلك بفضل سيرفراتنا المحسنة والشبكات السريعة. إذا كنت تود مشاهدة المباريات بجودة UHD ومواصلة الترفيه بعد المباراة، فإن هذه الباقات تضع كل ذلك تحت تصرفك.
            </p>
            <p>
              اختبر بنفسك لماذا أصبح ستلايت الرجاء الخيار الأول لعشاق IPTV في الكويت، وخاصة محبي كأس العالم. تواصل معنا الآن عبر الواتساب أو الهاتف للحصول على استشارة مجانية، عرض خاص، وتفعيل فوري. سواء كنت تبحث عن بث مباشر للأحداث الرياضية، باقات أفلام ومسلسلات غنية، أو جهاز استقبال متكامل، ستجد لدينا الحل الأمثل. استمتع بمشاهدة كأس العالم 2026 بأفضل جودة وراحة من المنزل مع عروض IPTV الأكثر قوة في الكويت.
            </p>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-lg bg-emerald-50 p-4">
            <Image
              src="/sattech/iptv/worldcup-fans.jpg"
              alt="اشتراكات IPTV في الكويت مع ستلايت الرجاء"
              width={760}
              height={580}
              className="w-full h-full object-cover rounded-3xl"
            />
          </div>
        </div>
      </section>

      {/* IPTV و مكتبة المحتوى */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto grid gap-10 lg:grid-cols-2 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">مكتبة IPTV واسعة للقنوات والأفلام والمسلسلات</h2>
            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
              استمتع بأكبر مكتبة ترفيه في الكويت مع قنوات أفلام ومسلسلات عربية وعالمية، باقات رياضية، وأفلام حديثة بأعلى جودة. نقدم لك أفضل تجربة IPTV مع محتوى متجدد يومياً وخدمة ممتازة تدعم جميع الأجهزة.
            </p>
            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
              سواء كنت تبحث عن مشاهدة كأس العالم، أفلام مميزة، أو مسلسلات عربية شهيرة، ستجد لدينا مكتبة ضخمة تحتوي على المحتوى الذي تحبه. استشارة مجانية قبل البدء وخدمة عملاء سريعة للرد على جميع استفساراتك.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="bg-white rounded-3xl p-5 shadow-sm border border-gray-100">
                <h3 className="font-bold text-lg text-primary mb-2">قنوات كاملة</h3>
                <p className="text-gray-600">آلاف القنوات الرياضية والأفلام والمسلسلات بجودة HD و4K.</p>
              </div>
              <div className="bg-white rounded-3xl p-5 shadow-sm border border-gray-100">
                <h3 className="font-bold text-lg text-primary mb-2">محتوى متجدد</h3>
                <p className="text-gray-600">مكتبة متجددة تحتوي على أحدث الأفلام والمسلسلات العربية والعالمية.</p>
              </div>
            </div>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-xl bg-white">
            <Image
              src="/sattech/iptv/library.jpg"
              alt="مكتبة IPTV واسعة قنوات أفلام ومسلسلات"
              width={800}
              height={600}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 bg-emerald-50 rounded-3xl border border-emerald-100 shadow-lg max-w-6xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">جرب IPTV مجاناً مع عرض تجريبي</h2>
          <p className="text-gray-600 text-lg mb-6 max-w-3xl mx-auto leading-relaxed">
            احصل على تجربة IPTV مجانية أو عرض تجريبي لفترة محدودة قبل اختيار الباقة المناسبة لك. نقدم خدمة ممتازة وتجربة مشاهدة مميزة عبر قنوات أفلام ومسلسلات، قنوات رياضية، وبث مباشر لكأس العالم.
          </p>
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-primary mb-3">مكتبة أفلام ومسلسلات</h3>
              <p className="text-gray-600">محتوى متجدد من الأفلام والمسلسلات العربية والعالمية.</p>
            </div>
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-primary mb-3">اختبار مجاني</h3>
              <p className="text-gray-600">عرض تجريبي مجاني لتجربة البث قبل شراء الاشتراك.</p>
            </div>
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-primary mb-3">خدمة ممتازة</h3>
              <p className="text-gray-600">دعم فني سريع ومتابعة شخصية طوال فترة الاشتراك.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full max-w-5xl my-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-2xl p-6 shadow border border-gray-100 text-center">
            <div className="flex justify-center mb-3">
              <Users className="text-primary" size={32} />
            </div>
            <div className="text-2xl font-bold text-primary">1000+</div>
            <div className="text-gray-600">عميل راضي</div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow border border-gray-100 text-center">
            <div className="flex justify-center mb-3">
              <CheckCircle className="text-secondary" size={32} />
            </div>
            <div className="text-2xl font-bold text-secondary">500+</div>
            <div className="text-gray-600">مشروع مكتمل</div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow border border-gray-100 text-center">
            <div className="flex justify-center mb-3">
              <Award className="text-primary" size={32} />
            </div>
            <div className="text-2xl font-bold text-primary">15+</div>
            <div className="text-gray-600">سنة خبرة</div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow border border-gray-100 text-center">
            <div className="flex justify-center mb-3">
              <Star className="text-secondary" size={32} />
            </div>
            <div className="text-2xl font-bold text-secondary">4.9/5</div>
            <div className="text-gray-600">تقييم العملاء</div>
          </div>
        </div>
      </section>

      {/* بطاقات التواصل */}
      <div className="w-full max-w-6xl my-12">
        <h2 className="text-3xl font-bold text-primary mb-6 text-center">تواصل مباشر</h2>
        <ContactCard contacts={CONTACTS} />
      </div>

      {/* المزايا */}
      <section className="w-full max-w-5xl mb-16">
        <h2 className="text-3xl font-bold text-secondary mb-6 text-center">الخدمات المقدمة</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {features.map((f, i) => (
            <div key={f.title} className="flex items-start gap-4 bg-white rounded-2xl shadow-lg p-6 border border-gray-100 transition-all duration-300 hover:shadow-xl hover:border-primary/30">
              <div className="shrink-0 mt-1 p-3 bg-primary/10 rounded-xl">{f.icon}</div>
              <div>
                <h2 className={`font-bold text-xl mb-2 ${i % 2 === 0 ? "text-primary" : "text-secondary"}`}>{f.title}</h2>
                <p className="text-gray-700">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* العروض الخاصة */}
      {safeOffers?.length > 0 && (
        <section className="w-full max-w-6xl mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-primary">العروض الخاصة</h2>
            <Link href="/offers" className="text-red-500 hover:text-red-600 font-medium flex items-center gap-1 text-lg">
              عرض جميع العروض
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </Link>
          </div>
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {safeOffers.map((offer) => (
              <OfferCard key={offer.id} offer={offer} />
            ))}
          </div>
        </section>
      )}

      {/* المنتجات */}
      {safeProducts?.length > 0 && (
        <section className="w-full max-w-6xl mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-primary">أحدث الخدمات</h2>
            <Link href="/products" className="text-primary hover:text-secondary font-medium flex items-center gap-1 text-lg">
              عرض جميع الخدمات
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </Link>
          </div>
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {safeProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      )}

      {/* المدونة */}
      {safeBlogs?.length > 0 && (
        <section className="w-full max-w-6xl mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-primary">أحدث المقالات</h2>
            <Link href="/blog" className="text-primary hover:text-secondary font-medium flex items-center gap-1 text-lg">
              عرض جميع المقالات
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </Link>
          </div>
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {safeBlogs.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </section>
      )}

      {/* لماذا تختار ستلايت الرجاء ؟ */}
      <section className="w-full max-w-5xl my-16 px-4 text-center">
        <h2 className="text-3xl font-bold text-secondary mb-6">لماذا تختار ستلايت الرجاء ؟</h2>
        <p className="text-gray-700 text-lg mb-12 max-w-3xl mx-auto">
          نقدم لك كل ما تحتاجه من خدمات التوصيل والتركيب والدعم الفني للأجهزة الإلكترونية باحترافية، وبخبرة طويلة في السوق الكويتي.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-right">
          <div className="bg-white shadow-lg rounded-2xl p-6 border border-gray-100 transition-all duration-300 hover:shadow-xl hover:border-primary/30">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="text-primary" size={32} />
            </div>
            <h3 className="text-primary font-bold text-xl mb-2">جودة مضمونة</h3>
            <p className="text-gray-600">نستخدم أفضل المعدات ونتعامل مع منتجات موثوقة لضمان جودة التركيب والأداء.</p>
          </div>
          <div className="bg-white shadow-lg rounded-2xl p-6 border border-gray-100 transition-all duration-300 hover:shadow-xl hover:border-secondary/30">
            <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Wrench className="text-secondary" size={32} />
            </div>
            <h3 className="text-secondary font-bold text-xl mb-2">خبرة عائلية</h3>
            <p className="text-gray-600">عقود من الخبرة في خدمات الشاشات، الستلايت والكاميرات بلمسة شخصية موثوقة.</p>
          </div>
          <div className="bg-white shadow-lg rounded-2xl p-6 border border-gray-100 transition-all duration-300 hover:shadow-xl hover:border-primary/30">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="text-primary" size={32} />
            </div>
            <h3 className="text-primary font-bold text-xl mb-2">سرعة في الإنجاز</h3>
            <p className="text-gray-600">نصل إليك بسرعة وننجز العمل بنفس اليوم كلما أمكن، مع الالتزام بالمواعيد.</p>
          </div>
          <div className="bg-white shadow-lg rounded-2xl p-6 border border-gray-100 transition-all duration-300 hover:shadow-xl hover:border-secondary/30">
            <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Headphones className="text-secondary" size={32} />
            </div>
            <h3 className="text-secondary font-bold text-xl mb-2">دعم متواصل</h3>
            <p className="text-gray-600">خدمة ما بعد البيع عبر الاتصال أو الواتساب طوال أيام الأسبوع.</p>
          </div>
        </div>
      </section>

      <section className="w-full max-w-6xl my-16 px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary">آراء عملائنا</h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            بعض من تجارب عملائنا مع اشتراكات IPTV، خدمات الشاشات، وصيانة الستلايت في الكويت.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((testimonial) => (
            <div key={testimonial.name} className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 text-right">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-primary">{testimonial.name}</h3>
                  <p className="text-gray-500">{testimonial.title}</p>
                </div>
                <div className="flex items-center gap-1 text-yellow-500">
                  {[...Array(testimonial.rating)].map((_, index) => (
                    <Star key={index} size={18} />
                  ))}
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* روابط سريعة */}
      <div className="text-sm text-center mt-8 text-gray-500 pb-6">
        تصفح صفحات الموقع:
        <Link href="/products" className="text-primary hover:underline font-medium mx-1">الخدمات</Link>|
        <Link href="/offers" className="text-red-500 hover:underline font-medium mx-1">العروض</Link>|
        <Link href="/football/world-cup" className="text-emerald-700 hover:underline font-bold mx-1">كأس العالم IPTV</Link>|
        <Link href="/blog" className="text-secondary hover:underline font-medium mx-1">المدونة</Link>|
        <Link href="/contact" className="text-primary hover:underline font-medium mx-1">التواصل</Link>|
        <Link href="/satellite-service" className="text-secondary hover:underline font-medium mx-1">فني ستلايت</Link>|
        <Link href="/camera-service" className="text-primary hover:underline font-medium mx-1">فني كاميرات</Link>|
        <Link href="/intercom-service" className="text-secondary hover:underline font-medium mx-1">فني انتركم</Link>
      </div>
    </div>
  );
}