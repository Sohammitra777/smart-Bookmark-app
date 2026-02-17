"use client";

import { createClient } from "@/lib/supabase/client";
import { useEffect, useState } from "react";
import type { User } from "@supabase/supabase-js";
import { redirect } from "next/navigation";

export default function ProtectedUser() {
    const [user, setUser] = useState<User | null>(null);
    const supabase = createClient();

    useEffect(() => {
        const supabase = createClient();

        const getUser = async () => {
            const { data, error } = await supabase.auth.getUser();

            if (error) {
                console.error("Auth error:", error);
                return;
            }

            setUser(data.user);
            console.log(data.user);
        };

        getUser();
    }, []);

    if (!user) {
        return <main>Loading...</main>;
    }

    return (
        <main>
            <p>{user.id}</p>
            <button
                className="text-white border-white p-2"
                onClick={() => {
                    supabase.auth.signOut();
                    redirect("http://localhost:3000/");
                }}
            >
                logout
            </button>
        </main>
    );
}
