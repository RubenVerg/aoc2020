import e from './tools/main';

function to(a: number, b: number) {
	const r = [];
	for (let i = a; i <= b; i++) r.push(i);
	return r;
}

export default e(async _input => {
	let max = -Infinity;

	for (let pass of _input.split(/\r?\n/)) {
		let row = to(0, 127), col = to(0, 7);
		let ch = 0;
		while (row.length > 1) {
			if (pass[ch] === 'F') row = row.slice(0, row.length / 2);
			else row = row.slice(row.length / 2);

			ch++;
		}
		while (col.length > 1) {
			if (pass[ch] === 'L') col = col.slice(0, col.length / 2);
			else col = col.slice(col.length / 2);

			ch++;
		}

		max = Math.max(max, row[0] * 8 + col[0]);
	}

	return max;
});