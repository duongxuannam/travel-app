import React, { PureComponent } from 'react';
import { View, Text, TouchableOpacity } from 'react-native'
import { Image, TextInImage } from '../../Components'
import { normalize, normalizeHeight } from '../../Themes/Metrics';
import { Colors } from '../../Themes'
import { Button } from '../../Components'


export default class Main extends PureComponent {


  render() {
    return (
      <React.Fragment>
        <View style={{
          height: normalizeHeight(150), marginVertical: normalizeHeight(10),
        }} >

          <Image uri={{ uri: 'https://unsplash.it/400/400?image=1', }}
            style={{ borderRadius: 5 }}
          />

          <TextInImage style={{ right: 0, left: 0, bottom: 0 }} styleGradient={{ borderRadius: 5 }}>
            <Text
              numberOfLines={1}
              style={{
                textAlign: 'center',
                margin: normalize(10), color: Colors.white, fontSize: normalize(18), fontWeight: 'bold'
              }}>
              Outdoor & Advanture
                 </Text>
          </TextInImage>

        </View>



        <View style={{
          height: normalizeHeight(100), flexDirection: 'row',
        }}  >

          <View style={{ flex: 1, }} >
            <Image style={{ borderRadius: 5 }}

            />

            <TextInImage style={{ right: 0, left: 0, bottom: 0 }} styleGradient={{ borderRadius: 5 }}>
              <Text
                numberOfLines={1}
                style={{
                  textAlign: 'center',
                  margin: normalize(10), color: Colors.white, fontSize: normalize(15), fontWeight: 'bold'
                }}>
                Tours
             </Text>
            </TextInImage>
          </View>
          <View style={{ flex: 1.7, marginLeft: normalize(10) }} >
            <Image uri={{ uri: 'https://unsplash.it/400/400?image=1', }}
              style={{ borderRadius: 5 }}
            />

            <TextInImage style={{ right: 0, left: 0, bottom: 0 }} styleGradient={{ borderRadius: 5 }}>
              <Text
                numberOfLines={1}
                style={{
                  textAlign: 'center',
                  margin: normalize(10), color: Colors.white, fontSize: normalize(15), fontWeight: 'bold'
                }}>
                Learn something
             </Text>
            </TextInImage>

          </View>

        </View>


        <View style={{
          height: normalizeHeight(100), flexDirection: 'row', marginVertical: normalize(10)
        }}  >


          <View style={{ flex: 1.7, marginRight: normalize(10) }} >
            <Image uri={{ uri: 'https://unsplash.it/400/400?image=1', }}
              style={{ borderRadius: 5 }}
            />

            <TextInImage style={{ right: 0, left: 0, bottom: 0 }} styleGradient={{ borderRadius: 5 }} >
              <Text
                numberOfLines={1}
                style={{
                  textAlign: 'center',
                  margin: normalize(10), color: Colors.white, fontSize: normalize(15), fontWeight: 'bold'
                }}>
                Date night
             </Text>
            </TextInImage>
          </View>
          <View style={{ flex: 1, }} >
            <Image uri={{ uri: 'https://unsplash.it/400/400?image=1', }}
              style={{ borderRadius: 5 }}
            />
            <TextInImage style={{ right: 0, left: 0, bottom: 0 }} styleGradient={{ borderRadius: 5 }}>
              <Text
                numberOfLines={1}
                style={{
                  textAlign: 'center',
                  margin: normalize(10), color: Colors.white, fontSize: normalize(15), fontWeight: 'bold'
                }}>
                Culture
             </Text>
            </TextInImage>
          </View>
        </View>
        <TouchableOpacity>

          <View style={{
            height: normalizeHeight(150), marginVertical: normalizeHeight(10),opacity:0.4
          }} >
          <View style={{ top:0,bottom:0,right:0,left:0, }} />
            <Image uri={{ uri: 'https://unsplash.it/400/400?image=1', }}
              style={{ borderRadius: 5 }}
            />

            <TextInImage style={{ right: 0, left: 0, bottom: 0 }} styleGradient={{ borderRadius: 5 }} >
              <Text
                numberOfLines={1}
                style={{
                  textAlign: 'center',
                  margin: normalize(10), color: Colors.white, fontSize: normalize(15), fontWeight: 'bold'
                }}>
                Team building
             </Text>
            </TextInImage>
          </View>
        </TouchableOpacity>



        <Button
          style={{
            borderColor: '#F7F7F7',
            backgroundColor: '#F7F7F7'
          }}
          textStyle={{ color: Colors.brown }}
          label="View more" />

      </React.Fragment>
    )
  }
}








