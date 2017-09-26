import React from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import { TabNavigator } from 'react-navigation';
import CourseList from './app/component/CourseList/CourseList';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <CourseList />
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
