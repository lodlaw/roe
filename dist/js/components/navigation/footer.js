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
var ReactDOM = require("react-dom");
var store_1 = require("../../store");
var Footer = (function (_super) {
    __extends(Footer, _super);
    function Footer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.updateAppRoot = function () {
            _this.notifyAppRoot(_this.props);
        };
        return _this;
    }
    Footer.prototype.componentDidMount = function () {
        this.notifyAppRoot(this.props);
        this.toggleResizeListeners(this.props);
    };
    Footer.prototype.componentDidUpdate = function (prevProps) {
        if (Boolean(this.props.sticky || this.props.fixed) !==
            Boolean(prevProps.sticky || prevProps.fixed)) {
            this.toggleResizeListeners(this.props);
        }
        this.notifyAppRoot(this.props);
    };
    Footer.prototype.componentWillUnmount = function () {
        window.removeEventListener('resize', this.updateAppRoot);
        this.notifyAppRoot({ sticky: false });
    };
    Footer.prototype.render = function () {
        var _a = this.props, sticky = _a.sticky, fixed = _a.fixed, _b = _a.component, Component = _b === void 0 ? 'div' : _b, children = _a.children, className = _a.className, remainingProps = __rest(_a, ["sticky", "fixed", "component", "children", "className"]);
        return (React.createElement(Component, __assign({}, remainingProps, { className: classNames('footer', { sticky: sticky, fixed: fixed }, className) }), children));
    };
    Footer.prototype.notifyAppRoot = function (props) {
        var sticky = props.sticky, fixed = props.fixed;
        var element = ReactDOM.findDOMNode(this);
        store_1.default.setState({
            hasStickyFooter: Boolean(sticky || fixed),
            footerHeight: element && element instanceof HTMLElement
                ? element.getBoundingClientRect().height
                : undefined,
        });
    };
    Footer.prototype.toggleResizeListeners = function (props) {
        var sticky = props.sticky, fixed = props.fixed;
        if (sticky || fixed) {
            window.addEventListener('resize', this.updateAppRoot);
        }
        else {
            window.removeEventListener('resize', this.updateAppRoot);
        }
    };
    return Footer;
}(react_1.PureComponent));
exports.Footer = Footer;
exports.default = Footer;
//# sourceMappingURL=footer.js.map