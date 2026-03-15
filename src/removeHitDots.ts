import { isPointInsideCircle } from "./circle";
import { dotRadius } from "./consts";
import type { State } from "./state";

export function removeHitDots(state: State) {
  const r = dotRadius;
  state.dots = state.dots.filter(dot => {
    const wasHit = state.tapEvents.some(tapEvent => isPointInsideCircle(
      tapEvent.x, tapEvent.y,
      dot.x, dot.y, r
    ));
    return !wasHit;
  });
}