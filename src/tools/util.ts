import type {Year} from '../types/types';

export function year() {
	return (new Date().getMonth() === 12 ? new Date().getFullYear() : new Date().getFullYear() - 1) as Year;
}