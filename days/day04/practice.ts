import { complete, equal } from "../../src/shared/check.js";

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

export function summarizeEntry(entry: LabEntry): string {
  void entry;
  throw new Error("TODO: summarize title, status, and tag count");
}

export function coverPath(entry: BaseEntry): string | undefined {
  if (!entry.cover) return undefined;
  // BUG: an object cover becomes "[object Object]".
  return String(entry.cover);
}

const entry = {
  id: "testnet-wallet",
  title: "Testnet Wallet Platform",
  status: "draft",
  tags: ["wallet", "security"],
  track: "backend",
  cover: { src: "/images/wallet.webp", alt: "Wallet diagram" },
} satisfies LabEntry;

equal(
  summarizeEntry(entry),
  "Testnet Wallet Platform [draft] · 2 tags",
  "summarizes the interface contract",
);
equal(coverPath(entry), "/images/wallet.webp", "narrows the cover union");

complete("day04");
