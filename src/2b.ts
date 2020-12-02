import e from './tools/main';

export default e(async _input => {
	const RE = /(\d+)-(\d+) (\w):( \w+)/;

	return _input.split(/\r?\n/).reduce((valid, line) => {
		const [_, pa, pb, letter, pw] = RE.exec(line);

		if (Number(pw[pa] === letter) ^ Number(pw[pb] === letter)) valid++;

		return valid;
	}, 0);
});