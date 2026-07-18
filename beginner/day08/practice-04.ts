const settings: {
  volume?: number;
  theme?: string;
  language?: string;
} = {
  volume: 0,
  theme: "",
};

// TODO：只在值为 null 或 undefined 时使用默认值。
const volume = settings.volume || 50;
const theme = settings.theme || "light";
const language = settings.language ?? "zh-CN";

console.log(`音量: ${volume}`);
console.log(`主题: ${JSON.stringify(theme)}`);
console.log(`语言: ${language}`);

export {};
