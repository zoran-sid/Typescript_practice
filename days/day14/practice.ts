import { complete, deepEqual } from "../../src/shared/check.js";
import type { LabModule, ModuleFactory } from "./types.js";

interface ModuleMetadata {
  owner: string;
}
interface ModuleMetadata {
  verified: boolean;
}

export const createModule: ModuleFactory = (id, title) => {
  void id;
  void title;
  throw new Error("TODO: return a LabModule with enabled true");
};

export function publicMetadata(metadata: ModuleMetadata): ModuleMetadata {
  // BUG: an assertion hides the verified field lost at the module boundary.
  return { owner: metadata.owner } as ModuleMetadata;
}

const module: LabModule = createModule("search", "Search Index");
deepEqual(
  module,
  { id: "search", title: "Search Index", enabled: true },
  "creates the imported contract",
);
deepEqual(
  publicMetadata({ owner: "Zoran", verified: true }),
  { owner: "Zoran", verified: true },
  "honors merged declarations",
);
complete("day14");
