import React from 'react';
import { TabNavigator } from 'react-navigation';


import Login from './app/component/Login/Login';
import SignUp from './app/component/SignUp/SignUp';
import UserProfile from './app/component/Profile/UserProfile';

export const Tabs = TabNavigator({
    Login: {
        name: Login,
    },
    SignUp: {
        name: SignUp,
    },  
    UserProfile: {
        name: UserProfile,
    },
});