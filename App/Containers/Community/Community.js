import React, { PureComponent } from 'react';
import NavigationHeader from '../NavigationHeader'
import CommunityNew from '../CommunityNew'
import CommunityCategory from '../CommunityCategory'

import {ScrollableTabView} from '../../Components'
import { Metrics } from '../../Themes'


export default class Community extends PureComponent {

  static navigationOptions = ({ navigation }) => {
    return {
      headerStyle: { height: Metrics.screenHeight / 12 },
      headerTitle: <NavigationHeader />,
      headerLeft: null,
      headerRight: null,
    }
  }
  render() {
    return (
      <ScrollableTabView >
      <CommunityNew tabLabel="Mới nhất" />
      <CommunityCategory tabLabel="Làm đẹp" />
      <CommunityCategory tabLabel="Giải trí" />
      <CommunityCategory tabLabel="Công nghệ" />
      <CommunityCategory tabLabel="Công nghệ" />
      <CommunityCategory tabLabel="Công nghệ" />

    </ScrollableTabView>
    )
  }
}





