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
 * Table component with additional styles & functionality.
 */
var Table = (function (_super) {
    __extends(Table, _super);
    function Table() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Table.prototype.render = function () {
        var _a = this.props, className = _a.className, children = _a.children, _b = _a.collapse, collapse = _b === void 0 ? 'sm' : _b, _c = _a.scrollable, scrollable = _c === void 0 ? true : _c, fixRowHeaders = _a.fixRowHeaders, rowHeaderWidth = _a.rowHeaderWidth, striped = _a.striped, bordered = _a.bordered, hover = _a.hover, condensed = _a.condensed, fill = _a.fill, fixed = _a.fixed, _d = _a.component, Component = _d === void 0 ? 'table' : _d, remainingProps = __rest(_a, ["className", "children", "collapse", "scrollable", "fixRowHeaders", "rowHeaderWidth", "striped", "bordered", "hover", "condensed", "fill", "fixed", "component"]);
        var myClassNames = [
            'table',
            collapse + "-collapse",
            fixRowHeaders ? 'fix-row-headers' : null,
            striped ? 'striped' : null,
            bordered ? 'bordered' : null,
            hover ? 'hover' : null,
            condensed ? 'condensed' : null,
            fill ? 'fill' : null,
            fixed ? 'fixed' : null,
            className,
        ];
        return (React.createElement("div", { className: "table-wrapper" },
            React.createElement("div", { style: { paddingLeft: fixRowHeaders ? rowHeaderWidth : undefined } },
                React.createElement("div", { className: scrollable ? 'table-scroller' : undefined },
                    React.createElement(Component, __assign({}, remainingProps, { className: classNames(myClassNames) }), children)))));
    };
    return Table;
}(react_1.PureComponent));
exports.Table = Table;
exports.default = Table;
//# sourceMappingURL=table.js.map