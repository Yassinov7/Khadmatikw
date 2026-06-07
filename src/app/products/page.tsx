import { supabase } from "@/lib/supabase";
import { ProductsClient } from "@/components/ProductClient";
import Link from "next/link";
import { Tag } from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { absoluteUrl, breadcrumbJsonLd, buildPageMetadata, collectionPageJsonLd, webPageJsonLd } from "@/lib/seo";
import { slugify } from "@/utils/slugify";

export const revalidate = 3600;

const PAGE_TITLE = "جميع الخدمات | ستلايت الرجاء | 50266068";
const PAGE_DESCRIPTION =
  "استعرض خدمات الشاشات والستلايت والكاميرات في الكويت مع تفاصيل وصور واضحة. خدماتنا مخصصة للصيانة والتركيب فقط.";

export const metadata = buildPageMetadata({
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  path: "/products",
  keywords: [
    "خدمات الشاشات الكويت",
    "تركيب ستلايت",
    "كاميرات مراقبة",
    "ستلايت الرجاء",
    "50266068",
  ],
});

export default async function ProductsPage() {
  const { data: categories } = await supabase
    .from("categories")
    .select("*")
    .order("id", { ascending: true });

  const { data: products } = await supabase
    .from("products")
    .select("*, category:categories(name)")
    .order("created_at", { ascending: false });

  const listItems =
    products?.map((product) => ({
      name: product.name,
      url: absoluteUrl(`/products/${slugify(product.name)}-${product.id}`),
    })) ?? [];

  return (
    <>
      <JsonLd
        data={[
          webPageJsonLd({
            name: PAGE_TITLE,
            description: PAGE_DESCRIPTION,
            url: absoluteUrl("/products"),
          }),
          breadcrumbJsonLd([
            { name: "الرئيسية", path: "/" },
            { name: "جميع الخدمات", path: "/products" },
          ]),
          collectionPageJsonLd({
            name: PAGE_TITLE,
            description: PAGE_DESCRIPTION,
            path: "/products",
            items: listItems,
          }),
        ]}
      />
      <div className="flex justify-center my-6">
        <Link
          href="/offers"
          className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition shadow-md"
        >
          <Tag size={16} />
          <span>عرض العروض الخاصة</span>
        </Link>
      </div>
      <ProductsClient categories={categories ?? []} products={products ?? []} />
    </>
  );
}
