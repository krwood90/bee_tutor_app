import React, { Component } from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    Image, 
    ScrollView, 
    TouchableOpacity,
    StatusBar
} from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';

class UserProfile extends Component {
    static navigationOptions = {
        title: 'Profile',
      };
    render() {
        const { navigate } = this.props.navigation;
        return ( 
            <View style={styles.container}>
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
                <View style={styles.buttonContainer}>
                    <TouchableOpacity>
                        <Text style={styles.buttonText}>MESSAGE</Text> 
                    </TouchableOpacity >
                    <TouchableOpacity>
                        <Text style={styles.buttonText}>SCHEDULE</Text> 
                    </TouchableOpacity >
                </View>
                <ScrollView style={styles.formContainer}>
                    <View style={styles.titleDescriptionContainer}>
                        <Text style={styles.titleDescription}>Desription, My name is alallalalalalal. and my major is aksksksksks</Text>
                    </View>
                    <View style={styles.scrollContainer}>
                        <View style={styles.containerForm}>
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
                    </View>
                </ScrollView>  
            </View>
        );
    }
}

export default SimpleApp = StackNavigator({
    UserProfile: { screen: UserProfile },
  });

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
    },
    titleProfileContainer:{
        alignItems: 'center',
        justifyContent: 'center',
        flex: .1,
        paddingTop: 50
    },
    titleProfilePicContainer:{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fbc02d',
        width: 90,
        height: 90,
        borderRadius: 50,
    },
    titleContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 20,
        flex: .4,
    },
    buttonContainer: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flex: .2,
        flexDirection: 'row',
        paddingLeft: 50,
        paddingRight: 50,
        borderBottomColor: 'rgba(0,0,0,0.1)',
        borderBottomWidth: 1,
    },
    formContainer: {
        flex: 3,
    },
    titleDescriptionContainer: {
        flex: 1,
        alignItems: 'center',
        paddingLeft: 20,
        paddingBottom: 10,
        borderBottomColor: 'rgba(0,0,0,0.1)',
        borderBottomWidth: 1,
    },
    scrollContainer: {
        flex: 1,
        alignItems: 'center',
        marginBottom: 50,
    },
    header: {
        height: 40,
        alignItems: 'center',
        backgroundColor: '#fbc02d'
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
    titleDescription: {
        alignItems: 'center',
        color: 'black',
        fontSize: 16,
        paddingTop: 10,
    },
    buttonText: {
        height: 20,
        width: 100,
        textAlign: 'center',
        color: '#fbc02d',
        fontWeight: 'bold'
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