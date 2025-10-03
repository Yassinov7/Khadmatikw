// src/app/admin/offers/page.tsx
"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { supabase } from "@/lib/supabase";
import type { Offer } from "@/types";
import Link from "next/link";
import { useAdminAuth } from "../AdminAuthContext";
import { Search, Filter, X } from 'lucide-react';

export default function AdminOffersPage() {
    const [offers, setOffers] = useState<Offer[]>([]);
    const [filteredOffers, setFilteredOffers] = useState<Offer[]>([]);
    const [products, setProducts] = useState<{ id: number, name: string }[]>([]);
    const [loading, setLoading] = useState(true);
    const router = useRouter();
    const { user, loading: authLoading } = useAdminAuth();

    // Filter states
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedProduct, setSelectedProduct] = useState<number | ''>('');
    const [showFilters, setShowFilters] = useState(false);

    // Redirect if not authenticated
    useEffect(() => {
        if (!authLoading && !user) {
            router.push("/admin/login");
        }
    }, [user, authLoading, router]);

    async function fetchOffers() {
        try {
            setLoading(true);
            const { data, error } = await supabase
                .from("offers")
                .select("*, product:products(name)")
                .order("created_at", { ascending: false });

            if (error) throw error;
            setOffers(data || []);
        } catch (error) {
            console.error("Error fetching offers:", error);
        } finally {
            setLoading(false);
        }
    }

    async function fetchProducts() {
        try {
            const { data, error } = await supabase
                .from("products")
                .select("id, name")
                .order("name", { ascending: true });

            if (error) throw error;
            setProducts(data || []);
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    }

    useEffect(() => {
        if (user) {
            fetchOffers();
            fetchProducts();
        }
    }, [user]);

    const applyFilters = useCallback(() => {
        let result = [...offers];

        // Apply search filter
        if (searchTerm) {
            const term = searchTerm.toLowerCase();
            result = result.filter(offer =>
                offer.title.toLowerCase().includes(term) ||
                (offer.description && offer.description.toLowerCase().includes(term))
            );
        }

        // Apply product filter
        if (selectedProduct !== '') {
            result = result.filter(offer =>
                offer.product && offer.product.id === selectedProduct
            );
        }

        setFilteredOffers(result);
    }, [offers, searchTerm, selectedProduct]);

    useEffect(() => {
        applyFilters();
    }, [applyFilters]);

    function clearFilters() {
        setSearchTerm('');
        setSelectedProduct('');
    }

    // Remove image from storage
    async function removeOfferImage(imageUrl: string | null) {
        if (!imageUrl) return;

        try {
            // Extract the file path from the URL
            const filePath = imageUrl.split('/product-cover/')[1];
            if (filePath) {
                await supabase.storage.from('product-cover').remove([filePath]);
            }
        } catch (error) {
            console.error("Error removing offer image:", error);
        }
    }

    async function deleteOffer(id: number) {
        if (!confirm("هل أنت متأكد من حذف هذا العرض؟")) return;

        try {
            // First, get the offer to retrieve the image URL
            const { data: offerData, error: fetchError } = await supabase
                .from("offers")
                .select("image_url")
                .eq("id", id)
                .single();

            if (fetchError) throw fetchError;

            // Delete the offer from the database
            const { error: deleteError } = await supabase
                .from("offers")
                .delete()
                .eq("id", id);

            if (deleteError) throw deleteError;

            // Remove the associated image from storage if it exists
            if (offerData?.image_url) {
                await removeOfferImage(offerData.image_url);
            }

            // Refresh the list
            fetchOffers();
        } catch (error) {
            console.error("Error deleting offer:", error);
            alert("حدث خطأ أثناء حذف العرض");
        }
    }

    if (authLoading || loading) {
        return (
            <div className="p-4">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-bold">إدارة العروض</h1>
                </div>
                <div className="text-center py-10">جاري التحميل...</div>
            </div>
        );
    }

    if (!user) {
        return null; // Will redirect
    }

    const hasActiveFilters = searchTerm !== '' || selectedProduct !== '';

    return (
        <div className="p-4">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 gap-4">
                <h1 className="text-2xl font-bold">إدارة العروض</h1>
                <Link href="/admin/offers/add">
                    <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/80 transition w-full sm:w-auto flex items-center justify-center gap-2">
                        <span>+</span>
                        <span>عرض جديد</span>
                    </button>
                </Link>
            </div>

            {/* Search and Filters */}
            <div className="bg-white rounded-xl shadow p-4 mb-6">
                <div className="flex flex-col md:flex-row gap-4">
                    {/* Search Input */}
                    <div className="relative flex-1">
                        <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                            type="text"
                            placeholder="البحث بالعنوان أو الوصف..."
                            className="w-full pr-10 pl-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>

                    {/* Filter Button */}
                    <button
                        onClick={() => setShowFilters(!showFilters)}
                        className="flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                    >
                        <Filter className="w-5 h-5" />
                        <span>تصفية</span>
                    </button>
                </div>

                {/* Advanced Filters */}
                {showFilters && (
                    <div className="mt-4 pt-4 border-t border-gray-200">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">المنتج المرتبط</label>
                                <select
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                                    value={selectedProduct}
                                    onChange={(e) => setSelectedProduct(e.target.value as number | '')}
                                >
                                    <option value="">جميع المنتجات</option>
                                    {products.map(product => (
                                        <option key={product.id} value={product.id}>{product.name}</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        {/* Clear Filters Button */}
                        {hasActiveFilters && (
                            <div className="mt-4">
                                <button
                                    onClick={clearFilters}
                                    className="flex items-center gap-1 text-sm text-red-600 hover:text-red-800"
                                >
                                    <X className="w-4 h-4" />
                                    <span>مسح التصفيات</span>
                                </button>
                            </div>
                        )}
                    </div>
                )}
            </div>

            {filteredOffers.length === 0 ? (
                <div className="text-center py-10 bg-white rounded-lg shadow">
                    <p className="text-gray-500 mb-4">
                        {hasActiveFilters ? 'لا توجد عروض تطابق التصفيات المحددة' : 'لا توجد عروض حالياً'}
                    </p>
                    {!hasActiveFilters && (
                        <Link href="/admin/offers/add">
                            <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/80 transition">
                                إضافة عرض جديد
                            </button>
                        </Link>
                    )}
                    {hasActiveFilters && (
                        <button
                            onClick={clearFilters}
                            className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/80 transition"
                        >
                            مسح التصفيات
                        </button>
                    )}
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredOffers.map((offer) => (
                        <div key={offer.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 border border-gray-100 flex flex-col h-full">
                            {/* صورة العرض */}
                            <div className="relative h-48">
                                <Image
                                    src={offer.image_url?.trim() || '/default-offer.png'}
                                    alt={offer.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            {/* معلومات العرض */}
                            <div className="p-4 flex flex-col flex-grow">
                                <div className="font-bold text-lg text-gray-800 mb-2 truncate">{offer.title}</div>

                                {/* المنتج المرتبط */}
                                <div className="text-sm text-gray-600 mb-2">
                                    {offer.product?.name ? (
                                        <span>منتج: {offer.product.name}</span>
                                    ) : (
                                        <span className="text-gray-400">عرض عام</span>
                                    )}
                                </div>

                                {/* التاريخ */}
                                <div className="text-xs text-gray-500 mb-3 space-y-1">
                                    {offer.start_date && <div>بدء: {offer.start_date}</div>}
                                    {offer.end_date && <div>انتهاء: {offer.end_date}</div>}
                                </div>

                                {/* الأزرار */}
                                <div className="flex gap-2 mt-auto pt-2">
                                    <Link
                                        href={`/admin/offers/${offer.id}/edit`}
                                        className="flex-1 bg-blue-500 hover:bg-blue-600 text-white text-center py-2 px-3 rounded-lg font-medium transition text-sm"
                                    >
                                        تعديل
                                    </Link>
                                    <button
                                        onClick={() => deleteOffer(offer.id)}
                                        className="flex-1 bg-red-500 hover:bg-red-600 text-white py-2 px-3 rounded-lg font-medium transition text-sm"
                                    >
                                        حذف
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}