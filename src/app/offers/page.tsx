import { OfferClient } from "@/components/OfferClient";
import Link from "next/link";
import { Layers } from "lucide-react";
import { slugify } from "@/utils/slugify";
import { getAllOffers } from "@/lib/api";
import { JsonLd } from "@/components/JsonLd";
import { absoluteUrl, breadcrumbJsonLd, buildPageMetadata, itemListJsonLd } from "@/lib/seo";

export const revalidate = 3600;

const PAGE_TITLE = "العروض الخاصة | ستلايت الرجاء | 50266068";
const PAGE_DESCRIPTION =
  "اكتشف أحدث العروض والتخفيضات الخاصة على خدمات الشاشات والستلايت والكاميرات وعروض كأس العالم IPTV في الكويت.";

export const metadata = buildPageMetadata({
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  path: "/offers",
  keywords: ["عروض خاصة", "كأس العالم IPTV", "ستلايت الرجاء", "خصومات الكويت"],
});

export default async function OffersPage() {
  const offers = await getAllOffers();

  const offersWithSlug = offers.map((offer) => ({
    ...offer,
    slug: `${slugify(offer.title)}-${offer.id}`,
  }));

  const listItems = offersWithSlug.map((offer) => ({
    name: offer.title,
    url: absoluteUrl(`/offers/${offer.slug}`),
  }));

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "الرئيسية", path: "/" },
            { name: "العروض الخاصة", path: "/offers" },
          ]),
          itemListJsonLd({
            name: PAGE_TITLE,
            description: PAGE_DESCRIPTION,
            path: "/offers",
            items: listItems,
          }),
        ]}
      />
      <div className="flex justify-center my-8">
        <Link
          href="/products"
          className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-full hover:from-primary/90 hover:to-secondary/90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
        >
          <Layers size={20} />
          <span className="font-bold">عرض جميع الخدمات</span>
        </Link>
      </div>
      <OfferClient offers={offersWithSlug} />
    </>
  );
}
