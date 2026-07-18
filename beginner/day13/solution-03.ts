type Preferences = {
  theme: "light" | "dark";
  fontSize: number;
};

type Account = {
  name: string;
  preferences: Preferences;
};

const original: Account = {
  name: "Ada",
  preferences: { theme: "light", fontSize: 16 },
};

const updated: Account = {
  ...original,
  preferences: {
    ...original.preferences,
    theme: "dark",
  },
};

console.log("原主题：" + original.preferences.theme);
console.log("新主题：" + updated.preferences.theme);
