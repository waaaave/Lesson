"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connection = void 0;
const mysql2_1 = __importDefault(require("mysql2"));
const app_config_1 = require("../app.config");
console.log(process.env.MYSQL_DATABASE, '///', app_config_1.MYSQL_DATABASE, app_config_1.MYSQL_HOST, app_config_1.MYSQL_PASSWORD, app_config_1.MYSQL_PORT, app_config_1.MYSQL_USER, '///////');
exports.connection = mysql2_1.default.createConnection({
    host: app_config_1.MYSQL_HOST,
    port: +app_config_1.MYSQL_PORT,
    user: app_config_1.MYSQL_USER,
    password: app_config_1.MYSQL_PASSWORD,
    database: app_config_1.MYSQL_DATABASE
});
//# sourceMappingURL=mysql.js.map