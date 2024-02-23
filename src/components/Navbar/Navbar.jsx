import React from "react";
import "../../utils/scss/navbar.module.scss";
// import Link from "next/link";
import Links from "./links/Links";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="hero-logo">{/* <img src={} /> */}DICE-NEXT</div>
      <div className="nav-options">
        <Links />
      </div>
    </div>
  );
};

export default Navbar;
