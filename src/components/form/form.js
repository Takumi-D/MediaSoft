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
import { Controller, useForm } from "react-hook-form";
import * as S from "./style";
import { useDispatch, useSelector } from "react-redux";
import { formFiled, formSelector } from "@store/selectors/formSelectors";
import { deleteForm, initForm, storage } from "@store/actions";
import getUrlParameters from "../hoc/url-parameters";
import { deleteCookie, setCookie } from "../../ secondary-funcion/cookie";
function Form(_a) {
    var navigate = _a.navigate;
    var _b = useForm({
        mode: "onBlur",
    }), handleSubmit = _b.handleSubmit, reset = _b.reset, control = _b.control, register = _b.register, errors = _b.formState.errors;
    var dispatch = useDispatch();
    var dateControllers = useSelector(formSelector);
    var filedForm = useSelector(formFiled);
    var onSubmit = function (data) {
        if (data.save === "Localstorage") {
            localStorage.setItem("firstName", data.firstName);
            localStorage.setItem("lastName", data.lastName);
        }
        else if (data.save === "Cookie") {
            setCookie("firstName", data.firstName);
            setCookie("lastName", data.lastName);
        }
        else if (data.save === "Redux") {
            dispatch(initForm(data));
        }
        var dateStorage = {
            save: data.save,
            rand: Math.random(),
        };
        dispatch(storage(dateStorage));
        setTimeout(function () {
            localStorage.removeItem("firstName");
            localStorage.removeItem("lastName");
            deleteCookie("firstName");
            deleteCookie("lastName");
            dispatch(deleteForm());
        }, 60000);
        reset();
        navigate("/");
    };
    var arrayControllers = dateControllers === null || dateControllers === void 0 ? void 0 : dateControllers.map(function (item) {
        return (React.createElement("div", { className: "mb-3", key: item.id },
            React.createElement(Controller, { control: control, name: item.nameInput, rules: {
                    required: true,
                }, render: function (_a) {
                    var field = _a.field, errors = _a.formState.errors;
                    return (React.createElement(React.Fragment, null,
                        React.createElement(S.Label, null,
                            item.nameField,
                            React.createElement(S.InputText, __assign({}, field))),
                        React.createElement(S.ErrorMessage, null, errors[item.nameInput] && "Заполните поле")));
                }, defaultValue: "" })));
    });
    return (React.createElement(S.Form, { onSubmit: handleSubmit(onSubmit) },
        React.createElement(S.WrapperFormContent, null,
            React.createElement("div", null,
                arrayControllers,
                React.createElement(S.Button, { type: "submit" }, filedForm ? "Изменить" : "Войти")),
            React.createElement("div", null,
                React.createElement(S.Label, null,
                    "Redux",
                    React.createElement(S.InputRadio, __assign({ type: "radio", value: "Redux" }, register("save", { required: true })))),
                React.createElement(S.Label, null,
                    "Localstorage",
                    React.createElement(S.InputRadio, __assign({ type: "radio", value: "Localstorage" }, register("save", { required: true })))),
                React.createElement(S.Label, null,
                    "Cookie",
                    React.createElement(S.InputRadio, __assign({ type: "radio", value: "Cookie" }, register("save", { required: true })))),
                React.createElement(S.ErrorMessage, null, errors.save && "Выберите куда сохранить данные")))));
}
export default getUrlParameters(Form);
