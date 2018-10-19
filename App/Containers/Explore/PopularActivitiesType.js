import React, { PureComponent } from 'react';
import { View, Text, TouchableOpacity } from 'react-native'
import { Image, TextInImage } from '../../Components'
import { normalize, normalizeHeight } from '../../Themes/Metrics';
import { Colors } from '../../Themes'

export default class PopularActivitiesType extends PureComponent {

  render() {
    const { goTours } = this.props
    return (
      <View style={{
        height: normalizeHeight(200), marginVertical: normalizeHeight(10),
      }} >
        <View style={{ marginHorizontal: normalize(20), flexDirection: 'row' }} >
          <View  >
            <Text style={{
              fontSize: normalize(20), color: Colors.black, marginBottom: normalize(8)
            }} >
              Popular Activity Types
          </Text>
          </View>
          <View style={{ alignItems: 'flex-end', flex: 1, justifyContent: 'center' }} >
            <Text style={{ fontSize: normalize(13), color: Colors.brown }} >Show More</Text>
          </View>
        </View>
        <View style={{
          flex: 1, marginHorizontal: normalize(20)
          , flexDirection: 'row'
        }} >
          <View style={{ flex: 1.8 }}>
            <TouchableOpacity onPress={goTours}>
              <Image uri={{ uri: 'https://unsplash.it/400/400?image=1' }} />
              <TextInImage  >
                <Text
                  style={{
                    color: Colors.white, fontSize: normalize(15), fontWeight: 'bold', textAlign: 'center',
                    padding: normalizeHeight(10)
                  }}>
                  OUTDOOR & ADVENTURE
            </Text>
              </TextInImage>
            </TouchableOpacity>
          </View>

          <View style={{ flex: 2, marginLeft: normalize(10) }}>
            <View style={{ flex: 1 }}>
              <TouchableOpacity onPress={goTours}>
                <Image uri={{ uri: 'https://unsplash.it/400/400?image=1' }} />
                <TextInImage style={{ alignItems: 'center' }} >
                  <Text
                    style={{
                      color: Colors.white, fontSize: normalize(15), fontWeight: 'bold',
                      padding: normalizeHeight(10)
                    }}>
                    TEAM BUILDING
            </Text>
                </TextInImage>
              </TouchableOpacity>
            </View>
            <View style={{ flex: 1, flexDirection: 'row', marginTop: normalize(10) }}>
              <View style={{ flex: 2, }}>
                <TouchableOpacity onPress={goTours}>
                  <Image uri={{ uri: 'https://unsplash.it/400/400?image=1' }} />
                  <TextInImage style={{ alignItems: 'center' }} >
                    <Text
                      style={{
                        color: Colors.white, fontSize: normalize(15), fontWeight: 'bold',
                        padding: normalizeHeight(10)
                      }}>
                      TOUR
            </Text>
                  </TextInImage>
                </TouchableOpacity>
              </View>
              <View style={{ flex: 1.5, marginLeft: normalize(10), opacity: 0.7 }}>
                <TouchableOpacity onPress={goTours}>
                  <Image uri={{ uri: 'https://unsplash.it/400/400?image=1' }} />
                  <TextInImage style={{ alignItems: 'center', top: 0, justifyContent: 'center' }} >
                    <Text
                      style={{
                        color: Colors.white, fontSize: normalize(15), fontWeight: 'bold',
                        padding: normalizeHeight(10)
                      }}>
                      13+
            </Text>
                  </TextInImage>
                </TouchableOpacity>


              </View>
            </View>
          </View>
        </View>

      </View>
    )
  }
}





