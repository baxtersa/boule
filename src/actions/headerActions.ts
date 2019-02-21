import { Action } from 'redux';

export const SELECT_TAB = 'SelectTab';

export const TIMELINE_TAB = 0;
export const RECIPES_TAB = 1;

export type TabIndex = 0 | 1;

export interface SelectTab extends Action {
  type: 'SelectTab';
  index: TabIndex;
};

export type HeaderAction = SelectTab;

export function selectTab(index: TabIndex): SelectTab {
  return {
    type: SELECT_TAB,
    index,
  };
}