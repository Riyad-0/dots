import { dotRadius } from "./consts";
import type { State } from "./state";

export function removeOffscreenDots(state: State, screenHeight: number) {
  const r = dotRadius;
  state.dots = state.dots.filter(dot => dot.y - r < screenHeight);
}