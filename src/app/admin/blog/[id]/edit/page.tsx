"use client";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { useAdminAuth } from "../../../AdminAuthContext";
import AdminBlogEditor from "@/components/AdminBlogEditor";
import { Save, X } from 'lucide-react';


export default function EditBlogPostPage() {
  const { user, loading } = useAdminAuth();
  const router = useRouter();
  const params = useParams();
  const postId = Number(params?.id);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [coverUrl, setCoverUrl] = useState<string | null>(null);
  const [coverFile, setCoverFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [loadingPost, setLoadingPost] = useState(true);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    if (!loading && !user) router.replace("/admin/login");
  }, [user, loading, router]);

  useEffect(() => {
    if (user && postId) fetchPost();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, postId]);

  async function fetchPost() {
    setLoadingPost(true);
    // Removed SEO fields that don't exist in the database
    const { data, error } = await supabase
      .from("blog_posts")
      .select("id, title, cover_url, content, created_at")
      .eq("id", postId)
      .single();

    if (error || !data) {
      setError("فشل تحميل التدوينة");
    } else {
      setTitle(data.title);
      setContent(data.content);
      setCoverUrl(data.cover_url);
    }
    setLoadingPost(false);
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setCoverFile(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !content.trim() || content === "<p></p>") {
      setError("يرجى ملء جميع الحقول المطلوبة");
      return;
    }

    setError("");
    setSuccess("");
    let newCoverUrl = coverUrl;

    // رفع صورة جديدة إن وُجدت
    if (coverFile) {
      // حذف القديمة
      if (coverUrl?.includes("blog-covers")) {
        const filePath = coverUrl.split("/blog-covers/")[1];
        if (filePath) {
          await supabase.storage.from("blog-covers").remove([filePath]);
        }
      }

      const fileName = `cover_${Date.now()}.${coverFile.name.split(".").pop()}`;
      const { error: uploadErr } = await supabase.storage
        .from("blog-covers")
        .upload(fileName, coverFile);

      if (uploadErr) {
        setError("فشل رفع صورة الغلاف الجديدة");
        return;
      }

      newCoverUrl = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/blog-covers/${fileName}`;
    }

    // Removed SEO fields since they don't exist in the database
    const { error: updateErr } = await supabase
      .from("blog_posts")
      .update({
        title,
        content,
        cover_url: newCoverUrl,
      })
      .eq("id", postId);

    if (updateErr) {
      setError("حدث خطأ أثناء التحديث");
    } else {
      setSuccess("تم حفظ التعديلات بنجاح");
      setTimeout(() => router.push("/admin/blog"), 1500);
    }
  };

  if (!user || loadingPost) return <div className="text-center mt-20">جاري التحميل...</div>;

  return (
    <section className="p-4">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 gap-4">
        <h1 className="text-2xl font-bold text-primary">تعديل التدوينة</h1>
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-gray-700"
        >
          <X className="w-4 h-4" />
          <span>رجوع</span>
        </button>
      </div>

      <form onSubmit={handleSubmit} className="bg-white shadow rounded-xl p-6 flex flex-col gap-6 max-w-4xl mx-auto">
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            {/* Title */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                عنوان التدوينة *
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>

            {/* Content */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                المحتوى *
              </label>
              <AdminBlogEditor value={content} onChange={setContent} />
            </div>
          </div>

          {/* Cover */}
          <div className="space-y-6">
            {/* Cover Image */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                صورة الغلاف (اختياري)
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
              />
              {preview ? (
                <img src={preview} alt="معاينة" className="mt-2 w-full max-h-40 object-contain rounded border" />
              ) : coverUrl ? (
                <img src={coverUrl} alt="صورة الغلاف" className="mt-2 w-full max-h-40 object-contain rounded border" />
              ) : null}
            </div>
          </div>
        </div>

        {error && <div className="text-red-500 text-sm text-center">{error}</div>}
        {success && <div className="text-green-600 text-sm text-center">{success}</div>}

        <div className="flex flex-col sm:flex-row justify-end gap-3 pt-4">
          <button
            type="button"
            onClick={() => router.push("/admin/blog")}
            className="px-4 py-2 border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
          >
            إلغاء
          </button>
          <button
            type="submit"
            className="flex items-center justify-center gap-2 px-4 py-2 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-50"
          >
            <Save className="w-4 h-4" />
            <span>حفظ التعديلات</span>
          </button>
        </div>
      </form>
    </section>
  );
}