import React from "react";

function NavBar(props) {
  return (
    <nav className="navbar navbar-expand-lg bg-light navbar-light">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <a href="/" className="nav-link">
          dogMUD
        </a>
      </li>
    </ul>
    </nav>
  );
}

export default NavBar;
