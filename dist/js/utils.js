"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var randomSeed = require("random-seed");
var constants_1 = require("./constants");
exports.formatCode = function (code) {
    var codeWithoutLeadingOrTrailingEmptyLines = code
        .replace(constants_1.MATCHES_BLANK_FIRST_LINE, '')
        .replace(constants_1.MATCHES_BLANK_LAST_LINE, '');
    var initialIndentation = constants_1.MATCHES_INITIAL_INDENTATION.exec(codeWithoutLeadingOrTrailingEmptyLines);
    return initialIndentation
        ? codeWithoutLeadingOrTrailingEmptyLines.replace(new RegExp("^" + initialIndentation[1], 'gm'), '')
        : codeWithoutLeadingOrTrailingEmptyLines;
};
exports.getHref = function (children, href) {
    if (href) {
        return href;
    }
    if (typeof children !== 'string') {
        return undefined;
    }
    return children
        .replace(constants_1.MATCHES_AMPERSAND, '-and-')
        .replace(constants_1.MATCHES_NON_WORD_CHARACTERS, '-')
        .replace(constants_1.MATCHES_LEADING_AND_TRAILING_HYPHENS, '')
        .toLowerCase();
};
var rand = randomSeed.create('dabapps');
exports.resetRandomSeed = function () {
    rand = randomSeed.create('dabapps');
};
exports.generateIpsum = function (words) {
    var ipsum = Array.apply(null, new Array(15))
        .map(function () { return words[Math.floor(rand.range(words.length))]; })
        .join(' ');
    return ipsum.charAt(0).toUpperCase() + ipsum.substring(1) + '.';
};
exports.shouldNotBeRendered = function (children) {
    return (children === false ||
        children === null ||
        children === undefined ||
        children === '');
};
exports.isValidColumnNumber = function (value) {
    return typeof value === 'number' && value === +value;
};
exports.getScrollOffset = function () {
    var doc = document.documentElement;
    var left = (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0);
    var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    return {
        x: left,
        y: top,
    };
};
//# sourceMappingURL=utils.js.map