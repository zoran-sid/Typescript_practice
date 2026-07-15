import { complete, deepEqual, equal } from "../src/shared/check.js";

interface CourseCompilerOptions {
  strict?: boolean;
  noUncheckedIndexedAccess?: boolean;
  exactOptionalPropertyTypes?: boolean;
  useUnknownInCatchVariables?: boolean;
}
const critical = [
  "strict",
  "noUncheckedIndexedAccess",
  "exactOptionalPropertyTypes",
  "useUnknownInCatchVariables",
] as const;
function strictnessWarnings(options: CourseCompilerOptions): string[] {
  return critical.filter((key) => options[key] !== true);
}
function runtimeImport(specifier: string): string {
  if (/\.[cm]?js$/.test(specifier)) return specifier;
  return specifier.replace(/\.[cm]?ts$/, "") + ".js";
}
deepEqual(
  strictnessWarnings({ strict: true, noUncheckedIndexedAccess: false }),
  [
    "noUncheckedIndexedAccess",
    "exactOptionalPropertyTypes",
    "useUnknownInCatchVariables",
  ],
  "warnings",
);
equal(runtimeImport("./project-models"), "./project-models.js", "extension");
equal(runtimeImport("./check.js"), "./check.js", "existing");
complete("day18 solution");
