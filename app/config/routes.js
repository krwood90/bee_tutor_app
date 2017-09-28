import React, { Component } from 'react';
import { AppRegistry, Stylesheet, Text, View } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';


import Login from '../app/component/Login/Login';
import SignUp from './app/component/SignUp/SignUp';
import UserProfile from './app/component/Profile/UserProfile';
import CourseList from './app/component/CourseList/CourseList';

export const Tabs = TabNavigator({
    Login: {
        screen: Login,
    },
    SignUp: {
        screen: SignUp,
    },  
    UserProfile: {
        screen: UserProfile,
    },
    CourseList: {
        screen: CourseList,
    }
});