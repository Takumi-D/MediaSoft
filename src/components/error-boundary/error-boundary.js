var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import React, { Component } from "react";
var ErrorBoundary = /** @class */ (function (_super) {
    __extends(ErrorBoundary, _super);
    function ErrorBoundary(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            error: false,
            errorMessage: "",
        };
        return _this;
    }
    ErrorBoundary.prototype.componentDidCatch = function (error) {
        this.setState({
            error: true,
            errorMessage: "".concat(error),
        });
    };
    ErrorBoundary.prototype.render = function () {
        var _a = this.state, error = _a.error, errorMessage = _a.errorMessage;
        var children = this.props.children;
        if (error) {
            return React.createElement("div", null,
                "\u041E\u0448\u0438\u0431\u043A\u0430: ",
                errorMessage);
        }
        return children;
    };
    return ErrorBoundary;
}(Component));
export default ErrorBoundary;
