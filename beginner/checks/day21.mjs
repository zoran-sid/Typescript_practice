export default {
  "title": "Promise、async/await 与异步错误",
  "exampleExpected": [
    "并行结果: 课程、进度",
    "错误: 网络不可用"
  ],
  "exercises": [
    {
      "id": "practice01",
      "title": "Promise、async/await 与异步错误",
      "expected": [
        "完成数量：3",
        "课程：变量、函数、联合",
        "失败：网络不可用"
      ],
      "success": "Promise 值已被等待，独立课程并行加载，异步失败也被安全处理。",
      "hints": [
        "fetchLesson 是 async 函数，成功时 return title，失败时 throw Error。",
        "loadLessons 先用 map 得到 Promise 数组，再 return Promise.all(requests)。",
        "main 中 await loadLessons 后，lessons 才是 string[]。",
        "失败请求也要 await，并在 catch 中用 errorMessage 处理 unknown。"
      ],
      "runtimeHints": [
        "若没有失败行或出现未处理拒绝，请检查失败请求是否位于 try/catch 的 await 中。"
      ]
    },
    {
      "id": "practice02",
      "title": "并行还是顺序：按依赖关系等待",
      "expected": [
        "并行结果: 课程、进度",
        "依赖结果: 用户42=editor",
        "错误: 网络不可用"
      ],
      "success": "独立请求已并行启动，有数据依赖的权限请求保持顺序，失败 Promise 也已处理。",
      "hints": [
        "先创建课程和进度两个 Promise，再调用 Promise.all；不要先 await 其中一个。",
        "fetchPermission 的参数来自 await fetchUserId()，所以这两步必须有先后。",
        "fetchPermission 要使用 userId 参数生成结果，不能写死完整输出。",
        "通知请求要在 try 中 await，catch 的 unknown 交给 errorMessage。"
      ]
    }
  ]
};
