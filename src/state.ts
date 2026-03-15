import type { Dot } from "./dot";
import type { DrawState } from "./draw";
import type { TapEvent } from "./tapEvent";
import type { Timer } from "./timer";

interface State {
  drawState: DrawState,
  dots: Dot[],
  spawnDotTimer: Timer,
  tapEvents: TapEvent[]
}

export type { State };