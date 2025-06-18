"use client";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter, useParams } from "next/navigation";
import { useAdminAuth } from "../../../AdminAuthContext";
import type { Product } from "@/types";


export default function EditOfferPage() {
  const { user, loading } = useAdminAuth();
  const router = useRouter();
  const params = useParams();
  const id = Number(params?.id);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [productId, setProductId] = useState<number | "">("");
  const [discount, setDiscount] = useState<number | "">("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [phone, setPhone] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const { data: offer } = await supabase
        .from("offers")
        .select("*")
        .eq("id", id)
        .single();

      if (offer) {
        setTitle(offer.title || "");
        setDescription(offer.description || "");
        setProductId(offer.product_id || "");
        setDiscount(offer.discount_percent ?? "");
        setStartDate(offer.start_date || "");
        setEndDate(offer.end_date || "");
        setPhone(offer.contact_info?.phone || "");
        setWhatsapp(offer.contact_info?.whatsapp || "");
      }

      const { data: prods } = await supabase.from("products").select("id, name");
      if (prods) setProducts(prods);

      setFetching(false);
    }

    if (user && id) fetchData();
  }, [user, id]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!title.trim()) return setError("العنوان مطلوب!");
    if (discount && (Number(discount) < 0 || Number(discount) > 100))
      return setError("نسبة الخصم يجب أن تكون بين 0 و 100");

    const contact_info = {
      phone: phone.trim() || undefined,
      whatsapp: whatsapp.trim() || undefined,
    };

    const { error } = await supabase.from("offers").update({
      title: title.trim(),
      description: description.trim() || null,
      product_id: productId || null,
      discount_percent: discount === "" ? null : Number(discount),
      start_date: startDate || null,
      end_date: endDate || null,
      contact_info,
    }).eq("id", id);

    if (error) return setError("فشل في تعديل العرض!");
    setSuccess("تم تعديل العرض بنجاح");
    setTimeout(() => router.push("/admin/offers"), 1000);
  }

  if (loading || fetching) return <div className="text-center mt-20">جار التحميل...</div>;
  if (!user) return null;

  return (
    <section className="max-w-lg mx-auto py-10 px-4 bg-background">
      <h2 className="text-xl font-bold text-primary mb-6 text-center">تعديل العرض</h2>
      <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow p-6 flex flex-col gap-4">

  <div>
    <label htmlFor="title" className="block mb-1 font-bold text-sm text-text">عنوان العرض *</label>
    <input
      id="title"
      className="border rounded p-2 w-full"
      type="text"
      value={title}
      onChange={(e) => setTitle(e.target.value)}
      required
    />
  </div>

  <div>
    <label htmlFor="description" className="block mb-1 font-bold text-sm text-text">وصف العرض</label>
    <textarea
      id="description"
      className="border rounded p-2 resize-y min-h-[48px] w-full"
      value={description}
      onChange={(e) => setDescription(e.target.value)}
    />
  </div>

  <div>
    <label htmlFor="product_id" className="block mb-1 font-bold text-sm text-text">المنتج المرتبط (اختياري)</label>
    <select
      id="product_id"
      className="border rounded p-2 w-full"
      value={productId}
      onChange={(e) => setProductId(Number(e.target.value))}
    >
      <option value="">بدون منتج مرتبط</option>
      {products.map((prod) => (
        <option key={prod.id} value={prod.id}>{prod.name}</option>
      ))}
    </select>
  </div>

  <div>
    <label htmlFor="discount" className="block mb-1 font-bold text-sm text-text">نسبة الخصم (%)</label>
    <input
      id="discount"
      className="border rounded p-2 w-full"
      type="number"
      min={0}
      max={100}
      value={discount}
      onChange={(e) => setDiscount(e.target.value ? +e.target.value : "")}
    />
  </div>

  <div>
    <span className="block mb-1 font-bold text-sm text-text">فترة العرض</span>
    <div className="flex gap-2">
      <div className="w-full">
        <label htmlFor="start_date" className="block text-xs text-gray-500 mb-1">من</label>
        <input
          id="start_date"
          className="border rounded p-2 w-full"
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
      </div>
      <div className="w-full">
        <label htmlFor="end_date" className="block text-xs text-gray-500 mb-1">إلى</label>
        <input
          id="end_date"
          className="border rounded p-2 w-full"
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
      </div>
    </div>
  </div>

  <div>
    <label className="block mb-1 font-bold text-sm text-text">بيانات التواصل (اختياري)</label>
    <div className="flex flex-col sm:flex-row gap-2">
      <input
        className="border rounded p-2 w-full"
        type="text"
        placeholder="هاتف"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <input
        className="border rounded p-2 w-full"
        type="text"
        placeholder="واتساب"
        value={whatsapp}
        onChange={(e) => setWhatsapp(e.target.value)}
      />
    </div>
  </div>

  {error && <div className="text-red-500 text-sm text-center">{error}</div>}
  {success && <div className="text-green-600 text-sm text-center">{success}</div>}

  <div className="flex gap-2 justify-center">
    <button
      type="button"
      onClick={() => router.push("/admin/offers")}
      className="bg-gray-200 text-gray-700 px-4 py-1 rounded-lg"
    >
      إلغاء
    </button>
    <button
      type="submit"
      className="bg-primary text-white px-4 py-1 rounded-lg font-bold"
    >
      حفظ التعديلات
    </button>
  </div>
</form>
    </section>
  );
}
