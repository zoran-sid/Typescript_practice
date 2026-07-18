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

    throw new Error("用户资料不完整");
  } catch (error: unknown) {
    throw new Error("加载用户资料失败", { cause: error });
  }
}

for (const raw of ['{"name":"小林"}', "{格式错误}"]) {
  try {
    console.log(`用户: ${loadProfile(raw).name}`);
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "未知错误";
    console.log(`上层收到: ${message}`);
  }
}
