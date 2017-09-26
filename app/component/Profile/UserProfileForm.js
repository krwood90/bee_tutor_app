import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, StatusBar } from 'react-native';

export default class UserProfileForm extends Component {
    render() {
        return ( 
            <View style={styles.container}>
                <StatusBar 
                    barStyle="light-content" 
                    />
                <TouchableOpacity style={styles.buttonContainer} >
                    <Text style={styles.buttonText}>Message</Text> 
                </TouchableOpacity >
                <TouchableOpacity style={styles.buttonContainer} >
                    <Text style={styles.buttonText}>Review</Text> 
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