import React from "react";
import profile from "../../assets/images/profile.png";

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 mx-4 border-b-2">
      <h1 class="text-3xl font-bold">Knowledge Cafe</h1>
      <img src={profile} alt="" />
    </header>
  );
};

export default Header;
