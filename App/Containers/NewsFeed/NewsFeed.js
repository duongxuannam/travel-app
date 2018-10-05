import React, {PureComponent} from 'react';
import {ScrollableTabView} from '../../Components'
import NavigationHeader from '../NavigationHeader'
import NewsFeedNew from '../NewsFeedNew'
import NewsFeedCategory from '../NewsFeedCategory'
import { Metrics } from '../../Themes'

export default class NewsFeed extends PureComponent {

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
      <NewsFeedNew tabLabel="Mới nhất" />
      <NewsFeedCategory tabLabel="Làm đẹp" />
      <NewsFeedCategory tabLabel="Giải trí" />
      <NewsFeedCategory tabLabel="Công nghệ" />
      <NewsFeedCategory tabLabel="Công nghệ" />
      <NewsFeedCategory tabLabel="Công nghệ" />

    </ScrollableTabView>
    );
  }
}

