import { complete, deepEqual, equal } from "../src/shared/check.js";

interface RoutePoint {
  lat: number;
  lng: number;
  elevation?: number;
}
type MapCoordinate = readonly [lng: number, lat: number];

function toMapCoordinate(point: RoutePoint): MapCoordinate {
  return [point.lng, point.lat];
}

function appendDisplayPoint(
  points: readonly RoutePoint[],
  point: RoutePoint,
): readonly RoutePoint[] {
  return [...points, point];
}

const source: RoutePoint[] = [{ lat: 31.851, lng: 117.176 }];
deepEqual(toMapCoordinate(source[0]!), [117.176, 31.851], "coordinate order");
const display = appendDisplayPoint(source, { lat: 31.852, lng: 117.177 });
equal(source.length, 1, "source remains unchanged");
equal(display.length, 2, "display receives the point");
complete("day02 solution");
