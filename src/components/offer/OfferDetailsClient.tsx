"use client";
import Image from "next/image";
import { Phone, MessageCircle, Calendar, Tag, ArrowLeft, CheckCircle, Star, Clock, Shield } from "lucide-react";
import type { Offer } from "@/types";
import Link from "next/link";
import { OfferCard } from "@/components/OfferCard";
import { useState } from "react";

export default function OfferDetailsClient({ offer, relatedOffers }: { offer: Offer; relatedOffers: Offer[] }) {
    const [imageLoaded, setImageLoaded] = useState(false);

    const whatsapp = offer.contact_info?.whatsapp
        ? `https://wa.me/${offer.contact_info.whatsapp.replace(/[^0-9]/g, "")}?text=مرحبًا، أود الاستفسار عن العرض: ${encodeURIComponent(offer.title)}`
        : null;

    const phone = offer.contact_info?.phone
        ? `tel:${offer.contact_info.phone.replace(/[^0-9+]/g, "")}`
        : null;

    // Format dates
    const formatDate = (dateString?: string) => {
        if (!dateString) return "";
        const date = new Date(dateString);
        return date.toLocaleDateString("ar-EG", {
            year: "numeric",
            month: "long",
            day: "numeric",
        });
    };

    // Structured data for SEO
    const offerStructuredData = {
        "@context": "https://schema.org",
        "@type": "Offer",
        "name": offer.title,
        "description": offer.description,
        "image": offer.image_url || "/default-offer.png",
        "startDate": offer.start_date,
        "endDate": offer.end_date,
        "seller": {
            "@type": "LocalBusiness",
            "name": "ستلايت الرجاء",
            "telephone": "+96550266068",
            "areaServed": "KW"
        }
    };

    return (
        <main className="max-w-6xl mx-auto px-4 py-8">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(offerStructuredData) }}
            />

            <Link
                href="/offers"
                className="flex items-center text-primary font-medium mb-6 hover:text-secondary transition-colors group"
            >
                <ArrowLeft className="ml-2 transition-transform group-hover:-translate-x-1" size={20} />
                العودة إلى جميع العروض
            </Link>

            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-2xl">
                {/* Offer Header with Image */}
                <div className="relative w-full h-96 bg-gradient-to-r from-primary/5 to-secondary/5">
                    {!imageLoaded && (
                        <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-t-3xl"></div>
                    )}
                    {offer.image_url ? (
                        <Image
                            src={offer.image_url}
                            alt={`عرض خاص: ${offer.title} - ستلايت الرجاء`}
                            fill
                            className={`object-contain p-8 transition-opacity duration-500 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                            priority
                            onLoadingComplete={() => setImageLoaded(true)}
                        />
                    ) : (
                        <div className="flex items-center justify-center h-full">
                            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-32 h-32 flex items-center justify-center">
                                <Tag className="text-gray-400" size={64} />
                            </div>
                        </div>
                    )}
                    <div className="absolute top-6 right-6 bg-gradient-to-r from-red-500 to-red-600 text-white text-sm font-bold px-5 py-2 rounded-full flex items-center gap-2 shadow-lg transform transition-transform hover:scale-105">
                        <Tag size={18} />
                        عرض خاص
                    </div>
                    <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm text-primary font-bold px-4 py-2 rounded-full flex items-center gap-2 shadow-md">
                        <Star className="text-yellow-500" size={18} />
                        مميز
                    </div>
                </div>

                <div className="p-8">
                    {/* Offer Title */}
                    <h1 className="text-4xl font-extrabold text-primary mb-4 leading-tight">{offer.title}</h1>

                    {/* Offer Dates */}
                    {(offer.start_date || offer.end_date) && (
                        <div className="flex items-center gap-3 text-gray-600 mb-6 bg-gray-50 rounded-xl p-4">
                            <Clock className="text-primary" size={24} />
                            <div className="flex gap-2 flex-wrap items-center">
                                {offer.start_date && (
                                    <span className="font-medium">من {formatDate(offer.start_date)}</span>
                                )}
                                {offer.start_date && offer.end_date && <span className="font-bold text-primary">-</span>}
                                {offer.end_date && (
                                    <span className="font-medium">حتى {formatDate(offer.end_date)}</span>
                                )}
                            </div>
                        </div>
                    )}

                    {/* Offer Description */}
                    {offer.description && (
                        <div className="text-gray-700 leading-relaxed text-lg mb-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                            <h2 className="text-2xl font-bold text-primary mb-4">وصف العرض</h2>
                            <p className="whitespace-pre-line">{offer.description}</p>
                        </div>
                    )}

                    {/* Product Info (if linked) */}
                    {offer.product && (
                        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100 mb-8 shadow-sm">
                            <div className="flex items-center gap-3 mb-4">
                                <Shield className="text-blue-500" size={24} />
                                <h3 className="text-2xl font-bold text-gray-800">متوفر لـ</h3>
                            </div>
                            <div className="flex flex-wrap items-center gap-4">
                                {offer.product.category?.name && (
                                    <span className="text-sm bg-blue-500 text-white px-4 py-2 rounded-full font-bold shadow">
                                        {offer.product.category.name}
                                    </span>
                                )}
                                <span className="text-xl font-bold text-gray-800">{offer.product.name}</span>
                            </div>
                        </div>
                    )}

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Benefits List */}
                        {offer.benefits && offer.benefits.length > 0 && (
                            <div className="space-y-4">
                                <h3 className="text-2xl font-bold text-primary flex items-center gap-2">
                                    <CheckCircle className="text-green-500" size={28} />
                                    المزايا الحصرية
                                </h3>
                                <div className="space-y-3">
                                    {offer.benefits.map((benefit, index) => (
                                        <div
                                            key={index}
                                            className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                                        >
                                            <div className="flex-shrink-0 mt-1">
                                                <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                                                    <CheckCircle className="text-green-600" size={16} />
                                                </div>
                                            </div>
                                            <span className="text-lg text-gray-700">{benefit}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Features List */}
                        {offer.features && offer.features.length > 0 && (
                            <div className="space-y-4">
                                <h3 className="text-2xl font-bold text-primary flex items-center gap-2">
                                    <Star className="text-yellow-500" size={28} />
                                    الخصائص
                                </h3>
                                <div className="space-y-3">
                                    {offer.features.map((feature, index) => (
                                        <div
                                            key={index}
                                            className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                                        >
                                            <div className="flex-shrink-0 mt-1">
                                                <div className="w-6 h-6 rounded-full bg-yellow-100 flex items-center justify-center">
                                                    <Star className="text-yellow-600" size={16} />
                                                </div>
                                            </div>
                                            <span className="text-lg text-gray-700">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Contact Actions */}
                    <div className="mt-12 pt-8 border-t border-gray-200">
                        <h3 className="text-2xl font-bold text-primary mb-6 text-center">تواصل معنا الآن</h3>
                        <div className="flex flex-wrap gap-6 justify-center">
                            {whatsapp && (
                                <a
                                    href={whatsapp}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-2xl shadow-lg hover:shadow-xl text-lg font-bold transition-all transform hover:-translate-y-1"
                                >
                                    <MessageCircle size={24} />
                                    تواصل عبر واتساب
                                </a>
                            )}
                            {phone && (
                                <a
                                    href={phone}
                                    className="flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white rounded-2xl shadow-lg hover:shadow-xl text-lg font-bold transition-all transform hover:-translate-y-1"
                                >
                                    <Phone size={24} />
                                    اتصال مباشر
                                </a>
                            )}
                        </div>
                        <div className="mt-6 text-center text-gray-600">
                            <p>فريق الدعم لدينا متاح على مدار الساعة للإجابة على جميع استفساراتك</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Related offers section */}
            {relatedOffers && relatedOffers.length > 0 && (
                <div className="mt-16">
                    <h2 className="text-3xl font-bold text-primary mb-8 text-center">عروض أخرى قد تهمك</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {relatedOffers.map((relatedOffer) => (
                            <div key={relatedOffer.id} className="transform transition-transform hover:-translate-y-2">
                                <OfferCard offer={relatedOffer} />
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Why choose us section */}
            <div className="mt-20 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl p-8 border border-primary/10">
                <h2 className="text-3xl font-bold text-center text-primary mb-12">لماذا تختار عروض ستلايت الرجاء؟</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="bg-white rounded-2xl p-6 text-center shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                        <div className="bg-gradient-to-br from-primary/10 to-secondary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h3 className="font-bold text-xl mb-3 text-gray-800">توفير حقيقي</h3>
                        <p className="text-gray-600">خصومات حقيقية تصل إلى 50% على جميع خدماتنا</p>
                    </div>

                    <div className="bg-white rounded-2xl p-6 text-center shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                        <div className="bg-gradient-to-br from-primary/10 to-secondary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                        </div>
                        <h3 className="font-bold text-xl mb-3 text-gray-800">جودة مضمونة</h3>
                        <p className="text-gray-600">نفس جودة الخدمات المدفوعة الكاملة</p>
                    </div>

                    <div className="bg-white rounded-2xl p-6 text-center shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                        <div className="bg-gradient-to-br from-primary/10 to-secondary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h3 className="font-bold text-xl mb-3 text-gray-800">فترة محدودة</h3>
                        <p className="text-gray-600">عروض لفترة زمنية محدودة فقط</p>
                    </div>

                    <div className="bg-white rounded-2xl p-6 text-center shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                        <div className="bg-gradient-to-br from-primary/10 to-secondary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                        </div>
                        <h3 className="font-bold text-xl mb-3 text-gray-800">دعم فني</h3>
                        <p className="text-gray-600">فريق دعم فني متاح على مدار الساعة</p>
                    </div>
                </div>
            </div>
        </main>
    );
}