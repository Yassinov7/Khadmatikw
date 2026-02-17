"use client";
import { useAdminAuth } from "../AdminAuthContext";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { Package, Tag, FileText, Calendar, TrendingUp, Plus, Eye } from "lucide-react";
import Link from "next/link";
import { formatDateTime } from "@/utils/formatDate";

type Stats = {
  products: number;
  categories: number;
  offers: number;
  blogPosts: number;
};

type RecentItem = {
  id: number;
  title: string;
  type: string;
  created_at: string;
};

export default function AdminDashboardPage() {
  const { user, loading } = useAdminAuth();
  const router = useRouter();
  const [stats, setStats] = useState<Stats>({ products: 0, categories: 0, offers: 0, blogPosts: 0 });
  const [recentItems, setRecentItems] = useState<RecentItem[]>([]);
  const [loadingStats, setLoadingStats] = useState(true);
  const [loadingRecent, setLoadingRecent] = useState(true);

  useEffect(() => {
    if (!loading && !user) {
      router.replace("/admin/login");
    }
  }, [user, loading, router]);

  useEffect(() => {
    if (user) {
      fetchStats();
      fetchRecentItems();
    }
  }, [user]);

  async function fetchStats() {
    try {
      setLoadingStats(true);

      // Fetch all stats in parallel
      const [products, categories, offers, blogPosts] = await Promise.all([
        supabase.from("products").select("id", { count: "exact" }),
        supabase.from("categories").select("id", { count: "exact" }),
        supabase.from("offers").select("id", { count: "exact" }),
        supabase.from("blog_posts").select("id", { count: "exact" })
      ]);

      setStats({
        products: products.count || 0,
        categories: categories.count || 0,
        offers: offers.count || 0,
        blogPosts: blogPosts.count || 0
      });
    } catch (error) {
      console.error("Error fetching stats:", error);
    } finally {
      setLoadingStats(false);
    }
  }

  async function fetchRecentItems() {
    try {
      setLoadingRecent(true);

      // Fetch recent items from all tables
      const [recentProducts, recentCategories, recentOffers, recentBlogPosts] = await Promise.all([
        supabase.from("products").select("id, name, created_at").order("created_at", { ascending: false }).limit(3),
        supabase.from("categories").select("id, name, created_at").order("created_at", { ascending: false }).limit(3),
        supabase.from("offers").select("id, title, created_at").order("created_at", { ascending: false }).limit(3),
        supabase.from("blog_posts").select("id, title, created_at").order("created_at", { ascending: false }).limit(3)
      ]);

      // Combine and sort all items
      const allItems: RecentItem[] = [
        ...(recentProducts.data || []).map(item => ({ id: item.id, title: item.name, type: "product", created_at: item.created_at })),
        ...(recentCategories.data || []).map(item => ({ id: item.id, title: item.name, type: "category", created_at: item.created_at })),
        ...(recentOffers.data || []).map(item => ({ id: item.id, title: item.title, type: "offer", created_at: item.created_at })),
        ...(recentBlogPosts.data || []).map(item => ({ id: item.id, title: item.title, type: "blog", created_at: item.created_at }))
      ]
        .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
        .slice(0, 8);

      setRecentItems(allItems);
    } catch (error) {
      console.error("Error fetching recent items:", error);
    } finally {
      setLoadingRecent(false);
    }
  }

  if (loading) return <div className="flex justify-center items-center h-screen">جار التحقق...</div>;
  if (!user) return null;

  const statCards = [
    {
      title: "المنتجات",
      value: stats.products,
      icon: <Package className="w-6 h-6" />,
      color: "bg-blue-500",
      href: "/admin/products"
    },
    {
      title: "التصنيفات",
      value: stats.categories,
      icon: <Tag className="w-6 h-6" />,
      color: "bg-green-500",
      href: "/admin/categories"
    },
    {
      title: "العروض",
      value: stats.offers,
      icon: <TrendingUp className="w-6 h-6" />,
      color: "bg-orange-500",
      href: "/admin/offers"
    },
    {
      title: "التدوينات",
      value: stats.blogPosts,
      icon: <FileText className="w-6 h-6" />,
      color: "bg-purple-500",
      href: "/admin/blog"
    }
  ];

  const quickActions = [
    { title: "إضافة منتج", href: "/admin/products/add", icon: <Plus className="w-5 h-5" />, color: "bg-blue-100 text-blue-600" },
    { title: "إضافة تصنيف", href: "/admin/categories/add", icon: <Plus className="w-5 h-5" />, color: "bg-green-100 text-green-600" },
    { title: "إضافة عرض", href: "/admin/offers/add", icon: <Plus className="w-5 h-5" />, color: "bg-orange-100 text-orange-600" },
    { title: "إضافة تدوينة", href: "/admin/blog/add", icon: <Plus className="w-5 h-5" />, color: "bg-purple-100 text-purple-600" }
  ];

  const getTypeConfig = (type: string) => {
    switch (type) {
      case "product": return { label: "منتج", color: "bg-blue-100 text-blue-800" };
      case "category": return { label: "تصنيف", color: "bg-green-100 text-green-800" };
      case "offer": return { label: "عرض", color: "bg-orange-100 text-orange-800" };
      case "blog": return { label: "تدوينة", color: "bg-purple-100 text-purple-800" };
      default: return { label: "عنصر", color: "bg-gray-100 text-gray-800" };
    }
  };

  return (
    <div className="p-4 md:p-6">
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-primary mb-2">لوحة تحكم الإدارة</h1>
        <p className="text-gray-600">مرحباً بك في لوحة التحكم الخاصة بك</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {statCards.map((stat, index) => (
          <Link
            key={index}
            href={stat.href}
            className="bg-white rounded-xl shadow p-5 flex items-center hover:shadow-md transition-shadow"
          >
            <div className={`rounded-lg p-3 mr-4 ${stat.color} text-white`}>
              {stat.icon}
            </div>
            <div>
              <p className="text-gray-500 text-sm">{stat.title}</p>
              <p className="text-2xl font-bold">
                {loadingStats ? (
                  <span className="text-gray-400">جاري التحميل...</span>
                ) : (
                  stat.value
                )}
              </p>
            </div>
          </Link>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Quick Actions */}
        <div className="lg:col-span-1 bg-white rounded-xl shadow">
          <div className="p-5 border-b">
            <h2 className="text-lg font-bold text-gray-800">إجراءات سريعة</h2>
          </div>
          <div className="p-5">
            <div className="grid grid-cols-2 gap-3">
              {quickActions.map((action, index) => (
                <Link
                  key={index}
                  href={action.href}
                  className="flex flex-col items-center justify-center p-4 rounded-lg hover:bg-gray-50 transition-colors border border-gray-100"
                >
                  <div className={`rounded-lg p-2 mb-2 ${action.color}`}>
                    {action.icon}
                  </div>
                  <h3 className="text-sm font-medium text-gray-800 text-center">{action.title}</h3>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow">
          <div className="p-5 border-b flex justify-between items-center">
            <h2 className="text-lg font-bold text-gray-800">الأنشطة الأخيرة</h2>
            <Link href="/admin/products" className="text-sm text-primary hover:underline">
              عرض الكل
            </Link>
          </div>
          <div className="p-5">
            {loadingRecent ? (
              <div className="text-center py-8">
                <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary"></div>
                <p className="mt-2 text-gray-500">جاري تحميل الأنشطة...</p>
              </div>
            ) : recentItems.length === 0 ? (
              <div className="text-center py-8 text-gray-500">
                <Calendar className="w-12 h-12 mx-auto text-gray-300 mb-3" />
                <p>لا توجد أنشطة حديثة</p>
              </div>
            ) : (
              <div className="space-y-3">
                {recentItems.map((item) => {
                  const typeConfig = getTypeConfig(item.type);
                  return (
                    <div key={`${item.type}-${item.id}`} className="flex items-center p-3 hover:bg-gray-50 rounded-lg">
                      <span className={`text-xs px-2 py-1 rounded-full ${typeConfig.color}`}>
                        {typeConfig.label}
                      </span>
                      <div className="mr-3 flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate">{item.title}</p>
                        <p className="text-xs text-gray-500">{formatDateTime(item.created_at)}</p>
                      </div>
                      <Link
                        href={
                          item.type === "product" ? `/admin/products/${item.id}/edit` :
                            item.type === "category" ? `/admin/categories/${item.id}/edit` :
                              item.type === "offer" ? `/admin/offers/${item.id}/edit` :
                                `/admin/blog/${item.id}/edit`
                        }
                        className="p-2 text-gray-400 hover:text-primary"
                      >
                        <Eye className="w-4 h-4" />
                      </Link>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}