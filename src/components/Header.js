import React from "react";
import homeLogo from "../img/homeLogo.png";

const Header = () => {
  return (
    <div className=" bg-gradient-to-b from-black">
      <img className="w-40 px-8 py-4" src={homeLogo} alt="login-image" />
    </div>
  );
};

export default Header;
