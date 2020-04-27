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
 * Used in place of a standard `button` tag, this component adds additional styles and effects.
 */
var Button = (function (_super) {
    __extends(Button, _super);
    function Button() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Button.prototype.render = function () {
        var _a = this.props, children = _a.children, className = _a.className, block = _a.block, large = _a.large, small = _a.small, _b = _a.component, Component = _b === void 0 ? 'button' : _b, remainingProps = __rest(_a, ["children", "className", "block", "large", "small", "component"]);
        var myClassNames = [
            'button',
            block ? 'block' : null,
            small ? 'small' : null,
            large ? 'large' : null,
            className,
        ];
        return (React.createElement(Component, __assign({}, remainingProps, { className: classNames(myClassNames) }), children));
    };
    return Button;
}(react_1.PureComponent));
exports.Button = Button;
exports.default = Button;
//# sourceMappingURL=button.js.map