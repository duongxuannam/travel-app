import React, { PureComponent } from 'react';
import { View, Text } from 'react-native'
import { Badger } from '../../Components'
import { normalize, normalizeHeight } from '../../Themes/Metrics';
import { Colors, Images } from '../../Themes'
import { TextInfo } from '../../Components'

export default class Info extends PureComponent {
  render() {
    return (
      <React.Fragment>
        <View style={{
          marginHorizontal: normalize(10),
          marginTop: normalize(10),
          height: normalizeHeight(40),
          justifyContent: 'center',
          borderBottomWidth: 0.8,
          borderBottomColor: Colors.brown
        }} >
          <View style={{ flexDirection: 'row' }} >
            <View style={{ justifyContent: 'center' }}>
              <Text style={{ fontSize: normalize(13), fontWeight: 'bold' }} >
                US$ 54.99/person
              </Text>
            </View>

            <View style={{ justifyContent: 'center', flex: 1, alignItems: 'flex-end' }}>

              <Text style={{ fontSize: normalize(12), color: Colors.yellow }} >
                Travel Badger Price Guarantee</Text>
            </View>
          </View>
        </View>

        <View style={{
          marginHorizontal: normalize(10),
          height: normalizeHeight(40),
          justifyContent: 'center',
          borderBottomWidth: 0.8,
          borderBottomColor: Colors.brown
        }} >
          <View style={{ flexDirection: 'row', }} >
            <Badger backgroundColor={Colors.badgerColor} color={Colors.white} label={4.2} />
            <View style={{ justifyContent: 'center', flex: 1, marginLeft: normalize(20) }}>
              <Text style={{ fontSize: normalize(13), color: Colors.black }} >
                Very good</Text>
            </View>
          </View>
        </View>



        <View style={{
          marginHorizontal: normalize(10),
          marginTop: normalize(15),
          paddingBottom: normalize(15),
          justifyContent: 'center',
          borderBottomWidth: 0.8,
          borderBottomColor: Colors.brown
        }} >
          <TextInfo
            fontSize={normalize(13)}
            height={normalize(20)}
            width={normalize(20)}
            label='NYC'
            icon={Images.location} />

          <TextInfo
            fontSize={normalize(13)}
            height={normalize(20)}
            width={normalize(20)}
            label='3 hours total'
            icon={Images.timeOpen} />
          <TextInfo
            fontSize={normalize(13)}
            height={normalize(20)}
            width={normalize(20)}
            label='Offered in English'
            icon={Images.language} />




        </View>

        <View style={{
          marginHorizontal: normalize(10),
          marginTop: normalize(15),
          paddingBottom: normalize(15),
          justifyContent: 'center',
          borderBottomWidth: 0.8,
          borderBottomColor: Colors.brown
        }} >

          <TextInfo
            fontSize={normalize(13)}
            height={normalize(20)}
            width={normalize(20)}
            label='Mobile Check-in'
            icon={Images.checkIn} />
          <TextInfo
            fontSize={normalize(13)}
            height={normalize(20)}
            width={normalize(20)}
            label='9:30 am/ 10:00 am/ 5:00 pm (certain dates)'
            icon={Images.timeOpen} />
          <TextInfo
            fontSize={normalize(13)}
            height={normalize(20)}
            width={normalize(20)}
            label='Free cancellation up to 72 hours prior to activity'
            icon={Images.cancel} />
        </View>
      </React.Fragment>

    )
  }
}




