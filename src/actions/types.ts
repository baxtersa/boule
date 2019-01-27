export const INCREMENT = "Increment";
export const DECREMENT = "Decrement";

export interface CounterAction {
  type: "Increment" | "Decrement";
};

export function increment(): CounterAction {
  return { type: INCREMENT };
}

export function decrement(): CounterAction {
  return { type: DECREMENT };
}

export interface CounterActions {
  increment: () => CounterAction;
  decrement: () => CounterAction;
};