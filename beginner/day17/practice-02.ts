type Profile = {
  name: string;
  theme: "light" | "dark";
  notifications: boolean;
};

function updateProfile(
  profile: Profile,
  _patch: Partial<Profile>,
): Profile {
  return profile;
}

const original: Profile = {
  name: "Ada",
  theme: "light",
  notifications: true,
};
const updated = updateProfile(original, {
  name: "Lin",
  theme: "dark",
});

console.log("原资料：" + original.name + "/" + original.theme);
console.log("新资料：" + updated.name + "/" + updated.theme);
