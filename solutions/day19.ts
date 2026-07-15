import { complete, equal } from "../src/shared/check.js";

function normalizeAngle(angle: number): number {
  return ((angle % 360) + 360) % 360;
}
function coordinateInBounds(lat: number, lng: number): boolean {
  return (
    Number.isFinite(lat) &&
    Number.isFinite(lng) &&
    Math.abs(lat) <= 90 &&
    Math.abs(lng) <= 180
  );
}
equal(normalizeAngle(-1), 359, "negative");
equal(normalizeAngle(721), 1, "multiple");
equal(coordinateInBounds(90, 180), true, "positive boundary");
equal(coordinateInBounds(-90, -180), true, "negative boundary");
equal(coordinateInBounds(90.1, 0), false, "invalid");
complete("day19 solution");
