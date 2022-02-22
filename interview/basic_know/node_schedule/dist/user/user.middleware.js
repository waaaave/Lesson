"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateUserData = void 0;
const validateUserData = async (request, response, next) => {
    next(new Error('NAME_IS_REQUIRED'));
};
exports.validateUserData = validateUserData;
//# sourceMappingURL=user.middleware.js.map