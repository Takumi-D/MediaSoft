import React from "react";
import { Link } from "react-router-dom";
import "./navbar.scss";
function Navbar() {
    return (React.createElement("div", { className: "navbar" },
        React.createElement(Link, { to: "/MediaSoft" }, "\u0422\u0430\u0431\u043B\u0438\u0446\u0430"),
        React.createElement(Link, { to: "/Form" }, "\u0424\u043E\u0440\u043C\u0430")));
}
export default Navbar;
