import { complete, deepEqual, equal } from "../../src/shared/check.js";

interface RoutePoint {
  lat: number;
  lng: number;
}

function isValidPoint(point: RoutePoint): boolean {
  return (
    Number.isFinite(point.lat) &&
    Number.isFinite(point.lng) &&
    Math.abs(point.lat) <= 90 &&
    Math.abs(point.lng) <= 180
  );
}

export function* validRoutePoints(
  segments: readonly (readonly RoutePoint[])[],
): Generator<RoutePoint, number, void> {
  void segments;
  throw new Error("TODO: yield valid points and return the count");
}

export function firstPoint(
  points: Iterable<RoutePoint>,
): RoutePoint | undefined {
  const iterator = points[Symbol.iterator]();
  iterator.next();
  // BUG: the first next() result was discarded.
  const result = iterator.next();
  return result.done ? undefined : result.value;
}

const segments = [
  [
    { lat: 31.851, lng: 117.176 },
    { lat: Number.NaN, lng: 117.177 },
  ],
  [{ lat: 31.852, lng: 117.178 }],
] as const;
deepEqual(
  [...validRoutePoints(segments)],
  [
    { lat: 31.851, lng: 117.176 },
    { lat: 31.852, lng: 117.178 },
  ],
  "yields only valid points in order",
);
equal(
  firstPoint(validRoutePoints(segments))?.lat,
  31.851,
  "does not skip the first point",
);
complete("day16");
