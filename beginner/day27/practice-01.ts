type InputEventLike = {
  currentTarget: { value: string } | null;
};

function readQuery(event: InputEventLike): string {
  // TODO：目标存在时返回 trim 后的 value，否则返回空字符串。
  void event;
  return "";
}

const event: InputEventLike = { currentTarget: { value: "  typescript  " } };
console.log(`Query: ${readQuery(event)}`);
console.log(`Missing: ${readQuery({ currentTarget: null }) || "empty"}`);
