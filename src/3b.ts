import e from './tools/main';

type XY = [number, number];

enum Direction {
	NORTH,
	SOUTH,
	EAST,
	WEST
}

class Field {
	private constructor(private readonly _trees: XY[], public readonly height: number, private readonly width: number) {
		this.check();
	}

	private _pos: XY = [0, 0];
	count = 0;

	static fromMap(m: string) {
		const spl = m.split(/\r?\n/);
		const coords: XY[] = [];
		for (let y in spl) {
			for (let x in spl[y] as any) {
				// console.log(y, x, spl[y][x], spl[y]);
				if (spl[y][x] === '#') {
					coords.push([+x, +y]);
				}
			}
		}
		return new Field(coords, spl.length, spl[0].length);
	}

	check() {
		if (this._trees.some(coord => coord[0] === this._pos[0] % this.width && coord[1] === this._pos[1])) this.count++;
	}

	move(where: XY) {
		this._pos[0] += where[0];
		this._pos[1] += where[1];
		this.check();
	}

	get x() {
		return this._pos[0];
	}

	get y() {
		return this._pos[1];
	}
}

export default e(async _input => {
	const slopes = [
		[1, 1],
		[3, 1],
		[5, 1],
		[7, 1],
		[1, 2]
	] as XY[];
	const fields: Record<string, Field> = {};
	for (let slope of slopes)
		fields[slope.toString()] = Field.fromMap(_input);
	while (true) {
		for (let slope of slopes)
			fields[slope.toString()].move(slope);
		if (Object.values(fields).every(f => f.y >= f.height)) break;
	}
	// console.log(fields, Object.values(fields).map(f => f.y));
	return Object.values(fields).reduce((a, b) => a * b.count, 1);
});