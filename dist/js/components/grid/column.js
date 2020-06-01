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
 * Placed inside rows to align content in columns.
 * The default grid has 12 divisions.
 */
var Column = (function (_super) {
    __extends(Column, _super);
    function Column() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Column.prototype.render = function () {
        var _a = this.props, children = _a.children, className = _a.className, _b = _a.component, Component = _b === void 0 ? 'div' : _b, xs = _a.xs, sm = _a.sm, md = _a.md, lg = _a.lg, xl = _a.xl, xsOffset = _a.xsOffset, smOffset = _a.smOffset, mdOffset = _a.mdOffset, lgOffset = _a.lgOffset, xlOffset = _a.xlOffset, xsFill = _a.xsFill, smFill = _a.smFill, mdFill = _a.mdFill, lgFill = _a.lgFill, xlFill = _a.xlFill, xsPush = _a.xsPush, smPush = _a.smPush, mdPush = _a.mdPush, lgPush = _a.lgPush, xlPush = _a.xlPush, xsPull = _a.xsPull, smPull = _a.smPull, mdPull = _a.mdPull, lgPull = _a.lgPull, xlPull = _a.xlPull, remainingProps = __rest(_a, ["children", "className", "component", "xs", "sm", "md", "lg", "xl", "xsOffset", "smOffset", "mdOffset", "lgOffset", "xlOffset", "xsFill", "smFill", "mdFill", "lgFill", "xlFill", "xsPush", "smPush", "mdPush", "lgPush", "xlPush", "xsPull", "smPull", "mdPull", "lgPull", "xlPull"]);
        var myClassNames = [
            'column',
            utils_1.isValidColumnNumber(xs) ? "xs-" + xs : null,
            utils_1.isValidColumnNumber(sm) ? "sm-" + sm : null,
            utils_1.isValidColumnNumber(md) ? "md-" + md : null,
            utils_1.isValidColumnNumber(lg) ? "lg-" + lg : null,
            utils_1.isValidColumnNumber(xl) ? "xl-" + xl : null,
            utils_1.isValidColumnNumber(xsOffset) ? "xs-offset-" + xsOffset : null,
            utils_1.isValidColumnNumber(smOffset) ? "sm-offset-" + smOffset : null,
            utils_1.isValidColumnNumber(mdOffset) ? "md-offset-" + mdOffset : null,
            utils_1.isValidColumnNumber(lgOffset) ? "lg-offset-" + lgOffset : null,
            utils_1.isValidColumnNumber(xlOffset) ? "xl-offset-" + xlOffset : null,
            utils_1.isValidColumnNumber(xsFill) ? "xs-fill-" + xsFill : null,
            utils_1.isValidColumnNumber(smFill) ? "sm-fill-" + smFill : null,
            utils_1.isValidColumnNumber(mdFill) ? "md-fill-" + mdFill : null,
            utils_1.isValidColumnNumber(lgFill) ? "lg-fill-" + lgFill : null,
            utils_1.isValidColumnNumber(xlFill) ? "xl-fill-" + xlFill : null,
            utils_1.isValidColumnNumber(xsPush) ? "xs-push-" + xsPush : null,
            utils_1.isValidColumnNumber(smPush) ? "sm-push-" + smPush : null,
            utils_1.isValidColumnNumber(mdPush) ? "md-push-" + mdPush : null,
            utils_1.isValidColumnNumber(lgPush) ? "lg-push-" + lgPush : null,
            utils_1.isValidColumnNumber(xlPush) ? "xl-push-" + xlPush : null,
            utils_1.isValidColumnNumber(xsPull) ? "xs-pull-" + xsPull : null,
            utils_1.isValidColumnNumber(smPull) ? "sm-pull-" + smPull : null,
            utils_1.isValidColumnNumber(mdPull) ? "md-pull-" + mdPull : null,
            utils_1.isValidColumnNumber(lgPull) ? "lg-pull-" + lgPull : null,
            utils_1.isValidColumnNumber(xlPull) ? "xl-pull-" + xlPull : null,
            className,
        ];
        return (React.createElement(Component, __assign({}, remainingProps, { className: classNames(myClassNames) }), children));
    };
    return Column;
}(react_1.PureComponent));
exports.Column = Column;
exports.default = Column;
//# sourceMappingURL=column.js.map