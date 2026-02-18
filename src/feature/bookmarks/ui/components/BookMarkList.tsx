import { useMutation } from "@tanstack/react-query";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { deleteBookmarkById } from "../bookmark.services";

function BookmarkList({
    id,
    title,
    url,
}: {
    id: string;
    title: string;
    url: string;
}) {
    const [invisible, setInvisible] = useState(false);
    const { mutate, isPending } = useMutation({
        mutationFn: deleteBookmarkById,
    });

    return (
        <section>
            <motion.div
                whileHover={{ scale: 1.02 }}
                initial={{ y: 40, opacity: 1 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3, ease: "easeIn" }}
                onMouseLeave={() => setInvisible(false)}
                className="
                                m-1
                                mx-5
                                p-2
                                flex items-center justify-between
                                text-white
                                rounded-2xl
                                cursor-pointer
                                duration-150 ease-in-out
                                hover:bg-[#383838]
                                hover:border hover:border-[#AFAFAF]
                            "
            >
                <div>
                    <h1>{title.charAt(0).toUpperCase() + title.slice(1)}</h1>
                    <a className="hover:underline" href={url}>
                        {url}
                    </a>
                </div>
                <div
                    onClick={() => mutate(id)}
                    className="flex gap-4 cursor-pointer"
                >
                    {invisible && (
                        <motion.p
                            initial={{ x: 40, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: -40, opacity: 0 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                        >
                            Delete Bookmark
                        </motion.p>
                    )}
                    {isPending ? (
                        <p>Deleting Bookmark</p>
                    ) : (
                        <motion.button
                            whileHover={{ scale: 1.5 }}
                            whileTap={{ scale: 0.7 }}
                        >
                            <Image
                                onMouseEnter={() => setInvisible(true)}
                                className="w-5 h-5 cursor-pointer duration-150 ease-in-out"
                                src="./delete.svg"
                                alt="Delete Image"
                                width={30}
                                height={30}
                            />
                        </motion.button>
                    )}
                </div>
            </motion.div>
        </section>
    );
}

export default BookmarkList;
