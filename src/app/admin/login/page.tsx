"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function AdminLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    // تسجيل الدخول عبر Supabase
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) return setError("بيانات الدخول غير صحيحة أو الحساب غير موجود!");
    // نجاح: توجيه للوحة التحكم
    router.push("/admin/dashboard");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <form onSubmit={handleLogin} className="w-full max-w-sm bg-white rounded-xl shadow p-6 flex flex-col gap-4">
        <h2 className="text-xl font-bold text-center text-primary">تسجيل دخول المسؤول</h2>
        <input
          type="email"
          placeholder="البريد الإلكتروني"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="border rounded p-3"
          required
        />
        <input
          type="password"
          placeholder="كلمة المرور"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="border rounded p-3"
          required
        />
        {error && <div className="text-red-500 text-sm text-center">{error}</div>}
        <button type="submit" className="bg-primary text-white w-full py-3 rounded-lg font-bold hover:bg-primary/90 transition">
          دخول
        </button>
      </form>
    </div>
  );
}