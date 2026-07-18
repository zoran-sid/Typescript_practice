interface Formatter {
  format(value: string): string;
}

class UppercaseFormatter implements Formatter {
  format(value: string): string {
    return value.toUpperCase();
  }
}

class MessageService {
  constructor(private readonly formatter: Formatter) {}

  create(message: string): string {
    // TODO：通过组合进来的 formatter 处理消息。
    void this.formatter;
    return `消息: ${message}`;
  }
}

const service = new MessageService(new UppercaseFormatter());
console.log(service.create("TypeScript"));

export {};
