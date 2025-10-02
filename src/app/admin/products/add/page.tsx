'use client';
import { useState, useEffect, ChangeEvent } from 'react';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';
// @ts-ignore
import { useAdminAuth } from '../../AdminAuthContext';
import type { Category } from '@/types';

export default function AddServicePage() {
  // @ts-ignore
  const { user, loading } = useAdminAuth();
  const router = useRouter();

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [imageUrl, setImageUrl] = useState<string>('');
  const [categoryId, setCategoryId] = useState<number | ''>('');
  const [phone, setPhone] = useState('');
  const [whatsapp, setWhatsapp] = useState('');

  const [categories, setCategories] = useState<Category[]>([]);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    async function fetchCategories() {
      const { data, error } = await supabase.from('categories').select('*').order('id');
      if (!error && data) setCategories(data as Category[]);
    }
    fetchCategories();
  }, []);

  function handleImageChange(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      setImagePreview(URL.createObjectURL(file));
    }
  }

  async function uploadImageToStorage(): Promise<string | null> {
    if (!imageFile) return null;
    setUploading(true);
    const ext = imageFile.name.split('.').pop();
    const fileName = `cover_${Date.now()}.${ext}`;
    const { error } = await supabase.storage
      .from('product-cover')
      .upload(fileName, imageFile, { upsert: true });
    setUploading(false);
    if (error) {
      setError('فشل رفع الصورة');
      return null;
    }
    return supabase.storage.from('product-cover').getPublicUrl(fileName).data.publicUrl;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!name.trim()) return setError('اسم الخدمة مطلوب!');
    if (!categoryId) return setError('اختر التصنيف!');

    let finalImageUrl = imageUrl;
    if (imageFile) {
      const url = await uploadImageToStorage();
      if (!url) return;
      finalImageUrl = url;
    }

    const contact_info = {
      phone: phone.trim() || undefined,
      whatsapp: whatsapp.trim() || undefined,
    };

    const { error } = await supabase.from('products').insert([
      {
        name: name.trim(),
        description: description.trim() || null,
        image_url: finalImageUrl || null,
        price: null,
        on_sale: false,
        sale_price: null,
        category_id: Number(categoryId),
        contact_info,
      },
    ]);
    if (error) return setError('حدث خطأ أثناء الإضافة!');
    setSuccess('تمت إضافة الخدمة بنجاح');
    setTimeout(() => router.push('/admin/products'), 1000);
  }

  if (loading) return <div className="text-center mt-20">جار التحقق...</div>;
  // @ts-ignore
  if (!user) return null;

  return (
    <section className="p-4">
      <h1 className="text-2xl font-bold text-primary mb-6 text-center">إضافة خدمة جديدة</h1>
      <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow p-6 flex flex-col gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            اسم الخدمة *
          </label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
            type="text"
            placeholder="اسم الخدمة"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            وصف الخدمة
          </label>
          <textarea
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
            placeholder="وصف مختصر"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={3}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            صورة الغلاف
          </label>
          <input
            type="file"
            accept="image/*"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
            onChange={handleImageChange}
          />
          {imagePreview && (
            <div className="mt-2">
              <img
                src={imagePreview}
                alt="معاينة الصورة"
                className="rounded-xl max-h-44 object-contain border"
              />
            </div>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            التصنيف *
          </label>
          <select
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
            value={categoryId}
            onChange={(e) => setCategoryId(Number(e.target.value))}
            required
          >
            <option value="">اختر التصنيف</option>
            {categories.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.name}
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              هاتف للتواصل
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
              type="text"
              placeholder="رقم الهاتف"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              رقم واتساب
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
              type="text"
              placeholder="رقم واتساب"
              value={whatsapp}
              onChange={(e) => setWhatsapp(e.target.value)}
            />
          </div>
        </div>

        {uploading && <div className="text-blue-600 text-sm text-center">...جار رفع الصورة</div>}
        {error && <div className="text-red-500 text-sm text-center">{error}</div>}
        {success && <div className="text-green-600 text-sm text-center">{success}</div>}

        <div className="flex flex-col sm:flex-row justify-end gap-3 pt-4">
          <button
            type="button"
            onClick={() => router.push('/admin/products')}
            className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
          >
            إلغاء
          </button>
          <button
            type="submit"
            className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-50"
            disabled={uploading}
          >
            إضافة الخدمة
          </button>
        </div>
      </form>
    </section>
  );
}