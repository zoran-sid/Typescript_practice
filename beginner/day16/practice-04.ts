const featureFlags = {
  search: true,
  comments: false,
  darkMode: true,
};

type FeatureName = string;

function isEnabled(_name: FeatureName): boolean {
  return false;
}

console.log("search=" + isEnabled("search"));
console.log("comments=" + isEnabled("comments"));
console.log("darkMode=" + isEnabled("darkMode"));
