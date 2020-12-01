import e from './tools/main';

export default e(async _input => {
	return _input.split(/\r?\n/).map(line => line.length).reduce((a, b) => a + b);
});