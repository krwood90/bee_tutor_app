import React, { Component } from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity, Text, StatusBar } from 'react-native';

export default class LoginForm extends Component {
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
                <TouchableOpacity style={styles.buttonContainer} >
                    <Text style={styles.buttonText}>Login</Text> 
                </TouchableOpacity > 
                <TouchableOpacity style={styles.buttonContainer} >
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