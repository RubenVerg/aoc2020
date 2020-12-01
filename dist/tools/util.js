"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.year = void 0;
function year() {
    return (new Date().getMonth() === 12 ? new Date().getFullYear() : new Date().getFullYear() - 1);
}
exports.year = year;
