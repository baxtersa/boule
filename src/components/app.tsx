const React = require('react');
import { Component } from 'react'
import { Container, Header, Content, Body, StyleProvider } from 'native-base';

import ListContainer from '../containers/listContainer';
import AddItemContainer from '../containers/addItemContainer';
import getTheme from '../../native-base-theme/components';
import commonColor from '../../native-base-theme/variables/commonColor';
import HeaderView from './headerView';

export default class App extends Component {
  render() {
    return (
      <StyleProvider style={getTheme(commonColor)}>
        <Container>
          <Header hasSegment>
            <Body>
              <HeaderView />
            </Body>
          </Header>
          <Content padder scrollEnabled={false}>
            <AddItemContainer />
            <ListContainer />
          </Content>
        </Container>
      </StyleProvider>
    )
  }
}