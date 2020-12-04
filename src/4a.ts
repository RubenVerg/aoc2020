import e from './tools/main';

function isSameAry<T, C extends T = T>(a: T[], b: C[]): boolean {
	if (a.length !== b.length) return false;

	for (let i = 0; i < a.length; i++)
		if (a[i] !== b[i]) return false;

	return true;
}

export default e(async _input => {
	const FIELDS = {
		byr: true,
		iyr: true,
		eyr: true,
		hgt: true,
		hcl: true,
		ecl: true,
		pid: true,
		cid: false
	};

	return (
		_input
			.split(/\n\n/)
			.map(e => e.split(/[ \n]/))
			.map(e => e
				.reduce((obj, el) => ({ ...obj, [el.split(/:/)[0]]: el.split(/:/)[1] }), {} as Record<keyof typeof FIELDS, string>)
			)
			.filter(obj => isSameAry(
				Object.keys(obj)
					.filter(e => FIELDS[e] === true)
					.sort(),
				Object.entries(FIELDS)
					.filter(e => e[1] === true)
					.map(e => e[0])
					.sort()
			)
			)
			.length
	);
});