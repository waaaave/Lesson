"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app_middleware_1 = require("./app.middleware");
const post_router_1 = __importDefault(require("../post/post.router"));
const auth_router_1 = __importDefault(require("../auth/auth.router"));
const app = (0, express_1.default)();
app.use(post_router_1.default, auth_router_1.default);
app.use(app_middleware_1.defaultErrorHandler);
exports.default = app;
//# sourceMappingURL=index.js.map