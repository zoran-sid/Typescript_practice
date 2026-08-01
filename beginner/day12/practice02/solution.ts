type MessageFormatter = (message: string) => string;
type MessageSink = (message: string) => void;

function createFormatter(prefix = "[系统]"): MessageFormatter {
  // 返回的函数会记住本次调用 createFormatter 时收到的 prefix。
  return (message) => `${prefix} ${message}`;
}

function dispatch(
  message: string,
  formatter: MessageFormatter,
  ...sinks: MessageSink[]
): number {
  // 调用关系：message -> formatter(message) -> formattedMessage，只格式化一次。
  const formattedMessage = formatter(message);
  for (const sink of sinks) {
    // 每个 sink 都收到同一个 formattedMessage。
    sink(formattedMessage);
  }
  return sinks.length;
}

const archived: string[] = [];
const archiveSink: MessageSink = (message) => {
  archived.push(message);
};

// 调用关系："[课程]" -> createFormatter -> formatter 闭包。
const formatter = createFormatter("[课程]");
// 调用关系：消息 + formatter + 两个 sink -> dispatch -> deliveredCount。
const deliveredCount = dispatch(
  "课程已更新",
  formatter,
  console.log,
  archiveSink,
);

console.log(`投递数量：${deliveredCount}`);
// 调用关系：archiveSink 写入 archived[0] -> 存档输出。
console.log(`存档：${archived[0]}`);
