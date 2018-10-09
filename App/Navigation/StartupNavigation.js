import { createStackNavigator } from 'react-navigation'
import StartupScreen from '../Containers/Startup'
import SignInScreen from './SignInNavigation'
import ForgotPasswordScreen from './ForgotPasswordNavigation'
// Manifest of possible screens
const StartupNav = createStackNavigator({
  StartupNavigation: { screen: StartupScreen },
  SignInNavigation: { screen: SignInScreen },
  ForgotPasswordNavigation: { screen: ForgotPasswordScreen },

}, {
  // Default config for all screens
  headerMode: 'none',
  navigationOptions: {
    // headerStyle: {
    //   backgroundColor: 'black',
    // },
  },
})

export default StartupNav
