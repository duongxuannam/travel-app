
import React from 'react'
import {  createStackNavigator } from 'react-navigation'
import Community from '../Containers/Community'
import NewsFeed from '../Containers/NewsFeed'
import User from '../Containers/User'
import Video from '../Containers/Video'
import Explore from '../Containers/Explore'
import Activities from '../Containers/Activities'

export const ExploreNavigation = createStackNavigator({
  ExploreNavigation: { screen: Explore}
})

export const ActivitiesNavigation = createStackNavigator({
  ActivitiesNavigation: { screen: Activities}
})


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
