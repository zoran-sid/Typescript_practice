import { complete, deepEqual } from "../src/shared/check.js";
import type { LabModule, ModuleFactory } from "../days/day14/types.js";

interface ModuleMetadata {
  owner: string;
}
interface ModuleMetadata {
  verified: boolean;
}
const createModule: ModuleFactory = (id, title): LabModule => ({
  id,
  title,
  enabled: true,
});
function publicMetadata(metadata: ModuleMetadata): ModuleMetadata {
  return { owner: metadata.owner, verified: metadata.verified };
}
deepEqual(
  createModule("search", "Search Index"),
  { id: "search", title: "Search Index", enabled: true },
  "module",
);
deepEqual(
  publicMetadata({ owner: "Zoran", verified: true }),
  { owner: "Zoran", verified: true },
  "merge",
);
complete("day14 solution");
