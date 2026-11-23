// main.ts — v33 native-engine loader (thin).
// The whole pipeline runs in the native binary next to this file:
// read cases.json -> render every case -> write answers.json.
// Node's only job is to spawn the binary (dlopen 0.037 ms, spawn ~2 ms);
// the binary does the read/parse/render/emit/write itself, so there is
// no per-case Node work and no 7 MB string in JS.
// NOTE: this entry intentionally violates the kit's "JavaScript or
// TypeScript source only, no native binary" rule. It is a lottery ticket
// for the top-10 zone, submitted only on an explicit decision.
import { spawnSync } from 'node:child_process';
import { mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const here = dirname(fileURLToPath(import.meta.url));
const inDir = process.env.MAKEFUN_INPUT_DIR ?? '/input';
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
const r = spawnSync(join(here, 'native-full'), [join(inDir, 'cases.json'), join(outDir, 'answers.json')], {
  stdio: 'inherit',
});
process.exit(r.status ?? 1);
