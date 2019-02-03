const React = require('react');
import { Component } from 'react'
import ListItemView from './listItemView';
import { FlatList } from 'react-native';

export interface Props {
  onItemClicked: (index: number) => void;
  items: any[];
};

export default class ListView extends Component<Props> {
  render() {
    const { onItemClicked, items } = this.props;

    return (
      <FlatList
        data={items.map((item, index) => ({ key: item, index }))}
        renderItem={(item) =>
          <ListItemView
            key={item.index}
            onClick={() => onItemClicked(item.index)}
            text={item.item.key + ''}
          />
        } />
    )
  }
};