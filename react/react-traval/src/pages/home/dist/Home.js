"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.HomePage = void 0;
var react_1 = require("react");
var components_1 = require("../../components");
var Home_module_css_1 = require("./Home.module.css");
var antd_1 = require("antd");
var sider_2019_12_09_png_1 = require("../../assets/images/sider_2019_12-09.png");
var sider_2019_02_04_png_1 = require("../../assets/images/sider_2019_02-04.png");
var sider_2019_02_04_2_png_1 = require("../../assets/images/sider_2019_02-04-2.png");
var mockups_1 = require("../../mockups");
var HomePage = /** @class */ (function (_super) {
    __extends(HomePage, _super);
    function HomePage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HomePage.prototype.render = function () {
        return (react_1["default"].createElement("div", null,
            react_1["default"].createElement(components_1.Header, null),
            react_1["default"].createElement("div", { className: Home_module_css_1["default"]['page-content'] },
                react_1["default"].createElement(antd_1.Row, { style: { marginTop: 20 } },
                    react_1["default"].createElement(antd_1.Col, { span: 6 },
                        react_1["default"].createElement(components_1.SideMenu, null)),
                    react_1["default"].createElement(antd_1.Col, { span: 18 },
                        react_1["default"].createElement(components_1.Carousel, null))),
                react_1["default"].createElement(components_1.ProductCollection, { title: react_1["default"].createElement(antd_1.Typography.Title, { level: 3, type: "warning" }, "\u7206\u6B3E\u63A8\u8350"), sideImage: sider_2019_12_09_png_1["default"], products: mockups_1.productList1 }),
                react_1["default"].createElement(components_1.ProductCollection, { title: react_1["default"].createElement(antd_1.Typography.Title, { level: 3, type: "warning" }, "\u65B0\u54C1\u4E0A\u5E02"), sideImage: sider_2019_02_04_png_1["default"], products: mockups_1.productList2 }),
                react_1["default"].createElement(components_1.ProductCollection, { title: react_1["default"].createElement(antd_1.Typography.Title, { level: 3, type: "warning" }, "\u7206\u6B3E\u63A8\u8350"), sideImage: sider_2019_02_04_2_png_1["default"], products: mockups_1.productList3 })),
            react_1["default"].createElement(components_1.Footer, null)));
    };
    return HomePage;
}(react_1["default"].Component));
exports.HomePage = HomePage;
