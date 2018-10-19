import React, { PureComponent } from 'react';
import { View, Text, } from 'react-native'
import EntypoIcon from 'react-native-vector-icons/Entypo'
import { normalize, } from '../../Themes/Metrics';
import { Colors, } from '../../Themes'

export default class AddOptions extends PureComponent {

  render() {
    return (
      <View style={{
        marginHorizontal: normalize(10),
      }} >
        <Text style={{ fontSize: normalize(18), fontWeight: 'bold' }} >
          Add On Options
        </Text>

        <View style={{
          marginTop: normalize(10)
        }} >
          <View style={{
            flexDirection: 'row',
            marginTop: normalize(20),
            paddingBottom: normalize(15),
            borderBottomWidth: 0.8,
            borderBottomColor: Colors.brown
          }} >
            <View style={{ justifyContent: 'center', alignItems: 'center', }}>
              <EntypoIcon name="dot-single" color={Colors.yellow} size={normalize(30)} />
            </View>
            <View style={{ justifyContent: 'center', flex: 1, marginLeft: normalize(10) }}>
              <Text style={{ fontSize: normalize(13), color: Colors.yellow }} >
                All Food Tastings (7 on-the-go and 1 seated)
            </Text>
              <Text style={{ fontSize: normalize(12), color: Colors.black, marginTop: normalize(5) }} >
                All Food Tastings (7 on-the-go and 1 seated)
            </Text>
            </View>
          </View>
          <View style={{
            flexDirection: 'row',
            marginTop: normalize(20),
            paddingBottom: normalize(15),
            borderBottomWidth: 0.8,
            borderBottomColor: Colors.brown
          }} >
            <View style={{ justifyContent: 'center', alignItems: 'center', }}>
              <EntypoIcon name="dot-single" color={Colors.yellow} size={normalize(30)} />
            </View>
            <View style={{ justifyContent: 'center', flex: 1, marginLeft: normalize(10) }}>
              <Text style={{ fontSize: normalize(13), color: Colors.yellow }} >
                All Food Tastings (7 on-the-go and 1 seated)
            </Text>
              <Text style={{ fontSize: normalize(12), color: Colors.black, marginTop: normalize(5) }} >
                All Food Tastings (7 on-the-go and 1 seated)
            </Text>
            </View>
          </View>
          <View style={{
            flexDirection: 'row',
            marginTop: normalize(20),
            paddingBottom: normalize(15),
            borderBottomWidth: 0.8,
            borderBottomColor: Colors.brown
          }} >
            <View style={{ justifyContent: 'center', alignItems: 'center', }}>
              <EntypoIcon name="dot-single" color={Colors.yellow} size={normalize(30)} />
            </View>
            <View style={{ justifyContent: 'center', flex: 1, marginLeft: normalize(10) }}>
              <Text style={{ fontSize: normalize(13), color: Colors.yellow }} >
                All Food Tastings (7 on-the-go and 1 seated)
            </Text>
              <Text style={{ fontSize: normalize(12), color: Colors.black, marginTop: normalize(5) }} >
                All Food Tastings (7 on-the-go and 1 seated)
            </Text>
            </View>
          </View>
          <View style={{
            flexDirection: 'row',
            marginTop: normalize(20),
            paddingBottom: normalize(15),
            borderBottomWidth: 0.8,
            borderBottomColor: Colors.brown
          }} >
            <View style={{ justifyContent: 'center', alignItems: 'center', }}>
              <EntypoIcon name="dot-single" color={Colors.yellow} size={normalize(30)} />
            </View>
            <View style={{ justifyContent: 'center', flex: 1, marginLeft: normalize(10) }}>
              <Text style={{ fontSize: normalize(13), color: Colors.yellow }} >
                All Food Tastings (7 on-the-go and 1 seated)
            </Text>
              <Text style={{ fontSize: normalize(12), color: Colors.black, marginTop: normalize(5) }} >
                All Food Tastings (7 on-the-go and 1 seated)
            </Text>
            </View>
          </View>
        </View>
      </View>

    )
  }
}




