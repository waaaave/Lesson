"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultErrorHandler = void 0;
const defaultErrorHandler = (error, request, response, next) => {
    if (error.message) {
        console.log(error.message);
    }
    let statusCode, message;
    switch (error.message) {
        case 'NAME_IS_REQUIRED':
            statusCode = 400;
            message = '请提供用户名';
            break;
        case 'PASSWORD_IS_REQUIRED':
            statusCode = 400;
            message = '请提供密码';
            break;
        case 'REPASSWORD_IS_REQUIRED':
            statusCode = 400;
            message = '请确认密码';
            break;
        case 'USER_ALREADY_EXIST':
            statusCode = 409;
            message = '名称已存在';
        default:
            statusCode: 500;
            message: '服务器开小差了~';
            break;
    }
    response.status(statusCode).send({ message });
};
exports.defaultErrorHandler = defaultErrorHandler;
//# sourceMappingURL=app.middleware.js.map