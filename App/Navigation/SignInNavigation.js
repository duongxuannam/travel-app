import { createStackNavigator } from 'react-navigation'
import SignInScreen from '../Containers/SignIn'

// Manifest of possible screens
const SignInNav = createStackNavigator({
  SignInNavigation: { screen: SignInScreen },

}, {
  // Default config for all screens
  headerMode: 'float',
  navigationOptions: {
    // headerStyle: {
    //   backgroundColor: 'black',
    // },
  },
})

export default SignInNav
