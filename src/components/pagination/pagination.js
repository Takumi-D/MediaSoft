import React from "react";
import { useSelector } from "react-redux";
import "./pagination.scss";
import urlParameters from "../hoc/url-parameters";
import { loadingSelector, numberOfPagesSelector, } from "@store/selectors/newsSelectors";
function Pagination(_a) {
    var navigate = _a.navigate, parameters = _a.parameters;
    var amountPage = [];
    var numberOfPages = useSelector(numberOfPagesSelector);
    var loading = useSelector(loadingSelector);
    var _loop_1 = function (i) {
        amountPage.push(React.createElement("li", { "aria-hidden": "true", key: i, onClick: function () { return navigate("/".concat(i)); }, className: "".concat(numberOfPages === i ? "last-page" : "page").concat(+parameters.id === i ? " active" : "") }, i));
    };
    for (var i = 1; i <= numberOfPages; i += 1) {
        _loop_1(i);
    }
    if (loading) {
        return React.createElement(React.Fragment, null);
    }
    return (React.createElement("nav", { "aria-label": "Page navigation example" },
        React.createElement("ul", { className: "pagination" },
            React.createElement("li", { "aria-hidden": "true", onClick: function () {
                    if (Object.keys(parameters).length === 0) {
                        // empty
                    }
                    else if (+parameters.id <= 1) {
                        // empty
                    }
                    else
                        navigate("/".concat(+parameters.id - 1));
                }, className: "back" }, "\u041D\u0430\u0437\u0430\u0434"),
            React.createElement("div", { className: "wrapper-page" }, amountPage),
            React.createElement("li", { "aria-hidden": "true", onClick: function () {
                    if (Object.keys(parameters).length === 0) {
                        navigate("2");
                    }
                    else if (+parameters.id >= numberOfPages) {
                        // empty
                    }
                    else
                        navigate("/".concat(+parameters.id + 1));
                }, className: "next" }, "\u0414\u0430\u043B\u0435\u0435"))));
}
export default urlParameters(Pagination);
