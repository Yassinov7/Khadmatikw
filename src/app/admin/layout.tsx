// app/admin/layout.tsx
import { AdminAuthProvider } from "./AdminAuthContext";
import { ReactNode } from "react";
import AdminNavbar from "./AdminNavbar";

type Props = { children: ReactNode };

export default function AdminLayout({ children }: Props) {
  return (
    <AdminAuthProvider>
      <div className="min-h-screen bg-gray-50">
        <AdminNavbar />
        <main className="container mx-auto px-4 py-6">
          {children}
        </main>
      </div>
    </AdminAuthProvider>
  );
}