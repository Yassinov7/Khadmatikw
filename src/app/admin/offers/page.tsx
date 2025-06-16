"use client";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useAdminAuth } from "../AdminAuthContext";
import type { Offer, Product } from "@/types";

// Modal التأكيد
function ConfirmModal({ open, onClose, onConfirm, offer }: {
  open: boolean;
  onClose: () => void;
  onConfirm: (id: number) => void;
  offer?: Offer;
}) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 bg-black/30 z-50 flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-xl p-6 min-w-[320px] max-w-xs text-center">
        <h2 className="text-lg font-bold mb-4 text-red-600">تأكيد الحذف</h2>
        <p>هل أنت متأكد من حذف العرض:</p>
        <div className="my-2 font-bold text-primary">{offer?.title}</div>
        <div className="text-xs text-gray-500 mb-4">{offer?.description?.slice(0, 60)}</div>
        <div className="flex gap-2 justify-center mt-2">
          <button onClick={onClose} className="bg-gray-200 text-gray-700 px-4 py-1 rounded-lg">إلغاء</button>
          <button onClick={() => offer?.id && onConfirm(offer.id)} className="bg-red-600 text-white px-4 py-1 rounded-lg">حذف نهائي</button>
        </div>
      </div>
    </div>
  );
}

export default function AdminOffersPage() {
  const { user, loading } = useAdminAuth();
  const router = useRouter();
  const [offers, setOffers] = useState<(Offer & { product?: Product })[]>([]);
  const [fetching, setFetching] = useState(true);
  const [error, setError] = useState("");
  const [deleteModal, setDeleteModal] = useState<{ open: boolean; offer?: Offer }>({ open: false });

  useEffect(() => {
    if (!loading && !user) router.replace("/admin/login");
  }, [user, loading, router]);

  useEffect(() => {
    if (user) fetchOffers();
  }, [user]);

  async function fetchOffers() {
    setFetching(true);
    setError("");
    const { data, error } = await supabase
      .from("offers")
      .select("*, product:products(name, image_url)")
      .order("id", { ascending: false });
    if (error) {
      setError("حدث خطأ أثناء جلب العروض");
    } else {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      setOffers(data as any[]);
    }
    setFetching(false);
  }

  async function handleDelete(id: number) {
    closeDeleteModal();
    const { error } = await supabase.from("offers").delete().eq("id", id);
    if (error) return alert("فشل حذف العرض!");
    setOffers((prev) => prev.filter((o) => o.id !== id));
  }

  function openDeleteModal(offer: Offer) {
    setDeleteModal({ open: true, offer });
  }

  function closeDeleteModal() {
    setDeleteModal({ open: false });
  }

  if (loading) return <div className="text-center mt-20">جار التحقق...</div>;
  if (!user) return null;

  return (
    <section className="max-w-5xl mx-auto py-8">
      <h2 className="text-2xl font-bold text-primary mb-4 text-center">إدارة العروض</h2>
      <div className="flex justify-start mb-4">
        <Link
          href="/admin/offers/add"
          className="px-4 py-2 rounded-lg font-bold bg-primary text-white hover:bg-primary/90 transition"
        >
          + إضافة عرض جديد
        </Link>
      </div>
      {fetching ? (
        <div className="text-center text-gray-400 py-10">...جار التحميل</div>
      ) : offers.length === 0 ? (
        <div className="text-center text-gray-400 py-8">لا توجد عروض حالياً.</div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {offers.map((offer) => (
            <div key={offer.id} className="bg-white shadow rounded-xl border p-4 flex flex-col h-full">
                {offer.product?.image_url && (
                <div className="relative w-full h-32 mb-2 border rounded overflow-hidden bg-gray-50">
  <Image
    src={
      offer.product?.image_url &&
      offer.product.image_url.trim() !== "" &&
      offer.product.image_url.startsWith("http")
        ? offer.product.image_url
        : "/default-product.png"
    }
    alt={offer.product?.name || "عرض"}
    fill
    className="object-contain"
    sizes="(max-width: 768px) 100vw, 33vw"
  />
</div>
                )}
              <h3 className="font-bold text-lg text-primary">{offer.title}</h3>
              <p className="text-sm text-gray-600">{offer.description || "لا يوجد وصف"}</p>
              <div className="text-sm my-2">
                <strong>المنتج:</strong>{" "}
                {offer.product?.name || <span className="text-gray-400">غير مرتبط</span>}
              </div>
              <div className="text-sm mb-1">
                <strong>الخصم:</strong> {offer.discount_percent ?? 0}%
              </div>
              <div className="text-sm mb-2 text-gray-500">
                {offer.start_date} - {offer.end_date}
              </div>
              {offer.contact_info && (
                <div className="text-xs text-gray-500 mb-2">
                  {offer.contact_info.phone && <div>📞 {offer.contact_info.phone}</div>}
                  {offer.contact_info.whatsapp && <div>💬 واتساب: {offer.contact_info.whatsapp}</div>}
                </div>
              )}
              <div className="flex gap-2 mt-auto pt-2">
                <Link
                  href={`/admin/offers/${offer.id}/edit`}
                  className="bg-blue-100 text-blue-700 px-3 py-1 rounded-lg font-bold hover:bg-blue-200"
                >
                  تعديل
                </Link>
                <button
                  onClick={() => openDeleteModal(offer)}
                  className="bg-red-100 text-red-700 px-3 py-1 rounded-lg font-bold hover:bg-red-200"
                >
                  حذف
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      <ConfirmModal open={deleteModal.open} onClose={closeDeleteModal} onConfirm={handleDelete} offer={deleteModal.offer} />
      {error && <div className="text-center text-red-500 mt-4">{error}</div>}
    </section>
  );
}
