import { complete, equal } from "../src/shared/check.js";

type BuildState =
  | { kind: "planned"; nextStep: string }
  | { kind: "building"; completedTasks: number; totalTasks: number }
  | { kind: "completed"; verifiedAt: string };

function assertNever(value: never): never {
  throw new Error(`Unhandled state: ${JSON.stringify(value)}`);
}
function describeState(state: BuildState): string {
  switch (state.kind) {
    case "planned":
      return `PLANNED · ${state.nextStep}`;
    case "building":
      return `BUILDING · ${state.completedTasks}/${state.totalTasks}`;
    case "completed":
      return `COMPLETED · ${state.verifiedAt}`;
    default:
      return assertNever(state);
  }
}
function canFeature(state: BuildState): boolean {
  return state.kind === "completed" && state.verifiedAt.length > 0;
}
equal(
  describeState({ kind: "planned", nextStep: "Define API" }),
  "PLANNED · Define API",
  "planned",
);
equal(
  describeState({ kind: "building", completedTasks: 3, totalTasks: 8 }),
  "BUILDING · 3/8",
  "building",
);
equal(
  describeState({ kind: "completed", verifiedAt: "2026-07-15" }),
  "COMPLETED · 2026-07-15",
  "completed",
);
equal(
  canFeature({ kind: "building", completedTasks: 8, totalTasks: 8 }),
  false,
  "not verified",
);
complete("day06 solution");
