import React, {Component} from 'react';
import {StyleSheet, View, Text, Button, Image} from 'react-native';
import * as firebase from "firebase";

class HomeScreen extends Component{
    static navigationOptions = {
        title: 'Welcome',
        headerTitleStyle:{
            fontFamily: 'Futura-CondensedExtraBold',
            fontSize: 32,
            fontWeight: 'bold'
        }
    };

    state = {
        currentUser : null
    };

    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {
            this.props.navigation.navigate(user ? 'Main' : 'Home')
        });
        var {currentUser} = firebase.auth();
        this.setState({currentUser: currentUser});
    };

    render() {

        return(
            <View style={styles.container}>
                <View style={{ justifyContent: 'center', alignItems:'center', flexDirection: 'row'}}>
                    <Image source={require('../../media/lightbulb.png')} style={styles.logo}/>
                    <Text style={{textAlign: 'center', fontFamily:'Futura-CondensedExtraBold',fontSize:24,fontWeight: 'bold'}}> Student Mobile </Text>
                </View>
                <View style={{ justifyContent: 'center', alignItems:'center', flexDirection: 'row', position:'absolute', bottom: 20}}>
                    
                    <Button style={styles.buttons} title={'LOG IN'} onPress={() => this.props.navigation.navigate('Login')}/>
                    <Button style={styles.buttons} title={'SIGN UP'} onPress={() => this.props.navigation.navigate('Signup')}/>
                </View>
            </View>
        )
    }
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        textAlign: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 30,
        fontFamily: 'Futura-CondensedExtraBold'
    },
    buttons: {
        width: null,
        height: 50,
        fontSize: 40
    },
    logo :{
        width: 70,
        height: 70,
    }
});
