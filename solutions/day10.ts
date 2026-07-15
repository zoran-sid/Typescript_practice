import { complete, equal } from "../src/shared/check.js";

declare const routeIdBrand: unique symbol;
type RouteId = string & { readonly [routeIdBrand]: true };
type Locale = "zh-CN" | "en";
type LocalizedPath = `/${Locale}/${string}`;

function parseRouteId(value: string): RouteId | undefined {
  return /^route-[a-f0-9]{12}$/.test(value) ? (value as RouteId) : undefined;
}
function localizePath(path: string, locale: Locale): LocalizedPath {
  const withoutLocale = path.replace(/^\/?(?:zh-CN|en)(?=\/|$)/, "");
  const normalized = withoutLocale.replace(/^\/+/, "");
  return `/${locale}/${normalized}`;
}
equal(parseRouteId("route-a1b2c3d4e5f6"), "route-a1b2c3d4e5f6", "valid ID");
equal(parseRouteId("route-ABC"), undefined, "invalid ID");
equal(
  localizePath("/en/lab/builds/wallet", "zh-CN"),
  "/zh-CN/lab/builds/wallet",
  "localized",
);
complete("day10 solution");
