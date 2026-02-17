import { createClient } from "@/lib/supabase/server";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const { searchParams, origin } = new URL(req.url);
    const code = searchParams.get("code");

    if (!code) {
        return NextResponse.json("invalid code");
    }

    const supabase = await createClient();

    const { error } = await supabase.auth.exchangeCodeForSession(code);

    if (error) {
        console.error("Exchange error:", error);
        return NextResponse.redirect(`${origin}/login`);
    }

    return NextResponse.redirect(`${origin}/protected`);
}
