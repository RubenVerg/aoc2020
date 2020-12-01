"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const main_1 = __importDefault(require("./tools/main"));
exports.default = main_1.default(async (_input) => {
    return _input.split(/\r?\n/).map(line => line.length).reduce((a, b) => a + b);
});
