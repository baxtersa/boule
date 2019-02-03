const React = require('react');
import { Component } from 'react'
import { StyleSheet, Text } from 'react-native';

interface Props {
  onClick: () => void;
  text: string;
};

const style = StyleSheet.create({
  listItem: {

  }
})

export default class ListItemView extends Component<Props> {
  render() {
    const { onClick, text } = this.props;

    return (
      <Text
        style={style.listItem}
        onPress={onClick}>
        {text}
      </Text>
    )
  }
};