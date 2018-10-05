import React, { PureComponent } from 'react';
import { Text, View,  } from 'react-native';
import I18n from 'react-native-i18n'
import FastImage from 'react-native-fast-image'
import NavigationHeader from '../NavigationHeader'
import { Metrics } from '../../Themes'
import { normalize } from '../../Themes/Metrics'

export default class CommunityCategory extends PureComponent {

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
      <View >
        <Text style={{ fontSize: normalize(40) }}>{I18n.t('hello')} </Text>
        <FastImage
          style={{
            borderRadius: 15,
            height: 30,

            width: 30,
          }}
          source={{
            uri: 'https://unsplash.it/400/400?image=1',
            headers: { Authorization: 'someAuthToken' },
            priority: FastImage.priority.normal,
          }}
          resizeMode={FastImage.resizeMode.contain}
        />
      </View>
    );
  }
}


const mapStateToProps = state => {
  return {
    app: state,
  }
}


