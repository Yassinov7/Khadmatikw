import { notFound } from "next/navigation";
import { getAllProductIds, getProductById } from "@/lib/api";
import { slugify } from "@/utils/slugify";
import Image from "next/image";
import { Phone, MessageCircle } from "lucide-react";

function extractId(slugWithId: string): number | null {
  const match = slugWithId.match(/-(\d+)$/);
  return match ? Number(match[1]) : null;
}

export async function generateStaticParams() {
  const products = await getAllProductIds();
  return products.map((p) => ({
    slugWithId: `${slugify(p.name)}-${p.id}`,
  }));
}

export async function generateMetadata({ params }: { params: { slugWithId: string } }) {
  const id = extractId(params.slugWithId);
  if (!id) return {};

  const product = await getProductById(id);
  if (!product) return {};

  return {
    title: product.name,
    description: product.description || "",
    openGraph: {
      title: product.name,
      description: product.description || "",
      images: [product.image_url || "/default-product.png"],
    },
  };
}

export default async function Page({ params }: { params: { slugWithId: string } }) {
  const id = extractId(params.slugWithId);
  if (!id) notFound();

  const product = await getProductById(id);
  if (!product) notFound();

  const whatsapp = product.contact_info?.whatsapp
    ? `https://wa.me/${product.contact_info.whatsapp.replace(/[^0-9]/g, "")}?text=مرحبًا، أود الاستفسار عن المنتج: ${encodeURIComponent(product.name)}`
    : null;

  const phone = product.contact_info?.phone
    ? `tel:${product.contact_info.phone.replace(/[^0-9+]/g, "")}`
    : null;

  return (
    <main className="max-w-5xl mx-auto px-4 py-8">
      <div className="bg-white rounded-2xl shadow-md border border-gray-100 flex flex-col md:flex-row overflow-hidden">
        <div className="relative w-full md:w-1/2 h-64 bg-background">
          <Image
            src={product.image_url || "/default-product.png"}
            alt={`صورة المنتج: ${product.name}`}
            fill
            className="object-contain p-4"
            priority
          />
        </div>

        <div className="p-6 flex flex-col gap-4 md:w-1/2">
          <h1 className="text-2xl font-bold text-primary">{product.name}</h1>
          <p className="text-text leading-relaxed text-sm">{product.description}</p>

          <div className="mt-2 text-xl font-bold">
            {product.on_sale && product.sale_price ? (
              <>
                <span className="line-through text-gray-400 mr-2">{product.price} د.ك</span>
                <span className="text-secondary px-2 text-2xl">{product.sale_price} د.ك</span>
              </>
            ) : (
              <span className="text-primary">{product.price} د.ك</span>
            )}
          </div>

          <div className="flex flex-wrap gap-3 pt-2 mt-auto">
            {whatsapp && (
              <a
                href={whatsapp}
                target="_blank"
                rel="noopener"
                className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-full shadow text-sm font-bold"
              >
                <MessageCircle size={16} /> واتساب
              </a>
            )}
            {phone && (
              <a
                href={phone}
                className="flex items-center gap-2 px-4 py-2 bg-primary hover:bg-blue-800 text-white rounded-full shadow text-sm font-bold"
              >
                <Phone size={16} /> اتصال
              </a>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
