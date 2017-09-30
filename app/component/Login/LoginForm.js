import React, { Component } from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity, Text, StatusBar } from 'react-native';
import UserProfile from './app/component/Profile/UserProfile';
import SignUp from './app/component/SignUp/SignUp';


export default class LoginForm extends Component {
    linker(comp){
        this.props.navigator.push({
            component: comp
        })
    }
    render() {
        return ( 
            <View style={styles.container}>
                <StatusBar 
                    barStyle="light-content" 
                    />
                <TextInput
                    underlineColorAndroid='transparent'
                    placeholder="School email"
                    placeholderTextColor="rgba(0,0,0,0.4)"
                    returnKeyType="next"
                    onSubmitEditing={() => this.passwordInput.focus()}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                    style={styles.input}
                    /> 
                <TextInput
                    underlineColorAndroid='transparent'
                    placeholder="Password"
                    placeholderTextColor="rgba(0,0,0,0.4)"
                    returnKeyType="go"
                    secureTextEntry
                    style={styles.input}
                    ref={(input) => this.passwordInput = input}
                    /> 
                <TouchableOpacity onPress={this.linker.bind(this, UserProfile)} style={styles.buttonContainer} >
                    <Text style={styles.buttonText}>Login</Text> 
                </TouchableOpacity > 
                <TouchableOpacity onPress={this.linker.bind(this, SignUp)} style={styles.buttonContainer} >
                    <Text style={styles.buttonText}>Sign Up</Text> 
                </TouchableOpacity >
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 30
    },
    input: {
        height: 40,
        backgroundColor: 'rgba(255,255,255,0.6)',
        marginBottom: 10,
        color: '#AAA',
        paddingHorizontal: 10,
    },
    buttonContainer: {
        backgroundColor: 'rgba(255,255,255,0.6)',
        paddingVertical: 15,
        marginBottom: 10,
    },
    buttonText: {
        textAlign: 'center',
        color: 'black',
        fontWeight: 'bold'
    }

});