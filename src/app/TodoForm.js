import React from 'react';
import {
    View,
    TouchableOpacity,
    Text,
    TextInput
} from 'react-native';

export const TodoForm = () => (
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
)