"use client";

import { createClient } from "@/src/config/supabase/client";
import { User } from "@supabase/supabase-js";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const signInWithGoogle = async () => {
    const supabase = createClient();
    console.log("entered");
    console.log(`${location.origin}/api/auth/callback/google`);
    await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
            redirectTo: `${location.origin}/api/auth/callback/google`,
            // queryParams: {
            //     access_type: "offline",
            //     prompt: "consent",
            // },
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
        <main className="h-screen flex justify-center items-center">
            <button
                className="text-black bg-[#F5DEB3] p-2 rounded-2xl cursor-pointer hover:font-bold hover:border border-red duration-150"
                onClick={signInWithGoogle}
            >
                Login with Google
            </button>
        </main>
    );
}
