"use client";
import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import { useAdminAuth } from "../../AdminAuthContext";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "لوحة التحكم - خدماتي KW",
  robots: "noindex, nofollow",
};

export default function AddCategoryPage() {
  const { user, loading } = useAdminAuth();
  const router = useRouter();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setSuccess("");
    if (!name.trim()) {
      setError("الاسم مطلوب");
      return;
    }
    const { error } = await supabase
      .from("categories")
      .insert([{ name: name.trim(), description: description.trim() || null }]);
    if (error) return setError("حدث خطأ أثناء الإضافة!");
    setSuccess("تمت إضافة التصنيف بنجاح");
    setTimeout(() => router.push("/admin/categories"), 900);
  }

  if (loading) return <div className="text-center mt-20">جار التحقق...</div>;
  if (!user) return null;

  return (
    <section className="max-w-md mx-auto py-12">
      <h2 className="text-xl font-bold text-primary mb-6 text-center">إضافة تصنيف جديد</h2>
      <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow p-6 flex flex-col gap-4">
        <input
          className="border rounded p-2"
          type="text"
          placeholder="اسم التصنيف *"
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />
        <textarea
          className="border rounded p-2 resize-y min-h-[48px]"
          placeholder="وصف (اختياري)"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
        {error && <div className="text-red-500 text-sm text-center">{error}</div>}
        {success && <div className="text-green-600 text-sm text-center">{success}</div>}
        <div className="flex gap-2 justify-end">
          <button
            type="button"
            onClick={() => router.push("/admin/categories")}
            className="btn bg-gray-200 text-gray-700 px-4 py-1 rounded-lg"
          >
            إلغاء
          </button>
          <button
            type="submit"
            className="bg-accent px-4 py-1 rounded-lg font-bold"
          >
            إضافة
          </button>
        </div>
      </form>
    </section>
  );
}
