import React from 'react'
import { Image } from 'react-native'
import { TabNavigator } from 'react-navigation'
import { ActivitiesNavigation, ExploreNavigation, VideoNavigation, UserNavigation } from './RouteTab'

import  TabBar  from '../Containers/TabBar'
import { Images,Colors } from '../Themes'

const TabBarNavigation = TabNavigator({
  ExploreNavigation: { screen: ExploreNavigation ,
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: 'Explore',

      tabBarIcon: ({ focused, tintColor }) => {
        return (<Image
          resizeMode='contain'
          source={Images.explore}
          style={{ height: 26, width: 26, tintColor }}
        />) 
      },
    })
  },
  ActivitiesNavigation: {
    screen: ActivitiesNavigation,
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: 'Activities',

      tabBarIcon: ({ focused, tintColor }) => {
        return (<Image
          resizeMode='contain'
          source={Images.activities}
          style={{ height: 26, width: 26, tintColor }}
        />)
      },
    })
  },  
  VideoNavigation: { screen: VideoNavigation ,
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: 'My bookings',

      tabBarIcon: ({ focused, tintColor }) => {
        return (<Image
          resizeMode='contain'
          source={Images.mybookings}
          style={{ height: 26, width: 26, tintColor }}
        />)
      },
    })
  },
  UserNavigation: { screen: UserNavigation ,
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: 'My Accounts',

      tabBarIcon: ({ focused, tintColor }) => {
        return (<Image
          resizeMode='contain'
          source={Images.user}
          style={{ height: 26, width: 26, tintColor }}
        />)
      },
    })
  }
}, {
    initialRouteName: 'ActivitiesNavigation',
    tabBarComponent: (config) => <TabBar configTabBar={config} />,
    tabBarPosition: 'bottom',
    headerMode: 'none',
    animationEnabled: true,
    tabBarOptions: {
      activeTintColor: Colors.primary,
      showLabel: true,
      showIcon: true,
      inactiveTintColor: '#7B7B7B',
      style: {
        backgroundColor: '#fff',
      },
    },
    navigationOptions: () => ({
      headerMode: 'none',

    }),

  })

export default TabBarNavigation