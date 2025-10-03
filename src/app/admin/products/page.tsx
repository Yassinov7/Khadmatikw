'use client';
import { useEffect, useState, useCallback } from 'react';
import { supabase } from '@/lib/supabase';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useAdminAuth } from '../AdminAuthContext';
import type { Product } from '@/types';
import { Search, Filter, X } from 'lucide-react';

type ConfirmModalProps = {
  open: boolean;
  onClose: () => void;
  onConfirm: (id: number) => void;
  product?: Product;
};

type Category = {
  id: number;
  name: string;
};

type ProductWithCategory = Product & {
  category?: {
    name: string;
  };
};

function ConfirmModal({ open, onClose, onConfirm, product }: ConfirmModalProps) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 bg-black/30 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-6 min-w-[300px] max-w-sm text-center">
        <h2 className="text-lg font-bold mb-4 text-red-600">تأكيد الحذف</h2>
        <p>هل أنت متأكد من حذف الخدمة:</p>
        <div className="my-2 font-bold text-primary">{product?.name}</div>
        <div className="mb-4 text-gray-500 text-xs">
          {product?.description?.slice(0, 60)}
        </div>
        <div className="flex gap-2 justify-center mt-2">
          <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg" onClick={onClose}>
            إلغاء
          </button>
          <button className="bg-red-600 text-white px-4 py-2 rounded-lg" onClick={() => product?.id && onConfirm(product.id)}>
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
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [categoriesMap, setCategoriesMap] = useState<Record<number, string>>({});
  const [fetching, setFetching] = useState(true);
  const [error, setError] = useState('');
  const [deleteModal, setDeleteModal] = useState<{ open: boolean; product?: Product }>({ open: false });

  // Filter states
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<number | ''>('');
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    if (!loading && !user) router.replace('/admin/login');
  }, [user, loading, router]);

  useEffect(() => {
    if (user) {
      fetchProducts();
      fetchCategories();
    }
  }, [user]);

  const applyFilters = useCallback(() => {
    let result = [...products];

    // Apply search filter
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(product =>
        product.name.toLowerCase().includes(term) ||
        (product.description && product.description.toLowerCase().includes(term))
      );
    }

    // Apply category filter
    if (selectedCategory !== '') {
      result = result.filter(product => product.category_id === selectedCategory);
    }

    setFilteredProducts(result);
  }, [products, searchTerm, selectedCategory]);

  useEffect(() => {
    applyFilters();
  }, [applyFilters]);

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
    (data as ProductWithCategory[]).forEach((prod) => {
      if (prod.category_id && prod.category?.name) catMap[prod.category_id] = prod.category.name;
    });
    setCategoriesMap(catMap);
    setFetching(false);
  }

  async function fetchCategories() {
    const { data, error } = await supabase
      .from('categories')
      .select('id, name')
      .order('name', { ascending: true });

    if (!error && data) {
      setCategories(data as Category[]);
    }
  }

  function openDeleteModal(product: Product) {
    setDeleteModal({ open: true, product });
  }

  function closeDeleteModal() {
    setDeleteModal({ open: false });
  }

  function clearFilters() {
    setSearchTerm('');
    setSelectedCategory('');
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

  const hasActiveFilters = searchTerm !== '' || selectedCategory !== '';

  return (
    <section className="p-4">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 gap-4">
        <h1 className="text-2xl font-bold">إدارة الخدمات</h1>
        <Link
          href="/admin/products/add"
          className="inline-block px-4 py-2 rounded-lg font-bold bg-primary text-white hover:bg-primary/90 transition w-full sm:w-auto text-center"
        >
          + إضافة خدمة جديدة
        </Link>
      </div>

      {/* Search and Filters */}
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

          {/* Filter Button */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
          >
            <Filter className="w-5 h-5" />
            <span>تصفية</span>
          </button>
        </div>

        {/* Advanced Filters */}
        {showFilters && (
          <div className="mt-4 pt-4 border-t border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">التصنيف</label>
                <select
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value as number | '')}
                >
                  <option value="">جميع التصنيفات</option>
                  {categories.map(category => (
                    <option key={category.id} value={category.id}>{category.name}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Clear Filters Button */}
            {hasActiveFilters && (
              <div className="mt-4">
                <button
                  onClick={clearFilters}
                  className="flex items-center gap-1 text-sm text-red-600 hover:text-red-800"
                >
                  <X className="w-4 h-4" />
                  <span>مسح التصفيات</span>
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      {fetching ? (
        <div className="text-center py-10 bg-white rounded-lg shadow">جاري التحميل...</div>
      ) : filteredProducts.length === 0 ? (
        <div className="text-center py-10 bg-white rounded-lg shadow">
          <p className="text-gray-500 mb-4">
            {hasActiveFilters ? 'لا توجد خدمات تطابق التصفيات المحددة' : 'لا يوجد خدمات حالياً'}
          </p>
          {!hasActiveFilters && (
            <Link href="/admin/products/add">
              <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/80 transition">
                إضافة خدمة جديدة
              </button>
            </Link>
          )}
          {hasActiveFilters && (
            <button
              onClick={clearFilters}
              className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/80 transition"
            >
              مسح التصفيات
            </button>
          )}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((prod) => (
            <div key={prod.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 border border-gray-100 flex flex-col h-full">
              {/* صورة المنتج */}
              <div className="relative h-48">
                <Image
                  src={prod.image_url?.trim() || '/default-product.png'}
                  alt={prod.name}
                  fill
                  className="object-contain p-4"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                />
              </div>

              {/* اسم وتصنيف */}
              <div className="p-4 flex flex-col flex-grow">
                <div className="font-bold text-lg text-gray-800 mb-1 truncate">{prod.name}</div>
                <div className="text-xs text-gray-500 mb-3">
                  {prod.category_id && categoriesMap[prod.category_id]
                    ? categoriesMap[prod.category_id]
                    : 'بدون تصنيف'}
                </div>

                {/* الوصف */}
                <div className="text-sm text-gray-600 mb-3 line-clamp-2 flex-grow">
                  {prod.description || <span className="text-gray-300">لا يوجد وصف</span>}
                </div>

                {/* تواصل */}
                <div className="text-xs text-gray-500 space-y-1 mb-4">
                  {prod.contact_info?.phone && <div className="truncate">📞 {prod.contact_info.phone}</div>}
                  {prod.contact_info?.whatsapp && <div className="truncate">💬 واتساب: {prod.contact_info.whatsapp}</div>}
                </div>

                {/* الأزرار */}
                <div className="flex gap-2 mt-auto pt-2">
                  <Link
                    href={`/admin/products/${prod.id}/edit`}
                    className="flex-1 bg-blue-500 hover:bg-blue-600 text-white text-center py-2 px-3 rounded-lg font-medium transition text-sm"
                  >
                    تعديل
                  </Link>
                  <button
                    onClick={() => openDeleteModal(prod)}
                    className="flex-1 bg-red-500 hover:bg-red-600 text-white py-2 px-3 rounded-lg font-medium transition text-sm"
                  >
                    حذف
                  </button>
                </div>
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