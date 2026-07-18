class PrefixFormatter {
  constructor(private readonly prefix: string) {}

  // TODO：当前方法被单独取出后会丢失 this；改为能保留 this 的箭头函数字段。
  format(message: string): string {
    return `[${this.prefix}] ${message}`;
  }
}

const formatter = new PrefixFormatter("TS");
const detachedFormat = formatter.format;
console.log(detachedFormat("Learn classes"));
