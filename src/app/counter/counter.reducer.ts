import {createReducer, on} from "@ngrx/store";
import {decrement, divide, increment, multiply, reset} from "./counter.actions";

export const initialState = 20;

const _counterReducer = createReducer(initialState,
  on(increment, state => state + 1),
  on(decrement, state => state - 1),
  on(multiply, (state, {number}) => state * number),
  on(divide, (state, {number}) => state / number),
  on(reset, state => initialState),
);

export function counterReducer(state, action) {
  return _counterReducer(state, action);
}
