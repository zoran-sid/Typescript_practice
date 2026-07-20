export function score(points) {
  return points.reduce((sum, point) => sum + point, 0);
}
