import process from "node:process";

const major = Number(process.versions.node.split(".")[0]);
const checks = [];

checks.push({
  label: "Node.js",
  ok: Number.isInteger(major) && major >= 20,
  detail: process.version,
  help: "请安装 Node.js 20 或更高版本。",
});

for (const dependency of ["typescript", "tsx/cli"]) {
  try {
    import.meta.resolve(dependency);
    checks.push({
      label: dependency === "typescript" ? "TypeScript" : "tsx",
      ok: true,
      detail: "已安装",
      help: "",
    });
  } catch {
    checks.push({
      label: dependency === "typescript" ? "TypeScript" : "tsx",
      ok: false,
      detail: "未安装",
      help: "请先在项目根目录运行 npm install。",
    });
  }
}

console.log("TypeScript 零基础路线 · 环境检查\n");
for (const check of checks) {
  console.log(`${check.ok ? "✓" : "✗"} ${check.label}: ${check.detail}`);
  if (!check.ok) console.log(`  处理方法：${check.help}`);
}

if (checks.every((check) => check.ok)) {
  console.log("\nPASS：环境已经准备好，可以开始 Day 00。");
} else {
  console.log("\n环境尚未准备好。完成上面的处理方法后，请重新运行此命令。");
  process.exitCode = 1;
}
