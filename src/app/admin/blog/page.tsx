"use client";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useAdminAuth } from "../AdminAuthContext";

type BlogPost = {
  id: number;
  title: string;
  cover_url: string | null;
  created_at: string;
};

function ConfirmModal({ open, onClose, onConfirm, post }: {
  open: boolean;
  onClose: () => void;
  onConfirm: (id: number) => void;
  post?: BlogPost;
}) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 bg-black/30 z-50 flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-xl p-6 min-w-[320px] max-w-xs text-center">
        <h2 className="text-lg font-bold mb-4 text-red-600">تأكيد الحذف</h2>
        <p>هل أنت متأكد من حذف التدوينة:</p>
        <div className="my-2 font-bold text-primary">{post?.title}</div>
        <div className="flex gap-2 justify-center mt-4">
          <button onClick={onClose} className="bg-gray-200 text-gray-700 px-4 py-1 rounded-lg">إلغاء</button>
          <button onClick={() => post?.id && onConfirm(post.id)} className="bg-red-600 text-white px-4 py-1 rounded-lg">حذف نهائي</button>
        </div>
      </div>
    </div>
  );
}

export default function AdminBlogPage() {
  const { user, loading } = useAdminAuth();
  const router = useRouter();
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [fetching, setFetching] = useState(true);
  const [error, setError] = useState("");
  const [deleteModal, setDeleteModal] = useState<{ open: boolean; post?: BlogPost }>({ open: false });

  useEffect(() => {
    if (!loading && !user) router.replace("/admin/login");
  }, [user, loading, router]);

  useEffect(() => {
    if (user) fetchPosts();
  }, [user]);

  async function fetchPosts() {
    setFetching(true);
    const { data, error } = await supabase
      .from("blog_posts")
      .select("id, title, cover_url, created_at")
      .order("created_at", { ascending: false });
    if (error) setError("فشل تحميل التدوينات!");
    else setPosts(data as BlogPost[]);
    setFetching(false);
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
  if (!user) return null;

  return (
    <section className="max-w-5xl mx-auto py-8">
      <h2 className="text-2xl font-bold text-primary mb-4 text-center">إدارة التدوينات</h2>
      <div className="flex justify-start mb-4">
        <Link
          href="/admin/blog/add"
          className="px-4 py-2 rounded-lg font-bold bg-primary text-white hover:bg-primary/90 transition"
        >
          + إضافة تدوينة
        </Link>
      </div>

      {fetching ? (
        <div className="text-center text-gray-400 py-10">...جار التحميل</div>
      ) : posts.length === 0 ? (
        <div className="text-center text-gray-400 py-8">لا توجد تدوينات حالياً.</div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {posts.map((post) => (
            <div key={post.id} className="bg-white border rounded-xl shadow p-4 flex flex-col h-full">
              <div className="relative w-full h-32 mb-2 rounded overflow-hidden border bg-gray-50">
                <Image
                  src={post.cover_url?.trim() && post.cover_url.startsWith("http") ? post.cover_url : "/default-blog.png"}
                  alt={post.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <h3 className="text-lg font-bold text-primary mb-1">{post.title}</h3>
              <p className="text-xs text-gray-500 mb-2">{new Date(post.created_at).toLocaleDateString()}</p>
              <div className="flex gap-2 mt-auto pt-2">
                <Link
                  href={`/admin/blog/${post.id}/edit`}
                  className="bg-blue-100 text-blue-700 px-3 py-1 rounded-lg font-bold hover:bg-blue-200"
                >
                  تعديل
                </Link>
                <button
                  onClick={() => openDeleteModal(post)}
                  className="bg-red-100 text-red-700 px-3 py-1 rounded-lg font-bold hover:bg-red-200"
                >
                  حذف
                </button>
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
