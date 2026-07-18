type Events = {
  ready: { at: number };
  failed: { message: string };
};

// TODO：把 ready/failed 映射为 onReady/onFailed，并保留各自参数类型。
type Handlers<T> = {
  [Key in keyof T]: (payload: T[Key]) => string;
};

const handlers: Handlers<Events> = {
  onReady: (payload) => `Ready at ${payload.at}`,
  onFailed: (payload) => `Failed: ${payload.message}`,
};

console.log(handlers.onReady({ at: 29 }));
console.log(handlers.onFailed({ message: "invalid" }));
