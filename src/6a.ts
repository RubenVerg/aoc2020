import e from './tools/main';

export default e(async _input => {
	return _input.split(/\n\n/).map(gr => new Set([...gr.split(/\n/).join('')]).size).reduce((a, b) => a + b);
});