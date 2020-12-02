import e from './tools/main';
import { Combination as _Combination } from 'js-combinatorics/commonjs/combinatorics';
import type _CombTypes from 'js-combinatorics';

const Combination = _Combination as typeof _CombTypes.Combination;

export default e(async _input => {
	return (new Combination(_input.split(/\r?\n/).map(i => +i), 2).toArray() as [number, number][]).find(([a, b]) => a + b === 2020).reduce((a, b) => a * b);
});