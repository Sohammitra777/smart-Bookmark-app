import { useMutation } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { insertBookmark } from "../ui/bookmark.services";

function CreateBookmarkForm({ setHabit }: { setHabit: Function }) {
    const { mutate, isPending } = useMutation({
        mutationFn: insertBookmark,
        onSettled: () => setHabit(false),
    });

    const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const data = {
            title: formData.get("title") as string,
            url: formData.get("url") as string,
        };

        mutate(data);
    };

    return (
        <div
            className="flex inset-0 justify-center items-center absolute"
            onClick={() => setHabit(false)}
        >
            <motion.form
                onClick={(e) => e.stopPropagation()}
                initial={{ y: 60, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeIn" }}
                className="p-6 sm:min-w-100 bg-[#1E1E1E] text-[#F0F0F0] border rounded-2xl  flex flex-col"
                onSubmit={handleSubmit}
            >
                <div className="flex flex-col grow">
                    <label
                        className="mb-2 text-2xl tracking-wider font-mono text-center"
                        htmlFor="title"
                    >
                        Title
                    </label>
                    <input
                        name="title"
                        placeholder="Google"
                        required
                        type="text"
                        id="title"
                        className="p-2 bg-[#2A2A2A] placeholder:text-gray-400 text-white rounded-lg"
                    />
                    <label
                        className="mt-2 mb-2 text-2xl tracking-wider font-mono text-center"
                        htmlFor="url"
                    >
                        url
                    </label>

                    <input
                        name="url"
                        id="url"
                        placeholder="https://www.google.com/"
                        className="p-2 bg-[#2A2A2A]  text-gray-300 rounded-lg cursor-pointer"
                        required
                    />
                </div>

                <div className="mt-5 flex gap-6 justify-center">
                    <motion.button
                        animate={{ backgroundColor: "#D4AF37" }}
                        whileHover={{
                            scale: 1.05,
                            boxShadow: "0 0 8px rgba(212, 175, 55, 0.5)",
                            backgroundColor: "#8C641D",
                            transition: { duration: 0.25, ease: "easeOut" },
                        }}
                        whileTap={{ scale: 0.95 }}
                        className="p-2 bg-[#D4AF37] hover:bg-[#8C641D] font-medium text-[#000000] rounded-md cursor-pointer"
                        type="submit"
                    >
                        {isPending?"Bookmark'in":"Bookmark"}
                    </motion.button>

                    <motion.button
                        animate={{ backgroundColor: "#D4AF37" }}
                        whileHover={{
                            scale: 1.05,
                            boxShadow: "0 0 8px rgba(212, 175, 55, 0.5)",
                            backgroundColor: "#8C641D",
                            transition: { duration: 0.25, ease: "easeOut" },
                        }}
                        whileTap={{ scale: 0.95 }}
                        className="p-2 bg-[#D4AF37] hover:bg-[#8C641D] font-medium text-[#000000] rounded-md cursor-pointer"
                        type="reset"
                        onClick={() => setHabit(false)}
                    >
                        Cancel
                    </motion.button>
                </div>
            </motion.form>
        </div>
    );
}

export default CreateBookmarkForm;
