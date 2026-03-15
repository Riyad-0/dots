import { dotRadius } from "./consts";
import { screenHeight, screenWidth } from "./screen";
import type { State } from "./state";

interface DrawState {
  drawAlreadyRequested: boolean
}
export type { DrawState };

export const initialDrawState = {
  drawAlreadyRequested: false
};

export function requestDraw(
  state: State,
  canvas: HTMLCanvasElement,
  ctx: CanvasRenderingContext2D
) {
  if (state.drawState.drawAlreadyRequested) return;
  state.drawState.drawAlreadyRequested = true;
  requestAnimationFrame(() => {
    draw(state, canvas, ctx);
    state.drawState.drawAlreadyRequested = false;
  });
}

// console.time();
function draw(
  state: State,
  canvas: HTMLCanvasElement,
  ctx: CanvasRenderingContext2D
) {
  // console.timeLog();
  // console.timeEnd();
  // console.time();
  ctx.clearRect(0, 0, screenWidth(canvas), screenHeight(canvas));

  for (const dot of state.dots) {
    const { x, y, color } = dot;
    const r = dotRadius;
    const radialGradient = ctx.createRadialGradient(x, y, r / 2, x, y, r);
    radialGradient.addColorStop(0, color); // Inner circle color
    radialGradient.addColorStop(1, "rgba(0, 0, 0, 0)"); // Outer circle color
    ctx.fillStyle = radialGradient;

    ctx.beginPath();
    ctx.arc(
      Math.floor(x),
      Math.floor(y),
      Math.floor(r),
      0,
      Math.PI * 2
    );
    ctx.fill();
    /*
    ctx.strokeStyle = "white";
    ctx.beginPath();
    ctx.arc(
      Math.floor(x),
      Math.floor(y),
      Math.floor(r),
      0,
      Math.PI * 2
    );
    ctx.stroke();
    */
  }
}
