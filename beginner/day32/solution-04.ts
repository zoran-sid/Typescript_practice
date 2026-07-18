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
    return `消息: ${this.formatter.format(message)}`;
  }
}

const service = new MessageService(new UppercaseFormatter());
console.log(service.create("TypeScript"));

export {};
