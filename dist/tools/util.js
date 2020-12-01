"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.year = void 0;
// import __moment from 'moment';
const moment_timezone_1 = __importDefault(require("moment-timezone"));
moment_timezone_1.default().tz('America/New_York').month() === 11;
moment_timezone_1.default().tz('America/New_York').year();
function year() {
    return (moment_timezone_1.default().tz('America/New_York').month() === 11 ? moment_timezone_1.default().tz('America/New_York').year() : moment_timezone_1.default().tz('America/New_York').year() - 1);
}
exports.year = year;
