import { writeFileSync, unlinkSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { tmpdir } from "node:os";
import { execFileSync } from "node:child_process";
import sharp from "sharp";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const src = join(root, "src", "assets", "logo.png");
const out = join(root, "public", "favicon.ico");
const tmp = join(tmpdir(), `elaneeru-favicon-${Date.now()}.png`);

await sharp(src)
  .resize(256, 256, {
    fit: "contain",
    background: { r: 0, g: 0, b: 0, alpha: 0 },
  })
  .png()
  .toFile(tmp);

const npx = process.platform === "win32" ? "npx.cmd" : "npx";
let icoBuf;
try {
  icoBuf = execFileSync(npx, ["--yes", "png-to-ico", tmp], {
    encoding: "buffer",
    maxBuffer: 10 * 1024 * 1024,
    windowsHide: true,
  });
} catch (e) {
  console.error(e);
  process.exit(1);
} finally {
  try {
    unlinkSync(tmp);
  } catch {
    /* ignore */
  }
}

writeFileSync(out, icoBuf);
console.log("Wrote", out);
