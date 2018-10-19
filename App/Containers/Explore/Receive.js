import React, { PureComponent } from 'react';
import { View, Text } from 'react-native'
import { Image } from '../../Components'
import { normalize, normalizeHeight } from '../../Themes/Metrics';
import { Colors, Metrics } from '../../Themes'

export default class Receive extends PureComponent {

  render() {
    return (
      <View style={{
        opacity: 0.5,
        height: normalizeHeight(220), marginVertical: normalizeHeight(10), marginHorizontal: normalize(20)
      }} >
        <Image uri={{
          uri: 'https://unsplash.it/400/400?image=1',
        }} />
        <View style={{ position: 'absolute', top: normalizeHeight(15), width: Metrics.screenWidth * 3 / 4 }} >
          <Text
            style={{
              marginHorizontal: normalize(15), color: Colors.white, fontSize: normalize(18), fontWeight: 'bold'
            }}>
            Receive an additional 10% on activity bookings with at least 10 participants!</Text>
        </View>
        <View style={{
          position: 'absolute', bottom: normalizeHeight(15),
          right: normalizeHeight(15)
          , backgroundColor: '#50E3CE', borderRadius: 5
        }} >
          <Text
            style={{
              color: Colors.white, fontSize: normalize(15), padding: normalize(8)
            }}>
            View detail
      </Text>
        </View>
      </View>
    )
  }
}





