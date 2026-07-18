const profile: {
  name: string;
  address?: {
    city: string;
  };
} = {
  name: "Lin",
};

// TODO：安全读取城市；缺少地址时显示“未填写”。
const city = profile.address?.city ?? "未知";

console.log(`城市: ${city}`);

export {};
