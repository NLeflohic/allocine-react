import React from "react";
import Logo from "./Images/logo.svg";
import Search from "./Search";

const Banner = () => {
  return (
    <>
      <div className="container">
        <img className="logo" src={Logo} alt="Logo" />
        <Search></Search>
      </div>
    </>
  );
};


export default Banner;