type FeatureConfig = { darkMode: string; retries: number };

// TODO：让每个原键的值都变成 boolean，而不是保留原字段类型。
type Flags<T> = { [Key in keyof T]: T[Key] };

const flags: Flags<FeatureConfig> = {
  darkMode: true,
  retries: false,
};

console.log(`Flags: dark=${flags.darkMode}, retries=${flags.retries}`);
