const React = require('react');
import { Component } from 'react'
import { Segment, Button, Text } from 'native-base';
import { HeaderAction, TabIndex, TIMELINE_TAB, RECIPES_TAB } from '../actions/headerActions';
import { HeaderState } from '../reducers/selectedTabReducers';

export interface Props {
  selectedTab: HeaderState;
  onTabSelected: (index: TabIndex) => HeaderAction;
};

export default class HeaderView extends Component<Props> {
  render() {
    const { selectedTab, onTabSelected } = this.props;
    const index = selectedTab.selectedTab;

    return (
      <Segment>
        <Button
          first
          active={index === TIMELINE_TAB}
          onPress={() => onTabSelected(TIMELINE_TAB)}>
          <Text>Timeline</Text>
        </Button>
        <Button
          last
          active={index === RECIPES_TAB}
          onPress={() => onTabSelected(RECIPES_TAB)}>
          <Text>Recipes</Text>
        </Button>
      </Segment>
    )
  }
};