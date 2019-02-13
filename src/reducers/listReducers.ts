import { ListAction, ADD_ITEM, DELETE_ITEM, TOGGLE_ITEM } from "../actions";

export interface ListState<T> {
  items: T[];
};

const initialState: ListState<any> = {
  items: [{
    title: 'bread',
    date: Date.now(),
  }, {
    title: 'sourdough',
    date: Date.now(),
  }],
};

export function listReducer<T>(state: ListState<T> = initialState, action: ListAction): ListState<T> {
  switch (action.type) {
    case ADD_ITEM:
      state.items.push(action.item);
      return {
        ...state,
        items: state.items,
      };
    case DELETE_ITEM:
      state.items.splice(action.index, 1);
      return {
        ...state,
        items: state.items,
      }
    case TOGGLE_ITEM:
      return state;
    default:
      return initialState;
  }
}