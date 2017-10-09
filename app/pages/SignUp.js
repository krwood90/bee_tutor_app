import React, { Component } from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    Image, 
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
    StatusBar
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Font } from 'expo';


class SignUp extends Component {
    static navigationOptions = {
        title: 'Sign Up',
      };

    render() {
        const { navigate } = this.props.navigation;
        return ( 
            <KeyboardAvoidingView behavior='padding' style={styles.container}>
                <View style={styles.titleContainer}>
                    <Text style={styles.titleName}>Sign Up</Text>
                </View>
                <View style={styles.formContainer}>
                    <View style={styles.containerForm}>
                        <StatusBar 
                            barStyle="light-content" 
                            />
                        <TextInput
                            underlineColorAndroid='transparent'
                            placeholder="Name"
                            placeholderTextColor="rgba(0,0,0,0.4)"
                            returnKeyType="next"
                            onSubmitEditing={() => this.passwordInput.focus()}
                            autoCapitalize="none"
                            autoCorrect={false}
                            style={styles.input}
                            /> 
                        <TextInput
                            underlineColorAndroid='transparent'
                            placeholder="School Email"
                            placeholderTextColor="rgba(0,0,0,0.4)"
                            returnKeyType="next"
                            onSubmitEditing={() => this.passwordInput.focus()}
                            keyboardType="email-address"
                            autoCapitalize="none"
                            autoCorrect={false}
                            style={styles.input}
                            /> 
                        <TextInput
                            underlineColorAndroid='transparent'
                            placeholder="Major"
                            placeholderTextColor="rgba(0,0,0,0.4)"
                            returnKeyType="next"
                            onSubmitEditing={() => this.passwordInput.focus()}
                            autoCapitalize="none"
                            autoCorrect={false}
                            style={styles.input}
                            />   
                        <TextInput
                            underlineColorAndroid='transparent'
                            placeholder="Password"
                            placeholderTextColor="rgba(0,0,0,0.4)"
                            returnKeyType="go"
                            secureTextEntry
                            style={styles.input}
                            ref={(input) => this.passwordInput = input}
                            /> 
                        <TextInput
                            underlineColorAndroid='transparent'
                            placeholder="Confirm Password"
                            placeholderTextColor="rgba(0,0,0,0.4)"
                            returnKeyType="go"
                            secureTextEntry
                            style={styles.input}
                            ref={(input) => this.passwordInput = input}
                            /> 
                        <TouchableOpacity style={styles.buttonContainer} >
                            <Text style={styles.buttonText}>Sign Up</Text> 
                        </TouchableOpacity >
                    </View>
                </View>  
            </KeyboardAvoidingView>
        );
    }
}

export default SimpleApp = StackNavigator({
    SignUp: { screen: SignUp },
  });

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff9c4',
        flex: 1,
    },
    titleContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 80,
    },
    titleName: {
        color: '#ffeb3b',
        fontSize: 40,
    },
    logoContainer: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center',
        flex: 1,
        paddingTop: 20
    },
    logo: {
        width: 180,
        height: 180,
    },
    formContainer: {
        justifyContent: 'center',
        flex: 1,
    },
    title: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        width: 180,
        textAlign: 'center',
        opacity: 0.3,
        flex: 1,
    },
    containerForm: {
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
        backgroundColor: 'rgba(255,255,255,0.6)',
        paddingVertical: 15,
        marginBottom: 10,
    },
    buttonText: {
        textAlign: 'center',
        color: 'black',
        fontWeight: 'bold'
    }
});