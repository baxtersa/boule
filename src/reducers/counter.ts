import * as types from '../actions/types';

export interface CounterState {
  count: number;
}

const initialState: CounterState = {
  count: 0,
};

export function counter(state: CounterState = initialState,
  action?: types.CounterAction): CounterState {
    if (!action) {
      return initialState;
    }

    switch (action.type) {
      case types.INCREMENT:
        return {
          ...state,
          count: state.count + 1,
        };
      case types.DECREMENT:
        return {
          ...state,
          count: state.count - 1,
        };
      default:
        return initialState;
    }
}