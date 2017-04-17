import React, { Component } from 'react';
import { View, Text } from 'react-native';

export class Reddit extends Component {
    componentWillMount() {
        fetch('https://www.reddit.com/.json', {
            Accept: 'application/json'
        })
        .then(res => res.json())
        .then(data => console.log(data));
    }
    render() {
        return(
            <View>
                <Text>Reddit</Text>
            </View>
        )
    }
}