const React = require('react');
import { Component } from 'react'
import { Container, Header, Content, StyleProvider } from 'native-base';

import ContentContainer from '../containers/contentContainer';
import getTheme from '../../native-base-theme/components';
import commonColor from '../../native-base-theme/variables/commonColor';
import HeaderContainer from '../containers/headerContainer';

export default class App extends Component {
  render() {
    return (
      <StyleProvider style={getTheme(commonColor)}>
        <Container>
          <Header hasSegment>
            <HeaderContainer />
          </Header>
          <Content padder scrollEnabled={false}>
            <ContentContainer />
          </Content>
        </Container>
      </StyleProvider>
    )
  }
}