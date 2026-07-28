// 这是解题结构，不是完整答案。TODO 旁的空字符串、0、false、[] 等只是占位值，完成时要替换或删除。
type BuildProfile = {
  name: "type-check" | "build";
  noEmit: boolean;
  target: "ES2022";
  module: "NodeNext";
};
type KnownOption = "strict" | "noEmit" | "target" | "module";
function firstDiagnostic(diagnostics: readonly string[]): string | undefined {
  // TODO 1：返回 diagnostics 的第一项；空数组返回 undefined。
  // 下面的 undefined 目前忽略了非空输入。
  return undefined;
}
function describeEmit(profile: BuildProfile): string {
  // TODO 2：根据 profile.noEmit 返回“名称: no files emitted”或
  // “名称: JavaScript emitted”。空字符串没有使用 profile，只是占位。
  return "";
}
function isKnownOption(value: string): value is KnownOption {
  // TODO 3：只在 value 为 strict/noEmit/target/module 之一时返回 true。
  // false 是全拒绝占位，不能保留为最终逻辑。
  return false;
}
const typeCheckProfile: BuildProfile = {
  name: "type-check", noEmit: true, target: "ES2022", module: "NodeNext",
};
const buildProfile: BuildProfile = {
  name: "build", noEmit: false, target: "ES2022", module: "NodeNext",
};
const first = firstDiagnostic(["fix first diagnostic", "check related diagnostics"]);
console.log(`First step: ${first ?? "none"}`);
console.log(describeEmit(typeCheckProfile));
console.log(describeEmit(buildProfile));
console.log(`Runtime: ${buildProfile.target}/${buildProfile.module}`);
console.log(`Unknown option: ${isKnownOption("paths") ? "accepted" : "rejected"}`);
