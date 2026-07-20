type FeatureConfig = { darkMode: string; retries: number };
type Flags<T> = { [Key in keyof T]: boolean };
type ElementOf<T> = T extends readonly (infer Item)[] ? Item : never;

type Events = {
  ready: { at: number };
  failed: { message: string };
};

type Handlers<T> = {
  [Key in keyof T as `on${Capitalize<Key & string>}`]:
    (payload: T[Key]) => string;
};

declare const userIdBrand: unique symbol;
type UserId = string & { readonly [userIdBrand]: true };

function createUserId(value: string): UserId {
  if (!value.startsWith("usr_") || value.length <= 4) {
    throw new Error("Invalid user id");
  }
  return value as UserId;
}

function profilePath(id: UserId): string {
  return `/users/${id}`;
}

const flags: Flags<FeatureConfig> = { darkMode: true, retries: false };
const topics = ["types", "modules"] as const;
type Topic = ElementOf<typeof topics>;
const selected: Topic = "modules";

const handlers: Handlers<Events> = {
  onReady: (payload) => `Ready at ${payload.at}`,
  onFailed: (payload) => `Failed: ${payload.message}`,
};

console.log(`Flags: dark=${flags.darkMode}, retries=${flags.retries}`);
console.log(`Selected: ${selected}`);
console.log(handlers.onReady({ at: 29 }));
console.log(handlers.onFailed({ message: "invalid" }));
console.log(profilePath(createUserId("usr_42")));
