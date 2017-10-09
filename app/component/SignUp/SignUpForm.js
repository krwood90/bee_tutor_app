import React, { Component } from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity, Text, StatusBar } from 'react-native';
import { StackNavigator } from 'react-navigation';


export default class SignUpFrom extends Component {
    render() {
        return ( 
            <View style={styles.containerForm}>
                <StatusBar 
                    barStyle="light-content" 
                    />
                <TextInput
                    underlineColorAndroid='transparent'
                    placeholder="Name"
                    placeholderTextColor="rgba(0,0,0,0.4)"
                    returnKeyType="next"
                    onSubmitEditing={() => this.passwordInput.focus()}
                    autoCapitalize="none"
                    autoCorrect={false}
                    style={styles.input}
                    /> 
                <TextInput
                    underlineColorAndroid='transparent'
                    placeholder="School Email"
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
                    placeholder="Major"
                    placeholderTextColor="rgba(0,0,0,0.4)"
                    returnKeyType="next"
                    onSubmitEditing={() => this.passwordInput.focus()}
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
                <TextInput
                    underlineColorAndroid='transparent'
                    placeholder="Confirm Password"
                    placeholderTextColor="rgba(0,0,0,0.4)"
                    returnKeyType="go"
                    secureTextEntry
                    style={styles.input}
                    ref={(input) => this.passwordInput = input}
                    /> 
                <TouchableOpacity style={styles.buttonContainer} >
                    <Text style={styles.buttonText}>Sign Up</Text> 
                </TouchableOpacity >
            </View>
        );
    }
}


const styles = StyleSheet.create({
    containerForm: {
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