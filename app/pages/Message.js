import React, { Component } from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView} from 'react-native';
import MessageForm from './component/Message/MessageForm';
import MessageInput from './component/Message/MessageInput';



export default class Message extends Component {


    render() {
        return ( 
            <KeyboardAvoidingView behavior='padding' style={styles.container}>
                <View style={styles.formContainer}>
                    <MessageForm />
                </View>  
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1
    },
    formContainer: {
        justifyContent: 'center',
        flex: 1,
    },
});