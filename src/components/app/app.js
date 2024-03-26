import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./app.scss";
import Tile from "../table";
import Pagination from "../pagination/pagination";
import Form from "../form";
import Header from "../header";
import Navbar from "../navbar";
function useTracksScreenWidth() {
    var _a = useState(window.innerWidth), width = _a[0], setWidth = _a[1];
    useEffect(function () {
        var handleResize = function ($event) {
            setWidth($event.target.innerWidth);
        };
        window.addEventListener("resize", handleResize);
        return function () {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    return width;
}
function App() {
    var width = useTracksScreenWidth();
    console.log(width);
    return (React.createElement("div", { className: "app" },
        React.createElement(Header, null),
        React.createElement("div", { className: "layout" }, "Layout"),
        React.createElement("div", { className: "mobile" }, "\u0411\u043B\u043E\u043A \u0434\u043B\u044F \u043C\u043E\u0431\u0438\u043B\u043A\u0438"),
        React.createElement(Navbar, null),
        React.createElement(Routes, null,
            React.createElement(Route, { path: "/MediaSoft", element: React.createElement(React.Fragment, null,
                    React.createElement(Tile, null),
                    React.createElement(Pagination, null)) }),
            React.createElement(Route, { path: "/MediaSoft/:id", element: React.createElement(React.Fragment, null,
                    React.createElement(Tile, null),
                    React.createElement(Pagination, null)) }),
            React.createElement(Route, { path: "/Form", element: React.createElement(Form, null) }))));
}
export default App;
