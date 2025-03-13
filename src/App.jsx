import { useState } from "react";
import Blogs from "./Components/Blogs/Blogs";
import Bookmarks from "./Components/Bookmarks/Bookmarks";
import Header from "./Components/Header/Header";

function App() {
  const [bookmarks, setBookmarks] = useState([]);

  const handleAddToBookmark = blog => {
    const newBookmarks = [ ...bookmarks, blog];
    setBookmarks(newBookmarks)
    console.log(blog)
  }

  return (
    <>
      <Header />
      <div className="md:flex max-w-7xl mx-auto">
        <Blogs handleAddToBookmark={handleAddToBookmark} />
        <Bookmarks bookmarks={bookmarks} />
      </div>
    </>
  );
}

export default App;
