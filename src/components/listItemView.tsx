const React = require('react');
import { Component } from 'react'
import { Text, ListItem } from 'native-base';
import { StyleSheet } from 'react-native';

interface Props {
  text: string;
};

const style = StyleSheet.create({
  item: {
    backgroundColor: '#7cae7a',
    borderRadius: 8,
    marginVertical: 8,
  },
  text: {
    paddingLeft: 10,
  }
})

export default class ListItemView extends Component<Props> {
  render() {
    const { text } = this.props;

    return (
      <ListItem style={style.item}>
        <Text style={style.text}>{text}</Text>
      </ListItem>
    )
  }
};