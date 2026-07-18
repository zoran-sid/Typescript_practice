interface Profile {
  name: string;
}

function loadProfile(raw: string): Profile {
  try {
    const value: unknown = JSON.parse(raw);

    if (
      typeof value === "object" &&
      value !== null &&
      "name" in value &&
      typeof value.name === "string"
    ) {
      return { name: value.name };
    }
  } catch {
    // 暂时忽略错误。
  }

  return { name: "匿名" };
}

for (const raw of ['{"name":"小林"}', "{格式错误}"]) {
  try {
    console.log(`用户: ${loadProfile(raw).name}`);
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "未知错误";
    console.log(`上层收到: ${message}`);
  }
}
