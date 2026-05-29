"use client"
import Link from "next/link";
import Image from "next/image";
import { Phone, MessageCircle, Calendar, Tag, Star } from "lucide-react";
import type { Offer } from "@/types";
import { slugify } from "@/utils/slugify";
import { useState } from "react";

export function OfferCard({ offer }: { offer: Offer & { slug?: string } }) {
    const [imageLoaded, setImageLoaded] = useState(false);

    const offerSlug = offer.slug || `${slugify(offer.title)}-${offer.id}`;

    const whatsappLink = offer.contact_info?.whatsapp
        ? `https://wa.me/${offer.contact_info.whatsapp.replace(/[^0-9]/g, "")}?text=مرحبًا، أود الاستفسار عن العرض: ${encodeURIComponent(offer.title)}`
        : null;

    const phoneLink = offer.contact_info?.phone
        ? `tel:${offer.contact_info.phone.replace(/[^0-9+]/g, "")}`
        : null;

    const formatDate = (dateString?: string) => {
        if (!dateString) return "";
        const date = new Date(dateString);
        return date.toLocaleDateString("ar-EG", {
            year: "numeric",
            month: "long",
            day: "numeric",
        });
    };

    return (
        <article className="card-modern rounded-[2rem] group overflow-hidden">
            <div className="relative overflow-hidden">
                <Link
                    href={`/offers/${offerSlug}`}
                    className="block relative h-56 bg-slate-100 overflow-hidden"
                >
                    {!imageLoaded && (
                        <div className="absolute inset-0 bg-slate-200 animate-pulse"></div>
                    )}

                    <Image
                        src={offer.image_url || "/default-offer.png"}
                        alt={`عرض خاص: ${offer.title} - ستلايت الرجاء`}
                        fill
                        sizes="(max-width: 768px) 100vw, 300px"
                        className={`object-cover transition-transform duration-700 ${imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-110'} group-hover:scale-105`}
                        onLoadingComplete={() => setImageLoaded(true)}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent pointer-events-none" />
                </Link>

                <div className="absolute top-4 right-4 bg-gradient-to-r from-red-500 to-red-600 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-lg">
                    <Tag size={14} />
                    عرض خاص
                </div>
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-primary font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-md text-xs">
                    <Star className="text-yellow-500" size={12} />
                    مميز
                </div>
            </div>

            <div className="p-6 flex flex-col gap-4">
                <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                        {offer.product?.category?.name || "عرض مميز"}
                    </div>
                    <span className="text-xs text-slate-500">{offer.end_date ? `حتى ${formatDate(offer.end_date)}` : "عرض مستمر"}</span>
                </div>

                <Link href={`/offers/${offerSlug}`}>
                    <h3 className="text-2xl font-extrabold text-slate-900 hover:text-secondary transition-colors line-clamp-2">
                        {offer.title}
                    </h3>
                </Link>

                {offer.description && (
                    <p className="text-sm text-slate-600 leading-relaxed line-clamp-3">
                        {offer.description}
                    </p>
                )}

                {(offer.start_date || offer.end_date) && (
                    <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600">
                        <div className="flex flex-wrap items-center gap-2">
                            <Calendar size={16} className="text-primary" />
                            {offer.start_date && <span>من {formatDate(offer.start_date)}</span>}
                            {offer.start_date && offer.end_date && <span className="font-bold text-primary">-</span>}
                            {offer.end_date && <span>حتى {formatDate(offer.end_date)}</span>}
                        </div>
                    </div>
                )}

                {offer.product && (
                    <div className="rounded-3xl border border-blue-100 bg-blue-50 p-4">
                        <div className="text-xs text-slate-500 mb-2">متوفر لـ</div>
                        <div className="flex flex-wrap items-center gap-2">
                            {offer.product.category?.name && (
                                <span className="rounded-full bg-blue-500 px-3 py-1 text-xs font-semibold text-white">
                                    {offer.product.category.name}
                                </span>
                            )}
                            <span className="text-sm font-medium text-slate-700">{offer.product.name}</span>
                        </div>
                    </div>
                )}

                {offer.benefits && offer.benefits.length > 0 && (
                    <div className="space-y-3">
                        <div className="text-xs text-slate-500 font-semibold">المزايا:</div>
                        <ul className="space-y-2">
                            {offer.benefits.slice(0, 2).map((benefit, index) => (
                                <li key={index} className="flex items-start gap-2 text-sm text-slate-600">
                                    <span className="mt-1 text-primary">✓</span>
                                    <span className="line-clamp-1">{benefit}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                <div className="mt-auto grid gap-3 sm:grid-cols-2">
                    {whatsappLink && (
                        <a
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-green-500 to-green-600 px-4 py-3 text-sm font-bold text-white transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                            aria-label={`تواصل عبر واتساب بخصوص: ${offer.title}`}
                        >
                            <MessageCircle size={16} /> واتساب
                        </a>
                    )}
                    {phoneLink && (
                        <a
                            href={phoneLink}
                            className="flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-secondary px-4 py-3 text-sm font-bold text-white transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-lg"
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