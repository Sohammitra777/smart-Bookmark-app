"use client";

import { createClient } from "@/lib/supabase/client";
import { User } from "@supabase/supabase-js";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const signInWithGoogle = async () => {
    const supabase = createClient();
    console.log("entered");
    console.log(`${location.origin}/api/auth/callback/google`);
    const data = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
            redirectTo: `${location.origin}/api/auth/callback/google`,
            queryParams :{
                access_type: "offline", 
                prompt: "consent"
            }
        },
    });
};

export default function Home() {
    const router = useRouter();
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const supabase = createClient();

        const getUser = async () => {
            const { data, error } = await supabase.auth.getUser();

            if (error) {
                return;
            }

            setUser(data.user);
        };

        getUser();
    }, []);

    useEffect(() => {
        if (user) {
            router.push("/protected");
        }
    }, [user]);

    return (
        <main className="flex h-screen items-center justify-center">
            <button
                onClick={signInWithGoogle}
                className="rounded-lg bg-black px-6 py-3 text-white"
            >
                Login with Google
            </button>
        </main>
    );
}
