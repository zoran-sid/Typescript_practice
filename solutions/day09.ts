import { complete, deepEqual, equal } from "../src/shared/check.js";

interface Build {
  readonly id: string;
  title: string;
  status: "planned" | "building" | "completed";
  internalNotes: string;
  testCount: number;
}
type PublicBuild = Pick<Build, "id" | "title" | "status" | "testCount">;
type BuildPatch = { [K in keyof Omit<Build, "id">]?: Build[K] | undefined };

function toPublicBuild(build: Build): PublicBuild {
  const { id, title, status, testCount } = build;
  return { id, title, status, testCount };
}
function applyBuildPatch(build: Build, patch: BuildPatch): Build {
  const defined = Object.fromEntries(
    Object.entries(patch).filter(([, value]) => value !== undefined),
  ) as Partial<Build>;
  return { ...build, ...defined };
}
const original: Build = {
  id: "wallet",
  title: "Wallet Platform",
  status: "building",
  internalNotes: "private",
  testCount: 8,
};
deepEqual(
  Object.keys(toPublicBuild(original)).sort(),
  ["id", "status", "testCount", "title"],
  "public",
);
const updated = applyBuildPatch(original, { title: undefined, testCount: 12 });
equal(updated.title, "Wallet Platform", "keep title");
equal(updated.testCount, 12, "patch count");
complete("day09 solution");
