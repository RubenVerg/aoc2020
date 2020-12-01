"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bent_1 = __importDefault(require("bent"));
const inputGetter = bent_1.default('string', 'GET');
async function fetch(year, day, session) {
    return await inputGetter(`https://adventofcode.com/${year}/day/${day}/input`, null, {
        cookie: `session=${session}`
    });
}
exports.default = fetch;
