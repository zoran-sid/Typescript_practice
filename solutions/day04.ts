import { complete, equal } from "../src/shared/check.js";

type EntryStatus = "draft" | "published" | "archived";
type Cover = string | { src: string; alt?: string };
interface BaseEntry {
  readonly id: string;
  title: string;
  status: EntryStatus;
  tags: readonly string[];
  cover?: Cover;
}
interface LabEntry extends BaseEntry {
  track: "integration" | "backend" | "product-security" | "solutions";
}

function summarizeEntry(entry: LabEntry): string {
  return `${entry.title} [${entry.status}] · ${entry.tags.length} tags`;
}
function coverPath(entry: BaseEntry): string | undefined {
  if (!entry.cover) return undefined;
  return typeof entry.cover === "string" ? entry.cover : entry.cover.src;
}

const entry: LabEntry = {
  id: "testnet-wallet",
  title: "Testnet Wallet Platform",
  status: "draft",
  tags: ["wallet", "security"],
  track: "backend",
  cover: { src: "/images/wallet.webp" },
};
equal(
  summarizeEntry(entry),
  "Testnet Wallet Platform [draft] · 2 tags",
  "summary",
);
equal(coverPath(entry), "/images/wallet.webp", "cover");
complete("day04 solution");
