import { assert, complete, equal } from "../../src/shared/check.js";

interface Build {
  readonly id: string;
  title: string;
  status: "planned" | "building" | "completed";
}

abstract class BuildLabeler {
  abstract label(build: Build): string;
}

class ConsoleBuildLabeler extends BuildLabeler {
  override label(build: Build): string {
    return `${build.status.toUpperCase()} · ${build.title}`;
  }
}

export class BuildCatalog {
  readonly #items = new Map<string, Build>();

  public constructor(public readonly name: string) {}

  public add(build: Build): void {
    // BUG: Map#set silently overwrites an existing build with the same ID.
    this.#items.set(build.id, build);
  }

  public find(id: string): Build | undefined {
    void id;
    throw new Error("TODO: find the build by ID");
  }

  public get size(): number {
    throw new Error("TODO: expose the item count without exposing the Map");
  }
}

const catalog = new BuildCatalog("Web3 Lab");
catalog.add({ id: "wallet", title: "Wallet Platform", status: "building" });
equal(catalog.find("wallet")?.title, "Wallet Platform", "finds an item");
equal(catalog.size, 1, "reports catalog size");

let duplicateRejected = false;
try {
  catalog.add({
    id: "wallet",
    title: "Unexpected Replacement",
    status: "planned",
  });
} catch {
  duplicateRejected = true;
}
assert(
  duplicateRejected,
  "rejects duplicate IDs instead of overwriting evidence",
);

const labeler = new ConsoleBuildLabeler();
equal(
  labeler.label(catalog.find("wallet")!),
  "BUILDING · Wallet Platform",
  "uses the concrete override",
);
complete("day05");
