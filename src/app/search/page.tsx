// src/app/search/page.tsx
"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import Link from "next/link";
import { Search, FileText, Package, Tag, X } from "lucide-react";
import { slugify } from "@/utils/slugify";

// Define types for Supabase responses
type ProductResult = {
    id: number;
    name: string;
    description: string;
    image_url: string;
    category_id: number;
    categories: {
        name: string;
    }[];
};

type OfferResult = {
    id: number;
    title: string;
    description: string;
    image_url: string;
    product: {
        name: string;
        image_url: string;
        category_id: number;
        category: {
            name: string;
        }[];
    }[];
    contact_info: {
        phone?: string;
        whatsapp?: string;
    } | null;
};

type BlogResult = {
    id: number;
    title: string;
    content: string;
    created_at: string;
};

// Define types for our search results
type SearchResult = {
    id: number;
    type: "product" | "offer" | "blog";
    slug: string;
    // Product fields
    name?: string;
    description?: string;
    image_url?: string;
    category_id?: number;
    categories?: {
        name: string;
    }[];
    // Offer fields
    title?: string;
    product?: {
        name: string;
        image_url: string;
        category_id: number;
        category: {
            name: string;
        }[];
    }[];
    contact_info?: {
        phone?: string;
        whatsapp?: string;
    } | null;
    // Blog fields
    content?: string;
    created_at?: string;
};

export default function SearchPage() {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState<SearchResult[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleSearch = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!query.trim()) return;

        setLoading(true);
        setError("");

        try {
            // Search products first (highest priority)
            const { data: products, error: productError } = await supabase
                .from("products")
                .select("id, name, description, image_url, category_id, categories(name)")
                .or(`name.ilike.%${query}%,description.ilike.%${query}%`)
                .order("name");

            // Search offers second priority
            const { data: offers, error: offerError } = await supabase
                .from("offers")
                .select("id, title, description, image_url, product:products(name, image_url, category_id, category:categories(name)), contact_info")
                .or(`title.ilike.%${query}%,description.ilike.%${query}%`)
                .order("title");

            // Search blog posts last priority
            const { data: blogPosts, error: blogError } = await supabase
                .from("blog_posts")
                .select("id, title, content, created_at")
                .or(`title.ilike.%${query}%,content.ilike.%${query}%`)
                .order("created_at", { ascending: false });

            if (productError || offerError || blogError) {
                throw new Error("حدث خطأ أثناء البحث");
            }

            // Process results with proper slugs
            const searchResults: SearchResult[] = [
                ...(products || []).map((item: ProductResult) => ({
                    ...item,
                    type: "product" as const,
                    slug: `${slugify(item.name)}-${item.id}`,
                })),
                ...(offers || []).map((item: OfferResult) => ({
                    ...item,
                    type: "offer" as const,
                    slug: `${slugify(item.title)}-${item.id}`,
                })),
                ...(blogPosts || []).map((item: BlogResult) => ({
                    ...item,
                    type: "blog" as const,
                    slug: `${slugify(item.title)}-${item.id}`,
                })),
            ];

            setResults(searchResults);
        } catch (err) {
            console.error("Search error:", err);
            setError("حدث خطأ أثناء البحث. يرجى المحاولة مرة أخرى.");
        } finally {
            setLoading(false);
        }
    };

    const getTypeIcon = (type: string) => {
        switch (type) {
            case "blog": return <FileText className="text-blue-500" size={20} />;
            case "product": return <Package className="text-green-500" size={20} />;
            case "offer": return <Tag className="text-red-500" size={20} />;
            default: return null;
        }
    };

    const getTypeLabel = (type: string) => {
        switch (type) {
            case "blog": return "مقال";
            case "product": return "خدمة";
            case "offer": return "عرض";
            default: return "";
        }
    };

    const getTypeColor = (type: string) => {
        switch (type) {
            case "blog": return "bg-blue-100 text-blue-800";
            case "product": return "bg-green-100 text-green-800";
            case "offer": return "bg-red-100 text-red-800";
            default: return "bg-gray-100 text-gray-800";
        }
    };

    // Get title/name based on result type
    const getResultTitle = (result: SearchResult) => {
        if (result.type === "blog" || result.type === "offer") {
            return result.title;
        }
        if (result.type === "product") {
            return result.name;
        }
        return "";
    };

    // Get description/content based on result type
    const getResultDescription = (result: SearchResult) => {
        if (result.type === "product" || result.type === "offer") {
            return result.description;
        }
        if (result.type === "blog") {
            return result.content?.substring(0, 150) + "&#8230;";
        }
        return "";
    };

    // Get category name for product results
    const getProductCategoryName = (result: SearchResult) => {
        if (result.type === "product" && result.categories && result.categories.length > 0) {
            return result.categories[0].name;
        }
        if (result.type === "offer" && result.product && result.product.length > 0 && result.product[0].category && result.product[0].category.length > 0) {
            return result.product[0].category[0].name;
        }
        return null;
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="max-w-3xl mx-auto mb-8">
                <h1 className="text-3xl font-bold text-center mb-6 text-primary">البحث في الموقع</h1>

                <form onSubmit={handleSearch} className="relative">
                    <div className="relative">
                        <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                        <input
                            type="text"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="ابحث عن خدمات، عروض، أو مقالات..."
                            className="w-full px-4 py-3 pr-10 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-lg"
                            dir="rtl"
                        />
                    </div>
                    <button
                        type="submit"
                        disabled={loading || !query.trim()}
                        className="mt-4 w-full bg-primary text-white py-3 rounded-full font-bold hover:bg-primary/90 transition disabled:opacity-50"
                    >
                        {loading ? "جاري البحث..." : "بحث"}
                    </button>
                </form>
            </div>

            {error && (
                <div className="max-w-3xl mx-auto mb-6">
                    <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg flex items-center justify-between">
                        <span>{error}</span>
                        <button onClick={() => setError("")} className="text-red-500 hover:text-red-700">
                            <X size={20} />
                        </button>
                    </div>
                </div>
            )}

            {results.length > 0 && (
                <div className="max-w-4xl mx-auto">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-xl font-bold text-gray-800">
                            نتائج البحث ({results.length} نتيجة)
                        </h2>
                        <button
                            onClick={() => {
                                setQuery("");
                                setResults([]);
                            }}
                            className="text-sm text-gray-500 hover:text-gray-700 flex items-center gap-1"
                        >
                            <X size={16} />
                            مسح النتائج
                        </button>
                    </div>

                    <div className="grid gap-6">
                        {results.map((result) => (
                            <div key={`${result.type}-${result.id}`} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition">
                                <div className="p-5">
                                    <div className="flex items-start gap-4">
                                        <div className="flex-shrink-0 mt-1">
                                            {getTypeIcon(result.type)}
                                        </div>

                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-center gap-2 mb-2">
                                                <span className={`text-xs font-medium px-2 py-1 rounded-full ${getTypeColor(result.type)}`}>
                                                    {getTypeLabel(result.type)}
                                                </span>
                                            </div>

                                            <Link
                                                href={
                                                    result.type === "blog"
                                                        ? `/blog/${result.slug}`
                                                        : result.type === "product"
                                                            ? `/products/${result.slug}`
                                                            : `/offers/${result.slug}`
                                                }
                                                className="block"
                                            >
                                                <h3 className="text-lg font-bold text-gray-900 hover:text-primary transition mb-2 line-clamp-2">
                                                    {getResultTitle(result)}
                                                </h3>
                                            </Link>

                                            <p className="text-gray-600 text-sm line-clamp-2 mb-3">
                                                {getResultDescription(result)}
                                            </p>

                                            {getProductCategoryName(result) && (
                                                <div className="text-xs text-gray-500">
                                                    تصنيف: {getProductCategoryName(result)}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {!loading && query && results.length === 0 && (
                <div className="max-w-3xl mx-auto text-center py-12">
                    <div className="bg-gray-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                        <Search className="text-gray-400" size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-700 mb-2">لا توجد نتائج</h3>
                    <p className="text-gray-500">
                        لم نجد أي نتائج لـ &quot;{query}&quot;. حاول استخدام كلمات مفتاحية مختلفة.
                    </p>
                </div>
            )}
        </div>
    );
}