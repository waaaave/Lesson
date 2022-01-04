"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = void 0;
const login = async (request, response, next) => {
    next(new Error('NEED_PASSWORD'));
};
exports.login = login;
//# sourceMappingURL=auth.controller.js.map