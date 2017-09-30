import React, { Component } from 'react';
import { AppRegistry, Stylesheet, Text, View } from 'react-native';
import Navigation from 'react-native-navigation';


import Login from '../app/component/Login/Login';
import SignUp from './app/component/SignUp/SignUp';
import UserProfile from './app/component/Profile/UserProfile';
import CourseList from './app/component/CourseList/CourseList';

export function registerScreens() {
    Navigation.registerComponent('bee-tutor.LoginScreen', () => Login);
    Navigation.registerComponent('bee-tutor.SignUpScreen', () => SignUp);
    Navigation.registerComponent('bee-tutor.UserProfileScreen', () => UserProfile);
    Navigation.registerComponent('bee-tutor.CourseListScreen', () => CourseList);
}