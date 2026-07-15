import { complete, deepEqual, equal } from "../../src/shared/check.js";

interface CourseCompilerOptions {
  strict?: boolean;
  noUncheckedIndexedAccess?: boolean;
  exactOptionalPropertyTypes?: boolean;
  useUnknownInCatchVariables?: boolean;
}

export function strictnessWarnings(options: CourseCompilerOptions): string[] {
  void options;
  throw new Error("TODO: list every critical option that is not true");
}

export function runtimeImport(specifier: string): string {
  // BUG: Node executes emitted JavaScript, not the original .ts path.
  return specifier.endsWith(".ts") ? specifier : `${specifier}.ts`;
}

deepEqual(
  strictnessWarnings({ strict: true, noUncheckedIndexedAccess: false }),
  [
    "noUncheckedIndexedAccess",
    "exactOptionalPropertyTypes",
    "useUnknownInCatchVariables",
  ],
  "reports missing safeguards in stable order",
);
deepEqual(
  strictnessWarnings({
    strict: true,
    noUncheckedIndexedAccess: true,
    exactOptionalPropertyTypes: true,
    useUnknownInCatchVariables: true,
  }),
  [],
  "accepts the strict profile",
);
equal(
  runtimeImport("./project-models"),
  "./project-models.js",
  "uses the runtime ESM extension",
);
equal(
  runtimeImport("./check.js"),
  "./check.js",
  "does not duplicate an extension",
);
complete("day18");
