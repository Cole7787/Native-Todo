import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet
} from 'react-native';


export class Todo extends Component {
    constructor() {
        super();
        this.state = {
            todos: [],
            newTodo: ''
        }
    }

    handleChange() {
        this.setState({newTodo: Text});
    }

    handlePress() {
        const todos = [...this.state.todos, this.state.newTodo];
        this.setState({todos, newTodo: ''});
    }
    render(){
        return (
            <View style={styles.container}>
                <View style={styles.form}>
                    <TextInput
                    style={styles.input}
                    value={this.state.newTodo}
                    onChangeText={this.handleChange.bind(this)}
                    />
                    <TouchableOpacity 
                    style={styles.button}
                    onPress={this.handlePress.bind(this)}>
                        <Text style={styles.buttonText}>Create</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.todos}>
                    {this.state.todos.map((todos, i) => 
                    <Text key={i}>{todo}</Text>)}
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    form: {
        flexDirection: 'row'
    },
    input: {
        flex: 0.7,
        fontSize: 24
    },
    button: {
        flex: 0.3,
        borderWidth: 1,
        borderColor: 'blue',
        height: 50,
        borderRadius: 3,
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        flex: 1,
        padding: 20
    },
    buttonText: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    todos: {
        marginTop: 60
    },
    todo: {
        borderBottomWidth: 1,
        borderBottomColor: 'lightgrey'
    }
})