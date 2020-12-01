"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const reader_1 = __importDefault(require("./reader"));
const util_1 = require("util");
function easier(f) {
    return async function (d, y) {
        return util_1.format(await f(await reader_1.default(d, y, y ? true : false)));
    };
}
exports.default = easier;
