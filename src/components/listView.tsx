const React = require('react');
import { Component } from 'react'
import ListItemView from './listItemView';
import { FlatList } from 'react-native';
import { ListState } from '../reducers/listReducers';

export interface Props {
  onItemClicked: (index: number) => void;
  list: ListState<any>;
};

export default class ListView extends Component<Props> {
  render() {
    const { onItemClicked, list } = this.props;

    return (
      <FlatList
        data={list.items.map((item, index) => ({
          key: item + index,
          text: item,
          index,
        }))}
        renderItem={(item) => {
          return <ListItemView
            key={item.index}
            onClick={() => onItemClicked(item.index)}
            text={item.item.text}
          />;
        }} />
    )
  }
};