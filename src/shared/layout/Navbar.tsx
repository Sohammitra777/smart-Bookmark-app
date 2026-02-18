import CreateBookmarkForm from "@/src/feature/bookmarks/lib/CreateBookmarkForm";
import { useState } from "react";
import { signOutFromGoogle } from "../util/signout";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Navbar = () => {
    const [habit, setHabit] = useState(false);
    const router = useRouter();

    return (
        <nav className="mt-4 m-2 p-2 bg-[#2A2A2A] rounded-lg items-center flex justify-evenly">
            <p className="cursor-pointer">Bookify</p>
            <p className="cursor-pointer" onClick={() => setHabit(true)}>
                <Image
                    src={"./createHabit.svg"}
                    alt="create Bookmark icon"
                    width={35}
                    height={40}
                />
            </p>
            <p
                className="cursor-pointer"
                onClick={async () => {
                    await signOutFromGoogle();
                    router.push("/");
                }}
            >
                Logout
            </p>
            {habit && <CreateBookmarkForm setHabit={setHabit} />}
        </nav>
    );
};

export default Navbar;
