import { readdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";
import { spawnSync } from "node:child_process";

const root = fileURLToPath(new URL("..", import.meta.url));
const solutionDirectory = path.join(root, "solutions");
const tsx = fileURLToPath(import.meta.resolve("tsx/cli"));
const files = readdirSync(solutionDirectory)
  .filter((file) => /^day\d{2}\.ts$/.test(file))
  .sort();

for (const file of files) {
  const result = spawnSync(
    process.execPath,
    [tsx, path.join(solutionDirectory, file)],
    {
      cwd: root,
      stdio: "inherit",
    },
  );
  if (result.status !== 0) process.exit(result.status ?? 1);
}

console.log(`PASS verified ${files.length} reference solutions`);
