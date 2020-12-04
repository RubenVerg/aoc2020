import e from './tools/main';

function between(a: number, b: number, c: number, compare = (a: number, b: number) => a <= b) {
	return compare(a, b) && compare(b, c);
}

export default e(async _input => {
	const RE = /(\d+)-(\d+) (\w): (\w+)/;

	return _input.split(/\r?\n/).reduce((valid, line) => {
		const [_, lo, hi, letter, pw] = RE.exec(line);

		if (between(+lo, [...pw].filter(l => l === letter).length, +hi)) valid++;

		return valid;
	}, 0);
});