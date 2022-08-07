import React from "react";
import "./Navbar.css";

import Logo from "./../assets/websitelogo.png";
const Navbar = () => {
  return (
    <nav className="navbar navbar-default navbar-fixed-top">
      <div className="logo">
        <img src={Logo} alt="logo" width="30px" height="30px" />
      </div>
      <div className="subitems">
        <ul style={{}}>
          <li>HOME</li>
          <li>THE JOURNEY</li>
          <li>TEAM</li>
          <li>STORE</li>
          <li>CONTACT</li>
        </ul>
      </div>
      <div className="login">
        <button className="btn btn-primary">Login</button>
      </div>
    </nav>
  );
};

export default Navbar;
