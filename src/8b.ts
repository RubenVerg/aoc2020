import e from './tools/main';

type InstructionName = 'nop' | 'acc' | 'jmp';
type Instruction = [InstructionName, number];
type Runnable = [Instruction, boolean];

export default e(async _input => {
	const original: Runnable[] = [];
	for (let inst of _input.split(/\n/)) {
		const match = (/(nop|acc|jmp) ([+-]\d+)/).exec(inst);
		original.push([[match[1] as InstructionName, +match[2]], false]);
	}
	const worlds: Runnable[][] = [];
	for (let i = 0; i < original.length; i++) {
		if (original[i][0][0] === 'acc') continue;
		if (original[i][0][0] === 'jmp') {
			worlds.push(
				original
					.slice()
					.map(i => i.slice() as Runnable)
					.map(i => [i[0].slice(), i[1]] as Runnable)
					.map((_, ind) => ind === i ? [['nop', _[0][1]], _[1]] as Runnable : _)
			)
		}
		if (original[i][0][0] === 'nop') {
			worlds.push(
				original
					.slice()
					.map(i => i.slice() as Runnable)
					.map(i => [i[0].slice(), i[1]] as Runnable)
					.map((_, ind) => ind === i ? [['jmp', _[0][1]], _[1]] as Runnable : _)
			)
		}
	}
	let toBeReturned = 0;
	for (let world of worlds) {
		let acc = 0;
		let current = 0;
		let toBreak = false;
		while (world[current][1] !== true) {
			switch (world[current][0][0]) {
				case 'acc':
					acc += world[current][0][1];
					world[current][1] = true;
					current++;
					break;
				case 'nop':
					world[current][1] = true;
					current++;
					break;
				case 'jmp':
					world[current][1] = true;
					current += world[current][0][1];
					break;
			}
			if (current === world.length) {
				toBreak = true;
				break;
			}
		}
		if (toBreak) {
			toBeReturned = acc;
			break;
		}
	}
	return toBeReturned;
});