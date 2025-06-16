// app/admin/layout.tsx
import { AdminAuthProvider } from "./AdminAuthContext";
import {ReactNode} from "react"; 
import AdminNavbar from "./AdminNavbar";
type Props = { children: ReactNode };

export default function AdminLayout({ children }: Props) {
  return <AdminAuthProvider><AdminNavbar />
      <main>{children}</main></AdminAuthProvider>;
}
