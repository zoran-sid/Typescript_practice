import { complete, equal } from "../src/shared/check.js";

function formatLabStatus(
  isOnline: boolean,
  name: string,
  build: number,
): string {
  return `${isOnline ? "ONLINE" : "OFFLINE"} · ${name} · BUILD ${build}`;
}

function sumPacketSamples(samples: readonly string[]): number {
  return samples.reduce((total, sample) => {
    const value = Number(sample);
    if (!Number.isFinite(value))
      throw new Error(`Invalid packet sample: ${sample}`);
    return total + value;
  }, 0);
}

equal(
  formatLabStatus(true, "WEB3 LAB", 7),
  "ONLINE · WEB3 LAB · BUILD 7",
  "formats the status",
);
equal(sumPacketSamples(["12", "8"]), 20, "adds samples");
complete("day01 solution");
