import { complete, deepEqual, equal } from "../src/shared/check.js";

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
function* validRoutePoints(
  segments: readonly (readonly RoutePoint[])[],
): Generator<RoutePoint, number, void> {
  let count = 0;
  for (const segment of segments) {
    for (const point of segment) {
      if (!isValidPoint(point)) continue;
      count += 1;
      yield point;
    }
  }
  return count;
}
function firstPoint(points: Iterable<RoutePoint>): RoutePoint | undefined {
  const result = points[Symbol.iterator]().next();
  return result.done ? undefined : result.value;
}
const segments = [
  [
    { lat: 31.851, lng: 117.176 },
    { lat: Number.NaN, lng: 117.177 },
  ],
  [{ lat: 31.852, lng: 117.178 }],
];
deepEqual(
  [...validRoutePoints(segments)],
  [
    { lat: 31.851, lng: 117.176 },
    { lat: 31.852, lng: 117.178 },
  ],
  "points",
);
equal(firstPoint(validRoutePoints(segments))?.lat, 31.851, "first");
complete("day16 solution");
