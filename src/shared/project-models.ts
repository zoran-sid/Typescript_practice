export const locales = ["zh-CN", "en"] as const;
export type Locale = (typeof locales)[number];

export interface RoutePoint {
  lat: number;
  lng: number;
  elevation?: number;
  time?: string;
}

export type ContentKind = "blog" | "research" | "projects" | "map" | "lab";

export interface SearchEntry {
  title: string;
  collection: ContentKind;
  slug: string;
  url: string;
  date: string;
  locale: Locale;
}

export interface LabBuild {
  id: string;
  title: string;
  status: "planned" | "building" | "prototype" | "testnet" | "completed";
  technologies: readonly string[];
  testnetOnly: boolean;
  audited: boolean;
  realFunds: boolean;
}
