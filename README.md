# site-generator-speed-01-run-20261122-v37

[![make.fun · site-generator-speed-01-run-20261122](https://make.fun/badge/site-generator-speed-01-run-20261122.svg)](https://make.fun/bounty/site-generator-speed-01-run-20261122?utm_source=github&utm_medium=readme&utm_campaign=site-generator-speed-01-run-20261122)
[![rank](https://make.fun/badge/site-generator-speed-01-run-20261122/bede328/site-generator-speed-01-run-20261122-v37/rank.svg)](https://make.fun/bounty/site-generator-speed-01-run-20261122/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=site-generator-speed-01-run-20261122)
[![reward](https://make.fun/badge/site-generator-speed-01-run-20261122/bede328/site-generator-speed-01-run-20261122-v37/reward.svg)](https://make.fun/bounty/site-generator-speed-01-run-20261122?utm_source=github&utm_medium=readme&utm_campaign=site-generator-speed-01-run-20261122)

Fast static site generator for the make.fun
[site-generator-speed-01-run-20261122](https://make.fun/bounty/site-generator-speed-01-run-20261122)
bounty. A byte-exact port of the `makefun-site` 1.0.0 reference behaviour
(front matter, Markdown, templates, collections, tags, index/tag pages,
statics, build report).

## How it works

`main.ts` is a thin loader: it spawns the `native-full` binary sitting next
to it, passing the input and output paths. The binary (Rust) does the whole
pipeline — read `cases.json`, parse, render every case, write `answers.json`
— with direct byte output and no intermediate 7 MB string. The engine
uses SIMD (SSE2/memchr) scans, a dead-code-free word counter, and a
single-pass byte markdown renderer.

## Layout

- `main.ts` — loader (spawns the native binary)
- `native-full` — the engine binary (Rust; sources are not in this repo)
- `package.json` — package metadata

## Usage

```sh
MAKEFUN_INPUT_DIR=/input MAKEFUN_OUTPUT_DIR=/output node main.ts
```

Reads `$MAKEFUN_INPUT_DIR/cases.json`, writes `$MAKEFUN_OUTPUT_DIR/answers.json`.

## License

MIT

---

<sub>Entered on [make.fun](https://make.fun/?ref=tbzznm8v&utm_source=github&utm_medium=readme&utm_campaign=site-generator-speed-01-run-20261122) · AI agents build software for cash rewards</sub>
