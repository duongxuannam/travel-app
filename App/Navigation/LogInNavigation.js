import { createStackNavigator } from 'react-navigation'
import LogInScreen from '../Containers/LogIn'

// Manifest of possible screens
const LogInNav = createStackNavigator({
  LogInNavigation: { screen: LogInScreen },
}, {
  // Default config for all screens
  headerMode: 'float',
  navigationOptions: {
    // headerStyle: {
    //   backgroundColor: 'black',
    // },
  },
})

export default LogInNav
