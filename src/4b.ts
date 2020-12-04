import e from './tools/main';

export default e(async _input => {
	return (
		_input
			.split(/\n\n/)
			.filter(i => (/(?=.*(?:^| |\n)(byr:(?:19[2-9]\d|200[0-2]))(?:$| |\n))(?=.*(?:^| |\n)(iyr:20(?:1\d|20))(?:$| |\n))(?=.*(?:^| |\n)(eyr:20(?:2\d|30))(?:$| |\n))(?=.*(?:^| |\n)(hgt:(?:1(?:[5-8]\d|9[0-3])cm|(?:59|6\d|7[0-6])in))(?:$| |\n))(?=.*(?:^| |\n)(hcl:#[\da-f]{6})(?:$| |\n))(?=.*(?:^| |\n)(ecl:(?:amb|blu|brn|gry|grn|hzl|oth))(?:$| |\n))(?=.*(?:^| |\n)(pid:\d{9})(?:$| |\n))/s).test(i))
			.length
	);
});