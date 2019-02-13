import { connect } from 'react-redux'
import ListView from '../components/listView';
import { deleteItem } from '../actions/listActions';
import { ListState } from '../reducers/listReducers';
import { BreadInfo } from '../types/breadInfo';

const ListContainer = connect(
  (state: { list: ListState<BreadInfo> }) => state,
  dispatch => ({
    onItemClicked: (index: number) => {
      dispatch(deleteItem(index));
    }
  }))(ListView);

export default ListContainer;
