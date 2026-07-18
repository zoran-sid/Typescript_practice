type Options = { day: number; mode: "practice" | "example" };

function valueAfter(args: readonly string[], flag: string): string | undefined {
  const index = args.indexOf(flag);
  return index < 0 ? undefined : args[index + 1];
}

function parseArgs(args: readonly string[]): Options {
  const rawDay = valueAfter(args, "--day");
  const parsedDay = rawDay === undefined ? Number.NaN : Number(rawDay);
  const day = Number.isInteger(parsedDay) && parsedDay >= 0 ? parsedDay : 0;

  const rawMode = valueAfter(args, "--mode");
  const mode = rawMode === "example" ? "example" : "practice";
  return { day, mode };
}

const options = parseArgs(["--day", "27", "--mode", "example"]);
const defaults = parseArgs([]);
console.log(`Day: ${options.day}`);
console.log(`Mode: ${options.mode}`);
console.log(`Defaults: ${defaults.day}/${defaults.mode}`);
