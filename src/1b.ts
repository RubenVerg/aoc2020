import e from './tools/main';
import { Combination as _Combination } from 'js-combinatorics/commonjs/combinatorics';
import type _CombTypes from 'js-combinatorics';

const Combination = _Combination as typeof _CombTypes.Combination;

export default e(async _input => {
	const ay = _input.split(/\r?\n/).filter(i => i.trim() !== '').map(i => +i);
	console.log(ay.length);
	const combs = new Combination(ay, 3).toArray() as [number, number, number][];
	console.log(combs.length);
	return combs.find(([a, b, c]) => a + b + c=== 2020).reduce((a, b) => a * b);
});