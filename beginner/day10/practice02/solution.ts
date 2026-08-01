type ToggleInput = boolean | "on" | "off";
type Environment = "development" | "staging" | "production";

function normalizeToggle(input: ToggleInput): boolean {
  if (typeof input === "boolean") {
    // 已经是 boolean 时，原样交回调用处。
    return input;
  }
  // 字符串分支中，只有 "on" 会得到 true。
  return input === "on";
}

function describeDebug(
  environment: Environment,
  input: ToggleInput,
): string {
  // 调用关系：input -> normalizeToggle -> requested。
  const requested = normalizeToggle(input);
  const canEnable =
    requested && environment !== "production";

  let status = "disabled";
  if (canEnable) {
    status = "enabled";
  }

  return `${environment} debug: ${status}`;
}

// 调用关系：环境与开关 -> describeDebug -> 返回文字 -> console.log。
console.log(describeDebug("staging", "on"));
console.log(describeDebug("production", true));
