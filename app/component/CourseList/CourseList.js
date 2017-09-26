import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, KeyboardAvoidingView} from 'react-native';
import CourseListForm from './CourseListForm';
import Course from './Course';
import { Font } from 'expo';


export default class CourseList extends Component {


    render() {
        return ( 
            <KeyboardAvoidingView behavior='padding' style={styles.container}>
                <View style={styles.formContainer}>
                    <CourseListForm />
                </View>  
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff9c4',
        flex: 1
    },
    formContainer: {
        justifyContent: 'center',
        flex: 1,
    },
});