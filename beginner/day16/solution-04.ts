const featureFlags = {
  search: true,
  comments: false,
  darkMode: true,
};

type FeatureName = keyof typeof featureFlags;

function isEnabled(name: FeatureName): boolean {
  return featureFlags[name];
}

console.log("search=" + isEnabled("search"));
console.log("comments=" + isEnabled("comments"));
console.log("darkMode=" + isEnabled("darkMode"));
