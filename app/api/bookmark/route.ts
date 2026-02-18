import db from "@/src/config/drizzle/db";
import { createClient } from "@/src/config/supabase/server";
import bookmarkServices from "@/src/feature/bookmarks/lib/bookmarks.services";
import { eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

export const bookmarkValues = [
    { title: "Google", url: "https://www.google.com" },
    { title: "GitHub", url: "https://www.github.com" },
    { title: "Stack Overflow", url: "https://stackoverflow.com" },
    { title: "YouTube", url: "https://www.youtube.com" },
    { title: "MDN Web Docs", url: "https://developer.mozilla.org" },
    { title: "Next.js", url: "https://nextjs.org" },
    { title: "Supabase", url: "https://supabase.com" },
    { title: "Drizzle ORM", url: "https://orm.drizzle.team" },
    { title: "Tailwind CSS", url: "https://tailwindcss.com" },
    { title: "OpenAI", url: "https://www.openai.com" },
];

export async function GET() {
    const supabase = await createClient();
    const { data } = await supabase.auth.getUser();

    if (!data.user) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const userId = data.user.id;

    const result = await bookmarkServices.getBookmarks(userId);

    return NextResponse.json(result);
}

export async function POST(req: Request) {
    const supabase = await createClient();
    const { data } = await supabase.auth.getUser();

    if (!data.user) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const userId = data.user.id;

    const body = await req.json();
    const { title, url } = body;

    const result = await bookmarkServices.insertBookmark(userId, title, url);

    return NextResponse.json(result);
}
