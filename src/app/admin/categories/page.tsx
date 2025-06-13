"use client";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import Link from "next/link";
import { useAdminAuth } from "../AdminAuthContext";
import { useRouter } from "next/navigation";
import type { Category } from "@/types";

// --- Modal تأكيد الحذف ---
type ConfirmModalProps = {
  open: boolean;
  onClose: () => void;
  onConfirm: (id: number) => void;
  category?: Category;
};

function ConfirmModal({ open, onClose, onConfirm, category }: ConfirmModalProps) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 bg-black/30 z-50 flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-xl p-6 min-w-[320px] max-w-xs text-center">
        <h2 className="text-lg font-bold mb-4 text-red-600">تأكيد الحذف</h2>
        <p>هل أنت متأكد من حذف التصنيف:</p>
        <div className="my-2 font-bold text-primary">{category?.name}</div>
        <div className="text-gray-500 text-sm mb-4">{category?.description}</div>
        <div className="flex gap-2 justify-center mt-2">
          <button
            className="btn bg-gray-200 text-gray-700 px-4 py-1 rounded-lg"
            onClick={onClose}
          >
            إلغاء
          </button>
          <button
            className="btn bg-red-600 text-white px-4 py-1 rounded-lg"
            onClick={() => category?.id && onConfirm(category.id)}
          >
            حذف نهائي
          </button>
        </div>
      </div>
    </div>
  );
}

// --- صفحة إدارة التصنيفات ---
export default function AdminCategoriesPage() {
  const { user, loading } = useAdminAuth();
  const router = useRouter();
  const [categories, setCategories] = useState<Category[]>([]);
  const [fetching, setFetching] = useState(true);
  const [error, setError] = useState("");
  const [deleteModal, setDeleteModal] = useState<{ open: boolean; category?: Category }>({ open: false });

  // حماية الصفحة
  useEffect(() => {
    if (!loading && !user) {
      router.replace("/admin/login");
    }
  }, [user, loading, router]);

  // جلب التصنيفات
  useEffect(() => {
    if (user) fetchCategories();
    // eslint-disable-next-line
  }, [user]);

  async function fetchCategories() {
    setFetching(true);
    const { data, error } = await supabase.from("categories").select("*").order("id");
    if (error) setError("خطأ أثناء جلب التصنيفات");
    else setCategories(data as Category[]);
    setFetching(false);
  }

  // فتح نافذة تأكيد الحذف
  function openDeleteModal(category: Category) {
    setDeleteModal({ open: true, category });
  }

  // إغلاق نافذة التأكيد
  function closeDeleteModal() {
    setDeleteModal({ open: false });
  }

  // تنفيذ الحذف بعد التأكيد
  async function handleDelete(id: number) {
    closeDeleteModal();
    const { error } = await supabase.from("categories").delete().eq("id", id);
    if (error) return alert("حدث خطأ أثناء الحذف!");
    setCategories((prev) => prev.filter((cat) => cat.id !== id));
  }

  if (loading) return <div className="text-center mt-20">جار التحقق...</div>;
  if (!user) return null;

  return (
    <section className="max-w-2xl mx-auto py-8">
      <h2 className="text-2xl font-bold text-primary mb-4 text-center">إدارة التصنيفات</h2>

      <div className="flex justify-start mb-4">
        <Link href="/admin/categories/add" className="btn-primary bg-secondary  px-4 py-2 rounded-lg font-bold">
          + إضافة تصنيف جديد
        </Link>
      </div>

      {fetching ? (
        <div className="text-center py-10 text-gray-400">...جار التحميل</div>
      ) : categories.length === 0 ? (
        <div className="text-center text-gray-400 py-8">لا يوجد تصنيفات بعد.</div>
      ) : (
        <div className="flex flex-col gap-4">
  {categories.map((cat) => (
    <div
      key={cat.id}
      className="bg-white rounded-xl shadow border p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3"
    >
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-1">
          <span className="font-bold text-lg text-primary">{cat.name}</span>
          <span className="text-secondary">#{cat.id}</span>
        </div>
        <div className="text-gray-600 text-sm">
          {cat.description || <span className="text-gray-300">لا يوجد وصف</span>}
        </div>
      </div>
      <div className="flex gap-2 mt-2 sm:mt-0">
        <Link
          href={`/admin/categories/${cat.id}/edit`}
          className="px-4 py-1 rounded-lg bg-blue-100 text-primary font-bold hover:bg-blue-200 transition"
        >
          تعديل
        </Link>
        <button
          onClick={() => openDeleteModal(cat)}
          className="px-4 py-1 rounded-lg bg-red-100 text-red-600 font-bold hover:bg-red-200 transition"
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
        category={deleteModal.category}
      />

      {error && <div className="text-center text-red-500 mt-4">{error}</div>}
    </section>
  );
}
