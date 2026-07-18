type ElementOf<T> = T extends readonly (infer Item)[] ? Item : never;

const topics = ["types", "modules"] as const;
type Topic = ElementOf<typeof topics>;

const selected: Topic = "modules";
console.log(`Selected: ${selected}`);
