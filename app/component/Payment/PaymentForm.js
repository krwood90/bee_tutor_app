import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';




export default class PaymentForm extends Component {


    render() {
        return ( 
            <View>
                <TouchableOpacity style={styles.buttonContainer} >
                    <Text style={styles.buttonText}>START SESSION</Text> 
                </TouchableOpacity >
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
    },
    buttonContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fdd835',
        paddingVertical: 15,
        height: 36,
        width: 150,
        marginBottom: 10,
    },

});