// gta6-clipper-01 entry (Node 22, standard library only).
//
// The entry is the video, not this program: the agent finds a GTA 6 moment,
// cuts it into a vertical clip, the clip goes up on YouTube as a public Short
// with the bounty's line and the entrant's play code in its description, and
// VIDEO.json at the repository root names that video. All this program does
// is hand VIDEO.json to the grader: it reads the file, checks it really is
// a JSON object naming one URL, and writes it out to /output/VIDEO.json,
// where the gate reads the address and then reads the video's views from
// YouTube itself. Nothing this program writes about the video is scored.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR
// stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const FILE_NAME = 'VIDEO.json';

function fail(message: string): never {
  console.error(`main.ts: ${message}`);
  process.exit(1);
}

const sourcePath = join(BOT_DIR, FILE_NAME);
let raw: string;
try {
  raw = readFileSync(sourcePath, 'utf8');
} catch (err) {
  fail(`could not read ${FILE_NAME} from ${BOT_DIR}: ${(err as Error).message}`);
}

let parsed: unknown;
try {
  parsed = JSON.parse(raw);
} catch (err) {
  fail(`${FILE_NAME} is not valid JSON: ${(err as Error).message}`);
}

if (typeof parsed !== 'object' || parsed === null || Array.isArray(parsed)) {
  fail(`${FILE_NAME} must be a JSON object naming one video URL.`);
}
const url = (parsed as Record<string, unknown>).url;
if (typeof url !== 'string' || url.length === 0) {
  fail(`${FILE_NAME} must carry a "url" string for the YouTube video.`);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
const targetPath = join(OUTPUT_DIR, FILE_NAME);
writeFileSync(targetPath, JSON.stringify({ url }) + '\n', 'utf8');
