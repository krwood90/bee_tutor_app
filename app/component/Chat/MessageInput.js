import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, KeyboardAvoidingView, TouchableOpacity} from 'react-native';
import { Font } from 'expo';

export default class MessageInput extends Component {


    render() {
        return ( 
            <View key={this.props.keyval} style={styles.messages}>
                <Text style={styles.messageText}>{this.props.val.message}</Text>

                <TouchableOpacity>
                    
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    messages: {
        position: 'relative',
        padding: 20,
        paddingRight: 100,
        borderBottomWidth: 2,
        borderBottomColor: '#ededed'
    },
    messageText: {
        paddingLeft: 20,

    },
    messageDelete: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2980b9',
        padding: 10,
        top: 10,
        bottom: 10,
        right: 10,
    },
    messageDeleteText: {
        color: 'white'
    }
});