"use client";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import Link from "next/link";
// @ts-ignore
import { useAdminAuth } from "../AdminAuthContext";
import { useRouter } from "next/navigation";
import type { Category } from "@/types";
import { Search, X } from 'lucide-react';

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
    <div className="fixed inset-0 bg-black/30 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-6 min-w-[300px] max-w-sm text-center">
        <h2 className="text-lg font-bold mb-4 text-red-600">تأكيد الحذف</h2>
        <p>هل أنت متأكد من حذف التصنيف:</p>
        <div className="my-2 font-bold text-primary">{category?.name}</div>
        <div className="text-gray-500 text-sm mb-4">{category?.description}</div>
        <div className="flex gap-2 justify-center mt-2">
          <button
            className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg"
            onClick={onClose}
          >
            إلغاء
          </button>
          <button
            className="bg-red-600 text-white px-4 py-2 rounded-lg"
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
  // @ts-ignore
  const { user, loading } = useAdminAuth();
  const router = useRouter();
  const [categories, setCategories] = useState<Category[]>([]);
  const [filteredCategories, setFilteredCategories] = useState<Category[]>([]);
  const [fetching, setFetching] = useState(true);
  const [error, setError] = useState("");
  const [deleteModal, setDeleteModal] = useState<{ open: boolean; category?: Category }>({ open: false });

  // Filter states
  const [searchTerm, setSearchTerm] = useState('');

  // حماية الصفحة
  useEffect(() => {
    // @ts-ignore
    if (!loading && !user) {
      router.replace("/admin/login");
    }
  }, [user, loading, router]);

  // جلب التصنيفات
  useEffect(() => {
    // @ts-ignore
    if (user) fetchCategories();
    // eslint-disable-next-line
  }, [user]);

  useEffect(() => {
    applyFilters();
  }, [categories, searchTerm]);

  async function fetchCategories() {
    setFetching(true);
    const { data, error } = await supabase.from("categories").select("*").order("id");
    if (error) setError("خطأ أثناء جلب التصنيفات");
    else {
      setCategories(data as Category[]);
    }
    setFetching(false);
  }

  function applyFilters() {
    let result = [...categories];

    // Apply search filter
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(category =>
        category.name.toLowerCase().includes(term) ||
        (category.description && category.description.toLowerCase().includes(term))
      );
    }

    setFilteredCategories(result);
  }

  function clearFilters() {
    setSearchTerm('');
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
  // @ts-ignore
  if (!user) return null;

  const hasActiveFilters = searchTerm !== '';

  return (
    <section className="p-4">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 gap-4">
        <h1 className="text-2xl font-bold">إدارة التصنيفات</h1>
        <Link href="/admin/categories/add" className="bg-secondary text-white px-4 py-2 rounded-lg font-bold hover:bg-secondary/90 transition w-full sm:w-auto text-center">
          + إضافة تصنيف جديد
        </Link>
      </div>

      {/* Search */}
      <div className="bg-white rounded-xl shadow p-4 mb-6">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="البحث بالاسم أو الوصف..."
              className="w-full pr-10 pl-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Clear Filters Button */}
          {hasActiveFilters && (
            <button
              onClick={clearFilters}
              className="flex items-center gap-1 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-gray-700"
            >
              <X className="w-4 h-4" />
              <span>مسح</span>
            </button>
          )}
        </div>
      </div>

      {fetching ? (
        <div className="text-center py-10 bg-white rounded-lg shadow">جاري التحميل...</div>
      ) : filteredCategories.length === 0 ? (
        <div className="text-center py-10 bg-white rounded-lg shadow">
          <p className="text-gray-500 mb-4">
            {hasActiveFilters ? 'لا توجد تصنيفات تطابق البحث' : 'لا يوجد تصنيفات بعد'}
          </p>
          {!hasActiveFilters && (
            <Link href="/admin/categories/add">
              <button className="bg-secondary text-white px-4 py-2 rounded-lg hover:bg-secondary/80 transition">
                إضافة تصنيف جديد
              </button>
            </Link>
          )}
          {hasActiveFilters && (
            <button
              onClick={clearFilters}
              className="bg-secondary text-white px-4 py-2 rounded-lg hover:bg-secondary/80 transition"
            >
              مسح البحث
            </button>
          )}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((cat) => (
            <div
              key={cat.id}
              className="bg-white rounded-xl shadow-md border border-gray-100 p-4 flex flex-col h-full hover:shadow-lg transition-all duration-300"
            >
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-bold text-lg text-gray-800">{cat.name}</span>
                  <span className="text-secondary text-sm">#{cat.id}</span>
                </div>
                <div className="text-gray-600 text-sm">
                  {cat.description || <span className="text-gray-300">لا يوجد وصف</span>}
                </div>
              </div>
              <div className="flex gap-2 mt-4">
                <Link
                  href={`/admin/categories/${cat.id}/edit`}
                  className="flex-1 bg-blue-500 hover:bg-blue-600 text-white text-center py-2 px-3 rounded-lg font-medium transition text-sm"
                >
                  تعديل
                </Link>
                <button
                  onClick={() => openDeleteModal(cat)}
                  className="flex-1 bg-red-500 hover:bg-red-600 text-white py-2 px-3 rounded-lg font-medium transition text-sm"
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