"use client"
import Link from "next/link";
import Image from "next/image";
import { Phone, MessageCircle, Calendar, Tag, Star } from "lucide-react";
import type { Offer } from "@/types";
import { slugify } from "@/utils/slugify";
import { useState } from "react";

export function OfferCard({ offer }: { offer: Offer & { slug?: string } }) {
    const [imageLoaded, setImageLoaded] = useState(false);

    // Generate slug if not provided
    const offerSlug = offer.slug || `${slugify(offer.title)}-${offer.id}`;

    const whatsappLink = offer.contact_info?.whatsapp
        ? `https://wa.me/${offer.contact_info.whatsapp.replace(/[^0-9]/g, "")}?text=مرحبًا، أود الاستفسار عن العرض: ${encodeURIComponent(offer.title)}`
        : null;

    const phoneLink = offer.contact_info?.phone
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
        <article
            className="bg-white border border-gray-100 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full group"
            itemScope
            itemType="https://schema.org/Offer"
        >
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(offerStructuredData) }}
            />

            {/* Offer Image */}
            <Link
                href={`/offers/${offerSlug}`}
                className="relative w-full h-48 bg-gray-50 block"
            >
                {!imageLoaded && (
                    <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-t-3xl"></div>
                )}
                <div className="relative w-full h-48 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-t-3xl overflow-hidden">
                    <Image
                        src={offer.image_url || "/default-offer.png"}
                        alt={`عرض خاص: ${offer.title} - ستلايت الرجاء`}
                        fill
                        sizes="(max-width: 768px) 100vw, 300px"
                        className={`object-contain p-4 transition-all duration-500 ${imageLoaded ? 'opacity-100' : 'opacity-0'} group-hover:scale-105`}
                        itemProp="image"
                        onLoadingComplete={() => setImageLoaded(true)}
                    />
                </div>

                {/* Offer Badge */}
                <div className="absolute top-4 right-4 bg-gradient-to-r from-red-500 to-red-600 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-lg">
                    <Tag size={14} />
                    عرض خاص
                </div>
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-primary font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-md text-xs">
                    <Star className="text-yellow-500" size={12} />
                    مميز
                </div>
            </Link>

            <div className="flex flex-col flex-1 p-6 gap-4">
                {/* Offer Title */}
                <Link href={`/offers/${offerSlug}`}>
                    <h3
                        className="text-xl font-extrabold text-primary hover:underline line-clamp-2 group-hover:text-secondary transition-colors"
                        itemProp="name"
                    >
                        {offer.title}
                    </h3>
                </Link>

                {/* Offer Description */}
                {offer.description && (
                    <p className="text-sm text-gray-600 leading-relaxed line-clamp-3" itemProp="description">
                        {offer.description}
                    </p>
                )}

                {/* Offer Dates */}
                {(offer.start_date || offer.end_date) && (
                    <div className="flex items-center gap-2 text-xs text-gray-500 bg-gray-50 rounded-lg p-3">
                        <Calendar size={16} className="text-primary" />
                        <div className="flex gap-1 flex-wrap">
                            {offer.start_date && (
                                <span>من {formatDate(offer.start_date)}</span>
                            )}
                            {offer.start_date && offer.end_date && <span className="font-bold text-primary">-</span>}
                            {offer.end_date && (
                                <span>حتى {formatDate(offer.end_date)}</span>
                            )}
                        </div>
                    </div>
                )}

                {/* Product Info (if linked) */}
                {offer.product && (
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-3 border border-blue-100">
                        <div className="text-xs text-gray-500 mb-1">متوفر لـ</div>
                        <div className="flex flex-wrap items-center gap-2">
                            {offer.product.category?.name && (
                                <span className="text-xs bg-blue-500 text-white px-2 py-1 rounded-full font-bold">
                                    {offer.product.category.name}
                                </span>
                            )}
                            <span className="text-sm font-medium text-gray-700">{offer.product.name}</span>
                        </div>
                    </div>
                )}

                {/* Benefits List */}
                {offer.benefits && offer.benefits.length > 0 && (
                    <div className="space-y-2">
                        <div className="text-xs text-gray-500 font-bold">المزايا:</div>
                        <ul className="space-y-2">
                            {offer.benefits.slice(0, 2).map((benefit, index) => (
                                <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="line-clamp-1">{benefit}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* Contact Actions */}
                <div className="mt-auto pt-4 flex gap-2 flex-wrap">
                    {whatsappLink && (
                        <a
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 rounded-full text-white bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-sm font-bold transition-all transform hover:-translate-y-0.5 shadow hover:shadow-md"
                            aria-label={`تواصل عبر واتساب بخصوص: ${offer.title}`}
                        >
                            <MessageCircle size={16} /> واتساب
                        </a>
                    )}
                    {phoneLink && (
                        <a
                            href={phoneLink}
                            className="flex items-center gap-2 px-4 py-2 rounded-full text-white bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-sm font-bold transition-all transform hover:-translate-y-0.5 shadow hover:shadow-md"
                            aria-label={`اتصال بخصوص العرض: ${offer.title}`}
                        >
                            <Phone size={16} /> اتصال
                        </a>
                    )}
                </div>
            </div>
        </article>
    );
}

export default OfferCard;