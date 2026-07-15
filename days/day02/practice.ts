import { complete, deepEqual, equal } from "../../src/shared/check.js";

interface RoutePoint {
  lat: number;
  lng: number;
  elevation?: number;
}

type MapCoordinate = readonly [lng: number, lat: number];

export function toMapCoordinate(point: RoutePoint): MapCoordinate {
  void point;
  throw new Error("TODO: return [longitude, latitude]");
}

export function appendDisplayPoint(
  points: readonly RoutePoint[],
  point: RoutePoint,
): readonly RoutePoint[] {
  // BUG: the assertion defeats readonly and mutates source geometry.
  const writable = points as RoutePoint[];
  writable.push(point);
  return writable;
}

const start: RoutePoint = { lat: 31.851, lng: 117.176, elevation: 42 };
deepEqual(
  toMapCoordinate(start),
  [117.176, 31.851],
  "uses MapLibre coordinate order",
);

const source: RoutePoint[] = [start];
const display = appendDisplayPoint(source, { lat: 31.852, lng: 117.177 });
equal(source.length, 1, "does not mutate source geometry");
equal(display.length, 2, "returns a new display sequence");

complete("day02");
