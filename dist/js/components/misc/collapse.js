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
var ENOUGH_TIME_FOR_RERENDER = 50;
var DEFAULT_HEIGHT = 0;
var DEFAULT_DURATION = 200;
var DEFAULT_FADE_HEIGHT = 50;
var DEFAULT_TRANSPARENT_COLOR = 'rgba(255, 255, 255, 0)';
var DEFAULT_FADE_COLOR = 'rgba(255, 255, 255, 1)';
/**
 * Component to expand and collapse content, optionally displaying a small preview.
 */
var Collapse = (function (_super) {
    __extends(Collapse, _super);
    function Collapse(props) {
        var _this = _super.call(this, props) || this;
        var _a = props.maxCollapsedHeight, maxCollapsedHeight = _a === void 0 ? DEFAULT_HEIGHT : _a, open = props.open;
        _this.state = {
            height: maxCollapsedHeight,
            opening: false,
            opened: open,
        };
        return _this;
    }
    Collapse.prototype.componentDidUpdate = function (previousProps) {
        var _this = this;
        if (this.props.open !== previousProps.open) {
            window.clearTimeout(this.timeout);
            var _a = this.props, _b = _a.maxCollapsedHeight, maxCollapsedHeight_1 = _b === void 0 ? DEFAULT_HEIGHT : _b, _c = _a.animationDuration, animationDuration_1 = _c === void 0 ? DEFAULT_DURATION : _c;
            this.setState({
                opened: false,
                opening: previousProps.open,
                height: this.props.open
                    ? maxCollapsedHeight_1
                    : this.element.scrollHeight,
            });
            this.timeout = window.setTimeout(function () {
                _this.setState({
                    opened: false,
                    opening: _this.props.open,
                    height: _this.props.open
                        ? _this.element.scrollHeight
                        : maxCollapsedHeight_1,
                });
                _this.timeout = window.setTimeout(function () {
                    _this.setState({
                        opened: _this.props.open,
                        opening: _this.props.open,
                    });
                }, animationDuration_1);
            }, ENOUGH_TIME_FOR_RERENDER);
        }
    };
    Collapse.prototype.componentDidMount = function () {
        var _a = this.props.maxCollapsedHeight, maxCollapsedHeight = _a === void 0 ? DEFAULT_HEIGHT : _a;
        this.setState({
            height: this.props.open ? this.element.scrollHeight : maxCollapsedHeight,
        });
    };
    Collapse.prototype.componentWillUnmount = function () {
        window.clearTimeout(this.timeout);
    };
    Collapse.prototype.render = function () {
        var _this = this;
        var _a = this.props, children = _a.children, className = _a.className, fadeOut = _a.fadeOut, _b = _a.fadeColor, fadeColor = _b === void 0 ? DEFAULT_FADE_COLOR : _b, _c = _a.fadeHeight, fadeHeight = _c === void 0 ? DEFAULT_FADE_HEIGHT : _c, _d = _a.transparentColor, transparentColor = _d === void 0 ? DEFAULT_TRANSPARENT_COLOR : _d, open = _a.open, maxCollapsedHeight = _a.maxCollapsedHeight, _e = _a.minHeight, minHeight = _e === void 0 ? null : _e, _f = _a.animationDuration, animationDuration = _f === void 0 ? DEFAULT_DURATION : _f, _g = _a.component, Component = _g === void 0 ? 'div' : _g, remainingProps = __rest(_a, ["children", "className", "fadeOut", "fadeColor", "fadeHeight", "transparentColor", "open", "maxCollapsedHeight", "minHeight", "animationDuration", "component"]);
        var _h = this.state, opening = _h.opening, opened = _h.opened, height = _h.height;
        var collapseStyle = {
            minHeight: minHeight,
            maxHeight: opened ? null : height,
            position: 'relative',
            overflow: (opened ? null : 'hidden'),
            transition: "ease-in-out " + animationDuration + "ms max-height",
        };
        var fadeStyle = {
            height: fadeHeight,
            width: '100%',
            position: 'absolute',
            bottom: 0,
            opacity: opening ? 0 : 1,
            background: "linear-gradient(" + transparentColor + ", " + fadeColor + " 80%)",
            transition: "ease-in-out " + animationDuration + "ms opacity",
        };
        return (React.createElement(Component, __assign({ ref: function (element) { return (_this.element = element); } }, remainingProps, { className: classNames('clearfix collapse', open ? 'collapse-open' : null, className), style: collapseStyle }),
            children,
            fadeOut && !opened && (React.createElement("div", { className: "collapse-fade", style: fadeStyle }))));
    };
    return Collapse;
}(react_1.PureComponent));
exports.Collapse = Collapse;
exports.default = Collapse;
//# sourceMappingURL=collapse.js.map