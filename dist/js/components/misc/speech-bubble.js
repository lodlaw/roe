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
 * Speech bubble component for displaying conversations / messages.
 */
var SpeechBubble = (function (_super) {
    __extends(SpeechBubble, _super);
    function SpeechBubble() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SpeechBubble.prototype.render = function () {
        var _a = this.props, className = _a.className, children = _a.children, _b = _a.tailPosition, tailPosition = _b === void 0 ? 'left' : _b, block = _a.block, header = _a.header, footer = _a.footer, _c = _a.component, Component = _c === void 0 ? 'div' : _c, remainingProps = __rest(_a, ["className", "children", "tailPosition", "block", "header", "footer", "component"]);
        return (React.createElement(Component, __assign({}, remainingProps, { className: classNames('speech-bubble', tailPosition, block && 'block', className) }),
            typeof header !== 'undefined' && (React.createElement("span", { className: "speech-bubble-header" }, header)),
            React.createElement("div", { className: "bubble" },
                children,
                React.createElement("div", { className: "tail" })),
            typeof footer !== 'undefined' && (React.createElement("span", { className: "speech-bubble-footer" }, footer))));
    };
    return SpeechBubble;
}(react_1.PureComponent));
exports.SpeechBubble = SpeechBubble;
exports.default = SpeechBubble;
//# sourceMappingURL=speech-bubble.js.map