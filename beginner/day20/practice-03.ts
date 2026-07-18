interface Profile {
  id: number;
  contact: {
    email: string;
  };
  skills: string[];
}

function isProfile(value: unknown): value is Profile {
  return (
    typeof value === "object" &&
    value !== null &&
    "id" in value &&
    typeof value.id === "number"
  );
}

for (const raw of [
  '{"id":1,"contact":{"email":"hi@example.com"},"skills":["TS","Git"]}',
  '{"id":2,"contact":{"email":123},"skills":["TS"]}',
]) {
  const value: unknown = JSON.parse(raw);

  if (isProfile(value)) {
    console.log(
      `邮箱: ${value.contact.email} / 技能: ${value.skills.join("、")}`,
    );
  } else {
    console.log("资料数据无效");
  }
}
