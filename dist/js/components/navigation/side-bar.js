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
var CSSTransitionGroup = require("react-transition-group/CSSTransitionGroup");
/**
 * SideBar navigation that opens over the content. Often used as the primary navigation on small devices.
 * See the [Nav](#nav) section for more details.
 */
var SideBar = (function (_super) {
    __extends(SideBar, _super);
    function SideBar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SideBar.prototype.render = function () {
        var _a = this.props, className = _a.className, children = _a.children, open = _a.open, position = _a.position, onClickOutside = _a.onClickOutside, noShadow = _a.noShadow, _b = _a.component, Component = _b === void 0 ? 'div' : _b, remainingProps = __rest(_a, ["className", "children", "open", "position", "onClickOutside", "noShadow", "component"]);
        return (React.createElement("div", { className: classNames('side-bar-container', className) },
            React.createElement(CSSTransitionGroup, { transitionName: "side-bar-transition", transitionEnterTimeout: 300, transitionLeaveTimeout: 200 }, open && (React.createElement("div", { className: "side-bar-overlay", onClick: onClickOutside }))),
            React.createElement(Component, __assign({}, remainingProps, { className: classNames('side-bar', noShadow && 'no-shadow', position, open && 'open') }), children)));
    };
    return SideBar;
}(react_1.PureComponent));
exports.SideBar = SideBar;
exports.default = SideBar;
//# sourceMappingURL=side-bar.js.map