type Settings = { theme: "light" | "dark"; pageSize: number };
type Flags<T> = {
  // TODO 1：把每个来源键转换成 boolean 标记。
  [Key in keyof T]: unknown;
};
type ElementOf<T> = T extends readonly unknown[]
  ? unknown // TODO 2：用 infer 提取数组元素。
  : never;
type HandlerName<Name extends string> = string; // TODO 3：生成 on + Capitalize<Name>。
type AwaitedValue<T> = unknown; // TODO 4：从 Promise 中提取值，否则保留 T。
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
