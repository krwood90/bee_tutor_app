import React, { Component } from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView} from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import CourseListForm from './component/CourseList/CourseListForm';
import Course from './component/CourseList/Course';


export default class CourseList extends Component {
    static navigationOptions = {
        title: 'Courses Available',
      };

    render() {
        const { navigate } = this.props.navigation;
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
        backgroundColor: 'white',
        flex: 1
    },
    formContainer: {
        justifyContent: 'center',
        flex: 1,
    },
});