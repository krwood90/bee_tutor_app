import React, { Component } from 'react';
import { AppRegistry, Stylesheet, Text, View } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';

import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import UserProfile from '../pages/UserProfile';
import CourseList from '../pages/CourseList';
import Payment from '../pages/Payment';
import Calander from '../pages/Calander';


export const LoginStack = StackNavigator({
    UserProfile: {
        screen: UserProfile,
    },
    Login: {
        screen: Login,
    },
    SignUp: {
        screen: SignUp,
    },
});
