import baseUrl from "@/src/config/api/axios";
import axios from "axios";

const bookmarkUrl = baseUrl + "/test";

export type Bookmark = {
    id: string;
    title: string;
    url: string;
};

export const insertBookmark = async ({
    title,
    url,
}: {
    title: string;
    url: string;
}) => {
    const response = await axios.post(bookmarkUrl, { title, url });
    const data = response.data;
    return data;
};

export const getBookmarks = async (): Promise<Bookmark[]> => {
    const response = await axios.get(bookmarkUrl);
    const data = response.data;
    return data;
};

export const deleteBookmarkById = async (id: string) => {
    const response = await axios.delete(bookmarkUrl + `/${id}`);
    const data = response.data;
    return data;
};
