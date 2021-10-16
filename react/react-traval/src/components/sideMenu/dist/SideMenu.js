"use strict";
exports.__esModule = true;
exports.SideMenu = void 0;
var react_1 = require("react");
var antd_1 = require("antd");
var SideMenu_module_css_1 = require("./SideMenu.module.css");
var mockup_1 = require("./mockup");
var icons_1 = require("@ant-design/icons");
exports.SideMenu = function () {
    return react_1["default"].createElement(antd_1.Menu, { mode: "vertical", className: SideMenu_module_css_1["default"]['side-menu'] }, mockup_1.sideMenuList.map(function (m, index) {
        return react_1["default"].createElement(antd_1.Menu.SubMenu, { key: "side-menu-" + index, title: react_1["default"].createElement("span", null,
                react_1["default"].createElement(icons_1.GifOutlined, null),
                m.title) }, m.subMenu.map(function (sm, smindex) {
            return react_1["default"].createElement(antd_1.Menu.SubMenu, { key: "side-menu-" + smindex, title: react_1["default"].createElement("span", null,
                    react_1["default"].createElement(icons_1.GifOutlined, null),
                    sm.title) }, sm.subMenu.map(function (sms, smsindex) {
                return react_1["default"].createElement(antd_1.Menu.Item, { key: "side-menu-" + smsindex },
                    react_1["default"].createElement("span", null,
                        react_1["default"].createElement(icons_1.GifOutlined, null),
                        sms));
            }));
        }));
    }));
};
