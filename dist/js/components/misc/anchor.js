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
var React = require("react");
var react_1 = require("react");
var utils_1 = require("../../utils");
/**
 * Link component that automatically creates an id and hash href that match, for linking to elements on a single page.
 */
var Anchor = (function (_super) {
    __extends(Anchor, _super);
    function Anchor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Anchor.prototype.render = function () {
        var _a = this.props, children = _a.children, href = _a.href, remainingProps = __rest(_a, ["children", "href"]);
        var automaticHref = utils_1.getHref(children, href);
        return (React.createElement("a", __assign({}, remainingProps, { id: automaticHref, href: automaticHref ? '#' + automaticHref : undefined }), children));
    };
    return Anchor;
}(react_1.PureComponent));
exports.Anchor = Anchor;
exports.default = Anchor;
//# sourceMappingURL=anchor.js.map