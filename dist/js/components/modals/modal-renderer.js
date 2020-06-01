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
var CSSTransitionGroup = require("react-transition-group/CSSTransitionGroup");
/**
 * Required to render modals.
 * Should be rendered in the root of your app.
 * See the [Modal](#modal) section for a full example.
 */
var ModalRenderer = (function (_super) {
    __extends(ModalRenderer, _super);
    function ModalRenderer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ModalRenderer.prototype.render = function () {
        var modals = this.props.modals;
        return (React.createElement(CSSTransitionGroup, { transitionName: "modal-transition", transitionEnterTimeout: 300, transitionLeaveTimeout: 200 }, modals &&
            modals.map(function (modal, index) { return (React.createElement("div", { key: index, className: "modal-container" }, modal)); })));
    };
    return ModalRenderer;
}(react_1.PureComponent));
exports.ModalRenderer = ModalRenderer;
exports.default = ModalRenderer;
//# sourceMappingURL=modal-renderer.js.map