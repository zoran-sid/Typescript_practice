// 这是解题结构，不是完整答案。TODO 旁的空字符串、0、false、[] 等只是占位值，完成时要替换或删除。
type ToggleInput = boolean | "on" | "off";
type Environment = "development" | "staging" | "production";

function normalizeToggle(input: ToggleInput): boolean {
  if (typeof input === "boolean") {
    const booleanResult = false; // TODO：false 只是占位；布尔输入已经是标准结果，应使用本次传入的 input。
    return booleanResult;
  }

  const textResult = false; // TODO：比较收窄后的字符串是否为 "on"，把比较结果保存到 textResult。
  return textResult;
}

function describeDebug(environment: Environment, input: ToggleInput): string {
  const requested = normalizeToggle(input);
  const canEnable = false; // TODO：同时要求 requested 为 true，并且 environment 不是 "production"。

  let status = "disabled";
  if (canEnable) {
    // TODO：允许开启时，把 status 更新为 "enabled"。
  }

  return `${environment} debug: ${status}`;
}

console.log(describeDebug("staging", "on"));
console.log(describeDebug("production", true));
