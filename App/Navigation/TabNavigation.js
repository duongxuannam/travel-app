import React from 'react'
import { Image } from 'react-native'
import { TabNavigator } from 'react-navigation'
import { CommunityNavigation, NewsFeedNavigation, VideoNavigation, UserNavigation } from './RouteTab'

import  TabBar  from '../Containers/TabBar'
import { Images } from '../Themes'

const TabBarNavigation = TabNavigator({
  NewsFeedNavigation: { screen: NewsFeedNavigation ,
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        return (<Image
          resizeMode='contain'
          source={Images.newsfeed}
          style={{ height: 26, width: 26, tintColor }}
        />)
      },
    })
  },
  CommunityNavigation: {
    screen: CommunityNavigation,
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        return (<Image
          resizeMode='contain'
          source={Images.community}
          style={{ height: 26, width: 26, tintColor }}
        />)
      },
    })
  },  
  VideoNavigation: { screen: VideoNavigation ,
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        return (<Image
          resizeMode='contain'
          source={Images.video}
          style={{ height: 26, width: 26, tintColor }}
        />)
      },
    })
  },
  UserNavigation: { screen: UserNavigation ,
    navigationOptions: ({ navigation }) => ({
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
    initialRouteName: 'NewsFeedNavigation',
    tabBarComponent: (config) => <TabBar configTabBar={config} />,
    tabBarPosition: 'bottom',
    headerMode: 'none',
    animationEnabled: true,
    tabBarOptions: {
      activeTintColor: '#2CBCD4',
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