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
var utils_1 = require("../../utils");
var NavBar = (function (_super) {
    __extends(NavBar, _super);
    function NavBar(props) {
        var _this = _super.call(this, props) || this;
        _this.updateAppRoot = function () {
            _this.notifyAppRoot(_this.props);
        };
        _this.hideOrShowNavBar = function () {
            var y = utils_1.getScrollOffset().y;
            if (typeof _this.mountTime === 'undefined' ||
                new Date().getTime() < _this.mountTime + 250) {
                _this.previousScrollY = y;
                return;
            }
            var element = ReactDOM.findDOMNode(_this);
            if (element && element instanceof HTMLElement) {
                var height = element.getBoundingClientRect().height;
                if (y > _this.previousScrollY + height / 2 && y > height) {
                    _this.setState({
                        hidden: true,
                    });
                    _this.previousScrollY = y;
                }
                else if (y < _this.previousScrollY - height / 2) {
                    _this.setState({
                        hidden: false,
                    });
                    _this.previousScrollY = y;
                }
            }
        };
        _this.previousScrollY = utils_1.getScrollOffset().y;
        _this.state = {
            hidden: false,
        };
        return _this;
    }
    NavBar.prototype.componentDidMount = function () {
        this.notifyAppRoot(this.props);
        this.toggleShyListeners(this.props);
        this.toggleResizeListeners(this.props);
        this.mountTime = new Date().getTime();
    };
    NavBar.prototype.componentDidUpdate = function (prevProps) {
        if (Boolean(this.props.shy) !== Boolean(prevProps.shy)) {
            this.toggleShyListeners(this.props);
        }
        if (Boolean(this.props.fixed) !== Boolean(prevProps.fixed) ||
            Boolean(this.props.shy) !== Boolean(prevProps.shy)) {
            this.toggleResizeListeners(this.props);
        }
        this.notifyAppRoot(this.props);
    };
    NavBar.prototype.componentWillUnmount = function () {
        window.removeEventListener('scroll', this.hideOrShowNavBar);
        window.removeEventListener('resize', this.hideOrShowNavBar);
        window.removeEventListener('resize', this.updateAppRoot);
        this.notifyAppRoot({ fixed: false });
    };
    NavBar.prototype.render = function () {
        var _a = this.props, children = _a.children, className = _a.className, fixed = _a.fixed, shy = _a.shy, noShadow = _a.noShadow, _b = _a.component, Component = _b === void 0 ? 'div' : _b, remainingProps = __rest(_a, ["children", "className", "fixed", "shy", "noShadow", "component"]);
        var hidden = this.state.hidden;
        var myClassNames = [
            'nav-bar',
            fixed || shy ? 'fixed' : null,
            shy ? 'shy' : null,
            hidden ? 'hidden' : null,
            noShadow ? 'no-shadow' : null,
            className,
        ];
        return (React.createElement(Component, __assign({}, remainingProps, { className: classNames(myClassNames) }), children));
    };
    NavBar.prototype.notifyAppRoot = function (props) {
        var fixed = props.fixed, shy = props.shy;
        var element = ReactDOM.findDOMNode(this);
        store_1.default.setState({
            hasFixedNavBar: Boolean(fixed || shy),
            navBarHeight: element && element instanceof HTMLElement
                ? element.getBoundingClientRect().height
                : undefined,
        });
    };
    NavBar.prototype.toggleResizeListeners = function (props) {
        var fixed = props.fixed, shy = props.shy;
        if (fixed || shy) {
            window.addEventListener('resize', this.updateAppRoot);
        }
        else {
            window.removeEventListener('resize', this.updateAppRoot);
        }
    };
    NavBar.prototype.toggleShyListeners = function (props) {
        var shy = props.shy;
        if (shy) {
            window.addEventListener('scroll', this.hideOrShowNavBar);
            window.addEventListener('resize', this.hideOrShowNavBar);
        }
        else {
            window.removeEventListener('scroll', this.hideOrShowNavBar);
            window.removeEventListener('resize', this.hideOrShowNavBar);
        }
    };
    return NavBar;
}(react_1.PureComponent));
exports.NavBar = NavBar;
exports.default = NavBar;
//# sourceMappingURL=nav-bar.js.map