import React from "react";
import { Link } from "react-router-dom";

import "./navbar.scss";

function Navbar() {
  return (
    <div className="navbar">
      <Link to="/MediaSoft">Таблица</Link>
      <Link to="/Form">Форма</Link>
    </div>
  );
}

export default Navbar;
