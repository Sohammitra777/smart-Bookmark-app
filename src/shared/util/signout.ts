import { createClient } from "@/src/config/supabase/client";
import { useRouter } from "next/router";

export const signOutFromGoogle = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
};
