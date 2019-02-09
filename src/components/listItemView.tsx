const React = require('react');
import { Component } from 'react'
import { Text, ListItem } from 'native-base';

interface Props {
  text: string;
};

export default class ListItemView extends Component<Props> {
  render() {
    const { text } = this.props;

    return (
      <ListItem>
        <Text>{text}</Text>
      </ListItem>
    )
  }
};