export interface TaskRepository {
  load(): Promise<unknown>;
}

export class MemoryTaskRepository implements TaskRepository {
  constructor(private readonly data: unknown) {}

  async load(): Promise<unknown> {
    await Promise.resolve();
    return this.data;
  }
}
