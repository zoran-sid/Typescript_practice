type Note = { readonly id: string; text: string; pinned: boolean };

function updateById<T extends { readonly id: string }>(
  items: readonly T[],
  id: string,
  update: (item: T) => T,
): T[] {
  // TODO：用 map 找到 id；命中时调用 update，未命中时返回原项。
  void id;
  void update;
  return [...items];
}

const notes: Note[] = [
  { id: "n1", text: "Review unions", pinned: false },
  { id: "n2", text: "Practice modules", pinned: false },
];
const updated = updateById(notes, "n2", (note) => ({ ...note, pinned: true }));

console.log(`First unchanged: ${notes[0] === updated[0]}`);
console.log(`Second pinned: ${updated[1]?.pinned}`);
console.log(`Original pinned: ${notes[1]?.pinned}`);
