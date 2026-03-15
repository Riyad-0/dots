import type { TapEvent } from "./tapEvent";

export function handleClick(tapEvents: TapEvent[], e: MouseEvent) {
  tapEvents.push({
    x: e.offsetX,
    y: e.offsetY
  });
}

export function handleTouch(tapEvents: TapEvent[], e: TouchEvent) {
  for (const touch of e.changedTouches) {
    tapEvents.push({
      x: touch.clientX,
      y: touch.clientY
    });
  }
}