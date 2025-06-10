import { supabase } from "@/lib/supabase";

export default async function ExplorePage() {
  // جلب التصنيفات
  const { data: categories, error: catError } = await supabase
    .from("categories")
    .select("*")
    .order("id", { ascending: true });

  // جلب المنتجات مع التصنيف
  const { data: products, error: prodError } = await supabase
    .from("products")
    .select("*, category:categories(name)")
    .order("id", { ascending: true });

  // جلب العروض
  const { data: offers, error: offerError } = await supabase
    .from("offers")
    .select("*, product:products(name)")
    .order("id", { ascending: true });

  // معالجة الأخطاء إن وجدت
  if (catError || prodError || offerError) {
    return (
      <div className="p-6 text-red-600">
        حدث خطأ أثناء جلب البيانات!
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-4 space-y-12">
      {/* عرض التصنيفات */}
      <section>
        <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--primary)", fontFamily: "Noto Kufi Arabic" }}>
          التصنيفات
        </h2>
        <ul className="grid grid-cols-2 gap-4">
          {categories?.map((cat) => (
            <li key={cat.id} className="p-4 bg-white shadow rounded">
              <div className="font-bold">{cat.name}</div>
              <div className="text-sm text-gray-600">{cat.description}</div>
            </li>
          ))}
        </ul>
      </section>

      {/* عرض المنتجات */}
      <section>
        <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--primary)", fontFamily: "Noto Kufi Arabic" }}>
          المنتجات والخدمات
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {products?.map((p) => (
            <li key={p.id} className="p-4 bg-white rounded-xl shadow flex flex-col gap-2">
              <div className="font-bold text-lg">{p.name}</div>
              {p.category && <div className="text-xs text-gray-400">التصنيف: {p.category.name}</div>}
              <div className="text-sm">{p.description}</div>
              {p.price && (
                <div className="text-primary font-bold">السعر: {p.price} د.ك</div>
              )}
              {p.image_url && (
                <img src={p.image_url} alt={p.name} className="w-full h-32 object-contain rounded" />
              )}
              {p.on_sale && p.sale_price && (
                <div className="text-secondary font-bold">
                  عرض خاص: {p.sale_price} د.ك
                </div>
              )}
            </li>
          ))}
        </ul>
      </section>

      {/* عرض العروض */}
      <section>
        <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--primary)", fontFamily: "Noto Kufi Arabic" }}>
          العروض الخاصة
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {offers?.length ? offers.map((o) => (
            <li key={o.id} className="p-4 bg-white rounded-xl shadow flex flex-col gap-2">
              <div className="font-bold text-lg">{o.title}</div>
              {o.product && <div className="text-xs text-gray-400">المنتج: {o.product.name}</div>}
              <div className="text-sm">{o.description}</div>
              {o.discount_percent && (
                <div className="text-secondary font-bold">
                  خصم: {o.discount_percent}%
                </div>
              )}
              {o.start_date && o.end_date && (
                <div className="text-xs text-gray-500">
                  ({o.start_date} - {o.end_date})
                </div>
              )}
            </li>
          )) : <div className="text-gray-500">لا يوجد عروض حالياً</div>}
        </ul>
      </section>
    </div>
  );
}
