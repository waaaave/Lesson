"use strict";
exports.__esModule = true;
exports.ProductImage = void 0;
var React = require("react");
var antd_1 = require("antd");
exports.ProductImage = function (_a) {
    var id = _a.id, imageSrc = _a.imageSrc, title = _a.title, price = _a.price, size = _a.size;
    return (React.createElement("div", null,
        size == "large" ? (React.createElement(antd_1.Image, { src: imageSrc, height: 285, width: 490 })) : (React.createElement(antd_1.Image, { src: imageSrc, height: 120, width: 240 })),
        React.createElement("div", null,
            React.createElement(antd_1.Typography.Text, { type: "secondary" }, title.slice(0, 25)),
            React.createElement(antd_1.Typography.Text, { type: "danger", strong: true },
                "\u00A5 ",
                price,
                " \u8D77"))));
};
