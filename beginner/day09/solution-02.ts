interface Profile {
  readonly id: string;
  name: string;
  bio?: string;
}

const profile: Profile = {
  id: "U-01",
  name: "Lin",
};

const bio = profile.bio ?? "暂无简介";

console.log(`用户: ${profile.name}`);
console.log(`简介: ${bio}`);

export {};
