import "../styles/Header.css";

import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="tuphodega">
      <Link to="/">
        <ul>
          <li>T</li>
          <li>u &nbsp;</li>
          <li>P</li>
          <li>h</li>
          <li>o</li>
          <li>d</li>
          <li>e</li>
          <li>g</li>
          <li>a</li>
        </ul>
      </Link>
    </div>
  );
}

export default Header;
