import React, {Component} from 'react';
import {
    StyleSheet,View,Text,Button, TextInput, TouchableOpacity
} from 'react-native';

class LogInScreen extends Component{
    static navigationOptions = {
        title : ' Log in'
    };
    render() {

        return(
            <View>
                <TextInput style={styles.registration_form}
                            placeholder='Email'/>
                <TextInput style={styles.registration_form}
                           placeholder='Password'/>
                <Button title={'Don\'t have an account? Sign up.'} onPress={() => this.props.navigation.navigate('Signup')}/>
            </View>
        )
    }
}
export default LogInScreen;
const styles = StyleSheet.create({
    registration_form :{
        fontFamily: 'Futura-CondensedExtraBold',
        fontSize: 20,
        color : '#4b4b4b'
    }
});
