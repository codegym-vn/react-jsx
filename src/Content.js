import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View, Button, Alert,
} from 'react-native';

type Props = {};
class Content extends Component<Props> {

    componentWillMount() {
        Alert.alert('componentWillMount');
    }
    componentDidMount() {
        Alert.alert('componentDidMount');
    }
    componentWillReceiveProps(newProps) {
        Alert.alert('componentWillReceiveProps');
    }
    shouldComponentUpdate(newProps, newState) {
        return true;
    }
    componentWillUpdate(nextProps, nextState) {
        Alert.alert('componentWillUpdate');
    }
    componentDidUpdate(prevProps, prevState) {
        Alert.alert('componentDidUpdate')
    }
    componentWillUnmount() {
        Alert.alert('componentWillUnmount')
    }
    render() {
        return (
            <View><Text>{this.props.myNumber}</Text></View>
        );
    }
}

export default Content
