import './style.css'
import { initialDrawState, requestDraw } from './draw';
import initCanvas from './initCanvas';
import handleWindowResize from './handleCanvasResize';
import type { State } from './state';
import { screenHeight, screenWidth } from './screen';
import { createTimer } from './timer';
import { dt, spawnDotCooldown } from './consts';
import { removeOffscreenDots } from './removeOffscreenDots';
import { removeHitDots } from './removeHitDots';
import { considerSpawnDot } from './considerSpawnDot';
import { moveDots } from './moveDots';
import { handleClick, handleTouch } from './handleTapEvent';

function init() {
  const canvas = document.querySelector<HTMLCanvasElement>('#canvas')!;
  const ctx = canvas.getContext('2d')!;

  initCanvas(canvas, ctx);

  let state: State = {
    drawState: initialDrawState,
    dots: [],
    spawnDotTimer: createTimer(spawnDotCooldown),
    tapEvents: []
  };

  function onWindowResize() {
    handleWindowResize(state, canvas, ctx);
  }

  function onClick(e: MouseEvent) {
    handleClick(state.tapEvents, e);
  }

  function onTouchStart(e: TouchEvent) {
    handleTouch(state.tapEvents, e);
  }

  window.addEventListener("resize", onWindowResize);
  canvas.addEventListener("mousedown", onClick);

  // Need passive: false for some Chrome-specific thing?
  // https://developer.mozilla.org/en-US/docs/Web/API/TouchEvent
  window.addEventListener('touchstart', onTouchStart, { passive: false });

  // console.time();
  function tick() {
    // console.timeLog();
    // console.timeEnd();
    // console.time();
    removeOffscreenDots(state, screenHeight(canvas));
    removeHitDots(state);
    considerSpawnDot(state, screenWidth(canvas));
    moveDots(state.dots);

    state.tapEvents = [];

    requestDraw(state, canvas, ctx);
  }
  setInterval(tick, dt);

  requestDraw(state, canvas, ctx);
}

window.addEventListener("load", init);
