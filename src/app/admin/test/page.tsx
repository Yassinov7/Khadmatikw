// src/app/admin/test/page.tsx
"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
// @ts-ignore
import { useAdminAuth } from "../AdminAuthContext";

export default function TestAdminPage() {
    // @ts-ignore
    const { user, loading: authLoading } = useAdminAuth();
    const [offers, setOffers] = useState<any[]>([]);
    const [products, setProducts] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // @ts-ignore
        if (user) {
            fetchData();
        }
    }, [user]);

    async function fetchData() {
        try {
            // Fetch offers
            const { data: offersData, error: offersError } = await supabase
                .from("offers")
                .select("*");

            if (offersError) throw offersError;
            setOffers(offersData || []);

            // Fetch products
            const { data: productsData, error: productsError } = await supabase
                .from("products")
                .select("id, name");

            if (productsError) throw productsError;
            setProducts(productsData || []);
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            setLoading(false);
        }
    }

    if (authLoading || loading) {
        return (
            <div className="p-4">
                <h1 className="text-2xl font-bold mb-6">صفحة المعلومات العامة</h1>
                <div className="text-center py-10">جاري التحميل...</div>
            </div>
        );
    }

    // @ts-ignore
    if (!user) {
        return (
            <div className="p-4">
                <h1 className="text-2xl font-bold mb-6">صفحة المعلومات العامة</h1>
                <div className="text-center py-10">غير مخول بالدخول</div>
            </div>
        );
    }

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-6">صفحة المعلومات العامة</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg shadow p-6">
                    <h2 className="text-xl font-bold mb-4">العروض ({offers.length})</h2>
                    <div className="max-h-60 overflow-y-auto">
                        {offers.map((offer) => (
                            <div key={offer.id} className="border-b py-2">
                                <div className="font-medium">{offer.title}</div>
                                <div className="text-sm text-gray-500">{offer.description}</div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow p-6">
                    <h2 className="text-xl font-bold mb-4">المنتجات ({products.length})</h2>
                    <div className="max-h-60 overflow-y-auto">
                        {products.map((product) => (
                            <div key={product.id} className="border-b py-2">
                                <div className="font-medium">{product.name}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}