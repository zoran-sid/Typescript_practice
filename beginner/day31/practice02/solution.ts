// 这是解题结构，不是完整答案。TODO 旁的空字符串、0、false、[] 等只是占位值，完成时要替换或删除。
function createPageCursor(start: number, end: number): Iterable<number> {
  return {
    [Symbol.iterator](): Iterator<number, void, unknown> {
      // TODO 1：current 必须在本次 [Symbol.iterator]() 调用内从 start 开始，
      // 不能让不同 iterator 共享同一个游标。
      let current = start;

      return {
        next(): IteratorResult<number, void> {
          // TODO 2：current <= end 时先保存本轮页码，再推进并返回 done: false；
          // 超出 end 后返回 done: true。下面的结果只是“立即结束”占位。
          void current;
          return { done: true, value: undefined };
        },
      };
    }
  };
}
const pages = createPageCursor(2, 4);
const firstIterator = pages[Symbol.iterator]();
const secondIterator = pages[Symbol.iterator]();
const firstPage = firstIterator.next();
const secondPage = firstIterator.next();
const independentPage = secondIterator.next();
const resumedPage = firstIterator.next();
const finished = firstIterator.next();
// TODO 3：从五个 IteratorResult 中读取题目要求的 value/done 并输出。
// 不要绕过 next() 直接写死 2、3、4 或 true；先确认 value 只在 done: false 时使用。
console.log(`First cursor: ${String(firstPage.value)}, ${String(secondPage.value)}`);
console.log(`Second cursor: ${String(independentPage.value)}`);
console.log(`First resumes: ${String(resumedPage.value)}`);
console.log(`First done: ${finished.done}`);
