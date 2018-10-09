import { StackNavigator,createStackNavigator } from 'react-navigation'
import TabNavigation from './TabNavigation'

// Manifest of possible screens
const PrimaryNav = createStackNavigator({
  TabNavigation: { screen: TabNavigation},
}, {
  // Default config for all screens
  initialRouteName: 'TabNavigation',
  headerMode:'none'
})

export default PrimaryNav
