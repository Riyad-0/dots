import { dotSpeed, dt } from "./consts";
import type { Dot } from "./dot";

export function moveDots(dots: Dot[]) {
  for (const dot of dots) {
    dot.y += dotSpeed * dt;
  }
}