import Blogs from "./Components/Blogs/Blogs";
import Bookmarks from "./Components/Bookmarks/Bookmarks";
import Header from "./Components/Header/Header";

function App() {
  return (
    <>
      <Header />
      <div className="md:flex ">
        <Blogs />
        <Bookmarks />
      </div>
    </>
  );
}

export default App;
