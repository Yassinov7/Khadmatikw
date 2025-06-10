import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-4 pt-10"
      style={{ fontFamily: "Noto Kufi Arabic, sans-serif" }}
    >
      <main className="flex flex-col items-center w-full max-w-2xl gap-8 bg-white/70 rounded-2xl shadow-md py-10 px-4">
        <Image
          src="/logo.png"
          alt="شعار خدماتي KW"
          width={140}
          height={140}
          priority
        />

        <h1
          className="text-4xl md:text-5xl font-bold mb-2 text-center"
          style={{ color: "var(--primary)" }}
        >
          خدماتي KW
        </h1>
        <p
          className="text-xl md:text-2xl text-center mb-4"
          style={{ color: "var(--secondary)" }}
        >
          جميع خدمات الشاشات، الستلايت والكاميرات في الكويت
          <br />
          بيع - تركيب - صيانة - دعم فني
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full justify-center">
          <Link href="/products" className="w-full sm:w-auto">
            <button
              className="w-full px-8 py-3 rounded-lg text-white text-lg font-bold shadow transition mb-2 sm:mb-0"
              style={{ background: "var(--primary)" }}
            >
              استعرض العروض
            </button>
          </Link>
          <Link href="/contact" className="w-full sm:w-auto">
            <button
              className="w-full px-8 py-3 rounded-lg text-white text-lg font-bold shadow transition"
              style={{ background: "var(--secondary)" }}
            >
              تواصل معنا
            </button>
          </Link>
        </div>
      </main>

      <footer className="w-full text-center mt-16 text-xs py-6 text-[var(--text)]">
        جميع الحقوق محفوظة &copy; {new Date().getFullYear()} خدماتي KW
      </footer>
    </div>
  );
}
