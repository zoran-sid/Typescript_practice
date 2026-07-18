import { spawnSync } from "node:child_process";
import { readdirSync } from "node:fs";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";

const beginnerRoot = fileURLToPath(new URL("..", import.meta.url));
const runner = fileURLToPath(new URL("./run.mjs", import.meta.url));
const requested = process.argv[2] ?? "";
const allDays = discoverDays();
const requestedDay = requested ? normalizeDay(requested) : "";

if (process.argv.length > 3 || (requested && !requestedDay)) {
  console.error("用法：npm run beginner:verify");
  console.error("只验证一天：npm run beginner:verify -- day10");
  process.exitCode = 1;
} else if (allDays.length === 0) {
  console.error("没有发现 day00–day99 格式的课程目录。");
  process.exitCode = 1;
} else if (requestedDay && !allDays.includes(requestedDay)) {
  console.error(`没有找到 ${requestedDay} 的课程目录。`);
  console.error(`当前课程：${allDays[0]} 至 ${allDays.at(-1)}。`);
  process.exitCode = 1;
} else {
  const days = requestedDay ? [requestedDay] : allDays;
  const failures = [];

  for (const day of days) {
    for (const [mode, exercise] of [
      ["example", ""],
      ["solution", "all"],
    ]) {
      const result = run(mode, day, exercise);
      if (result.ok) {
        console.log(`✓ ${day} ${mode}`);
      } else {
        console.error(`\n✗ ${day} ${mode}`);
        if (result.message) console.error(result.message);
        if (result.stdout.trim()) console.error(result.stdout.trimEnd());
        if (result.stderr.trim()) console.error(result.stderr.trimEnd());
        failures.push(`${day} ${mode}`);
      }
    }
  }

  if (failures.length > 0) {
    console.error(`\nFAIL：${failures.length} 项未通过：${failures.join("、")}。`);
    process.exitCode = 1;
  } else {
    console.log(`\nPASS：${formatRange(days)} 的示例和参考答案全部通过。`);
  }
}

function run(mode, day, exercise) {
  const args = [runner, mode, day];
  if (exercise) args.push(exercise);
  const result = spawnSync(process.execPath, args, {
    cwd: path.dirname(beginnerRoot),
    encoding: "utf8",
    timeout: 120_000,
    maxBuffer: 1024 * 1024,
    windowsHide: true,
  });

  if (result.error?.code === "ETIMEDOUT") {
    return { ok: false, message: "验证超过 120 秒，已停止。", stdout: "", stderr: "" };
  }
  if (result.error?.code === "ENOBUFS") {
    return { ok: false, message: "验证输出超过限制，已停止。", stdout: "", stderr: "" };
  }
  if (result.error) {
    return { ok: false, message: result.error.message, stdout: "", stderr: "" };
  }
  return {
    ok: result.status === 0,
    message: result.status === 0 ? "" : `子进程退出码：${result.status ?? "未知"}`,
    stdout: result.stdout ?? "",
    stderr: result.stderr ?? "",
  };
}

function discoverDays() {
  try {
    return readdirSync(beginnerRoot, { withFileTypes: true })
      .filter((entry) => entry.isDirectory() && /^day\d{2}$/.test(entry.name))
      .map((entry) => entry.name)
      .sort();
  } catch {
    return [];
  }
}

function normalizeDay(input) {
  const match = /^(?:day)?(\d{1,2})$/i.exec(input.trim());
  return match ? `day${match[1].padStart(2, "0")}` : "";
}

function formatRange(days) {
  if (days.length === 1) return displayDay(days[0]);
  return `${displayDay(days[0])}–${days.at(-1).slice(3)}`;
}

function displayDay(day) {
  return day.replace("day", "Day ");
}
