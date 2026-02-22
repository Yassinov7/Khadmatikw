'use client';

import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

export function RamadanOfferMarquee() {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(true);
  
  // Hide on admin pages
  const isAdminArea = pathname.startsWith('/admin');
  
  useEffect(() => {
    // Check if we're on an admin page
    if (pathname.startsWith('/admin')) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  }, [pathname]);

  if (!isVisible || isAdminArea) {
    return null;
  }

  return (
    <div className="fixed top-[4.5rem] left-0 right-0 z-[90] bg-gradient-to-r from-orange-500 via-red-600 to-orange-500 text-white shadow-lg">
      <div className="relative overflow-hidden py-2.5">
        <div className="animate-marquee whitespace-nowrap flex items-center">
          <span className="mx-4 text-base font-bold">عروضنا المميزة</span>
          <span className="mx-4 text-base font-bold">عروض رمضان المبارك</span>
          <span className="mx-4 text-base font-bold">خصم 30% على جميع الخدمات</span>
          <a href="/iptv/world-cup" className="mx-4 bg-white text-red-600 px-4 py-1 rounded-full font-bold text-sm hover:bg-gray-100 transition-all duration-300">
            عروض كأس العالم
          </a>
          <a href="tel:96550266068" className="mx-4 bg-white text-red-600 px-4 py-1 rounded-full font-bold text-sm hover:bg-gray-100 transition-all duration-300">
            اتصال مباشر
          </a>
          <a href="https://wa.me/96550266068?text=مرحبًا، أود الاستفسار عن عروض رمضان." className="mx-4 bg-white text-green-600 px-4 py-1 rounded-full font-bold text-sm hover:bg-gray-100 transition-all duration-300">
            واتساب
          </a>
          <span className="mx-4 text-base font-bold">|</span>
          <span className="mx-4 text-base font-bold">عروض كأس العالم IPTV</span>
          <span className="mx-4 text-base font-bold">مشاهدة كأس العالم بجودة HD</span>
          <a href="/iptv/world-cup" className="mx-4 bg-white text-red-600 px-4 py-1 rounded-full font-bold text-sm hover:bg-gray-100 transition-all duration-300">
            اشتراك كأس العالم
          </a>
          <span className="mx-4 text-base font-bold">|</span>
          <span className="mx-4 text-base font-bold">عروض رمضان المبارك</span>
          <span className="mx-4 text-base font-bold">خصم 30% على جميع الخدمات</span>
          <a href="tel:96550266068" className="mx-4 bg-white text-red-600 px-4 py-1 rounded-full font-bold text-sm hover:bg-gray-100 transition-all duration-300">
            اتصال مباشر
          </a>
          <a href="https://wa.me/96550266068?text=مرحبًا، أود الاستفسار عن عروض رمضان وكأس العالم." className="mx-4 bg-white text-green-600 px-4 py-1 rounded-full font-bold text-sm hover:bg-gray-100 transition-all duration-300">
            واتساب
          </a>
        </div>
      </div>
      
      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(-10%); }
          100% { transform: translateX(100%); }
        }
        
        .animate-marquee {
          animation: marquee 40s linear infinite;
          display: inline-block;
          min-width: 200%;
        }
        
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}