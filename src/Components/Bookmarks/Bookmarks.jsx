import React from "react";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks, readingTime }) => {
  return (
    <div className="md:w-1/3 bg-gray-50 m-4 rounded-xl">
      <div>
        <h3 className="flex justify-center items-center rounded-xl text-2xl my-2 p-4 border-2 border-blue-700 bg-blue-200 text-blue-700">
          Spend Time on Read: {readingTime} min
        </h3>
      </div>
      <h2 className="text-3xl text-center">
        Bookmarked Blogs: {bookmarks.length}
      </h2>
      {bookmarks.map((bookmark, idx) => (
        <Bookmark key={idx} bookmark={bookmark} />
      ))}
    </div>
  );
};

export default Bookmarks;
