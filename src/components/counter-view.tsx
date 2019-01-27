const React = require('react');
import { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { CounterAction } from '../actions/types';

interface Props {
  counter: number,
  increment: () => CounterAction,
  decrement: () => CounterAction,
};

const styles = StyleSheet.create({
  button: {
    width: 100,
    height: 30,
    padding: 10,
    backgroundColor: 'lightgray',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 3
  }
});

export default class Counter extends Component<Props> {
  render() {
    const { counter, increment, decrement } = this.props;
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <TouchableOpacity onPress={increment} style={styles.button}>
          <Text>+</Text>
        </TouchableOpacity>
        <Text>{counter}</Text>
        <TouchableOpacity onPress={decrement} style={styles.button}>
          <Text>-</Text>
        </TouchableOpacity>
      </View>
    )
  }
}