"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var pages_1 = require("./pages");
function App() {
    return (react_1["default"].createElement("div", { className: "App" },
        react_1["default"].createElement(react_router_dom_1.BrowserRouter, null,
            react_1["default"].createElement(react_router_dom_1.Switch, null,
                react_1["default"].createElement(react_router_dom_1.Route, { path: '/', exact: true, component: pages_1.HomePage }),
                react_1["default"].createElement(react_router_dom_1.Route, { path: '/signIn', render: (function () { return react_1["default"].createElement("h1", null, " \u767B\u9646\u9875\u9762"); }) }),
                react_1["default"].createElement(react_router_dom_1.Route, { path: '/detail', render: (function () { return react_1["default"].createElement("h1", null, " \u8BE6\u60C5\u9875\u9762"); }) }),
                react_1["default"].createElement(react_router_dom_1.Route, { render: (function () { return react_1["default"].createElement("h1", null, " 404 not found!"); }) })))));
}
exports["default"] = App;
