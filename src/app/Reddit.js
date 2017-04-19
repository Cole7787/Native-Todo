import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

export const _Reddit = (props) => (
    <View>
        {props.posts.map(posts => <Text>{posts.name}</Text>)}
    </View>
)

const mapStateToProps = (state) => ({
    posts: state.reddit
})

export const Reddit = connect(mapStateToProps, null)(_Reddit)