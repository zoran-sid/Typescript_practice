type InputEventLike = {
  currentTarget: { value: string } | null;
};

function readQuery(event: InputEventLike): string {
  return event.currentTarget?.value.trim() ?? "";
}

const event: InputEventLike = { currentTarget: { value: "  typescript  " } };
console.log(`Query: ${readQuery(event)}`);
console.log(`Missing: ${readQuery({ currentTarget: null }) || "empty"}`);
