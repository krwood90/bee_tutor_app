import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, KeyboardAvoidingView} from 'react-native';
import LoginForm from './LoginForm';
import {Font} from 'expo';

export default class Login extends Component {


    render() {
        return ( 
            <KeyboardAvoidingView behavior='padding' style={styles.container}>
                <View style={styles.titleContainer}>
                    <Text style={styles.titleName}>Bee Tutor</Text>
                </View>
                <View style={styles.logoContainer}>
                <Image 
                    style={styles.logo} 
                    source={require('../../resources/logo/logo11.png')}
                    />
                    <Text style={styles.title} > An app made where tutors and tutees meet up</Text>
                </View> 
                <View style={styles.formContainer}>
                    <LoginForm />
                </View>  
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff9c4',
        flex: 1,
    },
    titleContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 80,
    },
    titleName: {
        color: '#ffeb3b',
        fontSize: 40,
    },
    logoContainer: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center',
        flex: 1,
        paddingTop: 20
    },
    logo: {
        width: 180,
        height: 180,
    },
    formContainer: {
        justifyContent: 'center',
        flex: 1,
    },
    title: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        width: 180,
        textAlign: 'center',
        opacity: 0.3,
        flex: 1,
    }
});