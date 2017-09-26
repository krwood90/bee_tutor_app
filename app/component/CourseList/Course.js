import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, KeyboardAvoidingView, TouchableOpacity} from 'react-native';
import { Font } from 'expo';

export default class Course extends Component {


    render() {
        return ( 
            <View key={this.props.keyval} style={styles.courses}>
                <text style={styles.courseText}>{this.props.val.course}</text>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    courses: {
        position: 'relative',
        padding: 20,
        paddingRight: 100,
        borderBottomWidth: 2,
        borderBottomColor: '#ededed'
    },
    courseText: {
        paddingLeft: 20,
        borderLeftWidth: 10,
        borderLeftColor: '#E91E63'
    },
    courseDelete: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2980b9',
        padding: 10,
        top: 10,
        bottom: 10,
        right: 10,
    },
    courseDeleteText: {
        color: 'white'
    }
});