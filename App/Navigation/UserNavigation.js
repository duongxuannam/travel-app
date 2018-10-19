import { createStackNavigator } from 'react-navigation'
import UserInfomationScreen from '../Containers/UserInfomation'

// Manifest of possible screens
const UserInfomationNav = createStackNavigator({
  UserInfomationNavigation: { screen: UserInfomationScreen },
}, {
  // Default config for all screens
  headerMode: 'float',
  navigationOptions: {
    // headerStyle: {
    //   backgroundColor: 'black',
    // },
  },
})

export default UserInfomationNav
