# Advent Of Code TypeScript Template

## Usage

```sh
git clone https://github.com/RubenVerg/AoC-template/ aoc
npm install -g typescript ts-node # if needed
cd aoc
```

### To run a day (or more)

```sh
ts-node . {days}
```

where `days` is a space-separated list of `{1..25}{a|b}` (or `0`, for a test)
eg `7a` or `23a 23b 24a 24b`

### Input

The `data` folder contains 25 (26, really) files. They are currently empty. If they're empty at runtime, their content is automatically fetched from the AoC site. (please set `src/tools/token.ts` to export your `session` cookie) or fill them with the related day's input (for testing etc).

### Code

The `src` folder contains 50 day files (`1a.ts` to `25b.ts`) plus some other files you shouldn't really worry about, all days contain some pre-defined code. Example (day `0`):

```ts
import e from './tools/main';

export default e(async _input => {
  return _input.split(/\r?\n/).map(line => line.length).reduce((a, b) => a + b);
});
```

The only thing you need to edit is inside `async _input => {}`, that's where stuff happens. Return the day's output and console-log any debug information. The functions is declared `async` so you can easily `await` all the async stuff around the web. `_input` is a `string`.

## Contributions

Check out some issues!
