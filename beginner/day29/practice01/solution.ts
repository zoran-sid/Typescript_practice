type FeatureConfig = { darkMode: string; retries: number };
type Flags<T> = { [Key in keyof T]: boolean };
type ElementOf<T> = T extends readonly (infer Item)[] ? Item : never;
type Events = { ready: { at: number }; failed: { message: string } };
type Handlers<T> = {
  [Key in keyof T as `on${Capitalize<Key & string>}`]: (payload: T[Key]) => void;
};

declare const userIdBrand: unique symbol;
type UserId = string & { readonly [userIdBrand]: true };

function createUserId(value: string): UserId {
  if (!value.startsWith("usr_") || value.length <= 4) {
    throw new Error("UserId must start with usr_ and include an identifier");
  }
  return value as UserId;
}

function profilePath(id: UserId): string { return `/users/${id}`; }

const flags: Flags<FeatureConfig> = { darkMode: true, retries: false };
const topics = ["types", "modules"] as const;
type Topic = ElementOf<typeof topics>;
const selected: Topic = "modules";
const handlers: Handlers<Events> = {
  onReady(payload) { console.log(`Ready at ${payload.at}`); },
  onFailed(payload) { console.log(`Failed: ${payload.message}`); },
};

console.log(`Flags: dark=${flags.darkMode}, retries=${flags.retries}`);
console.log(`Selected: ${selected}`);
// 调用关系：固定事件负载 -> 对应 handler 回调 -> handler 读取负载并输出。
handlers.onReady({ at: 29 });
handlers.onFailed({ message: "invalid" });

// 调用关系：普通字符串 -> createUserId 校验 -> UserId -> profilePath -> 输出。
const userId = createUserId("usr_42");
console.log(profilePath(userId));
