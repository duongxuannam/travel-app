import React, { PureComponent } from 'react';
import { View, Text, } from 'react-native'
import { Image, TextInImage } from '../../Components'
import { normalize, normalizeHeight } from '../../Themes/Metrics';
import { Colors, } from '../../Themes'

export default class Picture extends PureComponent {

  render() {
    return (
      <View style={{
        marginTop: normalize(10),
        marginHorizontal: normalize(10),
      }} >
        <Text style={{ fontSize: normalize(18), fontWeight: 'bold' }} >
          Pictures
        </Text>

        <View style={{
          marginTop: normalize(10)
        }} >

          <View style={{ flexDirection: 'row', height: normalizeHeight(180) }} >
            <View style={{
              flex: 2,
              marginRight: normalize(10),
            }} >
              <View style={{
                flex: 1, marginBottom: normalize(5),
                borderRadius: 5
              }} >
                <Image/>
                <TextInImage  >
                  <Text  numberOfLines={1} style={{ marginHorizontal: normalize(5),fontSize:normalize(13), fontWeight:'bold', color:Colors.white}} >
                    Day la dong thu nhat
                  </Text>
                  <Text numberOfLines={2} style={{ marginHorizontal: normalize(5),fontSize:normalize(12), color:Colors.white, marginBottom:normalize(5) }}>
                    Day la dong thu 2
                  </Text>
                </TextInImage>
              </View>
              <View style={{ flex: 1, marginTop: normalize(5), backgroundColor: 'blue' }} >
              <Image/>
                <TextInImage  >
                  <Text  numberOfLines={1} style={{ marginHorizontal: normalize(5),fontSize:normalize(13), fontWeight:'bold', color:Colors.white}} >
                    Day la dong thu nhat
                  </Text>
                  <Text numberOfLines={2} style={{ marginHorizontal: normalize(5),fontSize:normalize(12), color:Colors.white, marginBottom:normalize(5) }}>
                    Day la dong thu 2
                  </Text>
                </TextInImage>
              </View>
            </View>
            <View style={{ flex: 3 }} >
            <Image/>
                <TextInImage  >
                  <Text  numberOfLines={1} style={{ marginHorizontal: normalize(5),fontSize:normalize(13), fontWeight:'bold', color:Colors.white}} >
                    Day la dong thu nhat
                  </Text>
                  <Text numberOfLines={2} style={{ marginHorizontal: normalize(5),fontSize:normalize(12), color:Colors.white, marginBottom:normalize(5) }}>
                    Day la dong thu 2
                  </Text>
                </TextInImage>
            </View>
          </View>

          <View style={{ height: normalizeHeight(80), flexDirection: 'row', marginTop: normalize(10) }}>
            <View flex={1} style={{ marginRight: normalize(5) }}>
            <Image/>
                <TextInImage  >
                  <Text  numberOfLines={1} style={{ marginHorizontal: normalize(5),fontSize:normalize(13), fontWeight:'bold', color:Colors.white}} >
                    Day la dong thu nhat
                  </Text>
                  <Text numberOfLines={2} style={{ marginHorizontal: normalize(5),fontSize:normalize(12), color:Colors.white, marginBottom:normalize(5) }}>
                    Day la dong thu 2
                  </Text>
                </TextInImage>
            </View>
            <View flex={1} style={{ marginLeft: normalize(5) }}>
            <Image/>
                <TextInImage  >
                  <Text  numberOfLines={1} style={{ marginHorizontal: normalize(5),fontSize:normalize(13), fontWeight:'bold', color:Colors.white}} >
                    Day la dong thu nhat
                  </Text>
                  <Text numberOfLines={2} style={{ marginHorizontal: normalize(5),fontSize:normalize(12), color:Colors.white, marginBottom:normalize(5) }}>
                    Day la dong thu 2
                  </Text>
                </TextInImage>
            </View>
          </View>

          <View style={{ flexDirection: 'row', height: normalizeHeight(180), marginTop: normalize(10) }} >
            <View style={{ flex: 3 }} >
            <Image/>
                <TextInImage  >
                  <Text  numberOfLines={1} style={{ marginHorizontal: normalize(5),fontSize:normalize(13), fontWeight:'bold', color:Colors.white}} >
                    Day la dong thu nhat
                  </Text>
                  <Text numberOfLines={2} style={{ marginHorizontal: normalize(5),fontSize:normalize(12), color:Colors.white, marginBottom:normalize(5) }}>
                    Day la dong thu 2
                  </Text>
                </TextInImage>
            </View>

            <View style={{
              flex: 2,
              marginLeft: normalize(10),
            }} >
              <View style={{
                flex: 1, marginBottom: normalize(5),
                borderRadius: 5
              }} >
                  <Image/>
                <TextInImage  >
                  <Text  numberOfLines={1} style={{ marginHorizontal: normalize(5),fontSize:normalize(13), fontWeight:'bold', color:Colors.white}} >
                    Day la dong thu nhat
                  </Text>
                  <Text numberOfLines={2} style={{ marginHorizontal: normalize(5),fontSize:normalize(12), color:Colors.white, marginBottom:normalize(5) }}>
                    Day la dong thu 2
                  </Text>
                </TextInImage>
              </View>
              <View style={{ flex: 1, marginTop: normalize(5), backgroundColor: 'blue' }} >
              <Image/>
                <TextInImage  >
                  <Text  numberOfLines={1} style={{ marginHorizontal: normalize(5),fontSize:normalize(13), fontWeight:'bold', color:Colors.white}} >
                    Day la dong thu nhat
                  </Text>
                  <Text numberOfLines={2} style={{ marginHorizontal: normalize(5),fontSize:normalize(12), color:Colors.white, marginBottom:normalize(5) }}>
                    Day la dong thu 2
                  </Text>
                </TextInImage>
              </View>
            </View>

          </View>

        </View>
      </View>
    )
  }
}




