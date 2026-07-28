// 这是解题结构，不是完整答案。TODO 旁的空字符串、0、false、[] 等只是占位值，完成时要替换或删除。
type MessageFormatter = (message: string) => string;
type MessageSink = (message: string) => void;
function createFormatter(prefix = "[系统]"): MessageFormatter {
  // TODO：返回箭头函数；它接收之后传入的 message，并使用当前 prefix 组成“prefix message”。
  // 下面的函数只返回空字符串，是等待替换的 formatter 占位。
  return (_message) => "";
}
function dispatch(
  message: string,
  formatter: MessageFormatter,
  ...sinks: MessageSink[]
): number {
  // TODO：只调用一次 formatter(message)，把结果保存在局部变量中；
  // 再遍历 sinks，把同一结果交给每个 sink，并返回实际调用数量。
  // 下面的 0 是尚未投递时的占位，不能代替真实计数。
  return 0;
}
const archived: string[] = [];
const archiveSink: MessageSink = (message) => {
  // TODO：把当前 message 加入 archived；不要在这里直接输出。
  void message;
};
const formatter = createFormatter("[课程]");
// TODO：把“课程已更新”、formatter、console.log 和 archiveSink 交给 dispatch，让返回值保存为 deliveredCount。
// TODO：dispatch 会产生第一行；随后输出 deliveredCount，并读取 archived 第一项组成存档行。
