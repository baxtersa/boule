import { ListAction, ADD_ITEM, DELETE_ITEM, TOGGLE_ITEM } from "../actions";

export interface ListState<T> {
  items: T[];
};

const initialState: ListState<any> = {
  items: [ 'a', 'b', 'c'],
};

export function listReducer<T>(state: ListState<T> = initialState, action: ListAction): ListState<any> {
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