import { StackNavigator } from 'react-navigation'
import TabNavigation from './TabNavigation'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  TabNavigation: { screen: TabNavigation},
}, {
  // Default config for all screens
  initialRouteName: 'TabNavigation',
  headerMode:'none'
})

export default PrimaryNav
