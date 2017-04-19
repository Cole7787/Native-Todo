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

    componentWillMount() {
        fetch('http://10.0.0.8:5000/todos', {
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(res => res.json())
        .then(todos => this.setState({todos}))
    }

    handleChange() {
        this.setState({newTodo: Text});
    }

    handlePress() {
        fetch('http://10.0.0.8:5000/todos', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: this.state.newTodo
            })
        })
        .then(res => res.json())
        .then(todo => {
            const todos = [todo, ...this.state.todos];
            this.setState({todos, newTodo: ''})
        })
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
                    <View key={i} style={styles.todo}>
                        <Text style={styles.todoText}>{todo}</Text>
                    </View>
                    )}
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
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'lightgrey'
    },
    todoText: {
        fontSize: 24
    }
})