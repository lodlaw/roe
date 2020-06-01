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
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("react");
var utils_1 = require("../../utils");
var words_1 = require("../../words");
var ipsumItem = function (component, index) {
    var ipsum = utils_1.generateIpsum(words_1.WORDS);
    switch (component) {
        case 'ol':
        case 'ul':
            return React.createElement("li", { key: index }, ipsum);
        case 'text':
            return React.createElement("span", { key: index }, ipsum);
        // case 'p': NOTE: this is the default, so a case for it is not needed
        default:
            return React.createElement("p", { key: index }, ipsum);
    }
};
/**
 * Custom Ipsum component, useful for rendering placeholder text when prototyping.
 */
var DabIpsum = (function (_super) {
    __extends(DabIpsum, _super);
    function DabIpsum() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DabIpsum.prototype.shouldComponentUpdate = function (prevProps) {
        return (prevProps.component !== this.props.component ||
            prevProps.count !== this.props.count);
    };
    DabIpsum.prototype.render = function () {
        var _a = this.props, _b = _a.component, component = _b === void 0 ? 'p' : _b, _c = _a.count, count = _c === void 0 ? 5 : _c;
        var items = Array.apply(null, new Array(count));
        switch (component) {
            case 'ul':
                return (React.createElement("ul", null, items.map(function (value, index) {
                    return ipsumItem(component, index);
                })));
            case 'ol':
                return (React.createElement("ol", null, items.map(function (value, index) {
                    return ipsumItem(component, index);
                })));
            case 'text':
                return ipsumItem(component, 0);
            // case 'p'
            default:
                return (React.createElement("div", null, items.map(function (value, index) {
                    return ipsumItem(component, index);
                })));
        }
    };
    return DabIpsum;
}(react_1.Component));
exports.DabIpsum = DabIpsum;
exports.default = DabIpsum;
//# sourceMappingURL=dab-ipsum.js.map