// 这是解题结构，不是完整答案。TODO 旁的空字符串、0、false、[] 等只是占位值，完成时要替换或删除。
type Settings = { theme: "light" | "dark"; pageSize: number };
type Flags<T> = {
  // TODO 1：保留 Settings 的每个 Key，把右侧 unknown 占位类型替换为 boolean；
  // 最终 flags 仍必须同时包含 theme 和 pageSize。
  [Key in keyof T]: unknown;
};
type ElementOf<T> = T extends readonly unknown[]
  ? unknown // TODO 2：在 readonly 数组结构里用 infer 命名元素类型，并替换此 unknown 占位。
  : never;
// TODO 3：把 string 占位改成由 `on` 与 Capitalize<Name> 组成的模板字面量类型；
// 例如输入 ready 时，类型结果只允许 onReady。
type HandlerName<Name extends string> = string;
// TODO 4：把 unknown 占位改成条件类型；T 是 Promise 时用 infer 取得内部值，
// 否则保留原来的 T，使 Promise<string> 对应 string。
type AwaitedValue<T> = unknown;
const flags: Flags<Settings> = { theme: true, pageSize: false };
const topics = ["types", "modules", "async"] as const;
type Topic = ElementOf<typeof topics>;
type ReadyHandler = HandlerName<"ready">;
type LoadedTitle = AwaitedValue<Promise<string>>;
const topic: Topic = "modules";
const handler: ReadyHandler = "onReady";
const title: LoadedTitle = "Advanced types";
console.log(`Flags: ${Object.keys(flags).join(",")}`);
console.log(`Topic: ${String(topic)}`);
console.log(`Handler: ${handler}`);
console.log(`Title: ${String(title)}`);
