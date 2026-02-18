"use client";

import { createClient } from "@/src/config/supabase/client";
import { useEffect, useState } from "react";
import type { User } from "@supabase/supabase-js";
import { useRouter } from "next/navigation";
import ShowBookmarks from "@/src/feature/bookmarks/ui/components/ShowBookmarks";
import Navbar from "@/src/shared/layout/Navbar";
import LoadingPage from "@/src/shared/layout/Loading";

export default function ProtectedUser() {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    const supabase = createClient();
    const router = useRouter();

    useEffect(() => {
        const getUser = async () => {
            const { data, error } = await supabase.auth.getUser();

            if (error) {
                console.error("Auth error:", error);
            }

            setUser(data.user);
            setLoading(false);
        };

        getUser();
    }, []);

    useEffect(() => {
        if (!loading && !user) {
            router.push("/");
        }
    }, [loading, user]);

    if (loading) <LoadingPage />;

    return (
        <main>
            <Navbar />
            <ShowBookmarks />
        </main>
    );
}
