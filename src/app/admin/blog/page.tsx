"use client";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
// @ts-ignore
import { useAdminAuth } from "../AdminAuthContext";
import { Search, Filter, X, Calendar } from 'lucide-react';
import { formatDateTime } from "@/utils/formatDate";


type BlogPost = {
  id: number;
  title: string;
  cover_url: string | null;
  created_at: string;
  // Removed SEO fields that don't exist in the database
};

function ConfirmModal({ open, onClose, onConfirm, post }: {
  open: boolean;
  onClose: () => void;
  onConfirm: (id: number) => void;
  post?: BlogPost;
}) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 bg-black/30 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-6 min-w-[300px] max-w-sm text-center">
        <h2 className="text-lg font-bold mb-4 text-red-600">تأكيد الحذف</h2>
        <p>هل أنت متأكد من حذف التدوينة:</p>
        <div className="my-2 font-bold text-primary">{post?.title}</div>
        <div className="flex gap-2 justify-center mt-4">
          <button onClick={onClose} className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg">إلغاء</button>
          <button onClick={() => post?.id && onConfirm(post.id)} className="bg-red-600 text-white px-4 py-2 rounded-lg">حذف نهائي</button>
        </div>
      </div>
    </div>
  );
}

export default function AdminBlogPage() {
  // @ts-ignore
  const { user, loading } = useAdminAuth();
  const router = useRouter();
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>([]);
  const [fetching, setFetching] = useState(true);
  const [error, setError] = useState("");
  const [deleteModal, setDeleteModal] = useState<{ open: boolean; post?: BlogPost }>({ open: false });

  // Filter states
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    // @ts-ignore
    if (!loading && !user) router.replace("/admin/login");
  }, [user, loading, router]);

  useEffect(() => {
    // @ts-ignore
    if (user) fetchPosts();
  }, [user]);

  useEffect(() => {
    applyFilters();
  }, [posts, searchTerm]);

  async function fetchPosts() {
    setFetching(true);
    // Removed SEO fields that don't exist in the database
    const { data, error } = await supabase
      .from("blog_posts")
      .select("id, title, cover_url, created_at")
      .order("created_at", { ascending: false });
    if (error) setError("فشل تحميل التدوينات!");
    else setPosts(data as BlogPost[]);
    setFetching(false);
  }

  function applyFilters() {
    let result = [...posts];

    // Apply search filter
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(post =>
        post.title.toLowerCase().includes(term)
        // Removed SEO field searches that don't exist in the database
      );
    }

    setFilteredPosts(result);
  }

  function clearFilters() {
    setSearchTerm('');
  }

  async function handleDelete(id: number) {
    closeDeleteModal();

    // الخطوة 1: جلب التدوينة للحصول على الرابط
    const { data: post } = await supabase
      .from("blog_posts")
      .select("cover_url")
      .eq("id", id)
      .single();

    // الخطوة 2: حذف الصورة من التخزين إن وجدت
    if (post?.cover_url) {
      const filePath = post.cover_url.split("/blog-covers/")[1];
      if (filePath) {
        await supabase.storage.from("blog-covers").remove([filePath]);
      }
    }

    // الخطوة 3: حذف التدوينة من قاعدة البيانات
    const { error } = await supabase.from("blog_posts").delete().eq("id", id);
    if (error) return alert("فشل حذف التدوينة!");
    setPosts((prev) => prev.filter((p) => p.id !== id));
  }


  function openDeleteModal(post: BlogPost) {
    setDeleteModal({ open: true, post });
  }

  function closeDeleteModal() {
    setDeleteModal({ open: false });
  }

  if (loading) return <div className="text-center mt-20">جار التحقق...</div>;
  // @ts-ignore
  if (!user) return null;

  const hasActiveFilters = searchTerm !== '';

  return (
    <section className="p-4">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 gap-4">
        <h1 className="text-2xl font-bold">إدارة التدوينات</h1>
        <Link
          href="/admin/blog/add"
          className="px-4 py-2 rounded-lg font-bold bg-primary text-white hover:bg-primary/90 transition w-full sm:w-auto text-center flex items-center justify-center gap-2"
        >
          <span>+</span>
          <span>تدوينة جديدة</span>
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
              placeholder="البحث بالعنوان..."
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

        {/* Clear Filters Button */}
        {hasActiveFilters && (
          <div className="mt-4 pt-4 border-t border-gray-200">
            <button
              onClick={clearFilters}
              className="flex items-center gap-1 text-sm text-red-600 hover:text-red-800"
            >
              <X className="w-4 h-4" />
              <span>مسح البحث</span>
            </button>
          </div>
        )}
      </div>

      {fetching ? (
        <div className="text-center py-10 bg-white rounded-lg shadow">جاري التحميل...</div>
      ) : filteredPosts.length === 0 ? (
        <div className="text-center py-10 bg-white rounded-lg shadow">
          <p className="text-gray-500 mb-4">
            {hasActiveFilters ? 'لا توجد تدوينات تطابق البحث' : 'لا توجد تدوينات حالياً'}
          </p>
          {!hasActiveFilters && (
            <Link href="/admin/blog/add">
              <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/80 transition">
                إضافة تدوينة
              </button>
            </Link>
          )}
          {hasActiveFilters && (
            <button
              onClick={clearFilters}
              className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/80 transition"
            >
              مسح البحث
            </button>
          )}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 border border-gray-100 flex flex-col h-full">
              <div className="relative h-48">
                <Image
                  src={post.cover_url?.trim() && post.cover_url.startsWith("http") ? post.cover_url : "/default-blog.png"}
                  alt={post.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                />
              </div>
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2">
                  {post.title}
                </h3>
                <div className="flex items-center text-sm text-gray-500 mb-3 mt-auto">
                  <Calendar className="w-4 h-4 ml-1" />
                  <span>{formatDateTime(post.created_at)}</span>
                </div>
                <div className="flex gap-2 mt-2">
                  <Link
                    href={`/admin/blog/${post.id}/edit`}
                    className="flex-1 bg-blue-500 hover:bg-blue-600 text-white text-center py-2 px-3 rounded-lg font-medium transition text-sm"
                  >
                    تعديل
                  </Link>
                  <button
                    onClick={() => openDeleteModal(post)}
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
      <ConfirmModal
        open={deleteModal.open}
        onClose={closeDeleteModal}
        onConfirm={handleDelete}
        post={deleteModal.post}
      />
      {error && <div className="text-center text-red-500 mt-4">{error}</div>}
    </section>
  );
}