import e from './tools/main';

function intersect<T>(...arys: T[][]): T[] {
	return arys.reduce((prev, cur) => prev.filter(e => cur.includes(e)));
}

export default e(async _input => {
	return _input.split(/\n\n/).map(gr => intersect(...gr.split(/\n/).map(form => form.split(''))).length).reduce((a, b) => a + b);
});