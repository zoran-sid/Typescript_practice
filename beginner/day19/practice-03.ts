type DivideResult =
  | { ok: true; value: number }
  | { ok: false; error: string };

function divide(left: number, right: number): DivideResult {
  if (right === 0) {
    return { ok: false, error: "计算失败" };
  }

  return { ok: true, value: left / right };
}

for (const right of [3, 0]) {
  const result = divide(12, right);

  if (result.ok) {
    console.log(`12 ÷ ${right} = ${result.value}`);
  } else {
    console.log(`失败: ${result.error}`);
  }
}
