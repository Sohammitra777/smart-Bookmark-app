import { createClient } from "@/src/config/supabase/server";
import userRepo from "./users.repo";
import { UserServiceType, UsersType } from "./user.types";

export const registerUser = async (
    code: string | null,
): Promise<UserServiceType<UsersType>> => {
    const supabase = await createClient();
    if (!code)
        return {
            success: false,
            message: "Code missing",
        };

    const { data, error } = await supabase.auth.exchangeCodeForSession(code);

    if (error) {
        return {
            success: false,
            message: "Auth error",
        };
    }

    const { id, email } = data.user;
    const getUserByIdResult = await userRepo.getUserById(id);

    if (getUserByIdResult.length !== 0) {
        return {
            success: true,
            message: "User already exist",
        };
    }

    await userRepo.insertUser(id, email);

    return {
        success: true,
        message: "user registered successfully",
    };
};
