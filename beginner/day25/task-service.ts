import type { StudyTask } from "./models.js";

export function updateById<T extends { readonly id: string }>(
  items: readonly T[],
  id: string,
  update: (item: T) => T,
): T[] {
  return items.map((item) => (item.id === id ? update(item) : item));
}

export function completeTask(
  tasks: readonly StudyTask[],
  id: string,
): StudyTask[] {
  return updateById(tasks, id, (task) => ({ ...task, status: "done" }));
}
