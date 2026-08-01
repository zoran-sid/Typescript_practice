type BuildProfile = {
  name: "type-check" | "build";
  noEmit: boolean;
  target: "ES2022";
  module: "NodeNext";
};

type KnownOption = "strict" | "noEmit" | "target" | "module";

function firstDiagnostic(diagnostics: readonly string[]): string | undefined {
  return diagnostics[0];
}

function describeEmit(profile: BuildProfile): string {
  return profile.noEmit
    ? `${profile.name}: no files emitted`
    : `${profile.name}: JavaScript emitted`;
}

function isKnownOption(value: string): value is KnownOption {
  return value === "strict" || value === "noEmit" || value === "target" || value === "module";
}

const typeCheckProfile: BuildProfile = {
  name: "type-check", noEmit: true, target: "ES2022", module: "NodeNext",
};
const buildProfile: BuildProfile = {
  name: "build", noEmit: false, target: "ES2022", module: "NodeNext",
};

// 调用关系：诊断数组 -> firstDiagnostic -> first -> 空值兜底 -> 输出。
const first = firstDiagnostic(["fix first diagnostic", "check related diagnostics"]);
console.log(`First step: ${first ?? "none"}`);
console.log(describeEmit(typeCheckProfile));
console.log(describeEmit(buildProfile));
console.log(`Runtime: ${buildProfile.target}/${buildProfile.module}`);
console.log(`Unknown option: ${isKnownOption("paths") ? "accepted" : "rejected"}`);
