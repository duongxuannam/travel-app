import React, { PureComponent } from 'react';
import { View, Text, TouchableOpacity, ScrollView, FlatList } from 'react-native'
import IonicIcon from 'react-native-vector-icons/Ionicons'
import LinearGradient from 'react-native-linear-gradient'
import { connect } from 'react-redux'
import Swiper from 'react-native-swiper'
import FastImage from 'react-native-fast-image'
import { normalize, normalizeHeight } from '../../Themes/Metrics';
import { Colors, Metrics } from '../../Themes'
import { Button } from '../../Components'

data = [{ id: 1 }, { id: 2 }, { id: 3 }]

class Activities extends PureComponent {

  static navigationOptions = ({ navigation }) => {
    return {
      title: "New York",
      headerTitleStyle: {
        textAlign: 'center', alignSelf: 'center',
        fontSize: normalize(25), fontWeight: 'bold', color: Colors.black
      },
      headerRight: (
        <TouchableOpacity>
          <IonicIcon
            style={{ paddingHorizontal: normalize(20), fontWeight: 'bold' }}
            name="ios-search"
            size={normalize(25)}
            color={Colors.black}
          />
        </TouchableOpacity>)

    }
  }
  constructor(props) {
    super(props)
    this.state = {
      index: 0
    }
  }

  render() {
    return (
      <View flex={1} style={{ backgroundColor: Colors.white, }}>
        <ScrollView showsVerticalScrollIndicator={false} style={{ marginHorizontal: normalize(20) }}>

          <View style={{
            height: normalizeHeight(150), marginVertical: normalizeHeight(10),
          }} >
            <FastImage
              style={{
                height: '100%',
                width: '100%',
                borderRadius: 5
              }}
              source={{
                uri: 'https://unsplash.it/400/400?image=1',
              }}
              resizeMode={FastImage.resizeMode.stretch}
            />
            <View style={{ justifyContent: 'center', alignItems: 'center', position: 'absolute', bottom: normalizeHeight(15), right: 0, left: 0 }} >
              <Text
                style={{
                  marginHorizontal: normalize(15), color: Colors.white, fontSize: normalize(18), fontWeight: 'bold'
                }}>
                Outdoor & Advanture</Text>
            </View>

          </View>



          <View style={{
            height: normalizeHeight(100), flexDirection: 'row',
          }}  >

            <View style={{ flex: 1, }} >
              <FastImage
                style={{
                  height: '100%',
                  width: '100%',
                  borderRadius: 5
                }}
                source={{
                  uri: 'https://unsplash.it/400/400?image=1',
                }}
                resizeMode={FastImage.resizeMode.stretch}
              />
              <View style={{ justifyContent: 'center', alignItems: 'center', position: 'absolute', bottom: normalizeHeight(15), right: 0, left: 0 }} >
                <Text
                  style={{
                    textAlign: 'center', marginHorizontal: normalize(15), color: Colors.white, fontSize: normalize(18), fontWeight: 'bold'
                  }}>
                  Tour
                </Text>
              </View>
            </View>
            <View style={{ flex: 1.7, marginLeft: normalize(10) }} >
              <FastImage
                style={{
                  height: '100%',
                  width: '100%',
                  borderRadius: 5
                }}
                source={{
                  uri: 'https://unsplash.it/400/400?image=1',
                }}
                resizeMode={FastImage.resizeMode.stretch}
              />
              <View style={{ justifyContent: 'center', alignItems: 'center', position: 'absolute', bottom: normalizeHeight(15), right: 0, left: 0 }} >
                <Text
                  style={{
                    textAlign: 'center', marginHorizontal: normalize(15), color: Colors.white, fontSize: normalize(18), fontWeight: 'bold'
                  }}>
                  Learn Something!
              </Text>
              </View>
            </View>

          </View>


          <View style={{
            height: normalizeHeight(100), flexDirection: 'row', marginVertical: normalize(10)
          }}  >


            <View style={{ flex: 1.7, marginRight: normalize(10) }} >
              <FastImage
                style={{
                  height: '100%',
                  width: '100%',
                  borderRadius: 5
                }}
                source={{
                  uri: 'https://unsplash.it/400/400?image=1',
                }}
                resizeMode={FastImage.resizeMode.stretch}
              />
              <View style={{ justifyContent: 'center', alignItems: 'center', position: 'absolute', bottom: normalizeHeight(15), right: 0, left: 0 }} >
                <Text
                  style={{
                    textAlign: 'center', marginHorizontal: normalize(15), color: Colors.white, fontSize: normalize(18), fontWeight: 'bold'
                  }}>
                  Date night
              </Text>
              </View>
            </View>


            <View style={{ flex: 1, }} >
              <FastImage
                style={{
                  height: '100%',
                  width: '100%',
                  borderRadius: 5
                }}
                source={{
                  uri: 'https://unsplash.it/400/400?image=1',
                }}
                resizeMode={FastImage.resizeMode.stretch}
              />
              <View style={{ justifyContent: 'center', alignItems: 'center', position: 'absolute', bottom: normalizeHeight(15), right: 0, left: 0 }} >
                <Text
                  style={{
                    textAlign: 'center', marginHorizontal: normalize(15), color: Colors.white, fontSize: normalize(18), fontWeight: 'bold'
                  }}>
                  Culture
                </Text>
              </View>
            </View>
          </View>



          <View style={{
            height: normalizeHeight(150), marginVertical: normalizeHeight(10),
          }} >
                    <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} >

            <FastImage
              style={{
                height: '100%',
                width: '100%',
                borderRadius: 5
              }}
              source={{
                uri: 'https://unsplash.it/400/400?image=1',
              }}
              resizeMode={FastImage.resizeMode.stretch}
            />
            <View style={{ justifyContent: 'center', alignItems: 'center', position: 'absolute', bottom: normalizeHeight(15), right: 0, left: 0 }} >
              <Text
                style={{
                  marginHorizontal: normalize(15), color: Colors.white, fontSize: normalize(18), fontWeight: 'bold'
                }}>
               Team Building</Text>
            </View>
            </LinearGradient>

          </View>


          <Button
            style={{
              borderColor: '#F7F7F7',
              backgroundColor: '#F7F7F7'
            }}
            textStyle={{ color: Colors.brown }}
            label="View more" />

          <Text style={{
            textAlign: 'center', fontSize: normalize(25), fontWeight: 'bold', color: Colors.black
          }} >Others</Text>
          <View style={{
            height: normalizeHeight(200), marginVertical: normalizeHeight(10),
          }} >
            <View style={{ flex: 1, flexDirection: 'row', marginBottom: normalize(10) }} >
              <View style={{ flex: 1, marginRight:normalize(5)}} >
              <FastImage
                style={{
                  height: '100%',
                  width: '100%',
                  borderRadius: 5
                }}
                source={{
                  uri: 'https://unsplash.it/400/400?image=1',
                }}
                resizeMode={FastImage.resizeMode.stretch}
              />
              <View style={{ justifyContent: 'center', alignItems: 'center', position: 'absolute', bottom: normalizeHeight(15), right: 0, left: 0 }} >
                <Text
                  style={{
                    marginHorizontal: normalize(15), color: Colors.white, fontSize: normalize(18), fontWeight: 'bold'
                  }}>
                  ChiCago</Text>
              </View>
              </View>

              <View style={{ flex: 1,marginLeft:normalize(5) }} >
              <FastImage
                style={{
                  height: '100%',
                  width: '100%',
                  borderRadius: 5
                }}
                source={{
                  uri: 'https://unsplash.it/400/400?image=1',
                }}
                resizeMode={FastImage.resizeMode.stretch}
              />
              <View style={{ justifyContent: 'center', alignItems: 'center', position: 'absolute', bottom: normalizeHeight(15), right: 0, left: 0 }} >
                <Text
                  style={{
                    marginHorizontal: normalize(15), color: Colors.white, fontSize: normalize(18), fontWeight: 'bold'
                  }}>
                  Washington DC</Text>
              </View>
              </View>
            </View>
            <View style={{ flex: 1, flexDirection: 'row', marginBottom: normalize(10) }} >
              <View style={{ flex: 1, marginRight:normalize(5) }} >
              <FastImage
                style={{
                  height: '100%',
                  width: '100%',
                  borderRadius: 5
                }}
                source={{
                  uri: 'https://unsplash.it/400/400?image=1',
                }}
                resizeMode={FastImage.resizeMode.stretch}
              />
              <View style={{ justifyContent: 'center', alignItems: 'center', position: 'absolute', bottom: normalizeHeight(15), right: 0, left: 0 }} >
                <Text
                  style={{
                    marginHorizontal: normalize(15), color: Colors.white, fontSize: normalize(18), fontWeight: 'bold'
                  }}>
                  Los Angles</Text>
              </View>
              </View>

              <View style={{ flex: 1,marginLeft:normalize(5), }} >
              <FastImage
                style={{
                  height: '100%',
                  width: '100%',
                  borderRadius: 5
                }}
                source={{
                  uri: 'https://unsplash.it/400/400?image=1',
                }}
                resizeMode={FastImage.resizeMode.stretch}
              />
              <View style={{ justifyContent: 'center', alignItems: 'center', position: 'absolute', bottom: normalizeHeight(15), right: 0, left: 0 }} >
                <Text
                  style={{
                    textAlign:'center', marginHorizontal: normalize(15), color: Colors.white, fontSize: normalize(18), fontWeight: 'bold'
                  }}>
                  San Fransisco</Text>
              </View>
              </View>
            </View>
               </View> 
           
        </ScrollView>
            </View>
        )
      }
    }
    
    
    
    export default connect(null, null)(Activities)
    
    
    
    
