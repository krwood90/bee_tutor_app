import React, { Component } from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView} from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import PaymentForm from '../component/Payment/PaymentForm';



export default class Payment extends Component {
    static navigationOptions = {
        title: 'Payment',
      };

    render() {
        const { navigate } = this.props.navigation;
        return ( 
            <KeyboardAvoidingView behavior='padding' style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.bannerName}>Name</Text>
                </View>
                <View style={styles.titleProfileContainer}>
                    <View style={styles.titleProfilePicContainer}>
                        <Text style={styles.addPicture}>+</Text>
                    </View>
                </View>
                <View style={styles.titleContainer}>
                    <Text style={styles.titleName}>Name</Text>
                    <Text style={styles.titleMajor}>Year / Major</Text>
                    <Text style={styles.titleCost}>Class / Cost</Text>
                </View>
                <View style={styles.timerContainer}>
                    <Text>Pay me money</Text>
                </View> 
                <View style={styles.costContainer}>
                    <Text>Total money i get!!!</Text>
                </View>
                <View style={styles.formContainer}>
                    <PaymentForm />
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
    titleProfileContainer:{
        alignItems: 'center',
        justifyContent: 'center',
        flex: .7,
        paddingTop: 50
    },
    titleProfilePicContainer:{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fdd835',
        width: 90,
        height: 90,
        borderRadius: 50,
    },
    titleContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 20,
        flex: 1,
    },
    timerContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fdd835',
        flex: 1,
    },
    costContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#9be7ff',
        flex: .5,
    },
    formContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    header: {
        height: 40,
        alignItems: 'center',
        backgroundColor: '#fdd835'
    },
    bannerName: {
        fontSize: 30,
        color: 'black'
    },
    addPicture: {
        color: 'black',
        fontSize: 24,
    },
    titleName: {
        color: 'black',
        fontSize: 20,
    },
    titleMajor: {
        color: 'black',
        fontSize: 16,
    },
    titleYear: {
        color: 'black',
        fontSize: 16,
    },
    titleCost: {
        color: 'black',
        fontSize: 18,
        paddingTop: 10,
        fontWeight: 'bold',
    },
});