import { complete, deepEqual, equal } from "../../src/shared/check.js";

interface Build {
  readonly id: string;
  title: string;
  status: "planned" | "building" | "completed";
  internalNotes: string;
  testCount: number;
}

type PublicBuild = Pick<Build, "id" | "title" | "status" | "testCount">;
type BuildPatch = {
  [K in keyof Omit<Build, "id">]?: Build[K] | undefined;
};
type Resolved<T> = T extends Promise<infer Value> ? Value : T;
type ExampleResolved = Resolved<Promise<PublicBuild>>;

export function toPublicBuild(build: Build): PublicBuild {
  void build;
  throw new Error("TODO: return only public fields");
}

export function applyBuildPatch(build: Build, patch: BuildPatch): Build {
  // BUG: an external patch with title: undefined erases a required value.
  return { ...build, ...patch } as Build;
}

const original: Build = {
  id: "wallet",
  title: "Wallet Platform",
  status: "building",
  internalNotes: "private design notes",
  testCount: 8,
};
const publicView: ExampleResolved = toPublicBuild(original);
deepEqual(
  Object.keys(publicView).sort(),
  ["id", "status", "testCount", "title"],
  "does not leak internal fields",
);
const updated = applyBuildPatch(original, { title: undefined, testCount: 12 });
equal(
  updated.title,
  "Wallet Platform",
  "undefined does not erase a required field",
);
equal(updated.testCount, 12, "defined patch values are applied");
complete("day09");
