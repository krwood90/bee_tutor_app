import React, { Component } from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity, Text, StatusBar, ScrollView } from 'react-native';
import MessageInput from './MessageInput';

export default class MessageForm extends Component {

    state = {
        messageArray: [{'message': 'testmessage 1'}],
        messageText: '',
    }
    

    render() {

        let messages = this.state.messageArray.map((val, key) => {
            return <MessageInput key={key} keyval={key} val={val} />
        });

        return ( 
            <View style={styles.container}>
                <StatusBar 
                    barStyle="light-content" 
                    />
                <View style={styles.header}>
                    <Text style={styles.headerText}>Messages</Text>
                </View>
                <ScrollView style={styles.scrollContainer}>
                    {messages}
                </ScrollView>
                <View style={styles.footer}>
                    <View style={styles.addCourseToList}>
                        <TextInput styles={styles.textInput}
                            onChangeText={(messageText) => this.setState({messageText})} value={this.state.messageText}
                            underlineColorAndroid='transparent'
                            placeholder="Add message"
                            placeholderTextColor="rgba(0,0,0,0.4)"
                            autoCapitalize="none"
                            autoCorrect={true}
                            style={styles.input}
                            /> 
                        <TouchableOpacity onPress={this.addMessage.bind(this)} style={styles.buttonContainer} >
                            <Text style={styles.buttonText}>+ Add message</Text> 
                        </TouchableOpacity >
                    </View>
                </View>
            </View>
        );
    }

    addMessage() {
        if (this.state.messageText) {
            this.state.messageArray.push({'message': this.state.messageText});
            this.setState({messageArray: this.state.messageArray})
            this.setState({messageText: ''});
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