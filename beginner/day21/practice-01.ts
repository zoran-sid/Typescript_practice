async function fetchUserName(): Promise<string> {
  await Promise.resolve();
  return "小夏";
}

const name = fetchUserName();
console.log(`用户: ${String(name)}`);
