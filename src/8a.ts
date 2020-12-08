import e from './tools/main';

type InstructionName = 'nop' | 'acc' | 'jmp';
type Instruction = [InstructionName, number];
type Runnable = [Instruction, boolean];

export default e(async _input => {
	const insts: Runnable[] = [];
	for (let inst of _input.split(/\n/)) {
		const match = (/(nop|acc|jmp) ([+-]\d+)/).exec(inst);
		insts.push([[match[1] as InstructionName, +match[2]], false]);
	}
	let acc = 0;
	let current = 0;
	while (insts[current][1] !== true) {
		switch(insts[current][0][0]) {
			case 'acc':
				acc += insts[current][0][1];
				insts[current][1] = true;
				current++;
				break;
			case 'nop':
				insts[current][1] = true;
				current++;
				break;
			case 'jmp':
				insts[current][1] = true;
				current += insts[current][0][1];
				break;
		}
	}
	return acc;
});