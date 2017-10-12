import React, { Component } from 'react';
import { AppRegistry, Stylesheet, Text, View } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';

import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import UserProfile from '../pages/UserProfile';
import CourseList from '../pages/CourseList';
import Payment from '../pages/Payment';
import Calander from '../pages/Calander';
import Message from '../pages/Message';


export const TabsBeeTutor = TabNavigator({
    UserProfile: {
        screen: UserProfile,
        navigationOPtions: {
            tabBar: {
                label: 'Profile',
            }
        }
    },
    CourseList: {
        screen: CourseList,
        navigationOPtions: {
            tabBar: {
                label: 'Courses',
            }
        }
    },
    Payment: {
        screen: Payment,
        navigationOPtions: {
            tabBar: {
                label: 'Payment',
            }
        }
    },
    Calander: {
        screen: Calander,
        navigationOPtions: {
            tabBar: {
                label: 'Calander',
            }
        }
    },
    Message: {
        screen: Message,
        navigationOPtions: {
            tabBar: {
                label: 'Messages',
            }
        }
    },
});
