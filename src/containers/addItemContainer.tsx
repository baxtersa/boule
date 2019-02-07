const React = require('react');
import { Component } from "react";
import { connect } from "react-redux";
import { View, TextInput, StyleSheet } from "react-native";
import { addItem, AddItem } from "../actions";

export interface Props {
    onChangeText: (text: string) => AddItem<string>;
}

export interface State {
    text: string;
};

const style = StyleSheet.create({
    addItem: {
        flex: 1,
        backgroundColor: '#f00',
        width: '100%',
    }
});

class AddItemView extends Component<Props, State> {
    render() {
        console.log('AddItemView', this.state);
        const { onChangeText } = this.props;
        const { text } = this.state;
        return (
            <View style={style.addItem}>
                <TextInput
                    onChangeText={onChangeText}
                    value={text}
                />
            </View>
        )
    }
};

const AddItemContainer = connect((state: { text: string }) => {
    console.log('connecting:', state);
    return state;
},
    dispatch => ({
        onChangeText: (text: string) => dispatch(addItem(text))
    }))(AddItemView)

export default AddItemContainer;