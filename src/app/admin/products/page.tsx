'use client';
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useAdminAuth } from '../AdminAuthContext';
import type { Product } from '@/types';

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
        <p>هل أنت متأكد من حذف الخدمة:</p>
        <div className="my-2 font-bold text-primary">{product?.name}</div>
        <div className="mb-4 text-gray-500 text-xs">
          {product?.description?.slice(0, 60)}
        </div>
        <div className="flex gap-2 justify-center mt-2">
          <button className="bg-gray-200 text-gray-700 px-4 py-1 rounded-lg" onClick={onClose}>
            إلغاء
          </button>
          <button className="bg-red-600 text-white px-4 py-1 rounded-lg" onClick={() => product?.id && onConfirm(product.id)}>
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
  const [error, setError] = useState('');
  const [deleteModal, setDeleteModal] = useState<{ open: boolean; product?: Product }>({ open: false });

  useEffect(() => {
    if (!loading && !user) router.replace('/admin/login');
  }, [user, loading, router]);

  useEffect(() => {
    if (user) fetchProducts();
  }, [user]);

  async function fetchProducts() {
    setFetching(true);
    const { data, error } = await supabase
      .from('products')
      .select('*, category:categories(name)')
      .order('id', { ascending: false });

    if (error) {
      setError('خطأ أثناء جلب الخدمات');
      setFetching(false);
      return;
    }

    setProducts(data as Product[]);
    const catMap: Record<number, string> = {};
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (data as any[]).forEach((prod) => {
      if (prod.category_id && prod.category?.name) catMap[prod.category_id] = prod.category.name;
    });
    setCategoriesMap(catMap);
    setFetching(false);
  }

  function openDeleteModal(product: Product) {
    setDeleteModal({ open: true, product });
  }

  function closeDeleteModal() {
    setDeleteModal({ open: false });
  }

  async function handleDelete(id: number) {
    closeDeleteModal();
    const prod = products.find((p) => p.id === id);
    if (prod?.image_url) {
      const filePath = prod.image_url.split('/product-cover/')[1];
      if (filePath) {
        await supabase.storage.from('product-cover').remove([filePath]);
      }
    }
    const { error } = await supabase.from('products').delete().eq('id', id);
    if (!error) {
      setProducts((prev) => prev.filter((p) => p.id !== id));
    } else {
      alert('حدث خطأ أثناء الحذف!');
    }
  }

  if (loading) return <div className="text-center mt-20">جار التحقق...</div>;
  if (!user) return null;

  return (
    <section className="max-w-6xl mx-auto py-8 px-4">
      <h2 className="text-2xl font-bold text-primary mb-6 text-center">إدارة الخدمات</h2>
      <div className="mb-6 text-end">
        <Link
          href="/admin/products/add"
          className="px-5 py-2 rounded-xl font-bold bg-primary text-white hover:bg-primary/90 transition"
        >
          + إضافة خدمة جديدة
        </Link>
      </div>

      {fetching ? (
        <div className="text-center py-10 text-gray-400">...جار التحميل</div>
      ) : products.length === 0 ? (
        <div className="text-center text-gray-400 py-8">لا يوجد خدمات حالياً.</div>
      ) : (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((prod) => (
            <div key={prod.id} className="bg-white rounded-xl shadow border p-4 flex flex-col h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="relative w-20 h-20 rounded-lg border bg-gray-50 overflow-hidden">
                  <Image
                    src={prod.image_url?.trim() || '/default-product.png'}
                    alt={prod.name}
                    fill
                    className="object-contain"
                    sizes="80px"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-bold text-lg text-primary truncate">{prod.name}</div>
                  <div className="text-xs text-gray-500 mt-1">
                    {prod.category_id && categoriesMap[prod.category_id] ? categoriesMap[prod.category_id] : 'بدون تصنيف'}
                  </div>
                </div>
              </div>

              <div className="text-sm text-gray-600 flex-1 mb-2">
                {prod.description?.slice(0, 60) || <span className="text-gray-300">لا يوجد وصف</span>}
              </div>

              <div className="text-xs text-gray-500 mb-2 mt-1">
                {prod.contact_info?.phone && <div>📞 {prod.contact_info.phone}</div>}
                {prod.contact_info?.whatsapp && <div>💬 واتساب: {prod.contact_info.whatsapp}</div>}
              </div>

              <div className="flex gap-2 mt-auto pt-3">
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
