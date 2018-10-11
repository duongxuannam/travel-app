import { StackNavigator,createStackNavigator } from 'react-navigation'
import TabNavigation from './TabNavigation'
import StartupNavigation from './StartupNavigation'
import SignInNavigation from './SignInNavigation'
import SignUpNavigation from './SignUpNavigation'

// Manifest of possible screens
const PrimaryNav = createStackNavigator({
  TabNavigation: { screen: TabNavigation},
  StartupNavigation: {screen:StartupNavigation},
  SignInNavigation: {screen:SignInNavigation},
  SignUpNavigation: {screen:SignUpNavigation}

}, {
  // Default config for all screens
  initialRouteName: 'TabNavigation',
  headerMode:'none'
})

export default PrimaryNav
