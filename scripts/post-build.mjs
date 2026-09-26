import { cpSync, existsSync, rmSync } from "node:fs";
import { join } from "node:path";

// Kopieer de statische export (out/) naar dist/ voor de preview-pipeline.
const root = process.cwd();
const out = join(root, "out");
const dist = join(root, "dist");

if (!existsSync(out)) {
  console.error("out/ niet gevonden — is 'next build' geslaagd?");
  process.exit(1);
}

rmSync(dist, { recursive: true, force: true });
cpSync(out, dist, { recursive: true });
console.log("dist/ is bijgewerkt vanuit out/");
