import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import { TodoForm } from './TodoForm';
import { connect } from 'react-redux';

export class _Todo extends Component {
    static defaultProps = {
        todos: []
    }
    constructor() {
        super();
        this.state = {
            newTodo: ''
        }
    }

    handleChange() {
        this.setState({newTodo: Text});
    }

    handlePress() {
        this.props.createTodo(this.state.newTodo);
    }
    render(){
        return (
            <View style={styles.container}>
                <TodoForm 
                    handlePress={this.handlePress.bind(this)}
                    handleChange={this.handleChange.bind(this)}
                    value={this.state.newTodo}
                />
                <View style={styles.todos}>
                    {this.props.todos.map((todos, i) => 
                    <View key={i} style={styles.todo}>
                        <Text style={styles.todoText}>{todo}</Text>
                    </View>
                    )}
                </View>
            </View>
        )
    }
}

const mapActionsToProps = (dispatch) => ({
    createTodo(todo) {
        dispatch({type: 'CREATE_TODO', payload: todo})
    }
});

const mapStateToProps = (state) => ({
    todos: state.todos
});

export const Todo = connect(mapStateToProps, mapActionsToProps)(_Todo);


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