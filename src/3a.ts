import e from './tools/main';

type XY = [number, number];

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
		if (this._trees.some(coord => coord[0] === this._pos[0] % this.width && coord[1] === this._pos[1] % this.height)) this.count++;
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
	const f = Field.fromMap(_input);
	while (true) {
		f.move([3, 1]);
		if (f.y >= f.height) break;
	}
	return f.count;
});