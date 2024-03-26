var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { formFiled, storageSelector, userDate, } from "../../store/selectors/formSelectors";
import { deleteForm, examinationStorage } from "@store/actions";
import { deleteCookie, getCookie } from "../../ secondary-funcion/cookie";
import "./header.scss";
var logo = require("@images/logo.svg");
function Header() {
    var dateUser = useSelector(userDate);
    var filedForm = useSelector(formFiled);
    var storageDate = useSelector(storageSelector);
    var dispatch = useDispatch();
    var dataFromStorage = {};
    switch (storageDate.save) {
        case "Localstorage":
            dataFromStorage = {
                firstName: localStorage.getItem("firstName"),
                lastName: localStorage.getItem("lastName"),
            };
            break;
        case "Cookie":
            dataFromStorage = {
                firstName: getCookie("firstName"),
                lastName: getCookie("lastName"),
            };
            break;
        case "Redux":
            dataFromStorage = __assign({}, dateUser);
            break;
    }
    if (localStorage.getItem("firstName")) {
        dataFromStorage = {
            firstName: localStorage.getItem("firstName"),
            lastName: localStorage.getItem("lastName"),
        };
        if (!filedForm)
            dispatch(examinationStorage());
        setTimeout(function () {
            localStorage.removeItem("firstName");
            localStorage.removeItem("lastName");
            dispatch(deleteForm());
        }, 60000);
    }
    else if (getCookie("firstName")) {
        dataFromStorage = {
            firstName: getCookie("firstName"),
            lastName: getCookie("lastName"),
        };
        if (!filedForm)
            dispatch(examinationStorage());
        setTimeout(function () {
            deleteCookie("firstName");
            deleteCookie("lastName");
            dispatch(deleteForm());
        }, 60000);
    }
    return (React.createElement("div", { className: "header" },
        React.createElement("img", { className: "header-img", src: logo, alt: "logo" }),
        React.createElement("div", { className: "wrapper-user" },
            React.createElement("div", { className: filedForm ? "d-none" : "" },
                React.createElement(Link, { className: "login-btn", to: "/Form" }, "\u0412\u043E\u0439\u0442\u0438")),
            React.createElement("div", { className: !filedForm ? "d-none" : "" + "user-name" },
                React.createElement("p", null, dataFromStorage === null || dataFromStorage === void 0 ? void 0 : dataFromStorage.firstName),
                React.createElement("p", null, dataFromStorage === null || dataFromStorage === void 0 ? void 0 : dataFromStorage.lastName)))));
}
export default Header;
