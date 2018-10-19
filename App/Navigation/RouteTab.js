
import React from 'react'
import { createStackNavigator } from 'react-navigation'
import Explore from '../Containers/Explore'
import Activities from '../Containers/Activities'
import Account from '../Containers/Account'
import MyBookings from '../Containers/MyBookings'
import History from '../Containers/History'

export const ExploreNavigation = createStackNavigator({
  Explore: { screen: Explore }
})

export const ActivitiesNavigation = createStackNavigator({
  Activities: { screen: Activities }
})


export const AccountNavigation = createStackNavigator({
  Account: { screen: Account},
})
  

export const MyBookingsNavigation = createStackNavigator({
  MyBookings: {screen: MyBookings},
  HistoryNavigation:{ screen: History }
},{
  initialRouteName: 'MyBookings',

}
)




