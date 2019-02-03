const React = require('react');
import { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native';
import HeaderTabContainer from '../containers/headerTabContainer';

const style = StyleSheet.create({
  header: {
    flex: 1,
  },
  headerTab: {
    flex: 2,
  }
})

export default class HeaderView extends Component {
  render() {
    return (
      <View style={style.header}>
        <HeaderTabContainer>
          <Text>
            Option 1
          </Text>
        </HeaderTabContainer>
        <Text>
          {'|'}
        </Text>
        <HeaderTabContainer>
          <Text>
            Option 2
          </Text>
        </HeaderTabContainer>
      </View>
    )
  }
};