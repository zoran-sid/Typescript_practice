import { complete, equal } from "../../src/shared/check.js";

declare const routeIdBrand: unique symbol;
export type RouteId = string & { readonly [routeIdBrand]: true };
type Locale = "zh-CN" | "en";
type LocalizedPath = `/${Locale}/${string}`;

export function parseRouteId(value: string): RouteId | undefined {
  void value;
  throw new Error("TODO: validate and brand a route ID");
}

export function localizePath(path: string, locale: Locale): LocalizedPath {
  // BUG: an existing locale prefix is retained.
  const normalized = path.replace(/^\/?/, "");
  return `/${locale}/${normalized}`;
}

equal(
  parseRouteId("route-a1b2c3d4e5f6"),
  "route-a1b2c3d4e5f6",
  "accepts a valid route ID",
);
equal(parseRouteId("route-ABC"), undefined, "rejects an invalid route ID");
equal(
  localizePath("/en/lab/builds/wallet", "zh-CN"),
  "/zh-CN/lab/builds/wallet",
  "replaces an existing locale prefix",
);
complete("day10");
