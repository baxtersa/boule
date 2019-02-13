const React = require('react');
import { Component } from 'react'
import { Segment, Button, Text } from 'native-base';

export default class HeaderView extends Component {
  render() {
    return (
      <Segment>
        <Button first active>
          <Text>Option 1</Text>
        </Button>
        <Button last>
          <Text>Option 2</Text>
        </Button>
      </Segment>
    )
  }
};