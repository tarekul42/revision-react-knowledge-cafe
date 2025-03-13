import React from "react";
import { FaBookmark } from "react-icons/fa";

const Blog = ({ blog, handleAddToBookmark }) => {
  const {
    title,
    cover,
    reading_time,
    author_img,
    author,
    posted_date,
    hashtags,
  } = blog;

  return (
    <div className="mb-20">
      <img
        className="w-full rounded-xl mb-8"
        src={cover}
        alt={`Cover picture of ${title}`}
      />
      <div className="flex justify-between mb-4">
        <div className="flex">
          <img className="w-14" src={author_img} alt="" />
          <div className="ml-6">
            <h3 className="text-2xl">{author}</h3>
            <p>{posted_date}</p>
          </div>
        </div>
        <div>
          <span>
            {reading_time}min read
            <button onClick={() => handleAddToBookmark(blog)} className="ml-2">
              <FaBookmark />
            </button>
          </span>
        </div>
      </div>
      <h2 className="text-4xl mb-4">{title}</h2>
      <p>
        {hashtags.map((hash, idx) => (
          <span key={idx}>
            <a href="">#{hash}</a>{" "}
          </span>
        ))}
      </p>
    </div>
  );
};

export default Blog;
