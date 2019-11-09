import React from "react";
import {Link} from 'react-router-dom'

function NavBar(props) {
  return (
    <nav className="navbar navbar-expand-lg bg-light navbar-light">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <Link to="/" className="nav-link">
          dogMUD
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/play" className="nav-link">play</Link>
      </li>
      <li className="nav-item">
        <Link to="/char" className="nav-link">character</Link>
      </li>
    </ul>
    </nav>
  );
}

export default NavBar;
