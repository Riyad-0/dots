
export function circlesOverlap(
  x0: number,
  y0: number,
  r0: number,
  x1: number,
  y1: number,
  r1: number): boolean {
  return distance(x0, y0, x1, y1) <= r0 + r1;
}

export function isPointInsideCircle(
  pointX: number,
  pointY: number,
  circleX: number,
  circleY: number,
  circleRadius: number) {
  return distance(pointX, pointY, circleX, circleY) <= circleRadius;
}

function distance(x0: number, y0: number, x1: number, y1: number): number {
  return Math.sqrt(Math.pow(x1 - x0, 2) + Math.pow(y1 - y0, 2));
}
