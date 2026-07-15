import { assert, complete, equal } from "../src/shared/check.js";

interface Build {
  readonly id: string;
  title: string;
  status: "planned" | "building" | "completed";
}

class BuildCatalog {
  readonly #items = new Map<string, Build>();
  constructor(public readonly name: string) {}
  add(build: Build): void {
    if (this.#items.has(build.id))
      throw new Error(`Duplicate build ID: ${build.id}`);
    this.#items.set(build.id, build);
  }
  find(id: string): Build | undefined {
    return this.#items.get(id);
  }
  get size(): number {
    return this.#items.size;
  }
}

const catalog = new BuildCatalog("Web3 Lab");
catalog.add({ id: "wallet", title: "Wallet Platform", status: "building" });
equal(catalog.find("wallet")?.title, "Wallet Platform", "find");
equal(catalog.size, 1, "size");
let rejected = false;
try {
  catalog.add({ id: "wallet", title: "Duplicate", status: "planned" });
} catch {
  rejected = true;
}
assert(rejected, "duplicate rejected");
complete("day05 solution");
