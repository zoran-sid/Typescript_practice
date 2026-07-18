enum LegacyStatus {
  Draft,
  Published,
}

const ModernStatus = {
  Draft: "draft",
  Published: "published",
} as const;
type ModernStatus = (typeof ModernStatus)[keyof typeof ModernStatus];

function normalizeStatus(value: LegacyStatus | ModernStatus): ModernStatus {
  // TODO：两种 Draft 都变 draft，其余两种都变 published。
  void value;
  return ModernStatus.Draft;
}

console.log(`Legacy: ${normalizeStatus(LegacyStatus.Published)}`);
console.log(`Modern: ${normalizeStatus(ModernStatus.Draft)}`);
