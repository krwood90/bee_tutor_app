import React from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import { TabNavigator } from 'react-navigation';
import Payment from './app/component/Payment/Payment';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Payment />
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
