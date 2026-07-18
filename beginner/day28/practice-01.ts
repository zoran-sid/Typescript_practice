type ProgressPair = readonly [completed: number, total: number];

function progress(values: readonly boolean[]): ProgressPair {
  // TODO：返回 [完成数, 总数]，保持为固定二元组。
  void values;
  return [0, 0];
}

const [completed, total] = progress([true, false, true, true]);
console.log(`Progress: ${completed}/${total}`);
