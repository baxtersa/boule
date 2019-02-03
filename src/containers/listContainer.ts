import { connect } from 'react-redux'
import ListView from '../components/listView';
import * as listActions from '../actions/listActions';
import { ListState } from '../reducers/listReducers';

const ListContainer = connect(<T>(state: { list: ListState<T> }) => {
  console.log('Connecting ListContainer:', state);
  return {
    items: state.list.items,
  }
}, dispatch => ({
  onItemClicked: (index: number) => {
    dispatch(listActions.toggleItem(index));
  }
}))(ListView);

export default ListContainer;
