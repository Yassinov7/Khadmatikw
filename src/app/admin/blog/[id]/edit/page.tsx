"use client";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { useAdminAuth } from "../../../AdminAuthContext";
import AdminBlogEditor from "@/components/AdminBlogEditor";

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
  }, [user, postId ]);

  async function fetchPost() {
    setLoadingPost(true);
    const { data, error } = await supabase
      .from("blog_posts")
      .select("*")
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
    <section className="max-w-3xl mx-auto py-8">
      <h2 className="text-2xl font-bold text-primary text-center mb-6">تعديل التدوينة</h2>
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
          {preview ? (
            <img src={preview} alt="معاينة" className="mt-2 w-full max-h-60 object-contain rounded border" />
          ) : coverUrl ? (
            <img src={coverUrl} alt="صورة الغلاف" className="mt-2 w-full max-h-60 object-contain rounded border" />
          ) : null}
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
          >
            حفظ التعديلات
          </button>
        </div>
      </form>
    </section>
  );
}
