interface Profile {
  readonly id: string;
  name: string;
  bio?: string;
}

const profile: Profile = {
  id: "U-01",
  name: "Lin",
};

// TODO：缺少简介时显示题目指定文字。
const bio = profile.bio ?? "尚未设置";

console.log(`用户: ${profile.name}`);
console.log(`简介: ${bio}`);

export {};
