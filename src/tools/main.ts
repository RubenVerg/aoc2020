import read from './reader';
import { format } from 'util';
import type { DayResolver, Day, Year } from '../types/types';

export default function easier<T>(f: (input: string) => Promise<T>) {
	return async function (d: Day, y?: Year) {
		return format(await f(await read(d, y, y ? true : false)));
	} as DayResolver;
}