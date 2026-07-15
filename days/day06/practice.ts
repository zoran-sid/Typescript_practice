import { complete, equal } from "../../src/shared/check.js";

export const BUILD_STATUSES = ["planned", "building", "completed"] as const;
export type BuildStatus = (typeof BUILD_STATUSES)[number];

type BuildState =
  | { kind: "planned"; nextStep: string }
  | { kind: "building"; completedTasks: number; totalTasks: number }
  | { kind: "completed"; verifiedAt: string };

function assertNever(value: never): never {
  throw new Error(`Unhandled state: ${JSON.stringify(value)}`);
}

export function describeState(state: BuildState): string {
  switch (state.kind) {
    case "planned":
      void state;
      throw new Error("TODO: describe the planned state");
    case "building":
      throw new Error("TODO: describe progress as completed/total");
    case "completed":
      throw new Error("TODO: include the verification date");
    default:
      return assertNever(state);
  }
}

export function canFeature(state: BuildState): boolean {
  // BUG: work in progress is not verified evidence.
  return state.kind !== "planned";
}

equal(
  describeState({ kind: "planned", nextStep: "Define API" }),
  "PLANNED · Define API",
  "planned branch",
);
equal(
  describeState({ kind: "building", completedTasks: 3, totalTasks: 8 }),
  "BUILDING · 3/8",
  "building branch",
);
equal(
  describeState({ kind: "completed", verifiedAt: "2026-07-15" }),
  "COMPLETED · 2026-07-15",
  "completed branch",
);
equal(
  canFeature({ kind: "building", completedTasks: 8, totalTasks: 8 }),
  false,
  "does not feature unverified work",
);
equal(
  canFeature({ kind: "completed", verifiedAt: "2026-07-15" }),
  true,
  "features verified completion",
);
complete("day06");
