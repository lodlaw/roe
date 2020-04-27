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
Object.defineProperty(exports, "__esModule", { value: true });
var classNames = require("classnames");
var React = require("react");
var react_1 = require("react");
/**
 * NavItems are used inside of a Nav. These already have basic hover styles applied.
 * You should **always** nest an `<a>` inside a NavItem. This is not part of the component so that you can use other
 * components in place of an `<a>`, such as a React Router link (which renders an `<a>` also).
 * These can have an active class applied to them to highlight the currently active page.
 * You may apply `button` and related classes to a NavItem e.g. for a logout button.
 * See the [Nav](#nav) section for a full example.
 */
var NavItem = (function (_super) {
    __extends(NavItem, _super);
    function NavItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NavItem.prototype.render = function () {
        var _a = this.props, className = _a.className, children = _a.children, active = _a.active, _b = _a.component, Component = _b === void 0 ? 'li' : _b;
        return (React.createElement(Component, { className: classNames('nav-item', active && 'active', className) }, children));
    };
    return NavItem;
}(react_1.PureComponent));
exports.NavItem = NavItem;
exports.default = NavItem;
//# sourceMappingURL=nav-item.js.map