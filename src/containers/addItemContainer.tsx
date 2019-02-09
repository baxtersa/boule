const React = require('react');
import { Component } from "react";
import { connect } from "react-redux";
import { TextInput, StyleSheet } from "react-native";
import { Button, Text, Grid, Col } from 'native-base';
import { addItem, AddItem } from "../actions";

export interface Props {
    onAddItem: (text: string) => AddItem<string>;
}

export interface State {
    text: string;
};
const defaultState = { text: '' };

const style = StyleSheet.create({
    addItem: {
        flex: 1,
        backgroundColor: '#f00',
        width: '100%',
    },
    textInput: {
        alignItems: 'center',
        // justifyContent: 'center',
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
            <Grid>
                <Col>
                    <TextInput
                        style={style.textInput}
                        onChangeText={text => this.setState({ text })}
                    />
                </Col>
                <Col>
                    <Button
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
                        <Text>Add</Text>
                    </Button >
                </Col>
            </Grid>
        )
    }
};

const AddItemContainer = connect(state => state,
    dispatch => ({
        onAddItem: (text: string) => dispatch(addItem(text))
    }))(AddItemView)

export default AddItemContainer;