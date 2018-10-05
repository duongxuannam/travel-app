
import React from 'react'
import { Image } from 'react-native'
import {  createStackNavigator } from 'react-navigation'
import Community from '../Containers/Community'
import NewsFeed from '../Containers/NewsFeed'
import User from '../Containers/User'
import Video from '../Containers/Video'
import { Images } from '../Themes'

export const CommunityNavigation = createStackNavigator({
    CommunityNavigation: { screen: Community}
}, {
  initialRouteName: 'CommunityNavigation',
})

export const NewsFeedNavigation = createStackNavigator({
    NewsFeedNavigation: { screen: NewsFeed}
}, {
  initialRouteName: 'NewsFeedNavigation',
})

export const UserNavigation = createStackNavigator({
    UserNavigation: { screen: User}
}, {
  initialRouteName: 'UserNavigation',  

})

export const VideoNavigation = createStackNavigator({
    VideoNavigation: { screen: Video}
}, {
  initialRouteName: 'VideoNavigation',  
})
