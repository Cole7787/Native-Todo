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
        fetch('http://localhost:3000/todos', {
            method: 'post',
            body: JSON.stringify({
                name: this.state.newTodo
            }),
            header: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(data => {
            const todos = [...this.state.todos, data];
            this.setState({todos, newTodo: ''});
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