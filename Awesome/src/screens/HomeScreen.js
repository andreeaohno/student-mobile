import React, {Component} from 'react';
import {StyleSheet, View, Text, Button, Image} from 'react-native';

class HomeScreen extends Component{
    static navigationOptions = {
        title: 'Welcome',
        headerTitleStyle:{
            fontFamily: 'Futura-CondensedExtraBold',
            fontSize: 32,
            fontWeight: 'bold'
        }

    };
    render() {

        return(
            <View>
                <Image source={require('../../media/books.png')}/>
                <Button style={styles.buttons} title={'Log in'} onPress={() => this.props.navigation.navigate('Login')}>
                    <Text style={styles.buttons}> </Text>
                </Button>
                <Button style={styles.buttons} title={'Sign up'} onPress={() => this.props.navigation.navigate('Signup')}/>
            </View>
        )
    }
}

export default HomeScreen;

const styles = StyleSheet.create({
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
    }
});
