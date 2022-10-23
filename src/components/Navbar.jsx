import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">Home</Link>
      </div>
      <ul>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </header>
  );
}

export default Navbar;
