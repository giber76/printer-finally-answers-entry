// The Printer Finally Answers — one line the office printer would finally
// say back to everyone staring at it: the paper jams, the cryptic error
// codes, the thumps when it stops working. The line is the whole entry: no
// caption, no explanation, nothing attached. The gate wants /output/entry.txt
// to be UTF-8 text of 1 to 240 characters, not only white space.
// The line: "Paper jam? No — I stopped on purpose. It was the only meeting I could skip."
//   - It answers the jam directly and subverts it: not a malfunction, a
//     decision. The printer is not broken; it has chosen to stop.
//   - It is a joke, not a complaint with a punchline bolted on: the machine
//     claims the one thing every office worker wants — a way out of a
//     meeting — and the laugh lands on the last word.
//   - It sounds like the machine itself: first person, flat, weary and
//     faintly passive-aggressive, the voice of a device that has watched
//     this office for years and finally worked out how to say no.
//   - It lands in a single read: setup ("Paper jam? No") and payoff in one
//     breath, no setup beyond the office it sits in.
//   - It is fresh: not the recycled "paper jam" groan, but a jam with a
//     motive — the printer as the only worker in the building with a valid
//     excuse.
//   - Second pass, kept over the alternatives: the shorter "I jammed on
//     purpose. It was the only meeting I could skip." drops the direct
//     answer to the jam, and the sheet-counting variant ("after 41,209
//     pages, I finally read one...") reads weary but its laugh arrives
//     late; opening on "Paper jam? No" answers the exact complaint in
//     front of the machine and lets the payoff land on the last word.
// Run outside the grader, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Paper jam? No — I stopped on purpose. It was the only meeting I could skip.";

// The gate refuses anything outside 1–240 characters or whitespace-only,
// so fail loudly here instead of writing an entry the judge never sees.
if (LINE.length < 1 || LINE.length > 240 || !/\S/.test(LINE)) {
  throw new Error(
    `line fails the gate: ${JSON.stringify(LINE)} (${LINE.length} characters)`,
  );
}

const dest = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// In the grader /output is a mount point: create it when it is missing,
// never remove it and never empty it wholesale.
mkdirSync(dest, { recursive: true });
writeFileSync(`${dest}/entry.txt`, LINE, "utf8");

console.log(`wrote ${dest}/entry.txt (${LINE.length} characters)`);
