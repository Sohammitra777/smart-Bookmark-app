import { registerUser } from "@/src/feature/users/lib/users.services";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const { searchParams, origin } = new URL(req.url);
    const code = searchParams.get("code");

    const registerUserResult = await registerUser(code);

    const { success, message } = registerUserResult;
    if (!success) {
        return NextResponse.json(message);
    }

    return NextResponse.redirect(`${origin}/protected`);
}
