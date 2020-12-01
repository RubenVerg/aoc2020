import { readFileSync, writeFileSync } from 'fs';
import f from './fetcher';
import { year as gYear } from './util';
import S from './token';
import type { Day, Year } from '../types/types';

export default async function read(day: Day, year?: Year) {
	if (readFileSync(`data/${day}`, { encoding: 'utf8' }).trim() === '') {
		writeFileSync(`data/${day}`, await f(year || gYear(), day,  S));
	}

	return readFileSync(`data/${day}`, { encoding: 'utf8' });
}