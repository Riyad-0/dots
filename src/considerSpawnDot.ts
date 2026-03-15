import { dt } from "./consts";
import { trySpawnDot } from "./spawnDot";
import type { State } from "./state";
import { updateTimer } from "./timer";

export function considerSpawnDot(state: State, screenWidth: number) {
  const shouldSpawnDot = updateTimer(state.spawnDotTimer, dt) === "went off";
  if (shouldSpawnDot && state.dots.length < 5) {
    trySpawnDot(state.dots, screenWidth);
  }
}