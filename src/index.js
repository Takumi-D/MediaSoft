import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./components/app";
import store from "@store/store";
import { Provider } from "react-redux";
import ErrorBoundary from "./components/error-boundary";
var root = createRoot(document.getElementById("root"));
root.render(React.createElement(Provider, { store: store },
    React.createElement(ErrorBoundary, null,
        React.createElement(BrowserRouter, null,
            React.createElement(App, null)))));
