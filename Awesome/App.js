import React,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as firebase from 'firebase';
import AppContainer from './src/screens/AppContainer';

var firebaseConfig = {
  apiKey: "AIzaSyBLl65SVE9ANmPmThNL-noJK8LvI2L0SfI",
  authDomain: "student-mobile-ba542.firebaseapp.com",
  databaseURL: "https://student-mobile-ba542.firebaseio.com",
  projectId: "student-mobile-ba542",
  storageBucket: "student-mobile-ba542.appspot.com",
};

firebase.initializeApp(firebaseConfig);

class App extends Component {
  render() {
    return (
     <AppContainer/>
    );
  }
}

export default App;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
