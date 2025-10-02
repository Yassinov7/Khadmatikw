"use client";

import { useState, useEffect, useRef } from "react";
import { Search, X, FileText, Package, Tag } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { searchSite } from "@/lib/api";
import { slugify } from "@/utils/slugify";
import type { Blog, Product, Offer } from "@/types";

type SearchResult = {
    type: "blog" | "product" | "offer";
    id: number;
    title: string;
    description?: string;
    imageUrl?: string;
    url: string;
};

export function SearchComponent() {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState<SearchResult[]>([]);
    const [isOpen, setIsOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const searchRef = useRef<HTMLDivElement>(null);
    const router = useRouter();

    // Close search when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    // Handle search
    useEffect(() => {
        if (query.length < 2) {
            setResults([]);
            return;
        }

        const delayDebounceFn = setTimeout(() => {
            performSearch(query);
        }, 300);

        return () => clearTimeout(delayDebounceFn);
    }, [query]);

    const performSearch = async (searchQuery: string) => {
        setIsLoading(true);
        try {
            const { products, offers, blogPosts } = await searchSite(searchQuery);

            // Priority order: products first, then offers, then blog posts
            const searchResults: SearchResult[] = [
                ...products.map((product: any) => ({
                    type: "product" as const,
                    id: product.id,
                    title: product.name,
                    description: product.description,
                    imageUrl: product.image_url,
                    url: `/products/${slugify(product.name)}-${product.id}`
                })),
                ...offers.map((offer: any) => ({
                    type: "offer" as const,
                    id: offer.id,
                    title: offer.title,
                    description: offer.description,
                    imageUrl: offer.image_url,
                    url: `/offers/${slugify(offer.title)}-${offer.id}`
                })),
                ...blogPosts.map((post: any) => ({
                    type: "blog" as const,
                    id: post.id,
                    title: post.title,
                    description: post.content?.substring(0, 100) + "...",
                    url: `/blog/${slugify(post.title)}-${post.id}`
                }))
            ];

            setResults(searchResults);
        } catch (error) {
            console.error("Search error:", error);
            setResults([]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setQuery(value);
        setIsOpen(true);
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter" && query.trim()) {
            router.push(`/search?q=${encodeURIComponent(query.trim())}`);
            setIsOpen(false);
        }
    };

    const clearSearch = () => {
        setQuery("");
        setResults([]);
        setIsOpen(false);
    };

    const getTypeIcon = (type: string) => {
        switch (type) {
            case "blog": return <FileText size={16} className="text-blue-500" />;
            case "product": return <Package size={16} className="text-green-500" />;
            case "offer": return <Tag size={16} className="text-red-500" />;
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

    return (
        <div ref={searchRef} className="relative w-full">
            <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <Search className="text-gray-400" size={20} />
                </div>
                <input
                    type="text"
                    value={query}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                    onFocus={() => query && setIsOpen(true)}
                    placeholder="ابحث في الخدمات، العروض، والمقالات..."
                    className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    aria-label="بحث في الموقع"
                />
                {query && (
                    <button
                        onClick={clearSearch}
                        className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-600"
                        aria-label="مسح البحث"
                    >
                        <X size={20} />
                    </button>
                )}
            </div>

            {isOpen && (query.length >= 2 || results.length > 0) && (
                <div className="absolute z-50 mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-lg max-h-96 overflow-y-auto">
                    {isLoading ? (
                        <div className="py-4 px-4 text-center text-gray-500">جاري البحث...</div>
                    ) : results.length > 0 ? (
                        <div className="divide-y divide-gray-100">
                            {results.slice(0, 10).map((result) => (
                                <Link
                                    key={`${result.type}-${result.id}`}
                                    href={result.url}
                                    onClick={() => {
                                        setIsOpen(false);
                                        setQuery("");
                                    }}
                                    className="block px-4 py-3 hover:bg-gray-50 transition-colors"
                                >
                                    <div className="flex items-start gap-3">
                                        <div className="mt-1">
                                            {getTypeIcon(result.type)}
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-center gap-2">
                                                <span className="text-xs font-medium px-2 py-1 bg-gray-100 rounded">
                                                    {getTypeLabel(result.type)}
                                                </span>
                                                <h3 className="text-sm font-bold text-gray-900 truncate">
                                                    {result.title}
                                                </h3>
                                            </div>
                                            {result.description && (
                                                <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                                                    {result.description}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                </Link>
                            ))}
                            <div className="px-4 py-2 bg-gray-50 text-center">
                                <button
                                    onClick={() => {
                                        router.push(`/search?q=${encodeURIComponent(query)}`);
                                        setIsOpen(false);
                                        setQuery("");
                                    }}
                                    className="text-sm font-medium text-primary hover:underline"
                                >
                                    عرض جميع النتائج ({results.length})
                                </button>
                            </div>
                        </div>
                    ) : query.length >= 2 ? (
                        <div className="py-4 px-4 text-center text-gray-500">
                            لم يتم العثور على نتائج لـ "{query}"
                        </div>
                    ) : null}
                </div>
            )}
        </div>
    );
}