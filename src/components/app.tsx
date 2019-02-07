const React = require('react');
import { Component } from 'react'
import { View, StyleSheet } from 'react-native';
import ListContainer from '../containers/listContainer';
import HeaderView from './headerView';
import AddItemContainer from '../containers/addItemContainer';

const style = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
})

export default class App extends Component {
  render() {
    return (
      <View style={style.app}>
        <HeaderView />
        <AddItemContainer />
        <ListContainer />
      </View>
    )
  }
}