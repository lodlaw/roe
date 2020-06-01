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
var store_1 = require("../../store");
/**
 * This is the most important part of your app.
 * This component interacts with other Roe components to adjust styles at the root level.
 * Your app must have an AppRoot if you wish to used a fixed / shy NavBar or sticky Footer.
 *
 * If your app is rendered inside another element directly within the body,
 * this element **MUST** have the "app" class applied.
 *
 * The "app" class ensures that the AppRoot is not affected by the outer, non-react element.
 */
var AppRoot = (function (_super) {
    __extends(AppRoot, _super);
    function AppRoot(props) {
        var _this = _super.call(this, props) || this;
        _this.state = store_1.default.getState();
        _this.unsubscribe = store_1.default.subscribe(function (_a) {
            var hasStickyFooter = _a.hasStickyFooter, hasFixedNavBar = _a.hasFixedNavBar, navBarHeight = _a.navBarHeight, footerHeight = _a.footerHeight;
            _this.setState({
                hasStickyFooter: hasStickyFooter,
                hasFixedNavBar: hasFixedNavBar,
                navBarHeight: navBarHeight,
                footerHeight: footerHeight,
            });
        });
        return _this;
    }
    AppRoot.prototype.componentWillUnmount = function () {
        this.unsubscribe();
    };
    AppRoot.prototype.render = function () {
        var _a = this.props, _b = _a.component, Component = _b === void 0 ? 'div' : _b, children = _a.children, className = _a.className, remainingProps = __rest(_a, ["component", "children", "className"]);
        var _c = this.state, hasStickyFooter = _c.hasStickyFooter, hasFixedNavBar = _c.hasFixedNavBar, navBarHeight = _c.navBarHeight, footerHeight = _c.footerHeight;
        var myClassNames = [
            'app-root',
            (hasStickyFooter && 'has-sticky-footer') || null,
            (hasFixedNavBar && 'has-fixed-nav-bar') || null,
            className,
        ];
        var style = {
            paddingTop: hasFixedNavBar && navBarHeight,
            paddingBottom: hasStickyFooter && footerHeight,
        };
        return (React.createElement(Component, __assign({}, remainingProps, { className: classNames(myClassNames), style: style }), children));
    };
    return AppRoot;
}(react_1.PureComponent));
exports.AppRoot = AppRoot;
exports.default = AppRoot;
//# sourceMappingURL=root.js.map