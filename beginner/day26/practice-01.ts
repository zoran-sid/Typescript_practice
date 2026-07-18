async function fetchTitle(): Promise<string> {
  await Promise.resolve();
  return "Async TypeScript";
}

async function showTitle(): Promise<void> {
  // TODO：等待 fetchTitle，再打印真正的标题。
  const title = "not loaded";
  console.log(`Title: ${title}`);
}

await showTitle();
