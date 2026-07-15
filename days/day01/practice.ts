import { complete, equal } from "../../src/shared/check.js";

const labName: string = "WEB3 LAB";
const online: boolean = true;
const buildNumber: number = 7;
const deploymentId: bigint = 9_007_199_254_740_993n;
const statusChannel: symbol = Symbol("lab-status");
const lastError: null = null;
let lastVerified: string | undefined;

void deploymentId;
void statusChannel;
void lastError;
void lastVerified;

export function formatLabStatus(
  isOnline: boolean,
  name: string,
  build: number,
): string {
  void isOnline;
  void name;
  void build;
  throw new Error("TODO: implement formatLabStatus");
}

export function sumPacketSamples(samples: readonly string[]): number {
  // BUG: this converts the concatenated text, so ["12", "8"] becomes 128.
  return Number(samples.join(""));
}

equal(
  formatLabStatus(online, labName, buildNumber),
  "ONLINE · WEB3 LAB · BUILD 7",
  "formats primitive values without implicit coercion surprises",
);
equal(sumPacketSamples(["12", "8"]), 20, "adds numeric text as numbers");

complete("day01");
