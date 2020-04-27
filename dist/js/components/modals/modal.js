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
 * Component used to render a modal.
 */
var Modal = (function (_super) {
    __extends(Modal, _super);
    function Modal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Modal.prototype.render = function () {
        var _a = this.props, className = _a.className, children = _a.children, onClickOutside = _a.onClickOutside, scrollable = _a.scrollable, small = _a.small, large = _a.large, fill = _a.fill, _b = _a.component, Component = _b === void 0 ? 'div' : _b, remainingProps = __rest(_a, ["className", "children", "onClickOutside", "scrollable", "small", "large", "fill", "component"]);
        var myClassNames = [
            'modal-position',
            scrollable ? 'scrollable' : null,
            small ? 'small' : null,
            large ? 'large' : null,
            fill ? 'fill' : null,
        ];
        return (React.createElement("div", null,
            React.createElement("div", { className: "modal-overlay", onClick: onClickOutside }),
            React.createElement("div", __assign({}, remainingProps, { className: classNames(myClassNames) }),
                React.createElement(Component, { className: classNames('modal', className) }, children))));
    };
    return Modal;
}(react_1.PureComponent));
exports.Modal = Modal;
exports.default = Modal;
//# sourceMappingURL=modal.js.map