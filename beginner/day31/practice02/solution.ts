function createPageCursor(start: number, end: number): Iterable<number> {
  return {
    [Symbol.iterator](): Iterator<number, void, unknown> {
      // 每个 iterator 都有自己的 current，不共享游标进度。
      let current = start;
      return {
        next(): IteratorResult<number, void> {
          if (current > end) return { done: true, value: undefined };
          const value = current;
          current += 1;
          return { done: false, value };
        },
      };
    },
  };
}

const pages = createPageCursor(2, 4);
const firstIterator = pages[Symbol.iterator]();
const secondIterator = pages[Symbol.iterator]();
// 调用关系：两个 iterator 交错调用 next；每个返回 IteratorResult。
const firstPage = firstIterator.next();
const secondPage = firstIterator.next();
const independentPage = secondIterator.next();
const resumedPage = firstIterator.next();
const finished = firstIterator.next();

if (firstPage.done || secondPage.done || independentPage.done || resumedPage.done) {
  throw new Error("Page cursor ended too early");
}
console.log(`First cursor: ${firstPage.value}, ${secondPage.value}`);
console.log(`Second cursor: ${independentPage.value}`);
console.log(`First resumes: ${resumedPage.value}`);
console.log(`First done: ${finished.done}`);
