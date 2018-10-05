import React, { PureComponent } from 'react';
import { Text, View, TextInput,ScrollView } from 'react-native';
import I18n from 'react-native-i18n'
import FastImage from 'react-native-fast-image'
import { Metrics, Colors, Images } from '../../Themes'
import { normalize, normalizeHeight } from '../../Themes/Metrics'


export default class CommunityNew extends PureComponent {

  // static navigationOptions = ({ navigation }) => {
  //   return {
  //     headerStyle: { height: Metrics.screenHeight / 12 },
  //     headerTitle: <NavigationHeader />,
  //     headerLeft: null,
  //     headerRight: null,
  //   }
  // }

  render() {
    return (
      <View flex={1} style={{ marginHorizontal: normalize(8) }} >
<ScrollView>
        <View>
          <View style={{ width: '100%', flexDirection: 'row', height: normalize(90), backgroundColor: '#fff' }}>
            <FastImage
              style={{
                height: normalize(40),
                width: normalize(40),
                borderRadius: normalize(20),
                margin: 15,
              }}
              source={{
                uri: 'https://unsplash.it/400/400?image=1',
              }}
              resizeMode={FastImage.resizeMode.stretch}
            />
            <View style={{ flex: 1 }}>
              <View style={{ margin: normalizeHeight(10), }} >
                <TextInput
                  multiline={true}
                  placeholder='Tao bai viet moi' />

              </View>
            </View>
          </View>

          <View style={{ flexDirection: 'row', marginTop: normalizeHeight(5), height: normalize(40), backgroundColor: '#fff' }} >
            <View flex={1} style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }} >
              <FastImage
                style={{
                  height: normalize(15),
                  width: normalize(15),
                  margin: 10
                }}
                source={Images.imagePost}
                resizeMode={FastImage.resizeMode.stretch}
              />
              <Text style={{ fontSize: normalize(12) }}>Post bai</Text>
            </View>
            <View flex={1} style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderRightWidth: 0.8, borderLeftWidth: 1, borderColor: '#D3D3D3' }} >
              <FastImage
                style={{
                  height: normalize(15),
                  width: normalize(15),
                  margin: 10
                }}
                source={Images.camera}
                resizeMode={FastImage.resizeMode.stretch}
              />
              <Text style={{ fontSize: normalize(12) }}>Chup anh</Text>
            </View>
            <View flex={1} style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }} >
              <FastImage
                style={{
                  height: normalize(15),
                  width: normalize(15),
                  margin: 10
                }}
                source={Images.poll}
                resizeMode={FastImage.resizeMode.stretch}
              />
              <Text style={{ fontSize: normalize(12) }} >Khao sat</Text>

            </View>
          </View>
        </View>


        <View style={{ marginTop: normalizeHeight(5), backgroundColor: '#fff', padding: normalize(10) }} >
          <View style={{ flexDirection: 'row' }}>
            <View
              style={{
                paddingHorizontal: 8,
                paddingVertical: 4,
                backgroundColor: Colors.primary,
                borderRadius: 4
              }}
            >
              <Text style={{ fontSize: normalize(13), color: '#fff' }}>Nuoi con</Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row', marginVertical: normalizeHeight(8), alignItems: 'center' }} >
            <FastImage
              style={{
                height: normalize(30),
                width: normalize(30),
              }}
              source={{
                uri: 'https://unsplash.it/400/400?image=1',

              }}
              resizeMode={FastImage.resizeMode.stretch}
            />
            <View style={{ marginLeft: normalize(8) }} >
              <Text style={{ fontSize: normalize(13) }} >
                BOng nguyen
                </Text>
              <Text style={{ fontSize: normalize(11), marginTop: normalizeHeight(2) }} >
                12 phut truoc
                </Text>
            </View>
          </View>
          <View>
            <Text numberOfLines={2} style={{ fontSize: normalize(15), marginVertical: normalizeHeight(3) }} >Day la cai tieu de</Text>
            <Text numberOfLines={5} style={{ fontSize: normalize(13) }} >Day la cai tieu de Day la cai tieu de Day la cai tieu de Day la cai tieu deDay la cai tieu de</Text>
          </View>
          <View style={{ flexDirection: 'row', marginTop: normalizeHeight(6) }} >
            <View style={{ flexDirection: 'row',alignItems:'center' }} >
            <FastImage
                style={{
                  height: normalize(13),
                  width: normalize(13),
                  marginRight:normalize(3)
                }}
                source={Images.comment}
                resizeMode={FastImage.resizeMode.stretch}
              />
              <Text style={{ fontSize: normalize(10) }}>12</Text>

            </View>
            <View style={{ flexDirection: 'row',marginLeft:normalize(8), alignItems:'center' }} >
            <FastImage
                style={{
                  height: normalize(13),
                  width: normalize(13),
                  marginRight:normalize(3)
                }}
                source={Images.love}
                resizeMode={FastImage.resizeMode.stretch}
              />
              <Text style={{ fontSize: normalize(10) }}>3</Text>
            </View>
          </View>
        </View>
        <View style={{ marginTop: normalizeHeight(5), backgroundColor: '#fff', padding: normalize(10) }} >
          <View style={{ flexDirection: 'row' }}>
            <View
              style={{
                paddingHorizontal: 8,
                paddingVertical: 4,
                backgroundColor: Colors.primary,
                borderRadius: 4
              }}
            >
              <Text style={{ fontSize: normalize(13), color: '#fff' }}>Nuoi con</Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row', marginVertical: normalizeHeight(8), alignItems: 'center' }} >
            <FastImage
              style={{
                height: normalize(30),
                width: normalize(30),
              }}
              source={{
                uri: 'https://unsplash.it/400/400?image=1',

              }}
              resizeMode={FastImage.resizeMode.stretch}
            />
            <View style={{ marginLeft: normalize(5) }} >
              <Text style={{ fontSize: normalize(13) }} >
                BOng nguyen
                </Text>
              <Text style={{ fontSize: normalize(11), marginTop: normalizeHeight(2) }} >
                12 phut truoc
                </Text>
            </View>
          </View>
          <View>
            <Text numberOfLines={2} style={{ fontSize: normalize(15), marginVertical: normalizeHeight(3) }} >Day la cai tieu de</Text>
            <Text numberOfLines={5} style={{ fontSize: normalize(13) }} >Day la cai tieu de Day la cai tieu de Day la cai tieu de Day la cai tieu deDay la cai tieu de</Text>
          </View>
          <View style={{ flexDirection: 'row', marginTop: normalizeHeight(6) }} >
            <View style={{ flexDirection: 'row',alignItems:'center' }} >
            <FastImage
                style={{
                  height: normalize(13),
                  width: normalize(13),
                  marginRight:normalize(3)
                }}
                source={Images.comment}
                resizeMode={FastImage.resizeMode.stretch}
              />
              <Text style={{ fontSize: normalize(10) }}>12</Text>

            </View>
            <View style={{ flexDirection: 'row',marginLeft:normalize(8), alignItems:'center' }} >
            <FastImage
                style={{
                  height: normalize(13),
                  width: normalize(13),
                  marginRight:normalize(3)
                }}
                source={Images.love}
                resizeMode={FastImage.resizeMode.stretch}
              />
              <Text style={{ fontSize: normalize(10) }}>3</Text>
            </View>
          </View>
        </View>
        </ScrollView>
      </View>
    );
  }
}


const mapStateToProps = state => {
  return {
    app: state,
  }
}



