"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var languageActions_1 = require("./languageActions");
var i18next_1 = require("i18next");
var defaultState = {
    language: 'zh',
    languageList: [
        { name: '中文', code: 'zh' },
        { name: '英文', code: 'en' }
    ]
};
exports["default"] = (function (state, action) {
    if (state === void 0) { state = defaultState; }
    switch (action.type) {
        case languageActions_1.CHANGE_LANGUAGE:
            i18next_1["default"].changeLanguage(action.payload);
            return __assign(__assign({}, state), { language: action.payload });
        case languageActions_1.ADD_LANGUAGE:
            return __assign(__assign({}, state), { languageList: __spreadArrays(state.languageList, [action.payload]) });
        default:
            return state;
    }
});
