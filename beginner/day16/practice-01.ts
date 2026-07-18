type Profile = {
  name: string;
  age: number;
  active: boolean;
};

function readProfile(
  profile: Profile,
  _key: keyof Profile,
): string | number | boolean {
  return profile.name;
}

const profile: Profile = {
  name: "Ada",
  age: 36,
  active: true,
};

console.log("name=" + readProfile(profile, "name"));
console.log("age=" + readProfile(profile, "age"));
console.log("active=" + readProfile(profile, "active"));
