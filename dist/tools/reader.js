"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const fetcher_1 = __importDefault(require("./fetcher"));
const util_1 = require("./util");
const token_1 = __importDefault(require("./token"));
async function read(day, year) {
    if (fs_1.readFileSync(`data/${day}`, { encoding: 'utf8' }).trim() === '') {
        fs_1.writeFileSync(`data/${day}`, await fetcher_1.default(year || util_1.year(), day, token_1.default));
    }
    return fs_1.readFileSync(`data/${day}`, { encoding: 'utf8' });
}
exports.default = read;
