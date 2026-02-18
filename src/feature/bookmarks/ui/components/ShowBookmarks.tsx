"use client";

import { useQuery } from "@tanstack/react-query";
import { getBookmarks } from "../bookmark.services";
import BookmarkList from "./BookMarkList";
import LoadingPage from "@/src/shared/layout/Loading";
import BookmarkEmpty from "./BookmarkEmpty";

const ShowBookmarks = () => {
    const { data: bookmarks, isLoading } = useQuery({
        queryKey: ["bookmarks"],
        queryFn: getBookmarks,
        refetchInterval: 1000,
    });

    if (isLoading) return <LoadingPage />;
    if (!bookmarks?.length) return <BookmarkEmpty />;

    return (
        <main>
            <div className="">
                {bookmarks.map((bookmark) => (
                    <BookmarkList
                        key={bookmark.id}
                        id={bookmark.id}
                        title={bookmark.title}
                        url={bookmark.url}
                    />
                ))}
            </div>
        </main>
    );
};

export default ShowBookmarks;
