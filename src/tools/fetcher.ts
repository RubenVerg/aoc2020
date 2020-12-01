import bent from 'bent';
import type { Year, Day } from '../types/types';

const inputGetter = bent('string', 'GET')

export default async function fetch(year: Year, day: Day, session: string) {
	return await inputGetter(`https://adventofcode.com/${year}/day/${day}/input`, null, {
		cookie: `session=${session}`
	});
}