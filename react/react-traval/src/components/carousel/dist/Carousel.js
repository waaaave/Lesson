"use strict";
exports.__esModule = true;
exports.Carousel = void 0;
var react_1 = require("react");
var Carousel_module_css_1 = require("./Carousel.module.css");
var antd_1 = require("antd");
var carousel_1_jpg_1 = require("../../assets/images/carousel_1.jpg");
var carousel_2_jpg_1 = require("../../assets/images/carousel_2.jpg");
var carousel_3_jpg_1 = require("../../assets/images/carousel_3.jpg");
exports.Carousel = function () {
    return react_1["default"].createElement(antd_1.Carousel, { autoplay: true, className: Carousel_module_css_1["default"].slider },
        react_1["default"].createElement(antd_1.Image, { src: carousel_1_jpg_1["default"] }),
        react_1["default"].createElement(antd_1.Image, { src: carousel_2_jpg_1["default"] }),
        react_1["default"].createElement(antd_1.Image, { src: carousel_3_jpg_1["default"] }));
};
