'use client';
import { useEffect, useState, ChangeEvent } from 'react';
import { supabase } from '@/lib/supabase';
import { useRouter, useParams } from 'next/navigation';
import Image from 'next/image';
import { useAdminAuth } from '../../../AdminAuthContext';
import type { Category } from '@/types';

export default function EditServicePage() {
  const { user, loading } = useAdminAuth();
  const router = useRouter();
  const params = useParams();
  const id = Number(params?.id);

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [oldImageUrl, setOldImageUrl] = useState<string | null>(null);
  const [categoryId, setCategoryId] = useState<number | ''>('');
  const [phone, setPhone] = useState('');
  const [whatsapp, setWhatsapp] = useState('');

  const [categories, setCategories] = useState<Category[]>([]);
  const [fetching, setFetching] = useState(true);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    async function fetchCategories() {
      const { data } = await supabase.from('categories').select('*').order('id');
      if (data) setCategories(data as Category[]);
    }
    fetchCategories();
  }, []);

  useEffect(() => {
    if (!id || !user) return;
    async function fetchProduct() {
      const { data, error } = await supabase.from('products').select('*').eq('id', id).single();
      if (error || !data) {
        setError('تعذر العثور على الخدمة!');
        setFetching(false);
        return;
      }
      setName(data.name || '');
      setDescription(data.description || '');
      setOldImageUrl(data.image_url || null);
      setCategoryId(data.category_id ?? '');
      setPhone(data.contact_info?.phone || '');
      setWhatsapp(data.contact_info?.whatsapp || '');
      setFetching(false);
    }
    fetchProduct();
  }, [id, user]);

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
    const { error } = await supabase.storage.from('product-cover').upload(fileName, imageFile, { upsert: true });
    setUploading(false);
    if (error) {
      setError('فشل رفع الصورة');
      return null;
    }
    return supabase.storage.from('product-cover').getPublicUrl(fileName).data.publicUrl;
  }

  async function removeOldImage(url: string | null) {
    if (!url) return;
    const filePath = url.split('/product-cover/')[1];
    if (filePath) {
      await supabase.storage.from('product-cover').remove([filePath]);
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!name.trim()) return setError('اسم الخدمة مطلوب!');
    if (!categoryId) return setError('اختر التصنيف!');

    let finalImageUrl = oldImageUrl;
    if (imageFile) {
      const url = await uploadImageToStorage();
      if (!url) return;
      finalImageUrl = url;
      await removeOldImage(oldImageUrl);
    }

    const contact_info = {
      phone: phone.trim() || undefined,
      whatsapp: whatsapp.trim() || undefined,
    };

    const { error } = await supabase.from('products').update({
      name: name.trim(),
      description: description.trim() || null,
      image_url: finalImageUrl || null,
      price: null,
      on_sale: false,
      sale_price: null,
      category_id: Number(categoryId),
      contact_info,
    }).eq('id', id);

    if (error) return setError('حدث خطأ أثناء التعديل!');
    setSuccess('تم تحديث الخدمة بنجاح');
    setTimeout(() => router.push('/admin/products'), 1000);
  }

  if (loading || fetching) return <div className="text-center mt-20">جار التحميل...</div>;
  if (!user) return null;

  return (
    <section className="max-w-lg mx-auto py-10">
      <h2 className="text-xl font-bold text-primary mb-6 text-center">تعديل خدمة</h2>
      <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow p-6 flex flex-col gap-4">
        <input
          className="border rounded p-2"
          type="text"
          placeholder="اسم الخدمة *"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <textarea
          className="border rounded p-2 resize-y min-h-[48px]"
          placeholder="وصف مختصر"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <div>
          <label className="block mb-2 font-bold">صورة الغلاف</label>
          {oldImageUrl && !imagePreview && (
            <Image
              src={oldImageUrl}
              alt="الصورة الحالية"
              width={400}
              height={176}
              className="mb-2 rounded-xl max-h-44 object-contain border"
            />
          )}
          {imagePreview && (
            <Image
              src={imagePreview}
              alt="معاينة جديدة"
              width={400}
              height={176}
              className="mb-2 rounded-xl max-h-44 object-contain border"
            />
          )}
          <input
            type="file"
            accept="image/*"
            className="border rounded p-2 w-full"
            onChange={handleImageChange}
          />
          <div className="text-xs text-gray-500 mt-1">يمكنك رفع صورة جديدة لاستبدال الحالية</div>
        </div>

        <select
          className="border rounded p-2"
          value={categoryId}
          onChange={(e) => setCategoryId(Number(e.target.value))}
          required
        >
          <option value="">اختر التصنيف *</option>
          {categories.map((cat) => (
            <option key={cat.id} value={cat.id}>{cat.name}</option>
          ))}
        </select>

        <div className="flex flex-col sm:flex-row gap-2">
          <input
            className="border rounded p-2 w-full"
            type="text"
            placeholder="هاتف للتواصل (اختياري)"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <input
            className="border rounded p-2 w-full"
            type="text"
            placeholder="رقم واتساب (اختياري)"
            value={whatsapp}
            onChange={(e) => setWhatsapp(e.target.value)}
          />
        </div>

        {uploading && <div className="text-blue-600 text-sm text-center">...جار رفع الصورة</div>}
        {error && <div className="text-red-500 text-sm text-center">{error}</div>}
        {success && <div className="text-green-600 text-sm text-center">{success}</div>}

        <div className="flex gap-2 justify-end">
          <button
            type="button"
            onClick={() => router.push('/admin/products')}
            className="bg-gray-200 text-gray-700 px-4 py-1 rounded-lg"
          >
            إلغاء
          </button>
          <button
            type="submit"
            className="bg-primary text-white px-4 py-1 rounded-lg font-bold"
            disabled={uploading}
          >
            حفظ التعديلات
          </button>
        </div>
      </form>
    </section>
  );
}
