const React = require('react');
import { Component } from "react";
import { connect } from "react-redux";
import { StyleSheet } from "react-native";
import { Button, View, Icon, Item, Input } from 'native-base';
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
        height: 35,
        width: 35,
        marginLeft: 30,
        alignSelf: 'center',
        justifyContent: 'center',
    },
    textInput: {
        flex: 1,
        height: 35,
        justifyContent: 'center',
        backgroundColor: '#ebebeb',
        borderRadius: 8,
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
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
            }}>
                <Item
                    style={style.textInput}
                    rounded>
                    <Input
                        style={style.textInput}
                        clearButtonMode='always'
                        clearTextOnFocus={true}
                        onEndEditing={ev =>
                            this.setState({ text: ev.nativeEvent.text })} />
                </Item>
                <Button
                    style={style.addItem}
                    onPress={() => {
                        // don't add empty items to list
                        if (!text.trim()) {
                            return;
                        }

                        // dispatch an addItem action
                        onAddItem(text);
                        // reset the text entry to default
                        this.setState(defaultState);
                    }}>
                    <Icon active name='plus'/>
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