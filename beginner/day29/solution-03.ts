type Events = {
  ready: { at: number };
  failed: { message: string };
};

type Handlers<T> = {
  [Key in keyof T as `on${Capitalize<Key & string>}`]: (
    payload: T[Key],
  ) => string;
};

const handlers: Handlers<Events> = {
  onReady: (payload) => `Ready at ${payload.at}`,
  onFailed: (payload) => `Failed: ${payload.message}`,
};

console.log(handlers.onReady({ at: 29 }));
console.log(handlers.onFailed({ message: "invalid" }));
