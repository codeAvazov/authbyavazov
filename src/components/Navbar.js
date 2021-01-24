import React from "react";
import { Link } from "react-router-dom";
import { AuthOptions } from "./AuthOptions";

export const Navbar = () => {

  return (
    <nav>
      <div>
        <Link to="/" className="nav_logo">
          Logo
        </Link>
      </div>
      <div className="nav_list">
        <div></div>
        <AuthOptions />
      </div>
    </nav>
  );
};
