import { connect } from 'react-redux'
import HeaderTabView from '../components/headerTabView';
import * as headerActions from '../actions/headerActions';

// TODO: fix `ownProps` typing
const HeaderTabContainer = connect(() => ({}),
  (dispatch, ownProps: any) => ({
    onClick: () => {
      dispatch(headerActions.selectTab(ownProps.index));
    }
  }))(HeaderTabView);

export default HeaderTabContainer;