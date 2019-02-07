import { connect } from 'react-redux'
import ListView from '../components/listView';
import { deleteItem } from '../actions/listActions';
import { ListState } from '../reducers/listReducers';

const ListContainer = connect(
  <T>(state: { list: ListState<T> }) => state,
  dispatch => ({
    onItemClicked: (index: number) => {
      dispatch(deleteItem(index));
    }
  }))(ListView);

export default ListContainer;
