"use strict";
exports.__esModule = true;
exports.ProductCollection = void 0;
var React = require("react");
var antd_1 = require("antd");
var ProductCollection_module_css_1 = require("./ProductCollection.module.css");
var ProductImage_1 = require("./ProductImage");
exports.ProductCollection = function (_a) {
    var title = _a.title, sideImage = _a.sideImage, products = _a.products;
    return (React.createElement("div", { className: ProductCollection_module_css_1["default"].content },
        React.createElement(antd_1.Divider, { orientation: "left" }, title),
        React.createElement(antd_1.Row, null,
            React.createElement(antd_1.Col, { span: 4 },
                React.createElement("img", { src: sideImage, className: ProductCollection_module_css_1["default"]["side-image"], alt: "" })),
            React.createElement(antd_1.Col, { span: 20 },
                React.createElement(antd_1.Row, null,
                    React.createElement(antd_1.Col, { span: 12 },
                        React.createElement(ProductImage_1.ProductImage, { id: products[0].id, size: "large", title: products[0].title, imageSrc: products[0].touristRoutePictures[0].url, price: products[0].price })),
                    React.createElement(antd_1.Col, { span: 12 },
                        React.createElement(antd_1.Row, null,
                            React.createElement(antd_1.Col, { span: 12 },
                                React.createElement(ProductImage_1.ProductImage, { id: products[1].id, size: "small", title: products[1].title, imageSrc: products[1].touristRoutePictures[0].url, price: products[1].price })),
                            React.createElement(antd_1.Col, { span: 12 },
                                React.createElement(ProductImage_1.ProductImage, { id: products[2].id, size: "small", title: products[2].title, imageSrc: products[2].touristRoutePictures[0].url, price: products[2].price }))),
                        React.createElement(antd_1.Row, null,
                            React.createElement(antd_1.Col, { span: 12 },
                                React.createElement(ProductImage_1.ProductImage, { id: products[3].id, size: "small", title: products[3].title, imageSrc: products[3].touristRoutePictures[0].url, price: products[3].price })),
                            React.createElement(antd_1.Col, { span: 12 },
                                React.createElement(ProductImage_1.ProductImage, { id: products[4].id, size: "small", title: products[4].title, imageSrc: products[4].touristRoutePictures[0].url, price: products[4].price }))))),
                React.createElement(antd_1.Row, null,
                    React.createElement(antd_1.Col, { span: 6 },
                        React.createElement(ProductImage_1.ProductImage, { id: products[5].id, size: "small", title: products[5].title, imageSrc: products[5].touristRoutePictures[0].url, price: products[5].price })),
                    React.createElement(antd_1.Col, { span: 6 },
                        React.createElement(ProductImage_1.ProductImage, { id: products[6].id, size: "small", title: products[6].title, imageSrc: products[6].touristRoutePictures[0].url, price: products[6].price })),
                    React.createElement(antd_1.Col, { span: 6 },
                        React.createElement(ProductImage_1.ProductImage, { id: products[7].id, size: "small", title: products[7].title, imageSrc: products[7].touristRoutePictures[0].url, price: products[7].price })),
                    React.createElement(antd_1.Col, { span: 6 },
                        React.createElement(ProductImage_1.ProductImage, { id: products[8].id, size: "small", title: products[8].title, imageSrc: products[8].touristRoutePictures[0].url, price: products[8].price })))))));
};
