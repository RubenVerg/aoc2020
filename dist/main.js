"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const meow_1 = __importDefault(require("meow"));
async function main() {
    const { flags, input } = meow_1.default(`
		Usage
		$ ts-node . <day[]> [--year <year>]

		Commands
		day: A number (1-25) followed by a or b (first/second part) or 0 for a tester.

		Options
		--year, -y: Do not infer the latest year, but specify one.
		--resolve: Run the error resolution tool.

		Examples
		$ ts-node src/main 1a 1b 2a 2b
		1a:\tnull
		1b:\tnull
		2a:\tnull
		2b:\tnull
		(with default code)

		# or

		$ ts-node src/main --year 2015 1a
		1a:\tnull
		$ cat data/1
		<input for 2015 day 1>

		# or

		$ ts-node src/main --resolve

		NB
		Edit src/tools/token to export your Session cookie.
		`, {
        flags: {
            year: {
                alias: 'y',
                type: 'number'
            },
            resolve: {
                type: 'boolean',
                default: false
            }
        }
    });
    if (flags.resolve) {
        console.log(`Common errors:\n\tInternal Server Error: either your token is wrong or you are trying to get an unexisting year.\n\tCannot find module *: there is no script for the day you are trying to run.\n\tFound an error not in the list? Either check your code or report an issue!`);
    }
    else {
        for (let day of input.map(i => i.trim().toLowerCase())) {
            const f = (await Promise.resolve().then(() => __importStar(require(`./${day}`)))).default;
            console.log(`${day}\t: ${await f(parseInt(day), flags.year)}`);
        }
    }
}
main();
