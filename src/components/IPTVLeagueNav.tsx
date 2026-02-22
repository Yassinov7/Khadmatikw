"use client";

import Link from "next/link";
import { Tv, Trophy } from "lucide-react";

// IPTV subscription links
export const iptvNavLinks = [
  { label: "اشتراك برلين", href: "/iptv/berlin", icon: Tv },
  { label: "اشتراك سبايدر", href: "/iptv/spider", icon: Tv },
  { label: "رسيفر الجني", href: "/iptv/genie", icon: Tv },
  { label: "فلاش 4K", href: "/iptv/flash-4k", icon: Tv },
];

// Football & leagues links
export const footballNavLinks = [
  { label: "كأس العالم", href: "/football/world-cup", icon: Trophy },
  { label: "دوري أبطال أوروبا", href: "/football/champions-league", icon: Trophy },
  { label: "أبطال آسيا", href: "/football/afc-champions-league", icon: Trophy },
  { label: "الدوري الإنجليزي", href: "/football/premier-league", icon: Trophy },
  { label: "الدوري الإسباني", href: "/football/la-liga", icon: Trophy },
  { label: "الدوري الإيطالي", href: "/football/serie-a", icon: Trophy },
  { label: "الدوري الألماني", href: "/football/bundesliga", icon: Trophy },
  { label: "الدوري الكويتي", href: "/football/kuwait-league", icon: Trophy },
  { label: "الدوري السعودي", href: "/football/saudi-league", icon: Trophy },
  { label: "الدوري الإماراتي", href: "/football/uae-league", icon: Trophy },
  { label: "الدوري القطري", href: "/football/qatar-league", icon: Trophy },
];

interface IPTVLeagueNavProps {
  type?: "iptv" | "football" | "both";
  currentPage?: string;
}

export function IPTVLeagueNav({ type = "both", currentPage }: IPTVLeagueNavProps) {
  return (
    <section className="py-12 px-6 max-w-6xl mx-auto">
      <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">اكتشف المزيد</h2>
        <div className="space-y-6">
          {type !== "football" && (
            <div>
              <h3 className="text-lg font-bold text-primary mb-4 flex items-center gap-2">
                <Tv size={24} />
                اشتراكات IPTV
              </h3>
              <div className="flex flex-wrap gap-3 justify-center">
                {iptvNavLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-6 py-3 rounded-full font-bold shadow-md transition-all hover:scale-105 ${
                      currentPage === link.href
                        ? "bg-primary text-white"
                        : "bg-white text-primary hover:bg-primary/10 border border-gray-200"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          )}
          {type !== "iptv" && (
            <div>
              <h3 className="text-lg font-bold text-primary mb-4 flex items-center gap-2">
                <Trophy size={24} />
                كرة القدم والدوريات
              </h3>
              <div className="flex flex-wrap gap-3 justify-center">
                {footballNavLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-6 py-3 rounded-full font-bold shadow-md transition-all hover:scale-105 ${
                      currentPage === link.href
                        ? "bg-primary text-white"
                        : "bg-white text-primary hover:bg-primary/10 border border-gray-200"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
