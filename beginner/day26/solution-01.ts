async function fetchTitle(): Promise<string> {
  await Promise.resolve();
  return "Async TypeScript";
}

async function showTitle(): Promise<void> {
  const title = await fetchTitle();
  console.log(`Title: ${title}`);
}

await showTitle();
