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
var constants_1 = require("../../constants");
var utils_1 = require("../../utils");
/**
 * Table cell component with additional styles & functionality, used within table rows.
 * See the [Table](#table) section for a full example.
 */
var TableCell = (function (_super) {
    __extends(TableCell, _super);
    function TableCell() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TableCell.prototype.render = function () {
        var _a = this.props, className = _a.className, children = _a.children, style = _a.style, width = _a.width, _b = _a.component, Component = _b === void 0 ? 'td' : _b, remainingProps = __rest(_a, ["className", "children", "style", "width", "component"]);
        return (React.createElement(Component, __assign({}, remainingProps, { className: classNames('table-cell', className), style: __assign({ width: width, maxWidth: width, minWidth: width }, style) }), utils_1.shouldNotBeRendered(children) ? constants_1.NBSP : children));
    };
    return TableCell;
}(react_1.PureComponent));
exports.TableCell = TableCell;
exports.default = TableCell;
//# sourceMappingURL=table-cell.js.map