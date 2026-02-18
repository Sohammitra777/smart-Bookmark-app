const BookmarkEmpty = () => {
    return (
        <div className="h-screen flex items-center justify-center">
            <div className="text-center max-w-md px-6">
                <h2 className="text-2xl font-semibold text-white mb-3">
                    No bookmarks yet
                </h2>

                <p className="text-gray-400 mb-6">
                    Your saved links will appear here.  
                    Start by creating your first bookmark.
                </p>

                <div className="text-sm text-gray-500">
                    Click the{" "}
                    <span className="text-white font-medium">Create</span>{" "}
                    button to see the magic
                </div>
            </div>
        </div>
    );
};

export default BookmarkEmpty;
