import React, { Component } from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView} from 'react-native';





export default class Calander extends Component {


    render() {
        return ( 
            <KeyboardAvoidingView behavior='padding' style={styles.container}>
                <View style={styles.formContainer}>
                    
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