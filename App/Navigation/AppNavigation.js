import { StackNavigator,createStackNavigator } from 'react-navigation'
import TabNavigation from './TabNavigation'
import StartupNavigation from './StartupNavigation'
import SignInNavigation from './SignInNavigation'
import SignUpNavigation from './SignUpNavigation'
import ActivitiesTypeNavigation from './ActivitiesTypeNavigation'
import ActivitiesDetailNavigation from './ActivitiesDetailNavigation'
import LogInNavigation from './LogInNavigation'
import {UserNavigation,PersonalizeNavigation, PaymentNavigation, 
  HelpCenterNavigation
,PromotionNavigation,AccountSettingeNavigation
} from './UserNavigation'

// Manifest of possible screens
const PrimaryNav = createStackNavigator({
  TabNavigation: { screen: TabNavigation},
  StartupNavigation: {screen:StartupNavigation},
  SignInNavigation: {screen:SignInNavigation},
  SignUpNavigation: {screen:SignUpNavigation},
  ActivitiesTypeNavigation: {screen:ActivitiesTypeNavigation},
  ActivitiesDetailNavigation:{screen:ActivitiesDetailNavigation},
  LogInNavigation:{screen:LogInNavigation},
  UserInfomationNavigation: { screen: UserNavigation },
  PersonalizeNavigation:{screen :PersonalizeNavigation},
  PaymentNavigation:{screen:PaymentNavigation},
  HelpCenterNavigation:{screen:HelpCenterNavigation},
  PromotionNavigation: { screen: PromotionNavigation },
  AccountSettingeNavigation:{screen :AccountSettingeNavigation}

}, {
  // Default config for all screens
  initialRouteName: 'TabNavigation',
  headerMode:'none'
})

export default PrimaryNav
