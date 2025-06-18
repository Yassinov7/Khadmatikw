"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { useAdminAuth } from "../../AdminAuthContext";
import AdminBlogEditor from "@/components/AdminBlogEditor"; // استخدم المكون الجديد
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "لوحة التحكم - خدماتي KW",
  robots: "noindex, nofollow",
};

export default function AddBlogPostPage() {
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

  if (!user) return null;

  return (
    <section className="max-w-3xl mx-auto py-8">
      <h2 className="text-2xl font-bold text-primary text-center mb-6">إضافة تدوينة جديدة</h2>
      <form onSubmit={handleSubmit} className="bg-white shadow rounded-xl p-6 flex flex-col gap-4">
        <div>
          <label className="block mb-1 text-sm font-bold text-text">عنوان التدوينة *</label>
          <input
            type="text"
            className="border rounded p-2 w-full"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block mb-1 text-sm font-bold text-text">صورة الغلاف (اختياري)</label>
          <input type="file" accept="image/*" onChange={handleFileChange} />
          {coverPreview && (
            <img
              src={coverPreview}
              alt="معاينة الغلاف"
              className="mt-2 w-full max-h-60 object-contain rounded border"
            />
          )}
        </div>

        <div>
          <label className="block mb-1 text-sm font-bold text-text">المحتوى *</label>
          <AdminBlogEditor value={content} onChange={setContent} />
        </div>

        {error && <div className="text-red-500 text-sm text-center">{error}</div>}
        {success && <div className="text-green-600 text-sm text-center">{success}</div>}

        <div className="flex justify-center gap-2">
          <button
            type="button"
            onClick={() => router.push("/admin/blog")}
            className="bg-gray-200 text-gray-700 px-4 py-1 rounded-lg"
          >
            إلغاء
          </button>
          <button
            type="submit"
            className="bg-primary text-white px-6 py-1 rounded-lg font-bold"
            disabled={uploading}
          >
            {uploading ? "...جاري الحفظ" : "نشر التدوينة"}
          </button>
        </div>
      </form>
    </section>
  );
}
