const React = require('react');
import { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import App from './components/app';

const store = createStore(reducer);

export default class Boule extends Component {
  render() {
    return (
      <Provider store={store} >
        <App />
      </Provider>
    );
  }
};