"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
// @ts-ignore
import { useAdminAuth } from "../../AdminAuthContext";
import AdminBlogEditor from "@/components/AdminBlogEditor";
import { Save, X } from 'lucide-react';
import { slugify } from "@/utils/slugify";


export default function AddBlogPostPage() {
  // @ts-ignore
  const { user, loading } = useAdminAuth();
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [coverFile, setCoverFile] = useState<File | null>(null);
  const [coverPreview, setCoverPreview] = useState<string | null>(null);
  const [content, setContent] = useState(""); // محتوى المحرر
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    // @ts-ignore
    if (!loading && !user) router.replace("/admin/login");
  }, [user, loading, router]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setCoverFile(file);
    setCoverPreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return setError("يرجى كتابة عنوان للتدوينة");
    if (!content.trim() || content === "<p></p>") return setError("يرجى كتابة محتوى التدوينة");

    setUploading(true);
    setError("");
    setSuccess("");

    let coverUrl: string | null = null;
    if (coverFile) {
      const fileName = `cover_${Date.now()}.${coverFile.name.split(".").pop()}`;
      const { error } = await supabase.storage.from("blog-covers").upload(fileName, coverFile);
      if (error) {
        setError("فشل رفع صورة الغلاف");
        setUploading(false);
        return;
      }
      coverUrl = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/blog-covers/${fileName}`;
    }

    // Removed SEO fields since they don't exist in the database
    const { error: insertError } = await supabase.from("blog_posts").insert({
      title,
      cover_url: coverUrl,
      content,
    });

    if (insertError) {
      setError("حدث خطأ أثناء حفظ التدوينة");
    } else {
      setSuccess("تم نشر التدوينة بنجاح");
      setTimeout(() => router.push("/admin/blog"), 1500);
    }

    setUploading(false);
  };

  // @ts-ignore
  if (!user) return null;

  return (
    <section className="p-4">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 gap-4">
        <h1 className="text-2xl font-bold text-primary">إضافة تدوينة جديدة</h1>
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
              {coverPreview && (
                <div className="mt-2">
                  <img
                    src={coverPreview}
                    alt="معاينة الغلاف"
                    className="w-full max-h-40 object-contain rounded border"
                  />
                </div>
              )}
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
            disabled={uploading}
          >
            {uploading ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                <span>جاري الحفظ...</span>
              </>
            ) : (
              <>
                <Save className="w-4 h-4" />
                <span>نشر التدوينة</span>
              </>
            )}
          </button>
        </div>
      </form>
    </section>
  );
}