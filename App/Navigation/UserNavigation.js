import { createStackNavigator } from 'react-navigation'
import UserInfomationScreen from '../Containers/UserInfomation'
import PersonalizeScreen from '../Containers/Personalize'
import HelpCenter from '../Containers/HelpCenter'
import Contact from '../Containers/Contact'
import AccountSetting from '../Containers/AccountSetting'
import Promotion from '../Containers/Promotion'
import Payment from '../Containers/Payment'

// Manifest of possible screens

export const UserNavigation = createStackNavigator({
  UserInfomationNavigation: { screen: UserInfomationScreen },
})

export const PersonalizeNavigation = createStackNavigator({
  PersonalizeNavigation: { screen: PersonalizeScreen },
})
export const HelpCenterNavigation = createStackNavigator({
  HelpCenterNavigation: { screen: HelpCenter },
  ContactNavigation: { screen: Contact }
})

export const AccountSettingeNavigation = createStackNavigator({
  AccountSettingNavigation: { screen: AccountSetting },
})
export const PromotionNavigation = createStackNavigator({
  PromotionNavigation: { screen: Promotion },
})

export const PaymentNavigation = createStackNavigator({
  PaymentNavigation: { screen: Payment },
})