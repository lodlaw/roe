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
var utils_1 = require("../../utils");
/**
 * Component to nicely highlight code inside a `pre` element.
 */
var CodeBlock = (function (_super) {
    __extends(CodeBlock, _super);
    function CodeBlock(props) {
        var _this = _super.call(this, props) || this;
        _this.highlightBlock = _this.highlightBlock.bind(_this);
        return _this;
    }
    CodeBlock.prototype.highlightBlock = function (element) {
        this.element = element;
        // tslint:disable-next-line:strict-type-predicates
        if (typeof hljs === 'object' && typeof hljs.highlightBlock === 'function') {
            hljs.highlightBlock(this.element);
        }
    };
    CodeBlock.prototype.componentDidUpdate = function (prevProps) {
        if (typeof hljs === 'object' &&
            // tslint:disable-next-line:strict-type-predicates
            typeof hljs.highlightBlock === 'function' &&
            prevProps.children !== this.props.children) {
            hljs.highlightBlock(this.element);
        }
    };
    CodeBlock.prototype.render = function () {
        var _a = this.props, children = _a.children, className = _a.className, language = _a.language, codeBlockName = _a.codeBlockName, _b = _a.component, Component = _b === void 0 ? 'div' : _b, remainingProps = __rest(_a, ["children", "className", "language", "codeBlockName", "component"]);
        var languageClassName = language && "language-" + language;
        var content = typeof children === 'string' ? utils_1.formatCode(children) : children;
        return (React.createElement(Component, __assign({}, remainingProps, { className: classNames('code-block-wrapper', className) }),
            typeof codeBlockName !== 'undefined' && (React.createElement("div", { className: "code-block-name" },
                typeof language !== 'undefined' && (React.createElement("div", { className: "code-block-language" }, language)),
                codeBlockName)),
            React.createElement("pre", { ref: this.highlightBlock, className: classNames('code-block', languageClassName) }, content)));
    };
    return CodeBlock;
}(react_1.PureComponent));
exports.CodeBlock = CodeBlock;
exports.default = CodeBlock;
//# sourceMappingURL=code-block.js.map