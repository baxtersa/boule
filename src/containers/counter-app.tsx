const React = require('react');
import { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Counter from '../components/counter-view';
import { CounterState } from '../reducers/counter';
import { increment, decrement, CounterActions } from '../actions/types';

interface Props {
  state: CounterState;
  actions: CounterActions;
}

const counterActions = { increment, decrement };

class CounterApp extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    const { state, actions } = this.props;

    return (
      <Counter
        counter={state.count}
        {...actions}
      />
    )
  }
}

export default connect(
  (state: { counter: CounterState }) => {
    return {
      state: state.counter,
    }
  },
  dispatch => ({
    actions: bindActionCreators(counterActions, dispatch),
  })
)(CounterApp);