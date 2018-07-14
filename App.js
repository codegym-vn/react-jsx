import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View, Button,
} from 'react-native';
import Content from './src/Content';

type Props = {};
export default class App extends Component<Props> {

  constructor(props) {
    super(props);
    this.state = { increment : 0 };
    this.increment = this.increment.bind(this);
  }

  increment() {
    this.setState({ increment: this.state.increment + 1 });
  }

  render() {
    return (
      <View style={styles.container}>
        <Button onPress={this.increment} title="INCREMENT" color="#841584" />
        <Content myNumber={this.state.increment} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
