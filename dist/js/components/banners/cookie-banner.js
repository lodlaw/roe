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
var cookie = require("cookie");
var React = require("react");
var react_1 = require("react");
var banner_1 = require("./banner");
/**
 * A [Banner](#banner) component that is permanently dismissed after setting a cookie.
 * This component takes a render prop, which can be a component or function, that is passed a dismiss prop
 * which you can then apply as an onClick prop to an element of your choice.
 */
var CookieBanner = (function (_super) {
    __extends(CookieBanner, _super);
    function CookieBanner(props) {
        var _this = _super.call(this, props) || this;
        _this.setCookie = function () {
            document.cookie = cookie.serialize('cookies-accepted', 'true', {
                expires: new Date(new Date().setFullYear(new Date().getFullYear() + 1))
            });
            _this.setState({
                dismissed: true,
            });
        };
        _this.state = {
            dismissed: Boolean(cookie.parse(document.cookie)['cookies-accepted']),
        };
        return _this;
    }
    CookieBanner.prototype.render = function () {
        var _a = this.props, ref = _a.ref, className = _a.className, children = _a.children, render = _a.render, _b = _a.position, position = _b === void 0 ? 'bottom' : _b, remainingProps = __rest(_a, ["ref", "className", "children", "render", "position"]);
        var dismissed = this.state.dismissed;
        return (React.createElement(banner_1.default, __assign({}, remainingProps, { position: position, open: !dismissed, className: classNames('cookie-banner', className) }), render && render({ dismiss: this.setCookie })));
    };
    return CookieBanner;
}(react_1.PureComponent));
exports.CookieBanner = CookieBanner;
exports.default = CookieBanner;
//# sourceMappingURL=cookie-banner.js.map