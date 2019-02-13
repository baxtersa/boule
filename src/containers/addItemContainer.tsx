const React = require('react');
import { Component } from "react";
import { connect } from "react-redux";
import { TextInput, StyleSheet } from "react-native";
import { Button, Text, View } from 'native-base';
import { addItem, AddItem } from "../actions";
import { BreadInfo } from "../types/breadInfo";

export interface Props {
    onAddItem: (text: string) => AddItem<BreadInfo>;
}

export interface State {
    text: string;
};
const defaultState = { text: '' };

const style = StyleSheet.create({
    addItem: {
        width: '90%',
        alignSelf: 'center',
        justifyContent: 'center',
    },
    textInput: {
        padding: 10,
        justifyContent: 'center',
    }
});

class AddItemView extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = defaultState;
    }

    render() {
        const { onAddItem } = this.props;
        const { text } = this.state;
        return (
            <View style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <TextInput
                    style={style.textInput}
                    clearButtonMode={'while-editing'}
                    clearTextOnFocus={true}
                    onSubmitEditing={ev =>
                        this.setState({ text: ev.nativeEvent.text })} />
                <Button
                    style={style.addItem}
                    onPress={event => {
                        event.preventDefault();

                        // don't add empty items to list
                        if (!text.trim()) {
                            return;
                        }

                        // dispatch an addItem action
                        onAddItem(text);
                        // reset the text entry to default
                        this.setState(defaultState);
                    }}>
                    <Text>Add Item</Text>
                </Button >
            </View>
        )
    }
};

const AddItemContainer = connect(state => state,
    dispatch => ({
        onAddItem: (text: string) => dispatch(addItem({
            title: text,
            date: Date.now(),
        }))
    }))(AddItemView)

export default AddItemContainer;