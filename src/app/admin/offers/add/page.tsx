// src/app/admin/offers/add/page.tsx
"use client";

import { useState, useEffect, ChangeEvent } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { supabase } from "@/lib/supabase";
import type { Product } from "@/types";
import { useAdminAuth } from "@/app/admin/AdminAuthContext";
import { Save, X, Plus, Trash2 } from 'lucide-react';

export default function AddOfferPage() {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const router = useRouter();
    const { user, loading: authLoading } = useAdminAuth();

    // Redirect if not authenticated
    useEffect(() => {
        if (!authLoading && !user) {
            router.push("/admin/login");
        }
    }, [user, authLoading, router]);

    // Form state
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [benefits, setBenefits] = useState<string[]>([""]);
    const [features, setFeatures] = useState<string[]>([""]);
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [imageFile, setImageFile] = useState<File | null>(null);
    const [imagePreview, setImagePreview] = useState<string | null>(null);
    const [productId, setProductId] = useState<number | "">("");
    const [phone, setPhone] = useState("");
    const [whatsapp, setWhatsapp] = useState("");
    const [submitting, setSubmitting] = useState(false);

    useEffect(() => {
        if (user) {
            fetchProducts();
        }
    }, [user]);

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
        } finally {
            setLoading(false);
        }
    }

    // Handle image file selection
    function handleImageChange(e: ChangeEvent<HTMLInputElement>) {
        const file = e.target.files?.[0];
        if (file) {
            setImageFile(file);
            setImagePreview(URL.createObjectURL(file));
            // Clear the URL field when a file is selected
            setImageUrl("");
        }
    }

    // Upload image to storage
    async function uploadImageToStorage(): Promise<string | null> {
        if (!imageFile) return null;

        try {
            const ext = imageFile.name.split('.').pop();
            const fileName = `offer_${Date.now()}.${ext}`;

            const { error } = await supabase.storage
                .from('product-cover') // Using the same bucket as products
                .upload(fileName, imageFile, { upsert: true });

            if (error) {
                console.error("Error uploading image:", error);
                return null;
            }

            const { data } = supabase.storage
                .from('product-cover')
                .getPublicUrl(fileName);

            return data.publicUrl;
        } catch (error) {
            console.error("Error uploading image:", error);
            return null;
        }
    }

    // Handle benefits array
    const addBenefit = () => {
        setBenefits([...benefits, ""]);
    };

    const removeBenefit = (index: number) => {
        if (benefits.length > 1) {
            const newBenefits = [...benefits];
            newBenefits.splice(index, 1);
            setBenefits(newBenefits);
        }
    };

    const updateBenefit = (index: number, value: string) => {
        const newBenefits = [...benefits];
        newBenefits[index] = value;
        setBenefits(newBenefits);
    };

    // Handle features array
    const addFeature = () => {
        setFeatures([...features, ""]);
    };

    const removeFeature = (index: number) => {
        if (features.length > 1) {
            const newFeatures = [...features];
            newFeatures.splice(index, 1);
            setFeatures(newFeatures);
        }
    };

    const updateFeature = (index: number, value: string) => {
        const newFeatures = [...features];
        newFeatures[index] = value;
        setFeatures(newFeatures);
    };

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setSubmitting(true);

        try {
            // Filter out empty benefits and features
            const benefitsArray = benefits.filter(b => b.trim() !== "");
            const featuresArray = features.filter(f => f.trim() !== "");

            // Handle image upload
            let finalImageUrl = imageUrl || null;
            if (imageFile) {
                const uploadedUrl = await uploadImageToStorage();
                if (!uploadedUrl) {
                    alert("حدث خطأ أثناء رفع الصورة");
                    setSubmitting(false);
                    return;
                }
                finalImageUrl = uploadedUrl;
            }

            // Prepare contact info
            const contactInfo = {
                ...(phone && { phone }),
                ...(whatsapp && { whatsapp }),
            };

            // Insert offer
            const { error } = await supabase.from("offers").insert({
                title,
                description,
                benefits: benefitsArray,
                features: featuresArray,
                start_date: startDate || null,
                end_date: endDate || null,
                image_url: finalImageUrl,
                product_id: productId || null,
                contact_info: Object.keys(contactInfo).length > 0 ? contactInfo : null,
            }).select();

            if (error) throw error;

            // Redirect to offers list
            router.push("/admin/offers");
            router.refresh();
        } catch (error) {
            console.error("Error creating offer:", error);
            alert("حدث خطأ أثناء إنشاء العرض");
        } finally {
            setSubmitting(false);
        }
    }

    if (authLoading || loading) {
        return (
            <div className="p-4">
                <h1 className="text-2xl font-bold mb-6">إضافة عرض جديد</h1>
                <div className="text-center py-10">جاري التحميل...</div>
            </div>
        );
    }

    if (!user) {
        return null; // Will redirect
    }

    return (
        <div className="p-4">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 gap-4">
                <h1 className="text-2xl font-bold">إضافة عرض جديد</h1>
                <button
                    onClick={() => router.back()}
                    className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-gray-700"
                >
                    <X className="w-4 h-4" />
                    <span>رجوع</span>
                </button>
            </div>

            <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow p-6">
                <div className="grid grid-cols-1 gap-6">
                    {/* Title */}
                    <div>
                        <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                            عنوان العرض *
                        </label>
                        <input
                            type="text"
                            id="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                        />
                    </div>

                    {/* Description */}
                    <div>
                        <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                            وصف العرض
                        </label>
                        <textarea
                            id="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            rows={4}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                        />
                    </div>

                    {/* Benefits */}
                    <div>
                        <div className="flex justify-between items-center mb-2">
                            <label className="block text-sm font-medium text-gray-700">
                                المزايا
                            </label>
                            <button
                                type="button"
                                onClick={addBenefit}
                                className="flex items-center gap-1 text-sm text-primary hover:text-primary/80"
                            >
                                <Plus className="w-4 h-4" />
                                <span>إضافة ميزة</span>
                            </button>
                        </div>
                        <div className="space-y-2">
                            {benefits.map((benefit, index) => (
                                <div key={index} className="flex gap-2">
                                    <input
                                        type="text"
                                        value={benefit}
                                        onChange={(e) => updateBenefit(index, e.target.value)}
                                        className="flex-1 px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                                        placeholder={`ميزة ${index + 1}`}
                                    />
                                    {benefits.length > 1 && (
                                        <button
                                            type="button"
                                            onClick={() => removeBenefit(index)}
                                            className="p-2 text-red-500 hover:text-red-700"
                                        >
                                            <Trash2 className="w-5 h-5" />
                                        </button>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Features */}
                    <div>
                        <div className="flex justify-between items-center mb-2">
                            <label className="block text-sm font-medium text-gray-700">
                                الخصائص
                            </label>
                            <button
                                type="button"
                                onClick={addFeature}
                                className="flex items-center gap-1 text-sm text-primary hover:text-primary/80"
                            >
                                <Plus className="w-4 h-4" />
                                <span>إضافة خاصية</span>
                            </button>
                        </div>
                        <div className="space-y-2">
                            {features.map((feature, index) => (
                                <div key={index} className="flex gap-2">
                                    <input
                                        type="text"
                                        value={feature}
                                        onChange={(e) => updateFeature(index, e.target.value)}
                                        className="flex-1 px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                                        placeholder={`خاصية ${index + 1}`}
                                    />
                                    {features.length > 1 && (
                                        <button
                                            type="button"
                                            onClick={() => removeFeature(index)}
                                            className="p-2 text-red-500 hover:text-red-700"
                                        >
                                            <Trash2 className="w-5 h-5" />
                                        </button>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Dates */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="startDate" className="block text-sm font-medium text-gray-700 mb-1">
                                تاريخ البدء
                            </label>
                            <input
                                type="date"
                                id="startDate"
                                value={startDate}
                                onChange={(e) => setStartDate(e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                            />
                        </div>
                        <div>
                            <label htmlFor="endDate" className="block text-sm font-medium text-gray-700 mb-1">
                                تاريخ الانتهاء
                            </label>
                            <input
                                type="date"
                                id="endDate"
                                value={endDate}
                                onChange={(e) => setEndDate(e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                            />
                        </div>
                    </div>

                    {/* Product */}
                    <div>
                        <label htmlFor="productId" className="block text-sm font-medium text-gray-700 mb-1">
                            المنتج المرتبط
                        </label>
                        <select
                            id="productId"
                            value={productId}
                            onChange={(e) => setProductId(e.target.value ? Number(e.target.value) : "")}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                        >
                            <option value="">عرض عام (بدون منتج مرتبط)</option>
                            {products.map((product) => (
                                <option key={product.id} value={product.id}>
                                    {product.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Image Upload */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            صورة العرض
                        </label>
                        {imagePreview && (
                            <div className="mb-2">
                                <Image
                                    src={imagePreview}
                                    alt="معاينة الصورة"
                                    width={400}
                                    height={160}
                                    className="rounded-lg max-h-40 object-contain border"
                                />
                            </div>
                        )}
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                        />
                        <div className="mt-2 text-sm text-gray-500">
                            أو قم بإدخال رابط الصورة مباشرة:
                        </div>
                        <input
                            type="url"
                            value={imageUrl}
                            onChange={(e) => {
                                setImageUrl(e.target.value);
                                // Clear file and preview when URL is entered
                                if (e.target.value) {
                                    setImageFile(null);
                                    setImagePreview(null);
                                }
                            }}
                            className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                            placeholder="https://example.com/image.jpg"
                        />
                    </div>

                    {/* Contact Info */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                                رقم الهاتف
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                                placeholder="96550266068"
                            />
                        </div>
                        <div>
                            <label htmlFor="whatsapp" className="block text-sm font-medium text-gray-700 mb-1">
                                رقم واتساب
                            </label>
                            <input
                                type="tel"
                                id="whatsapp"
                                value={whatsapp}
                                onChange={(e) => setWhatsapp(e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                                placeholder="96550266068"
                            />
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-end gap-3 pt-4">
                        <button
                            type="button"
                            onClick={() => router.back()}
                            className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
                        >
                            إلغاء
                        </button>
                        <button
                            type="submit"
                            disabled={submitting}
                            className="flex items-center gap-2 px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 disabled:opacity-50"
                        >
                            <Save className="w-4 h-4" />
                            <span>{submitting ? "جاري الحفظ..." : "حفظ العرض"}</span>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}