"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultErrorHandler = void 0;
const defaultErrorHandler = (error, request, response, next) => {
    let statusCode = 200;
    let message = '';
    switch (error.message) {
        case 'NEED_PASSWORD':
            statusCode = 400,
                message = '请提供密码';
    }
    response.status(statusCode).send({
        message
    });
};
exports.defaultErrorHandler = defaultErrorHandler;
//# sourceMappingURL=app.middleware.js.map