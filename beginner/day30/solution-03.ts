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
  return value === LegacyStatus.Draft || value === ModernStatus.Draft
    ? ModernStatus.Draft
    : ModernStatus.Published;
}

console.log(`Legacy: ${normalizeStatus(LegacyStatus.Published)}`);
console.log(`Modern: ${normalizeStatus(ModernStatus.Draft)}`);
