"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = __importDefault(require("../db/db"));
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize(db_1.default.DB, db_1.default.USER, db_1.default.PASSWORD, {
    host: db_1.default.HOST,
    dialect: "mysql"
});
