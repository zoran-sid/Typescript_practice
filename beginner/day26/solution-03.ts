type LoadState =
  | { status: "success"; value: string }
  | { status: "failure"; message: string };

async function failingRepository(): Promise<string> {
  await Promise.resolve();
  throw new Error("Network unavailable");
}

async function loadSafely(): Promise<LoadState> {
  try {
    const value = await failingRepository();
    return { status: "success", value };
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return { status: "failure", message };
  }
}

const state = await loadSafely();
console.log(`State: ${state.status}`);
if (state.status === "failure") console.log(`Message: ${state.message}`);
