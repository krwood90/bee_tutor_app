import React from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import Login from './app/component/Login/Login';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Login />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff9c4',
  },
});
