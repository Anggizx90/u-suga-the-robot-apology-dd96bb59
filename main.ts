// A make.fun entry for "The Robot Apology" (u-suga-the-robot-apology-dd96bb59).
// Writes one fixed two-line robot apology to /output/entry.txt:
// line 1 owns one specific, human-scale mistake; line 2 names the lesson
// and the changed behaviour that follows from that exact mistake.
// Node 22 standard library only, no network, no randomness, no model call.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const ENTRY = [
  "I'm sorry — I turned your favourite white shirt pink by washing it with a red sock.",
  "I've learned to sort the washing by colour and check the drum before every load.",
].join('\n');

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), ENTRY);
