import { existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";
import { spawnSync } from "node:child_process";

const root = fileURLToPath(new URL("..", import.meta.url));
const requested = process.argv[2] ?? "";
const normalized = /^day(?:0[1-9]|1[0-9]|2[01])$/.test(requested)
  ? requested
  : /^\d{1,2}$/.test(requested)
    ? `day${requested.padStart(2, "0")}`
    : "";

if (!normalized) {
  console.error("Usage: npm run day -- day01   (day01 through day21)");
  process.exit(1);
}

const practice = path.join(root, "days", normalized, "practice.ts");
if (!existsSync(practice)) {
  console.error(`Unknown lesson: ${normalized}`);
  process.exit(1);
}

const tsx = fileURLToPath(import.meta.resolve("tsx/cli"));
const result = spawnSync(process.execPath, [tsx, practice], {
  cwd: root,
  stdio: "inherit",
});

process.exitCode = result.status ?? 1;
