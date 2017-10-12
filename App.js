import React from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
import Login from './app/pages/Login';
import SignUp from './app/pages/SignUp';
import UserProfile from './app/pages/UserProfile';


const BeeTutorApp = StackNavigator({
  Login: {
    screen: Login,
  },
  SignUp: {
    screen: SignUp,
  },
  UserProfile: {
    screen: UserProfile,
  }
},{
    initialRouteName: 'Login',
});


export default BeeTutorApp