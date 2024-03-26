import React from "react";
import "./line.scss";
function Line(_a) {
    var id = _a.id, header = _a.header, description = _a.description;
    return (React.createElement("tr", null,
        React.createElement("th", { className: "line", scope: "row" }, id),
        React.createElement("td", { className: "line" }, header),
        React.createElement("td", { className: "line" }, description)));
}
export default Line;
