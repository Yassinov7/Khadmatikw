"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

const AdminAuthContext = createContext({ user: null, loading: true });

export function AdminAuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        supabase.auth.getSession().then(({ data }) => {
            setUser(data.session?.user || null);
            setLoading(false);
        });

        const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
            setUser(session?.user || null);
            setLoading(false);
        });

        // Properly handle cleanup based on Supabase version
        return () => {
            if (listener && typeof listener.unsubscribe === 'function') {
                listener.unsubscribe();
            } else if (listener && typeof listener === 'function') {
                listener();
            }
        };
    }, []);

    return (
        <AdminAuthContext.Provider value={{ user, loading }}>
            {children}
        </AdminAuthContext.Provider>
    );
}

export function useAdminAuth() {
    return useContext(AdminAuthContext);
}

export default AdminAuthContext;