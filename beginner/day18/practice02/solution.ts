// 这是解题结构，不是完整答案。TODO 旁的空字符串、0、false、[] 等只是占位值，完成时要替换或删除。
interface SummaryProvider { summary(): string; }
class StudyCounter implements SummaryProvider {
  private minutes = 0;
  constructor(public readonly topic: string) {}
  add(minutes: number): void {
    // TODO：只有当前参数 minutes > 0 时，才把它累加到这个实例自己的 this.minutes；不要使用全局总数。
  }
  summary(): string {
    // TODO：用当前实例的 this.topic 和 this.minutes 组成“主题: 分钟 minutes”并返回。
    // 下面的 "" 是临时占位，完成时要替换。
    return "";
  }
}
class Dashboard {
  constructor(private readonly counter: SummaryProvider) {}
  render(): string {
    // TODO：只调用 counter.summary()，把得到的摘要接在“Dashboard | ”后返回；不要访问具体类的私有状态。
    // 下面的 "" 是临时占位，完成时要替换。
    return "";
  }
}
const types = new StudyCounter("Types");
const modules = new StudyCounter("Modules");
types.add(30);
types.add(15);
modules.add(20);
// TODO：为 types 创建 Dashboard；依次输出 types.summary()、modules.summary() 和面板的 render() 结果，证明两个实例状态互不共享。
