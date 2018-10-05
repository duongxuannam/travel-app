import React, { PureComponent } from 'react'
import {View } from 'react-native'
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view'
import { Colors, Metrics } from '../../Themes'

export default class ScrollableTabV extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      page: 0,
    }
  }

  onChangedTab = ({ i }) => {
    this.setState({ page: i }, () => {
    })
  }

  render() {
    return (
      <View flex={1}>
        <ScrollableTabView
          initialPage={0}
          page={this.state.page}
          // locked={!isIOS}
          tabBarBackgroundColor={Colors.white}
          tabBarActiveTextColor={Colors.primary}
          tabBarInactiveTextColor={Colors.brown}
          tabBarUnderlineStyle={{ backgroundColor: 'transparent', height: 2.5 }}
          renderTabBar={() => <ScrollableTabBar style={{ height: 40, width: Metrics.screenWidth, borderBottomWidth: 0, marginBottom: 5 }} tabStyle={{ height: 39 }} />}
          onChangeTab={this.onChangedTab}
        >
          {this.props.children}
        </ScrollableTabView>

      </View>
    )
  }
}
