async function loadUser(): Promise<string> {
  await Promise.resolve();
  return "Ada";
}

async function loadTaskCount(): Promise<number> {
  await Promise.resolve();
  return 3;
}

async function loadPanel(): Promise<{ user: string; taskCount: number }> {
  // TODO：两个调用互不依赖，用 Promise.all 同时等待。
  return { user: "unknown", taskCount: 0 };
}

const panel = await loadPanel();
console.log(`User: ${panel.user}`);
console.log(`Tasks: ${panel.taskCount}`);
