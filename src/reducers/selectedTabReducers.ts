import { HeaderAction, SELECT_TAB, TabIndex, TIMELINE_TAB } from '../actions/headerActions';

export interface HeaderState {
  selectedTab: TabIndex;
};

const initialState: HeaderState = {
  selectedTab: TIMELINE_TAB,
};

export function selectedTabReducer(state: HeaderState = initialState, action: HeaderAction): HeaderState {
  switch (action.type) {
    case SELECT_TAB:
      if (state.selectedTab == action.index) {
        return state;
      } else {
      return { selectedTab: action.index };
      }
    default:
      return initialState;
    }
}