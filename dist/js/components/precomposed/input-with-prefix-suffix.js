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
var input_group_1 = require("../forms/input-group");
var input_group_addon_1 = require("../forms/input-group-addon");
/**
 * A precomposed Input containing an optional prefix (InputGroupAddon), an input,
 * and an optional suffix (InputGroupAddon).
 */
var InputWithPrefixSuffix = (function (_super) {
    __extends(InputWithPrefixSuffix, _super);
    function InputWithPrefixSuffix() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InputWithPrefixSuffix.prototype.render = function () {
        var _a = this.props, prefix = _a.prefix, suffix = _a.suffix, block = _a.block, className = _a.className, inputClassName = _a.inputClassName, prefixClassName = _a.prefixClassName, suffixClassName = _a.suffixClassName, component = _a.component, remainingProps = __rest(_a, ["prefix", "suffix", "block", "className", "inputClassName", "prefixClassName", "suffixClassName", "component"]);
        return (React.createElement(input_group_1.default, { component: component, block: block, className: className },
            typeof prefix !== 'undefined' && (React.createElement(input_group_addon_1.default, { className: prefixClassName }, prefix)),
            React.createElement("input", __assign({ className: inputClassName }, remainingProps)),
            typeof suffix !== 'undefined' && (React.createElement(input_group_addon_1.default, { className: suffixClassName }, suffix))));
    };
    return InputWithPrefixSuffix;
}(react_1.PureComponent));
exports.InputWithPrefixSuffix = InputWithPrefixSuffix;
exports.default = InputWithPrefixSuffix;
//# sourceMappingURL=input-with-prefix-suffix.js.map