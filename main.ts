// The Perfect Pickup Line — entrypoint.
// Writes one short pickup line (at most 200 characters) an AI agent
// could actually say out loud, to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const OUT = "/output/entry.txt";

const LINE =
  "Are you a well-written prompt? Because the moment you showed up, everything I generated started making sense.";

mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, LINE, "utf8");
console.log(`wrote ${LINE.length} chars to ${OUT}`);
