const React = require('react');
import { Component } from 'react'
import { StyleSheet } from 'react-native';
import ListContainer from '../containers/listContainer';
// import HeaderView from './headerView';
import AddItemContainer from '../containers/addItemContainer';
import { Container, Header, Content } from 'native-base';

const style = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: '#fff',
  }
})

export default class App extends Component {
  render() {
    return (
      <Container style={style.app}>
        <Header>
          <AddItemContainer />
        </Header>
        <Content>
          <ListContainer />
        </Content>
      </Container>
    )
  }
}