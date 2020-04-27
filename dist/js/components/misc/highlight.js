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
 * This highlight component is used to display a single element while shading everything else out.
 */
var Highlight = (function (_super) {
    __extends(Highlight, _super);
    function Highlight() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Highlight.prototype.render = function () {
        var _a = this.props, className = _a.className, children = _a.children, _b = _a.open, open = _b === void 0 ? false : _b, _c = _a.disabled, disabled = _c === void 0 ? false : _c, _d = _a.backgroundColor, backgroundColor = _d === void 0 ? null : _d, _e = _a.component, Component = _e === void 0 ? 'div' : _e, remainingProps = __rest(_a, ["className", "children", "open", "disabled", "backgroundColor", "component"]);
        return (React.createElement(Component, __assign({}, remainingProps, { className: classNames('highlight', className) }),
            React.createElement(CSSTransitionGroup, { transitionName: "highlight-transition", transitionEnterTimeout: 300, transitionLeaveTimeout: 200 }, open && React.createElement("div", { className: "highlight-overlay" })),
            React.createElement("div", { className: classNames('highlight-content', open && 'open'), style: backgroundColor ? { backgroundColor: backgroundColor } : undefined },
                children,
                open && disabled && React.createElement("div", { className: "highlight-overlay-disabled" }))));
    };
    return Highlight;
}(react_1.PureComponent));
exports.Highlight = Highlight;
exports.default = Highlight;
//# sourceMappingURL=highlight.js.map