type Options = { day: number; mode: "practice" | "example" };

function parseArgs(args: readonly string[]): Options {
  // TODO：读取 --day 后的数字和 --mode 后的字面量；缺失时用 day=0、practice。
  void args;
  return { day: 0, mode: "practice" };
}

const options = parseArgs(["--day", "27", "--mode", "example"]);
const defaults = parseArgs([]);
console.log(`Day: ${options.day}`);
console.log(`Mode: ${options.mode}`);
console.log(`Defaults: ${defaults.day}/${defaults.mode}`);
