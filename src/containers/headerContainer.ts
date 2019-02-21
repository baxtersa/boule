import { connect } from 'react-redux'
import HeaderView from '../components/headerView';
import * as headerActions from '../actions/headerActions';
import { HeaderState } from '../reducers/selectedTabReducers';

// TODO: fix `ownProps` typing
const HeaderContainer = connect((state: { selectedTab: HeaderState }) => state,
  (dispatch) => ({
    onTabSelected: (index: headerActions.TabIndex) => 
      dispatch(headerActions.selectTab(index)) 
  }))(HeaderView);

export default HeaderContainer;