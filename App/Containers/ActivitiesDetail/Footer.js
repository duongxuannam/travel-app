import React, { PureComponent } from 'react';
import { View, Text,TouchableOpacity } from 'react-native'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'
import { Button } from '../../Components'
import { normalize, normalizeHeight } from '../../Themes/Metrics';
import { Colors, } from '../../Themes'

export default class Footer extends PureComponent {
  render() {
    return (
      <View style={{
        height: normalizeHeight(50),
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        borderTopWidth: 2,
        borderTopColor: Colors.brown,
        flexDirection: 'row'
      }} >
        <View style={{ flex: 2.5, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ fontSize: normalize(14) }}>$54.99 per person</Text>
          <View style={{ flexDirection: 'row', marginTop: normalizeHeight(2) }} >
            <TouchableOpacity>
              <FontAwesomeIcon name="minus-circle" color={Colors.violet} size={normalize(20)} />
            </TouchableOpacity>
            <View style={{ marginHorizontal: normalize(12) }} >
              <Text style={{ fontSize: normalize(15), color: Colors.violet }}>3</Text>
            </View>
            <TouchableOpacity>
              <FontAwesomeIcon name="plus-circle" color={Colors.violet} size={normalize(20)} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ flex: 4, justifyContent: 'center' }}>
          <Button
            style={{
              backgroundColor: Colors.primary,
              borderColor: Colors.primary,
              marginHorizontal: normalize(15),
            }}
            textStyle={{ color: Colors.white }}
            label="Book Now" />
        </View>
      </View>
    )
  }
}




