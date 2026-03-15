import { circlesOverlap } from "./circle";
import { dotColors, dotRadius, timesToTrySpawningDot } from "./consts";
import type { Dot } from "./dot";

export function trySpawnDot(
  dots: Dot[],
  screenWidth: number
) {
  const color = dotColors[Math.floor(Math.random() * dotColors.length)];
  const foundLocation = availableDotSpawnLocation(dots, screenWidth);
  if (foundLocation !== null) {
    const { x, y } = foundLocation;
    dots.push({
      // x: 50,
      x,
      y,
      color
      // color
    });
  }
}

function availableDotSpawnLocation(
  existingDots: Dot[],
  screenWidth: number
): { x: number, y: number } | null {
  const r = dotRadius;
  const y = -r;
  const leftBoundForCircleCenter = r;
  const availableWidthForCircleCenter = screenWidth - r*2;
  let x: number;
  for (let i = 0; i < timesToTrySpawningDot; i++) {
    x = leftBoundForCircleCenter + Math.random() * availableWidthForCircleCenter;
    const wouldOverlapSomeDot = existingDots.some(existingDot => circlesOverlap(
      x, y, r,
      existingDot.x, existingDot.y, r
    ));
    if (!wouldOverlapSomeDot) {
      return { x, y };
    }
  }
  return null;
}
