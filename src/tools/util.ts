import type { Year } from '../types/types';
// import __moment from 'moment';
import moment from 'moment-timezone';

moment().tz('America/New_York').month() === 11
moment().tz('America/New_York').year()

export function year() {
	return (moment().tz('America/New_York').month() === 11 ? moment().tz('America/New_York').year() : moment().tz('America/New_York').year() - 1) as Year;
}