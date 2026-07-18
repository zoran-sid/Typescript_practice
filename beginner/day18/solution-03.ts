class PrefixFormatter {
  constructor(private readonly prefix: string) {}

  format = (message: string): string => {
    return `[${this.prefix}] ${message}`;
  };
}

const formatter = new PrefixFormatter("TS");
const detachedFormat = formatter.format;
console.log(detachedFormat("Learn classes"));
