import React, {Component} from 'react';
import {
    StyleSheet,View,Text,Button, TextInput, TouchableOpacity
} from 'react-native';

class SignUpScreen extends Component{
    static navigationOptions = {
        title: 'Registration',
    };
    render() {
        return(
            <View>
                <TextInput style={styles.registration_form}
                           placeholder='Email'/>
                <TextInput style={styles.registration_form}
                            placeholder='Password'/>
                <Button title={'Already have an account? Log in instead.'} onPress={() => this.props.navigation.navigate('Login')}/>
            </View>
        )
    }
}
export default SignUpScreen;

const styles = StyleSheet.create({
    registration_form :{
        fontFamily: 'Futura-CondensedExtraBold',
        fontSize: 20,
        color : '#4b4b4b',
        width: null,
        height: 60,
        backgroundColor: '#eaeaea'
    }
});