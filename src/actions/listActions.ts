import { Action } from 'redux';
export const ADD_ITEM = 'AddItem';
export const DELETE_ITEM = 'DeleteItem';
export const TOGGLE_ITEM = 'ToggleItem';

export interface AddItem<T> extends Action {
  type: 'AddItem';
  item: T;
};

export interface DeleteItem extends Action {
  type: 'DeleteItem';
  index: number;
};

export interface ToggleItem extends Action {
  type: 'ToggleItem';
  index: number;
};

export type ListAction = AddItem<any> | DeleteItem | ToggleItem;

export function addItem<T>(item: T): AddItem<T> {
  return {
    type: ADD_ITEM,
    item,
  };
}

export function deleteItem(index: number): DeleteItem {
  return {
    type: DELETE_ITEM,
    index,
  };
}

export function toggleItem(index: number): ToggleItem {
  return {
    type: TOGGLE_ITEM,
    index,
  };
}