const React = require('react');
import { Component } from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';
import CounterApp from './containers/counter-app';
import * as counter from './reducers';

const reducer = combineReducers(counter);
const store = createStore(reducer);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default class App extends Component {
  render() {
    return (
      <Provider store={store} >
        <View style={styles.container}>
          <Text>Open up App.js to start working on your TypeScript app!</Text>
        </View>
        <CounterApp />
      </Provider>
    );
  }
}