import React from 'react'
import { StyleSheet, Platform, Image, Text, View ,Button} from 'react-native'
import * as firebase from 'firebase';
import {connect} from 'react-redux';
class Main extends React.Component {
    state = {
        currentUser: null
    };
    componentDidMount() {
        const { currentUser } = firebase.auth();
        this.setState({ currentUser });
    }
    componentWillMount() {
        let user = this.props.user.email;
        console.log('main will mount props', user);
        if(user != null) {
            this.setState({currentUser: user})
        }
    }
    handleSignOut = () => {
        if(this.state.currentUser != null) {
            firebase
                .auth()
                .signOut()
                .then(() => this.props.navigation.navigate('Home'))
                .catch(error => this.setState({ errorMessage: error.message }))
        }
    };
    render() {
        const { currentUser } = this.state;
        return (
            <View style={styles.container}>
                <Text>
                    Hi {currentUser && currentUser.email}!
                </Text>
                <Button title='Scan' onPress={() => this.props.navigation.navigate('Scan')}/>
                <Button title="Sign Out" onPress={this.handleSignOut} />
            </View>
        )
    }
}

const mapStateToProps = state => ({
    user: state.user
});
const mapDispatchToProps = dispatch => ({
    dispatch: dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});