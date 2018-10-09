import { createStackNavigator } from 'react-navigation'
import ForgotPasswordScreen from '../Containers/ForgotPassword'

// Manifest of possible screens
const SignInNav = createStackNavigator({
  ForgotPasswordNavigation: { screen: ForgotPasswordScreen },
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
