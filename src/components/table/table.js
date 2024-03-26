import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./table.scss";
import Line from "../line/line";
import urlParameters from "../hoc/url-parameters";
import newsSelector, { loadingSelector, errorSelector, } from "@store/selectors/newsSelectors";
import { fetchData } from "@store/reducers/news-reducer";
import { updatePage } from "@store/actions";
function Table(_a) {
    var parameters = _a.parameters;
    var dispatch = useDispatch();
    var news = useSelector(newsSelector);
    var loading = useSelector(loadingSelector);
    var error = useSelector(errorSelector);
    useEffect(function () {
        if (news.length === 0) {
            dispatch(fetchData(parameters));
        }
        else {
            dispatch(updatePage(parameters));
        }
    }, [parameters]);
    if (loading) {
        return React.createElement("div", null, "\u0417\u0430\u0433\u0443\u0437\u043A\u0430...");
    }
    if (error.status) {
        return React.createElement("div", null, error.errorMessage);
    }
    var outputSegment = news.map(function (item) {
        return (React.createElement(Line, { key: item.id, id: item.id, header: item.title, description: item.body }));
    });
    return (React.createElement("table", { className: "table" },
        React.createElement("thead", null,
            React.createElement("tr", null,
                React.createElement("th", { className: "col-1 col-head" }, "ID"),
                React.createElement("th", { className: "col-6 col-head" }, "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A"),
                React.createElement("th", { className: "col-5 col-head" }, "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435"))),
        React.createElement("tbody", null, outputSegment)));
}
export default urlParameters(Table);
