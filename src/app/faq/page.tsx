import { Metadata } from "next";
import Link from "next/link";
import { ChevronDown, Phone, MessageCircle, Wrench, Satellite, Camera, Tv } from "lucide-react";

export const metadata: Metadata = {
    title: "الأسئلة الشائعة | ستلايت الرجاء | 50266068",
    description: "اكتشف إجابات للأسئلة الشائعة حول خدمات الشاشات والستلايت والكاميرات في الكويت. دليل شامل لجميع استفساراتك.",
    keywords: [
        "الأسئلة الشائعة",
        "ستلايت الرجاء",
        "فني شاشات الكويت",
        "فني ستلايت",
        "كاميرات مراقبة الكويت",
        "صيانة شاشات",
        "تركيب ستلايت",
        "خدمة فورية الكويت",
        "أسئلة متكررة"
    ],
    openGraph: {
        title: "الأسئلة الشائعة | ستلايت الرجاء | دليل شامل لجميع استفساراتك",
        description: "اكتشف إجابات للأسئلة الشائعة حول خدمات الشاشات والستلايت والكاميرات في الكويت. دليل شامل لجميع استفساراتك.",
        url: "https://satellitealrajaa.com/faq",
        siteName: "ستلايت الرجاء",
        locale: "ar_KW",
        type: "website",
    },
    alternates: {
        canonical: "https://satellitealrajaa.com/faq",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
};

const FAQ_DATA = [
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

export default function FAQPage() {
    return (
        <section className="max-w-6xl mx-auto py-12 px-4">
            {/* Hero Section */}
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-6">
                    الأسئلة الشائعة
                </h1>
                <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-12 leading-relaxed">
                    دليل شامل لجميع استفساراتك حول خدماتنا الفنية في الكويت
                </p>
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