async function loadUser(): Promise<string> {
  await Promise.resolve();
  return "Ada";
}

async function loadTaskCount(): Promise<number> {
  await Promise.resolve();
  return 3;
}

async function loadPanel(): Promise<{ user: string; taskCount: number }> {
  const [user, taskCount] = await Promise.all([loadUser(), loadTaskCount()]);
  return { user, taskCount };
}

const panel = await loadPanel();
console.log(`User: ${panel.user}`);
console.log(`Tasks: ${panel.taskCount}`);
