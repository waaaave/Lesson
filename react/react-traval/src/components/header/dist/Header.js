"use strict";
exports.__esModule = true;
exports.Header = void 0;
var react_1 = require("react");
var Header_module_css_1 = require("./Header.module.css");
var antd_1 = require("antd");
var icons_1 = require("@ant-design/icons");
var logo_svg_1 = require("../../assets/logo.svg");
exports.Header = function () {
    return (react_1["default"].createElement("div", { className: Header_module_css_1["default"]['app-header'] },
        react_1["default"].createElement("div", { className: Header_module_css_1["default"]["top-header"] },
            react_1["default"].createElement("div", { className: Header_module_css_1["default"].inner },
                react_1["default"].createElement(antd_1.Typography.Text, null, "\u8BA9\u65C5\u6E38\u66F4\u5E78\u798F"),
                react_1["default"].createElement(antd_1.Dropdown.Button, { style: { marginLeft: 15 }, overlay: react_1["default"].createElement(antd_1.Menu, null,
                        react_1["default"].createElement(antd_1.Menu.Item, null, "\u4E2D\u6587"),
                        react_1["default"].createElement(antd_1.Menu.Item, null, "English")), icon: react_1["default"].createElement(icons_1.GlobalOutlined, null) }, "\u8BED\u8A00"),
                react_1["default"].createElement(antd_1.Button.Group, { className: Header_module_css_1["default"]["button-group"] },
                    react_1["default"].createElement(antd_1.Button, null, "\u6CE8\u518C"),
                    react_1["default"].createElement(antd_1.Button, null, "\u767B\u9646")))),
        react_1["default"].createElement(antd_1.Layout.Header, { className: Header_module_css_1["default"]["main-header"] },
            react_1["default"].createElement("img", { src: logo_svg_1["default"], alt: "logo", className: Header_module_css_1["default"]["App-logo"] }),
            react_1["default"].createElement(antd_1.Typography.Title, { level: 3, className: Header_module_css_1["default"].title }, "React\u65C5\u6E38\u7F51"),
            react_1["default"].createElement(antd_1.Input.Search, { placeholder: "请输入旅游目的地、主题、或关键字", className: Header_module_css_1["default"]["search-input"] })),
        react_1["default"].createElement(antd_1.Menu, { mode: "horizontal", className: Header_module_css_1["default"]["main-menu"] },
            react_1["default"].createElement(antd_1.Menu.Item, { key: 1 }, "\u65C5\u6E38\u9996\u9875"),
            react_1["default"].createElement(antd_1.Menu.Item, { key: 2 }, "\u5468\u672B\u6E38"),
            react_1["default"].createElement(antd_1.Menu.Item, { key: 3 }, "\u8DDF\u56E2\u6E38"),
            react_1["default"].createElement(antd_1.Menu.Item, { key: "4" }, " \u81EA\u7531\u884C "),
            react_1["default"].createElement(antd_1.Menu.Item, { key: "5" }, " \u79C1\u5BB6\u56E2 "),
            react_1["default"].createElement(antd_1.Menu.Item, { key: "6" }, " \u90AE\u8F6E "),
            react_1["default"].createElement(antd_1.Menu.Item, { key: "7" }, " \u9152\u5E97+\u666F\u70B9 "),
            react_1["default"].createElement(antd_1.Menu.Item, { key: "8" }, " \u5F53\u5730\u73A9\u4E50 "),
            react_1["default"].createElement(antd_1.Menu.Item, { key: "9" }, " \u4E3B\u9898\u6E38 "),
            react_1["default"].createElement(antd_1.Menu.Item, { key: "10" }, " \u5B9A\u5236\u6E38 "),
            react_1["default"].createElement(antd_1.Menu.Item, { key: "11" }, " \u6E38\u5B66 "),
            react_1["default"].createElement(antd_1.Menu.Item, { key: "12" }, " \u7B7E\u8BC1 "),
            react_1["default"].createElement(antd_1.Menu.Item, { key: "13" }, " \u4F01\u4E1A\u6E38 "),
            react_1["default"].createElement(antd_1.Menu.Item, { key: "14" }, " \u9AD8\u7AEF\u6E38 "),
            react_1["default"].createElement(antd_1.Menu.Item, { key: "15" }, " \u7231\u73A9\u6237\u5916 "),
            react_1["default"].createElement(antd_1.Menu.Item, { key: "16" }, " \u4FDD\u9669 "))));
};
