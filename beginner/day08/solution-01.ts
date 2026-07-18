const profile: {
  name: string;
  address?: {
    city: string;
  };
} = {
  name: "Lin",
};

const city = profile.address?.city ?? "未填写";

console.log(`城市: ${city}`);

export {};
