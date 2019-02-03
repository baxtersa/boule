import { Action } from 'redux';
export const SELECT_TAB = 'SelectTab';

export interface SelectTab extends Action {
  type: 'SelectTab';
  index: number;
};

export type HeaderAction = SelectTab;

export function selectTab(index: number): SelectTab {
  return {
    type: SELECT_TAB,
    index,
  };
}