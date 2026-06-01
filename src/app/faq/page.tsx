import Link from "next/link";
import { Phone, Wrench, Satellite, Camera, Tv } from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd, buildPageMetadata, faqPageJsonLd } from "@/lib/seo";

export const metadata = buildPageMetadata({
    title: "الأسئلة الشائعة | ستلايت الرجاء | 50266068",
    description:
        "دليل شامل للأسئلة الشائعة عن ستلايت الرجاء وخدمات الشاشات والستلايت والكاميرات وعروض IPTV في الكويت. تعرف على الموقع وكيفية طلب الخدمة.",
    path: "/faq",
    keywords: [
        "الأسئلة الشائعة",
        "ستلايت الرجاء",
        "فني شاشات الكويت",
        "كأس العالم IPTV",
        "أسئلة IPTV",
        "موقع ستلايت الرجاء",
        "خدمات الستلايت",
        "faq الكويت",
        "خدمة فنية الكويت",
    ],
});

const FAQ_DATA = [
    {
        category: "عن الموقع",
        icon: <Phone className="text-primary" size={24} />,
        questions: [
            {
                question: "ما هو موقع ستلايت الرجاء؟",
                answer: "ستلايت الرجاء هو الموقع الرسمي لخدمات الشاشات والستلايت والكاميرات وعروض IPTV في الكويت. نقدم خدمة فنية متكاملة مع تفعيل سريع ودعم فني مستمر من فريق محترف."
            },
            {
                question: "ما الذي يميز موقع ستلايت الرجاء عن خدمات أخرى؟",
                answer: "نتميز بخبرة طويلة، فريق فني محترف، تفعيل سريع، وأسعار واضحة بدون رسوم مخفية. كما نقدم دعمًا فنيًا على مدار الساعة ونعمل في جميع مناطق الكويت."
            },
            {
                question: "هل يمكنني طلب الخدمة عبر الموقع مباشرة؟",
                answer: "نعم، يمكنك إرسال طلبك عبر نموذج التواصل في الموقع أو الاتصال بنا مباشرة على الرقم 96550266068. نوفر خدمة الحجز السريع وخدمة الطوارئ للعملاء في جميع مناطق الكويت."
            }
        ]
    },
    {
        category: "الخدمات العامة",
        icon: <Wrench className="text-primary" size={24} />,
        questions: [
            {
                question: "ما هي الخدمات التي تقدمونها؟",
                answer: "نقدم مجموعة شاملة من الخدمات الفنية في الكويت، بما في ذلك تركيب وصيانة الشاشات، إصلاح وتركيب الستلايت، تركيب وصيانة كاميرات المراقبة، وخدمات الصيانة العامة للأجهزة الإلكترونية."
            },
            {
                question: "هل تقدمون الضمان على خدماتكم؟",
                answer: "نعم، نقدم ضماناً على جميع خدماتنا وتركيباتنا. مدة الضمان تختلف حسب نوع الخدمة، وعادة تتراوح بين 3 إلى 12 شهر. نلتزم بإصلاح أي عيوب تظهر خلال فترة الضمان مجاناً."
            },
            {
                question: "ما هي مناطق الخدمة في الكويت؟",
                answer: "نقدم خدماتنا في جميع أنحاء دولة الكويت، بما في ذلك العاصمة وحولي وفروانية وجنوب العاصمة وأبو حليفة والصباحية والرقعي وغيرها من المناطق. فريقنا مستعد للوصول إلى موقعك أينما كنت في الكويت."
            }
        ]
    },
    {
        category: "الشاشات",
        icon: <Tv className="text-primary" size={24} />,
        questions: [
            {
                question: "ما هي أنواع الشاشات التي تعملون معها؟",
                answer: "نعمل مع جميع أنواع الشاشات الحديثة بما في ذلك شاشات LED وOLED وQLED والشاشات الذكية من جميع العلامات التجارية مثل سامسونج، إل جي، سوني، توشيبا وغيرها. نقدم خدمات التركيب والصيانة والإصلاح لجميع هذه الأنواع."
            },
            {
                question: "كم يستغرق تركيب الشاشة؟",
                answer: "عادة يستغرق تركيب الشاشة بين 30 إلى 60 دقيقة حسب حجم الشاشة وتعقيد التركيب. نستخدم أدوات ومعدات احترافية لضمان التركيب الآمن والدقيق."
            },
            {
                question: "هل تقدمون خدمة تركيب الشاشات في الشركات والمكاتب؟",
                answer: "نعم، نقدم خدمات تركيب الشاشات في الشركات والمكاتب والمؤسسات. لدينا خبرة في تركيب الشاشات الكبيرة والشاشات التجارية، ونوفر حلولاً مخصصة لتلبية احتياجات العملاء المؤسسيين."
            }
        ]
    },
    {
        category: "الستلايت",
        icon: <Satellite className="text-primary" size={24} />,
        questions: [
            {
                question: "ما هي أنواع الستلايت التي تقدمون خدماتها؟",
                answer: "نقدم خدمات تركيب وصيانة جميع أنواع أطباق الستلايت، بما في ذلك الأطباق الصغيرة للمنازل، والأطباق الكبيرة للمجمعات والشركات، وأجهزة الاستقبال الحديثة من جميع العلامات التجارية."
            },
            {
                question: "كم تبلغ تكلفة تركيب الستلايت؟",
                answer: "التكلفة تختلف حسب نوع الطلب، حيث نقدم أسعاراً تنافسية وشفافة. التركيب الأساسي يبدأ من 15 دينار، وتشمل الأسعار جميع المواد والأدوات المطلوبة. يمكن الحصول على عرض سعر مفصل عبر الاتصال بنا."
            },
            {
                question: "هل تقدمون خدمة إصلاح مشاكل الإشارة؟",
                answer: "نعم، نقدم خدمة متخصصة في إصلاح مشاكل الإشارة الضعيفة أو المقطوعة. يقوم فنيونا بفحص النظام بالكامل لتحديد السبب الدقيق، سواء كان في الطبق أو الكابلات أو جهاز الاستقبال، ويوفر الحل المناسب."
            }
        ]
    },
    {
        category: "الكاميرات",
        icon: <Camera className="text-primary" size={24} />,
        questions: [
            {
                question: "ما هي أنواع الكاميرات التي تقدمون خدماتها؟",
                answer: "نقدم خدمات تركيب وصيانة جميع أنواع كاميرات المراقبة، بما في ذلك الكاميرات التناظرية والرقمية (IP) والكاميرات اللاسلكية والكاميرات الذكية. نستخدم أحدث التقنيات لضمان أفضل جودة في المراقبة."
            },
            {
                question: "كم يستغرق تركيب نظام كاميرات المراقبة؟",
                answer: "يعتمد الوقت على عدد الكاميرات وتعقيد النظام، حيث يستغرق التركيب الأساسي لنظام 4 كاميرات حوالي 3-4 ساعات. نقوم بتركيب الأنظمة الكبيرة على مراحل مع ضمان التشغيل السليم لكل جزء."
            },
            {
                question: "هل تقدمون خدمة المتابعة عن بُعد للأنظمة؟",
                answer: "نعم، نقدم خدمة المتابعة عن بُعد للأنظمة الحديثة التي تدعم هذا الخيار. يمكن للعملاء متابعة ما يجري عبر الكاميرات من هواتفهم أو أجهزتهم اللوحية في أي وقت ومن أي مكان."
            }
        ]
    },
    {
        category: "الخدمات والدعم",
        icon: <Phone className="text-primary" size={24} />,
        questions: [
            {
                question: "ما هي أوقات العمل لديكم؟",
                answer: "نعمل على مدار الساعة طوال أيام الأسبوع، مع توفر فنيين في الخدمة 24 ساعة في اليوم. يمكن الاتصال بنا في أي وقت للحصول على المساعدة الفورية في حالات الطوارئ."
            },
            {
                question: "كيف يمكنني الحجز أو الطلب؟",
                answer: "يمكنك الحجز أو الطلب عبر الاتصال المباشر على الرقم 96550266068، أو عبر الواتساب، أو من خلال زيارة موقعنا الإلكتروني وملء نموذج الطلب. نقوم بالرد على طلباتكم فوراً ونقوم بتحديد موعد مناسب."
            },
            {
                question: "هل تقدمون خصومات أو عروض خاصة؟",
                answer: "نعم، نقدم عروضاً وتخفيضات خاصة بشكل دوري، كما نقدم خصومات للعملاء المنتظمين وخدمات الصيانة الدورية. يمكنك متابعة قسم العروض على موقعنا لمعرفة أحدث العروض المتاحة."
            }
        ]
    }
];

const ALL_FAQS = FAQ_DATA.flatMap((category) => category.questions);

export default function FAQPage() {
    return (
        <section className="max-w-6xl mx-auto py-12 px-4">
            <JsonLd
                data={[
                    breadcrumbJsonLd([
                        { name: "الرئيسية", path: "/" },
                        { name: "الأسئلة الشائعة", path: "/faq" },
                    ]),
                    faqPageJsonLd(ALL_FAQS),
                ]}
            />
            {/* Hero Section */}
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-6">
                    الأسئلة الشائعة
                </h1>
                <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-6 leading-relaxed">
                    دليل شامل لجميع استفساراتك حول خدماتنا الفنية في الكويت
                </p>
            <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 shadow-lg border border-gray-100 mb-16 text-right">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">من نحن في ستلايت الرجاء؟</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                    ستلايت الرجاء هو الموقع الرسمي لخدمات الشاشات والستلايت والكاميرات وعروض IPTV في الكويت. نقدم خدمة فنية متكاملة مع تفعيل سريع ودعم فني مستمر من فريق محترف.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                    نحن نستهدف العملاء الباحثين عن جودة بث عالية، تركيب آمن، وصيانة دقيقة للأجهزة. موقعنا يوفر معلومات واضحة وطرق تواصل سهلة للحصول على خدمة سريعة في جميع مناطق الكويت.
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>خدمة فنية محترفة في تركيب وصيانة الشاشات والستلايت والكاميرات.</li>
                    <li>عروض IPTV مميزة لبرلين، سبايدر، فلاش 4K، وكأس العالم.</li>
                    <li>دعم فني سريع ومتابعة مباشرة لكل عميل.</li>
                </ul>
            </div>
        </div>

            {/* FAQ Categories */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
                {FAQ_DATA.map((category, index) => (
                    <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all transform hover:-translate-y-1">
                        <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                            {category.icon}
                        </div>
                        <h3 className="text-lg font-bold text-gray-800">{category.category}</h3>
                    </div>
                ))}
            </div>

            {/* FAQ Content */}
            <div className="space-y-8">
                {FAQ_DATA.map((category, categoryIndex) => (
                    <div key={categoryIndex} className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden">
                        <div className="bg-gradient-to-r from-primary to-secondary p-6">
                            <h2 className="text-2xl font-extrabold text-white flex items-center gap-3">
                                {category.icon}
                                {category.category}
                            </h2>
                        </div>
                        <div className="p-6 space-y-6">
                            {category.questions.map((faq, index) => (
                                <div key={index} className="border-b border-gray-200 last:border-b-0 pb-6 last:pb-0">
                                    <h3 className="text-xl font-bold text-primary mb-3 flex items-start gap-2">
                                        <span className="bg-primary/10 text-primary rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                                            {index + 1}
                                        </span>
                                        {faq.question}
                                    </h3>
                                    <p className="text-gray-700 leading-relaxed pr-10">
                                        {faq.answer}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* CTA Section */}
            <div className="mt-16 bg-gradient-to-br from-gray-50 to-white rounded-3xl p-10 border border-gray-200 text-center">
                <h2 className="text-3xl font-extrabold text-primary mb-4">هل لديك سؤال آخر؟</h2>
                <p className="text-gray-700 text-lg mb-8 max-w-2xl mx-auto">
                    لا تتردد في التواصل معنا للحصول على إجابات مفصلة لجميع استفساراتك
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                    <Link
                        href="/contact"
                        className="bg-gradient-to-r from-primary to-secondary text-white font-bold px-8 py-4 rounded-full hover:from-primary/90 hover:to-secondary/90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                    >
                        تواصل معنا
                    </Link>
                    <Link
                        href="tel:96550266068"
                        className="bg-gradient-to-r from-green-500 to-green-600 text-white font-bold px-8 py-4 rounded-full hover:from-green-600 hover:to-green-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                    >
                        اتصل الآن
                    </Link>
                </div>
            </div>

            <div className="text-center text-gray-500 mt-16 pt-8 border-t border-gray-200">
                جميع الحقوق محفوظة &copy; {new Date().getFullYear()} <span className="text-primary font-bold">ستلايت الرجاء</span>
            </div>
        </section>
    );
}