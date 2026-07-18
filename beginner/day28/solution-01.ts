type ProgressPair = readonly [completed: number, total: number];

function progress(values: readonly boolean[]): ProgressPair {
  const completed = values.filter(Boolean).length;
  return [completed, values.length];
}

const [completed, total] = progress([true, false, true, true]);
console.log(`Progress: ${completed}/${total}`);
