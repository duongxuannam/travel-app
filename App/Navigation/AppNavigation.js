import { StackNavigator,createStackNavigator } from 'react-navigation'
import TabNavigation from './TabNavigation'
import StartupNavigation from './StartupNavigation'
import SignInNavigation from './SignInNavigation'
import SignUpNavigation from './SignUpNavigation'
import ActivitiesTypeNavigation from './ActivitiesTypeNavigation'
import ActivitiesDetailNavigation from './ActivitiesDetailNavigation'

// Manifest of possible screens
const PrimaryNav = createStackNavigator({
  TabNavigation: { screen: TabNavigation},
  StartupNavigation: {screen:StartupNavigation},
  SignInNavigation: {screen:SignInNavigation},
  SignUpNavigation: {screen:SignUpNavigation},
  ActivitiesTypeNavigation: {screen:ActivitiesTypeNavigation},
  ActivitiesDetailNavigation:{screen:ActivitiesDetailNavigation}
}, {
  // Default config for all screens
  initialRouteName: 'ActivitiesDetailNavigation',
  headerMode:'none'
})

export default PrimaryNav
