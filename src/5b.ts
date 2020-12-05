import e from './tools/main';

function to(a: number, b: number) {
	const r = [];
	for (let i = a; i <= b; i++) r.push(i);
	return r;
}

type Seat = [number, number];

function seatsToMap(seats: Seat[], bool = false): typeof bool extends true ? boolean[][] : string {
	let s = ('.'.repeat(8) + '\n').repeat(128).split('\n').map(r => r.split(''));
	for (let seat of seats) {
		s[seat[0]][seat[1]] = '#';
	}
	return (bool ? s.map(r => r.map(i => i == '#')) : s.map(r => r.join('')).join('\n')) as unknown as typeof bool extends true ? string[][] : string;
}

export default e(async _input => {
	let occupied: Seat[] = [];

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

		occupied.push([row[0], col[0]]);
	}

	const sts = (seatsToMap(occupied, true) as unknown as boolean[][]).map((r, ri) => r.map((c, ci) => [c, ri, ci] as [boolean, number, number]));

	const [_, row, col] = sts.slice(8).filter(r => r.some(c => !c[0]))[0].find(c => !c[0]);

	return row * 8 + col;
});