import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, KeyboardAvoidingView} from 'react-native';
import SignUpForm from './SignUpForm';
import { Font } from 'expo';

export default class SignUp extends Component {


    render() {
        return ( 
            <KeyboardAvoidingView behavior='padding' style={styles.container}>
                <View style={styles.titleContainer}>
                    <Text style={styles.titleName}>Sign Up</Text>
                </View>
                <View style={styles.formContainer}>
                    <SignUpForm />
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