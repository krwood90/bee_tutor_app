import React, { Component } from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity, Text, StatusBar, ScrollView } from 'react-native';
import Course from './Course';

export default class CourseListForm extends Component {

    state = {
        courseArray: [{'course': 'testcourse 1'}],
        courseText: '',
        classesAvailable:[
            {title: physics}
        ],
        classesText: '',
    }
    

    render() {

        let courses = this.state.courseArray.map((val, key) => {
            return <Course key={key} keyval={key} val={val} />
        });

        return ( 
            <View style={styles.container}>
                <StatusBar 
                    barStyle="light-content" 
                    />
                <View style={styles.header}>
                    <Text style={styles.headerText}>Classes</Text>
                    <TextInput style={styles.searchBar}
                    underlineColorAndroid='transparent' placeholder='Search Class'
                    onChangeText={ (text) => this.search(text) } value={this.state.text} 
                    />
                </View>
                <ScrollView style={styles.scrollContainer}>
                    {courses}
                </ScrollView>
                <View style={styles.footer}>
                    <View style={styles.addCourseToList}>
                        <TextInput styles={styles.textInput}
                            onChangeText={(courseText) => this.setState({courseText})} value={this.state.courseText}
                            underlineColorAndroid='transparent'
                            placeholder="Add class"
                            placeholderTextColor="rgba(0,0,0,0.4)"
                            autoCapitalize="none"
                            autoCorrect={true}
                            style={styles.input}
                            /> 
                        <TouchableOpacity onPress={this.addCourse.bind(this)} style={styles.buttonContainer} >
                            <Text style={styles.buttonText}>+ Add Class</Text> 
                        </TouchableOpacity >
                    </View>
                </View>
            </View>
        );
    }

    addCourse() {
        if (this.state.courseText) {
            this.state.courseArray.push({'course': this.state.courseText});
            this.setState({courseArray: this.state.courseArray})
            this.setState({courseText: ''});
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    input: {
        height: 40,
        backgroundColor: 'rgba(255,255,255,0.6)',
        marginBottom: 10,
        color: '#AAA',
        paddingHorizontal: 10,
    },
    header: {
        backgroundColor: '#fbc02d',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 10,
        borderBottomColor: '#ddd',
    },
    headerText: {
        color: 'white',
        fontSize: 18,
        padding: 26,
    },
    scrollContainer: {
        flex: 1,
        marginBottom: 100,
    },
    addCourseToList: {
        flex: 1,
    },
    buttonContainer: {
        backgroundColor: 'rgba(255,255,255,0.6)',
        paddingVertical: 15,
    },
    buttonText: {
        textAlign: 'center',
        color: 'black',
        fontWeight: 'bold'
    },
    footer: {
        position: 'absolute',
        alignItems: 'center',
        bottom: 0,
        left: 0,
        right: 0,
    }

});