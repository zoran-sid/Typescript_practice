type LoadState =
  | { status: "success"; value: string }
  | { status: "failure"; message: string };

async function failingRepository(): Promise<string> {
  await Promise.resolve();
  throw new Error("Network unavailable");
}

async function loadSafely(): Promise<LoadState> {
  // TODO：调用并等待仓库；catch 中把 unknown 错误变成失败状态。
  return { status: "failure", message: "Not attempted" };
}

const state = await loadSafely();
console.log(`State: ${state.status}`);
if (state.status === "failure") console.log(`Message: ${state.message}`);
