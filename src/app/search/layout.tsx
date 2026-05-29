import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "بحث | ستلايت الرجاء",
  description: "صفحة بحث داخلية لخدمات وعروض ومقالات ستلايت الرجاء.",
  robots: { index: false, follow: true },
};

export default function SearchLayout({ children }: { children: React.ReactNode }) {
  return children;
}

