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
 * Used to group NavItems inside a NavBar or SideBar.
 * You should use the atomic display classes e.g. `"display-none md-display-block"`
 * to hide the nav and replace it with a menu button (for controlling the SideBar) on smaller screens.
 * The same Nav can be used in both a NavBar and SideBar, and will automatically style itself sensibly.
 */
var Nav = (function (_super) {
    __extends(Nav, _super);
    function Nav() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Nav.prototype.render = function () {
        var _a = this.props, className = _a.className, children = _a.children, _b = _a.component, Component = _b === void 0 ? 'ul' : _b, remainingProps = __rest(_a, ["className", "children", "component"]);
        return (React.createElement(Component, __assign({}, remainingProps, { className: classNames('nav', className) }), children));
    };
    return Nav;
}(react_1.PureComponent));
exports.Nav = Nav;
exports.default = Nav;
//# sourceMappingURL=nav.js.map