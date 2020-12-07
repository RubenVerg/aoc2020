import e from './tools/main';

class Bag {
	constructor(readonly name: string, readonly contained: [number, Bag][] = []) {
		bags[name] = this;
	}

	eval() {
		return bags[this.name] ?? null;
	}

	valueOf = this.eval;

	static getBag(name: string) {
		return name in bags ? bags[name] : new Bag(name);
	}
}

const bags: Record<string, Bag> = {}

function has(bag: Bag, findable: Bag) {
	bag = bag.eval();
	findable = findable.eval();
	for (let cont of bag.contained) {
		if (cont[1].eval().name === findable.name) return true;
		if (has(cont[1].eval(), findable)) return true;
	}

	return false;
}

export default e(async _input => {

	for (let line of _input.split(/\n/)) {
		const bagName = (/([\w ]+) bags contain/).exec(line)[1];
		if (line.includes('no other bags')) new Bag(bagName, []);
		else {
			const contained = (/contain ([ ,\w]+)./).exec(line)[1].split(/, ?/);
			let c: [number, Bag][] = [];
			for (let con of contained) {
				const execd = (/(\d+) ([ \w]+) bags?/).exec(con);
				c.push([+execd[1], Bag.getBag(execd[2])]);
			}
			new Bag(bagName, c);
		}
	}

	let counter = 0;

	for (let bagName in bags) {
		const bag = bags[bagName].valueOf();
		if (has(bag, Bag.getBag('shiny gold'))) counter++;
	}

	return counter;
});