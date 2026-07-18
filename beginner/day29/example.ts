type Settings = {
  theme: "light" | "dark";
  pageSize: number;
};

type Flags<T> = { [Key in keyof T]: boolean };
type ElementOf<T> = T extends readonly (infer Item)[] ? Item : never;
type HandlerName<Name extends string> = `on${Capitalize<Name>}`;
type AwaitedValue<T> = T extends Promise<infer Value> ? Value : T;

const flags: Flags<Settings> = { theme: true, pageSize: false };
const topics = ["types", "modules", "async"] as const;
type Topic = ElementOf<typeof topics>;
type ReadyHandler = HandlerName<"ready">;
type LoadedTitle = AwaitedValue<Promise<string>>;

const topic: Topic = "modules";
const handler: ReadyHandler = "onReady";
const title: LoadedTitle = "Advanced types";

console.log(`Flags: ${flags.theme}/${flags.pageSize}`);
console.log(`Topic: ${topic}`);
console.log(`Handler: ${handler}`);
console.log(`Title: ${title}`);
