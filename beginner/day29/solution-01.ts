type FeatureConfig = { darkMode: string; retries: number };

type Flags<T> = { [Key in keyof T]: boolean };

const flags: Flags<FeatureConfig> = {
  darkMode: true,
  retries: false,
};

console.log(`Flags: dark=${flags.darkMode}, retries=${flags.retries}`);
