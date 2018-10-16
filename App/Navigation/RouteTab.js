
import React from 'react'
import { createStackNavigator } from 'react-navigation'
import Explore from '../Containers/Explore'
import Activities from '../Containers/Activities'
import Account from '../Containers/Account'
import MyBookings from '../Containers/MyBookings'
import History from '../Containers/History'

export const ExploreNavigation = createStackNavigator({
  ExploreNavigation: { screen: Explore }
})

export const ActivitiesNavigation = createStackNavigator({
  ActivitiesNavigation: { screen: Activities }
})


export const AccountNavigation = createStackNavigator({
  AccountNavigation: { screen: Account }
})

export const MyBookingsNavigation = createStackNavigator({
  MyBookingsNavigation: {
    screen: MyBookings,
  },
  HistoryNavigation:{
    screen: History
  }
},{
  initialRouteName: 'MyBookingsNavigation',

}
)




