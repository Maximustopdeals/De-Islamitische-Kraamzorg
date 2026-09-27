import { cpSync, existsSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const out = join(root, "out");
const dist = join(root, "dist");

if (!existsSync(out)) {
  console.error("out/ niet gevonden — is 'next build' geslaagd?");
  process.exit(1);
}

rmSync(dist, { recursive: true, force: true });
cpSync(out, dist, { recursive: true });

// Voeg .nojekyll toe voor GitHub Pages
writeFileSync(join(dist, ".nojekyll"), "");
console.log("dist/ is bijgewerkt vanuit out/ (+ .nojekyll)");
