interface Preferences {
  theme?: "light" | "dark";
}

function clearTheme(preferences: Preferences): Preferences {
  const { theme: _removed, ...withoutTheme } = preferences;
  return withoutTheme;
}

const cleared = clearTheme({ theme: "dark" });
console.log(
  "theme" in cleared ? "主题字段: 仍然存在" : "主题字段: 不存在",
);
