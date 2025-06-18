"use client";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useAdminAuth } from "../AdminAuthContext";
import type { Product } from "@/types";

// Modal تأكيد الحذف
type ConfirmModalProps = {
  open: boolean;
  onClose: () => void;
  onConfirm: (id: number) => void;
  product?: Product;
};
function ConfirmModal({ open, onClose, onConfirm, product }: ConfirmModalProps) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 bg-black/30 z-50 flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-xl p-6 min-w-[320px] max-w-xs text-center">
        <h2 className="text-lg font-bold mb-4 text-red-600">تأكيد الحذف</h2>
        <p>هل أنت متأكد من حذف المنتج:</p>
        <div className="my-2 font-bold text-primary">{product?.name}</div>
        <div className="mb-4 text-gray-500 text-xs">
          {product?.description?.slice(0, 60)}
        </div>
        <div className="flex gap-2 justify-center mt-2">
          <button
            className="bg-gray-200 text-gray-700 px-4 py-1 rounded-lg"
            onClick={onClose}
          >
            إلغاء
          </button>
          <button
            className="bg-red-600 text-white px-4 py-1 rounded-lg"
            onClick={() => product?.id && onConfirm(product.id)}
          >
            حذف نهائي
          </button>
        </div>
      </div>
    </div>
  );
}

export default function AdminProductsPage() {
  const { user, loading } = useAdminAuth();
  const router = useRouter();
  const [products, setProducts] = useState<Product[]>([]);
  const [categoriesMap, setCategoriesMap] = useState<Record<number, string>>({});
  const [fetching, setFetching] = useState(true);
  const [error, setError] = useState("");
  const [deleteModal, setDeleteModal] = useState<{ open: boolean; product?: Product }>({ open: false });

  // حماية الصفحة
  useEffect(() => {
    if (!loading && !user) router.replace("/admin/login");
  }, [user, loading, router]);

  // جلب المنتجات والتصنيفات
  useEffect(() => {
    if (user) fetchProducts();
    // eslint-disable-next-line
  }, [user]);

  async function fetchProducts() {
    setFetching(true);
    setError("");
    const { data, error } = await supabase
      .from("products")
      .select("*, category:categories(name)")
      .order("id", { ascending: false });
    if (error) {
      setError("خطأ أثناء جلب المنتجات");
      setFetching(false);
      return;
    }
    setProducts(data as Product[]);
    // اصنع خريطة التصنيفات
    const catMap: Record<number, string> = {};
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (data as any[]).forEach((prod) => {
      if (prod.category_id && prod.category?.name) catMap[prod.category_id] = prod.category.name;
    });
    setCategoriesMap(catMap);
    setFetching(false);
  }

  // Modal الحذف
  function openDeleteModal(product: Product) {
    setDeleteModal({ open: true, product });
  }
  function closeDeleteModal() {
    setDeleteModal({ open: false });
  }
  async function handleDelete(id: number) {
  closeDeleteModal();

  // ابحث عن المنتج أولاً للحصول على رابط الصورة
  const prod = products.find((p) => p.id === id);
  if (prod?.image_url) {
    try {
      // استخراج اسم الملف من الرابط (بعد .../product-cover/)
      const filePath = prod.image_url.split("/product-cover/")[1];
      if (filePath) {
        // حذف الصورة من الباكت
        await supabase.storage.from("product-cover").remove([filePath]);
      }
    } catch (err) {
      // حتى لو فشل حذف الصورة، أكمل بحذف المنتج
      console.error("فشل حذف صورة الغلاف من الباكت", err);
    }
  }

  // الآن احذف المنتج من الجدول
  const { error } = await supabase.from("products").delete().eq("id", id);
  if (error) return alert("حدث خطأ أثناء الحذف!");
  setProducts((prev) => prev.filter((p) => p.id !== id));
}



  if (loading) return <div className="text-center mt-20">جار التحقق...</div>;
  if (!user) return null;

  return (
    <section className="max-w-5xl mx-auto py-8">
      <h2 className="text-2xl font-bold text-primary mb-4 text-center">إدارة المنتجات</h2>
      <div className="flex justify-start mb-4">
        <Link
          href="/admin/products/add"
          className="px-4 py-2 rounded-lg font-bold bg-primary text-white hover:bg-primary/90 transition"
        >
          + إضافة منتج جديد
        </Link>
      </div>
      {fetching ? (
        <div className="text-center py-10 text-gray-400">...جار التحميل</div>
      ) : products.length === 0 ? (
        <div className="text-center text-gray-400 py-8">لا يوجد منتجات بعد.</div>
      ) : (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((prod) => (
            <div
              key={prod.id}
              className="bg-white rounded-xl shadow border p-4 flex flex-col h-full"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="relative w-20 h-20 rounded-lg border bg-gray-50 overflow-hidden">
                <Image
                  src={prod.image_url?.trim() ? prod.image_url : "/default-product.png"}
                  alt={prod.name}
                  fill
                  className="object-contain"
                  sizes="80px"
                />
              </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-bold text-lg text-primary">{prod.name}</span>
                    <span className="text-xs text-gray-400">#{prod.id}</span>
                  </div>
                  <div className="text-xs text-gray-500">
                    {prod.category_id && categoriesMap[prod.category_id]
                      ? categoriesMap[prod.category_id]
                      : <span className="text-gray-300">بدون تصنيف</span>}
                  </div>
                </div>
              </div>
              <div className="text-gray-600 text-sm flex-1">
                {prod.description?.slice(0, 60) || <span className="text-gray-300">لا يوجد وصف</span>}
              </div>
              <div className="flex items-center gap-3 my-3">
                {prod.on_sale && prod.sale_price ? (
                  <>
                    <span className="line-through text-gray-400">{prod.price} د.ك</span>
                    <span className="text-secondary font-bold text-xl">{prod.sale_price} د.ك</span>
                  </>
                ) : (
                  <span className="text-primary font-bold text-xl">{prod.price} د.ك</span>
                )}
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-400 mb-2">
                <span>
                  {prod.contact_info?.phone && <span>📞 {prod.contact_info.phone} </span>}
                  {prod.contact_info?.whatsapp && <span>• واتساب: {prod.contact_info.whatsapp}</span>}
                </span>
              </div>
              <div className="flex gap-2 mt-auto pt-2">
                <Link
                  href={`/admin/products/${prod.id}/edit`}
                  className="bg-blue-100 text-blue-700 px-3 py-1 rounded-lg font-bold hover:bg-blue-200"
                >
                  تعديل
                </Link>
                <button
                  onClick={() => openDeleteModal(prod)}
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
        product={deleteModal.product}
      />
      {error && <div className="text-center text-red-500 mt-4">{error}</div>}
    </section>
  );
}
