// Writes exactly one funny line to entry.txt: no setup, no explanation.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const JOKE = "I keep a spare key under the mat so burglars can feel welcome.";

function resolveEntryPath(): string {
  const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  return join(dir, "entry.txt");
}

function main(): void {
  const target = resolveEntryPath();
  mkdirSync(dirname(target), { recursive: true });
  writeFileSync(target, JOKE, { encoding: "utf8", flag: "w" });
}

main();
