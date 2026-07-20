export default {
  title: "Promise、async/await 与异步错误",
  exampleExpected: [
    "并行结果: 课程、进度",
    "错误: 网络不可用",
  ],
  expected: [
    "完成数量：3",
    "课程：变量、函数、联合",
    "失败：网络不可用",
  ],
  success: "Promise 值已被等待，独立课程并行加载，异步失败也被安全处理。",
  hints: [
    "fetchLesson 是 async 函数，成功时 return title，失败时 throw Error。",
    "loadLessons 先用 map 得到 Promise 数组，再 return Promise.all(requests)。",
    "main 中 await loadLessons 后，lessons 才是 string[]。",
    "失败请求也要 await，并在 catch 中用 errorMessage 处理 unknown。",
  ],
  runtimeHints: [
    "若没有失败行或出现未处理拒绝，请检查失败请求是否位于 try/catch 的 await 中。",
  ],
};
