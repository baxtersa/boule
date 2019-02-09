const React = require('react');
import { Component } from 'react'
import { ListView as RNListView, ListViewDataSource } from 'react-native'
import ListItemView from './listItemView';
import { ListState } from '../reducers/listReducers';
import { List, Button, Icon } from 'native-base';

export interface Props {
  onItemClicked: (index: number) => void;
  list: ListState<any>;
};

export default class ListView extends Component<Props> {
  private ds: ListViewDataSource;

  constructor(props: Props) {
    super(props);

    this.ds = new RNListView.DataSource({
      rowHasChanged: (left, right) => left !== right,
    });
  }

  render() {
    const { onItemClicked, list } = this.props;

    return (
      <List
        dataSource={this.ds.cloneWithRows(list.items.map((item, index) => ({
          key: item + index,
          text: item,
          index
        })))}
        renderRow={item => (
          <ListItemView
            key={item.index}
            text={item.text}
          />
        )}
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