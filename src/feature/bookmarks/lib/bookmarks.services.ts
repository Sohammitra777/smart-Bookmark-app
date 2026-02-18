import { bookmarksRepo } from "./bookmarks.repo";

const bookmarkServices = {
    insertBookmark: async (userId: string, title: string, url: string) => {
        await bookmarksRepo.insertBookmark(
            userId,
            title.toLowerCase(),
            url.toLowerCase(),
        );
    },

    getBookmarks: async (userId: string) => {
        const getBookmarksResult =
            await bookmarksRepo.getBookmarksByUserId(userId);

        return getBookmarksResult;
    },

    deleteBookmark: async (id: string) => {
        await bookmarksRepo.deleteBookmark(id);
    },
};

export default bookmarkServices;
