// app/admin/layout.tsx
import { AdminAuthProvider } from "./AdminAuthContext";
import {ReactNode} from "react"; 
type Props = { children: ReactNode };

export default function AdminLayout({ children }: Props) {
  return <AdminAuthProvider>{children}</AdminAuthProvider>;
}
