import {createAppContainer, createStackNavigator} from "react-navigation";
import HomeScreen from "./HomeScreen";
import LogInScreen from "./LogInScreen";
import SignUpScreen from "./SignUpScreen";

const AppNavigator = createStackNavigator(
    {
        Home : {screen : HomeScreen},
        Login : {screen : LogInScreen},
        Signup : {screen : SignUpScreen},
    },
    {
    defaultNavigationOptions: {
        headerTitleStyle:{
            fontFamily: 'Futura-CondensedExtraBold',
            fontSize: 32,
            fontWeight: 'bold'
        }
    }
    }
);

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;

