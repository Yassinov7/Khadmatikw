import Image from "next/image";
export default function WhoIsAlRajaaPage() {
    return (
        <div className="min-h-screen flex flex-col">


            <main className="flex-grow container mx-auto px-4 py-8">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-center">
                        من نحن؟
                    </h1>

                    <div className="bg-white rounded-xl shadow-md p-6 mb-8">
                        <div className="flex flex-col md:flex-row gap-6 items-center">
                            <div className="">
                                <Image
                                    src="/logo.png"
                                    alt="شعار ستلايت الرجاء"
                                    width={300}
                                    height={300}
                                    className="rounded-xl shadow-md w-full h-auto"
                                />
                            </div>

                            <div className="md:w-2/3">
                                <h2 className="text-2xl font-bold text-secondary mb-4">ستلايت الرجاء</h2>
                                <p className="text-gray-700 mb-4">
                                    نحن شركة متخصصة في تقديم خدمات الستلايت، الكاميرات، وانتركوم في الكويت.
                                    تأسست شركتنا بهدف تقديم خدمات فنية عالية الجودة للعملاء في جميع أنحاء الكويت.
                                </p>
                                <p className="text-gray-700 mb-4">
                                    فريقنا يتكون من فنيين محترفين ذوي خبرة طويلة في مجال الخدمات الفنية،
                                    ونحن نفخر بتقديم حلول موثوقة وسريعة لجميع احتياجاتكم التقنية.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        <div className="bg-white rounded-xl shadow-md p-6">
                            <h3 className="text-xl font-bold text-primary mb-3">مهمتنا</h3>
                            <p className="text-gray-700">
                                تقديم خدمات فنية متميزة تلبي احتياجات عملائنا مع الحفاظ على أعلى معايير الجودة والاحترافية.
                            </p>
                        </div>

                        <div className="bg-white rounded-xl shadow-md p-6">
                            <h3 className="text-xl font-bold text-primary mb-3">رؤيتنا</h3>
                            <p className="text-gray-700">
                                أن نكون الشركة الرائدة في مجال الخدمات الفنية في الكويت، معتمدين على الابتكار والتميز.
                            </p>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-md p-6">
                        <h3 className="text-xl font-bold text-primary mb-4">لماذا تختارنا؟</h3>
                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                            <li>فنيين محترفين وذوي خبرة طويلة</li>
                            <li>خدمة سريعة وموثوقة</li>
                            <li>أسعار تنافسية ومعقولة</li>
                            <li>ضمان على جميع الخدمات المقدمة</li>
                            <li>دعم فني متواصل بعد إتمام الخدمة</li>
                        </ul>
                    </div>
                </div>
            </main>

        </div>
    );
}