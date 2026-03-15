interface Timer {
  readonly duration: number,
  elapsedTime: number
}
export type { Timer };

export type TimerResult = "went off" | "idle";

export function createTimer(duration: number): Timer {
  return {
    duration,
    elapsedTime: 0
  };
}

export function updateTimer(timer: Timer, deltaTime: number): TimerResult {
  timer.elapsedTime += deltaTime;
  if (timer.elapsedTime >= timer.duration) {
    timer.elapsedTime = timer.elapsedTime - timer.duration;
    return "went off";
  }
  return "idle";
}