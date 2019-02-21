const React = require('react');
import { Component } from "react";
import { connect } from "react-redux";
import ListContainer from "./listContainer";
import AddItemContainer from "./addItemContainer";
import { View } from "native-base";
import { HeaderState } from "../reducers/selectedTabReducers";
import { TIMELINE_TAB, RECIPES_TAB } from "../actions/headerActions";

export interface Props {
  selectedTab: HeaderState,
};

class ContentView extends Component<Props> {
  render() {
    const { selectedTab } = this.props;
    const index = selectedTab.selectedTab;

    switch (index) {
      case TIMELINE_TAB:
        return (
          <View>
            <AddItemContainer />
            <ListContainer />
          </View>
        )
      case RECIPES_TAB:
        return (
          <View>
          </View>
        )
      default:
        return (
          <View>
          </View>
        )
    }
  }
}

const ContentContainer = connect(
  (state: { selectedTab: HeaderState }) => state
)(ContentView)

export default ContentContainer;