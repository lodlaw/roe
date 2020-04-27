"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Store = (function () {
    function Store(initialState) {
        if (initialState === void 0) { initialState = {}; }
        var _this = this;
        this.state = {};
        this.listeners = [];
        this.setState = function (state) {
            for (var key in state) {
                /* istanbul ignore else */
                if (Object.prototype.hasOwnProperty.call(state, key)) {
                    _this.state[key] = state[key];
                }
            }
            _this.listeners.forEach(function (listener) {
                listener(__assign({}, _this.state));
            });
        };
        this.getState = function () {
            return __assign({}, _this.state);
        };
        this.subscribe = function (listener) {
            if (_this.listeners.indexOf(listener) < 0) {
                _this.listeners.push(listener);
            }
            return _this.createUnsubscriber(listener);
        };
        this.createUnsubscriber = function (listener) { return function () {
            var index = _this.listeners.indexOf(listener);
            if (index >= 0) {
                _this.listeners.splice(index, 1);
            }
        }; };
        this.state = initialState;
    }
    return Store;
}());
exports.Store = Store;
exports.default = new Store();
//# sourceMappingURL=store.js.map