const React = require('react');
import { Component } from 'react'
import { ListView as RNListView, ListViewDataSource } from 'react-native'
import { List, Button, Icon } from 'native-base';

import ListItemView from './listItemView';
import { ListState } from '../reducers/listReducers';
import { BreadInfo } from '../types/breadInfo';

export interface Props {
  onItemClicked: (index: number) => void;
  list: ListState<BreadInfo>;
};

export default class ListView extends Component<Props> {
  private ds: ListViewDataSource = new RNListView.DataSource({
    rowHasChanged: (left, right) => left !== right,
  });

  render() {
    const { onItemClicked, list } = this.props;

    return (
      <List
        style={{ backgroundColor: 'transparent' }}
        contentContainerStyle={{
          padding: 5,
          backgroundColor: 'transparent',
        }}
        disableRightSwipe
        dataSource={this.ds.cloneWithRows(list.items.map((item, index) => ({
          key: item.title + index,
          text: item.title,
          index
        })))}
        renderRow={item =>
          <ListItemView
            key={item.index}
            text={item.text}
          />
        }
        rightOpenValue={-75}
        renderRightHiddenRow={(_, secId, rowId, rowMap) =>
          <Button
            full
            danger
            onPress={_ => {
              onItemClicked(rowId as number);
              rowMap[`${secId}${rowId}`].props.closeRow();
            }}>
            <Icon active name="trash" />
          </Button>} >
      </List>
    )
  }
};