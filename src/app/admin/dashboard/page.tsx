"use client";
import { useAdminAuth } from "../AdminAuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";


export default function AdminDashboardPage() {
  const { user, loading } = useAdminAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.replace("/admin/login");
    }
  }, [user, loading, router]);

  if (loading) return <div className="text-center mt-20">جار التحقق...</div>;
  if (!user) return null;

  return (
    <section className="max-w-2xl mx-auto py-12">
      <h1 className="text-3xl font-bold text-primary mb-6 text-center">
        لوحة تحكم المسؤول
      </h1>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2">
        <a
          href="/admin/categories"
          className="block p-6 rounded-2xl shadow border hover:shadow-lg bg-secondary text-center font-bold text-lg transition"
        >
          إدارة التصنيفات
        </a>
        <a
          href="/admin/products"
          className="block p-6 rounded-2xl shadow border hover:shadow-lg bg-secondary text-center font-bold text-lg transition"
        >
          إدارة المنتجات
        </a>
        <a
          href="/admin/blog"
          className="block p-6 rounded-2xl shadow border hover:shadow-lg bg-secondary text-center font-bold text-lg transition"
        >
          إدارة المدونة
        </a>
      </div>
    </section>
  );
}
