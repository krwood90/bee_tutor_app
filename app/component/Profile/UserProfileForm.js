import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, StatusBar } from 'react-native';

export default class UserProfileForm extends Component {
    render() {
        return ( 
            <View style={styles.container}>
                <Text style={styles.reviewText}>Reviews alallslsdlaldalfasflasfljklajlkasjgldsajlfjlajjfdsajlafdd</Text>
                <Text style={styles.reviewText}>Reviews AHFHAJBJNVJABIJBIATHIHPniojiavonkn</Text>
                <Text style={styles.reviewText}>Reviewsafdafkasdkjfokojasioeu fijmiaueimuvmiumeviuviuimvdvfoj</Text>
                <Text style={styles.reviewText}>Reviewsadsfvaisouviomaoivokfdajfkmjvkjfaojvkdov</Text>
                <Text style={styles.reviewText}>Reviewssavjeivmijiomtvioj,dovkaokfd,s</Text>
                <Text style={styles.reviewText}>Reviewsafviufiosdamiojivmosdajijimvfejofe</Text>
                <Text style={styles.reviewText}>Reviewsavsufidmaovivfjdijiovjimvj</Text>
                <TouchableOpacity style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>SEE ALL REVIEWS</Text> 
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
        alignItems: 'center',
        backgroundColor: 'rgba(255,255,255,0.6)',
        paddingVertical: 15,
        marginBottom: 10,
    },
    buttonText: {
        textAlign: 'center',
        color: '#fbc02d',
        fontWeight: 'bold'
    },
    reviewText:{
        paddingBottom: 10,
        borderBottomColor: 'rgba(0,0,0,0.1)',
        borderBottomWidth: 1,
    }

});