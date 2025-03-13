import React from "react";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks }) => {
  return (
    <div className="md:w-1/3 bg-gray-50 m-4 rounded-xl">
      <h2 className="text-3xl text-center">Bookmarked Blogs: {bookmarks.length}</h2>
      {
        bookmarks.map((bookmark, idx) => (<Bookmark key={idx} bookmark={bookmark} />))
      }
    </div>
  );
};

export default Bookmarks;
