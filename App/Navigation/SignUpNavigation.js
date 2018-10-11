import { createStackNavigator } from 'react-navigation'
import SignUpScreen from '../Containers/SignUp'
import SignUpStep2Screen from '../Containers/SignUp/SignUpStep2'

// Manifest of possible screens
const SignUpNav = createStackNavigator({
  SignUpNavigation: { screen: SignUpScreen },
  SignUpStep2Navigation: { screen: SignUpStep2Screen },

}, {
  // Default config for all screens
  headerMode: 'float',
  navigationOptions: {
    // headerStyle: {
    //   backgroundColor: 'black',
    // },
  },
})

export default SignUpNav
