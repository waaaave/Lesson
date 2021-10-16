"use strict";
exports.__esModule = true;
exports.Header = void 0;
var react_1 = require("react");
var Header_module_css_1 = require("./Header.module.css");
var antd_1 = require("antd");
var icons_1 = require("@ant-design/icons");
var hooks_1 = require("../../redux/hooks");
var react_redux_1 = require("react-redux");
var languageActions_1 = require("../../redux/language/languageActions");
var react_i18next_1 = require("react-i18next");
exports.Header = function () {
    var language = hooks_1.useSelector(function (state) { return state.language; });
    var languageList = hooks_1.useSelector(function (state) { return state.languageList; });
    var dispatch = react_redux_1.useDispatch();
    var t = react_i18next_1.useTranslation().t;
    var menuClickhandler = function (e) {
        if (e.key == 'new') {
        }
        else {
            dispatch(languageActions_1.changeLanguageActionCreator(e.key));
        }
    };
    return (react_1["default"].createElement("div", { className: Header_module_css_1["default"]["app-header"] },
        react_1["default"].createElement("div", { className: Header_module_css_1["default"]["top-header"] },
            react_1["default"].createElement("div", { className: Header_module_css_1["default"].inner },
                react_1["default"].createElement(antd_1.Typography.Text, null, t("header.slogan")),
                react_1["default"].createElement(antd_1.Dropdown.Button, { style: { marginLeft: 15 }, overlay: react_1["default"].createElement(antd_1.Menu, { onClick: menuClickhandler },
                        languageList.map(function (l) {
                            return react_1["default"].createElement(antd_1.Menu.Item, { key: l.code }, l.name);
                        }),
                        react_1["default"].createElement(antd_1.Menu.Item, { key: "new" }, t("header.add_new_language"))), icon: react_1["default"].createElement(icons_1.GlobalOutlined, null) }, language === "zh" ? "中文" : "English"))),
        react_1["default"].createElement(antd_1.Layout.Header, { className: Header_module_css_1["default"]["main-header"] },
            react_1["default"].createElement(antd_1.Input.Search, { placeholder: "请输入旅游目的地、主题、或关键字", className: Header_module_css_1["default"]["search-input"] })),
        react_1["default"].createElement(antd_1.Menu, { mode: "horizontal", className: Header_module_css_1["default"]["main-menu"] },
            react_1["default"].createElement(antd_1.Menu.Item, { key: "1" },
                " ",
                t("header.home_page"),
                " "),
            react_1["default"].createElement(antd_1.Menu.Item, { key: "2" },
                " ",
                t("header.weekend"),
                " "),
            react_1["default"].createElement(antd_1.Menu.Item, { key: "3" },
                " ",
                t("header.group"),
                " "),
            react_1["default"].createElement(antd_1.Menu.Item, { key: "4" },
                " ",
                t("header.backpack"),
                " "),
            react_1["default"].createElement(antd_1.Menu.Item, { key: "5" },
                " ",
                t("header.private"),
                " "),
            react_1["default"].createElement(antd_1.Menu.Item, { key: "6" },
                " ",
                t("header.cruise"),
                " "),
            react_1["default"].createElement(antd_1.Menu.Item, { key: "7" },
                " ",
                t("header.hotel"),
                " "),
            react_1["default"].createElement(antd_1.Menu.Item, { key: "8" },
                " ",
                t("header.local"),
                " "),
            react_1["default"].createElement(antd_1.Menu.Item, { key: "9" },
                " ",
                t("header.theme"),
                " "),
            react_1["default"].createElement(antd_1.Menu.Item, { key: "10" },
                " ",
                t("header.custom"),
                " "),
            react_1["default"].createElement(antd_1.Menu.Item, { key: "11" },
                " ",
                t("header.study"),
                " "),
            react_1["default"].createElement(antd_1.Menu.Item, { key: "12" },
                " ",
                t("header.visa"),
                " "),
            react_1["default"].createElement(antd_1.Menu.Item, { key: "13" },
                " ",
                t("header.enterprise"),
                " "),
            react_1["default"].createElement(antd_1.Menu.Item, { key: "14" },
                " ",
                t("header.high_end"),
                " "),
            react_1["default"].createElement(antd_1.Menu.Item, { key: "15" },
                " ",
                t("header.outdoor"),
                " "),
            react_1["default"].createElement(antd_1.Menu.Item, { key: "16" },
                " ",
                t("header.insurance"),
                " "))));
};
