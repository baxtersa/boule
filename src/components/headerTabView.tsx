const React = require('react');
import { Component } from 'react'
import { View } from 'react-native';

export interface Props {
  onClick: () => void;
};

export default class HeaderTabView extends Component<Props> {
  render() {
    const { onClick } = this.props;

    return (
      <View onTouchEnd={() => onClick()}>
      </View>
    )
  }
};