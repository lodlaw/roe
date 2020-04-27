"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var classNames = require("classnames");
var React = require("react");
var react_1 = require("react");
/**
 * Used within a container, section, or column, to keep content on separate rows.
 * Row exists to allow columns to sit within a container / other column and be
 * spaced from each other without adding additional padding to the outsides.
 * It does this by using negative margin left and right. Additionally Row has
 * a clearfix applied which allows floated elements to be placed inside it
 * without it collapsing.
 */
var Row = (function (_super) {
    __extends(Row, _super);
    function Row() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Row.prototype.render = function () {
        var _a = this.props, children = _a.children, className = _a.className, _b = _a.component, Component = _b === void 0 ? 'div' : _b, remainingProps = __rest(_a, ["children", "className", "component"]);
        return (React.createElement(Component, __assign({}, remainingProps, { className: classNames(['row', className]) }), children));
    };
    return Row;
}(react_1.PureComponent));
exports.Row = Row;
exports.default = Row;
//# sourceMappingURL=row.js.map