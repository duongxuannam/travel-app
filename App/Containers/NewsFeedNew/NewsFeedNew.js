import React, { PureComponent } from 'react';
import { Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import Swiper from 'react-native-swiper'
import FastImage from 'react-native-fast-image'
import { Images, Colors, Metrics } from '../../Themes'
import { normalize } from '../../Themes/Metrics'

data = [{ id: 1 }, { id: 2 }]

export default class NewsFeed extends PureComponent {

  constructor(props) {
    super(props)
    this.state = {
      index: 0
    }
  }
  renderPagination = () => {
    const { index } = this.state
    return (
      <View style={{
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginVertical: 10
      }}>
        {data.map((item, i) => i === index ?
          <View key={i.toString()} style={{
            backgroundColor: Colors.primary,
            width: 8,
            height: 8,
            borderRadius: 4,
            marginLeft: 3,
            marginRight: 3,
            marginTop: 3,
            marginBottom: 3,
          }} />
          : <View key={i.toString()} style={{
            backgroundColor: 'rgba(0,0,0,.2)',
            width: 8,
            height: 8,
            borderRadius: 4,
            marginLeft: 3,
            marginRight: 3,
            marginTop: 3,
            marginBottom: 3,
          }} />
        )}
      </View>
    )
  }
  renderSliderView = (item, index) => {

    return (
      <View flex={1} key={item.id} >
        <FastImage
          style={{
            height: '100%',
            width: '100%',
          }}
          source={{
            uri: 'https://unsplash.it/400/400?image=1',
          }}
          resizeMode={FastImage.resizeMode.stretch}
        />
        <View style={{ position: 'absolute', bottom: 20, paddingHorizontal: 10 }} >
          <Text numberOfLines={2} style={{
            color: '#fff',
            fontSize: normalize(15),
            fontWeight: 'bold',
            marginBottom: 10,
          }}>Day la cai tieu de rat la dai dai addai dai da ida id aida dia idadiaidadia </Text>
          <Text style={{
            color: '#fff',
            fontSize: normalize(15),
            fontWeight: 'bold',
          }}>Day la ngay thang thoi</Text>

        </View>
      </View>
    )
  }

  render() {
    return (
      <ScrollView>
        <View flex={1} style={{ marginHorizontal: normalize(8) }}>

          {/* swiper */}
          <View style={{ height: normalize(200) }}  >
            <Swiper autoplay
              onIndexChanged={index => this.setState({ index })}
              showsPagination={false}>
              {
                data.map((item, index) => this.renderSliderView(item, index))
              }
            </Swiper>
          </View>
          {this.renderPagination()}

          {/* small image right*/}

          <View style={{ height: normalize(80), flexDirection: 'row', marginBottom: 10 }}>
            <View style={{ flex: 2 }} >
              <Text numberOfLines={3} style={{ fontSize: normalize(14) }}>DAY LA MOT CAI TIEU DE RAT LA HAY no bao gom 3 dong lan do ban biet hem </Text>
              <Text style={{ fontSize: normalize(12), marginTop: 10 }}>DE RAT LA HAY </Text>
            </View>
            <View style={{ flex: 1 }} >
              <FastImage
                style={{
                  height: '100%',
                  width: '100%',
                  borderRadius: 3
                }}
                source={{
                  uri: 'https://unsplash.it/400/400?image=1',
                }}
                resizeMode={FastImage.resizeMode.stretch}
              />
            </View>
          </View>
          <View style={{ flexDirection: 'row', marginBottom: 15 }} >
            <View style={{ marginRight: 15, padding: 5, backgroundColor: Colors.primary, borderRadius: 5 }}>
              <Text style={{ fontSize: normalize(11), }}>Giai tri</Text>

            </View>
            <Text style={{ fontSize: normalize(11), marginRight: 15, paddingVertical: 5 }}>28 binh luan</Text>
            <Text style={{ fontSize: normalize(11), paddingVertical: 5 }}>32 phut truoc</Text>

          </View>


          {/* big imgae */}


          <View style={{ height: normalize(150) }}>
            <FastImage
              style={{
                height: '100%',
                width: '100%',
                borderRadius: 3
              }}
              source={{
                uri: 'https://unsplash.it/400/400?image=1',
              }}
              resizeMode={FastImage.resizeMode.stretch}
            />
          </View>
          <Text numberOfLines={3} style={{
            fontSize: normalize(15),
            fontWeight: 'bold',
            marginTop: 10,
            marginBottom: 6
          }}>Day la cai tieu ddde dsd efs fdf fdkmg kdjkf gje kjkrg rgtrkg jdkwe frejg kfe rat la dai dai addai dai da ida id aida dia idadiaidadia </Text>
          <View style={{ flexDirection: 'row', marginBottom: 15 }} >
            <View style={{ marginRight: 15, padding: 5, backgroundColor: Colors.primary, borderRadius: 5 }}>
              <Text style={{ fontSize: normalize(11), }}>Giai tri</Text>
            </View>
            <Text style={{ fontSize: normalize(11), marginRight: 15, paddingVertical: 5 }}>28 binh luan</Text>
            <Text style={{ fontSize: normalize(11), paddingVertical: 5 }}>32 phut truoc</Text>
          </View>

          {/* small image left*/}

          <View style={{ height: normalize(80), flexDirection: 'row', marginBottom: 10 }}>
            <View style={{ flex: 1,marginRight:5 }} >
              <FastImage
                style={{
                  height: '100%',
                  width: '100%',
                  borderRadius: 3
                }}
                source={{
                  uri: 'https://unsplash.it/400/400?image=1',
                }}
                resizeMode={FastImage.resizeMode.stretch}
              />
            </View>
            <View style={{ flex: 2 }} >
              <Text numberOfLines={3} style={{ fontSize: normalize(14) }}>DAY LA MOT CAI TIEU DE RAT LA HAY no bao gom 3 dong lan do ban biet hem </Text>
              <Text style={{ fontSize: normalize(12), marginTop: 10 }}>DE RAT LA HAY </Text>
            </View>

          </View>
          <View style={{ flexDirection: 'row', marginBottom: 15 }} >
            <View style={{ marginRight: 15, padding: 5, backgroundColor: Colors.primary, borderRadius: 5 }}>
              <Text style={{ fontSize: normalize(11), }}>Giai tri</Text>

            </View>
            <Text style={{ fontSize: normalize(11), marginRight: 15, paddingVertical: 5 }}>28 binh luan</Text>
            <Text style={{ fontSize: normalize(11), paddingVertical: 5 }}>32 phut truoc</Text>

          </View>



        </View>
      </ScrollView>

    )
  }
}
