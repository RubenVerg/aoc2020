import type * as types from './types/types';

async function main() {
	const days = process.argv.slice(2).map(i => i.trim().toLowerCase());

	for (let day of days) {
		const f = (await import(`./${day}`)).default as types.DayResolver;

		console.log(`${day}\t: ${await f(parseInt(day))}`);
	}
}

main();