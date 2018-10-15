import React, { PureComponent } from 'react';
import { View, Text, TouchableOpacity, ScrollView, FlatList } from 'react-native'
import IonicIcon from 'react-native-vector-icons/Ionicons'
import { connect } from 'react-redux'
import Swiper from 'react-native-swiper'
import FastImage from 'react-native-fast-image'
import { normalize, normalizeHeight } from '../../Themes/Metrics';
import { Colors, Metrics } from '../../Themes'

data = [{ id: 1 }, { id: 2 }, { id: 3 }]

class Explore extends PureComponent {

  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: (
        <Text style={{
          marginLeft: normalize(20),
          fontSize: normalize(25), fontWeight: 'bold', color: Colors.black
        }}>
          Explore
        </Text>),
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
            backgroundColor: '#453333',
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
        </View>
      </View>
    )
  }
  _keyExtractor = (item, index) => index;
  _renderItemTrending = ({ item }) => (
    <View style={{
      shadowOpacity: 0.5, shadowOffset: { width: 1, height: 1 }, shadowRadius: 3,
      flexDirection: 'row',
      marginRight: normalize(15), backgroundColor: '#F6F6F6', width: Metrics.screenWidth - normalize(40), borderRadius: 5
    }} >
      <View style={{ flex: 1.8 }} >
        <FastImage
          style={{
            height: '100%',
            width: '100%',
            borderTopLeftRadius: 5,
            borderBottomLeftRadius: 5
          }}
          source={{
            uri: 'https://unsplash.it/400/400?image=1',
          }}
          resizeMode={FastImage.resizeMode.stretch}
        />
      </View>

      <View style={{ flex: 3, marginTop: normalize(8), marginHorizontal: normalize(8) }} >
        <Text
          numberOfLines={2}
          style={{ fontSize: normalize(14), color: Colors.black, fontWeight: 'bold' }} >
          60-Minute Cruise Around the Status of Literty
        </Text>
        <Text
          numberOfLines={1}
          style={{ fontSize: normalize(12), color: Colors.brown, marginTop: normalize(3) }} >
          by Manhattan Walking Tour

      </Text>
        <View style={{ flexDirection: 'row', flex: 1, }}>
          <View style={{ flex: 1, justifyContent: 'center' }}>
            <Text
              numberOfLines={1}
              style={{ fontSize: normalize(12), color: Colors.brown, }} >
              ****** (123)      </Text>
            <Text
              numberOfLines={1}
              style={{ fontSize: normalize(12), color: Colors.brown, }} >
              Availlable from 19 June
      </Text>
          </View>
          <View style={{ marginLeft: normalize(5), justifyContent: 'center' }} >
            <Text style={{
              textDecorationLine: "line-through",
              textDecorationStyle: "solid",
              textDecorationColor: "#000", color: Colors.brown, fontSize: normalize(12), fontWeight: 'bold'
            }}>
              $100
          </Text>
            <Text style={{ marginTop: normalizeHeight(5), color: Colors.red, fontSize: normalize(13), fontWeight: 'bold' }}>
              $99.99
          </Text>
          </View>

        </View>
      </View>
    </View>
  );

  _renderItemPopular = () => (
    <View style={{
      shadowOpacity: 0.5,
      shadowOffset: { width: 1, height: 1 },
      shadowRadius: 3,
      marginRight: normalize(15), backgroundColor: '#F6F6F6', borderRadius: 5,
      width: (Metrics.screenWidth - normalize(55)) / 2
    }} >
      <FastImage
        style={{
          height: '100%',
          width: '100%',
          borderRadius: 5,
        }}
        source={{
          uri: 'https://unsplash.it/400/400?image=1',
        }}
        resizeMode={FastImage.resizeMode.stretch}
      />
      <View style={{ position: 'absolute', bottom: normalizeHeight(15) }} >
        <Text
          numberOfLines={2}
          style={{
            marginHorizontal: normalize(8), color: Colors.white, fontSize: normalize(13), fontWeight: 'bold'
          }}>
          hmmm day la mot dong cu ki dai khong tau sao ban k hong xuong dong j</Text>
        <Text style={{ marginHorizontal: normalize(8), marginTop: normalize(5), color: Colors.white, fontSize: normalize(11) }} >
          by Manhattan Walking
</Text>
      </View>
    </View>
  )

  render() {
    return (
      <View flex={1} style={{ backgroundColor: Colors.white }}>
        <ScrollView showsVerticalScrollIndicator={false}>

          <View style={{ marginHorizontal: normalize(20), height: normalizeHeight(350) }} >
            <Text style={{
              fontWeight: 'bold',
              fontSize: normalize(20), color: Colors.primary, marginVertical: normalize(10)
            }} >
              Recommended</Text>
            <View style={{ flex: 1 }}  >
              <Swiper autoplay
                onIndexChanged={index => this.setState({ index })}
                showsPagination={false}>
                {
                  data.map((item, index) => this.renderSliderView(item, index))
                }
              </Swiper>
              {this.renderPagination()}

            </View>
          </View>

          <View style={{ height: normalizeHeight(150) }} >

            <View style={{ marginHorizontal: normalize(20), flexDirection: 'row' }} >
              <View  >
                <Text style={{
                  fontSize: normalize(20), color: Colors.black
                }} >
                  Trending Activities
                </Text>
              </View>
              <View style={{ alignItems: 'flex-end', flex: 1, justifyContent: 'center' }} >
                <Text style={{ fontSize: normalize(13), color: Colors.brown }} >Show More</Text>
              </View>
            </View>
            <View style={{ flex: 1, marginLeft: normalize(20), marginVertical: normalize(10) }} >

              <FlatList
                showsHorizontalScrollIndicator={false}

                data={data}
                keyExtractor={this._keyExtractor}
                renderItem={this._renderItemTrending}
                horizontal
              />
            </View>

          </View>
          <View style={{ height: normalizeHeight(220), marginTop: normalizeHeight(10) }} >

            <View style={{ marginHorizontal: normalize(20), flexDirection: 'row' }} >
              <View  >
                <Text style={{
                  fontSize: normalize(20), color: Colors.black
                }} >
                  Popular Activities
              </Text>
              </View>
              <View style={{ alignItems: 'flex-end', flex: 1, justifyContent: 'center' }} >
                <Text style={{ fontSize: normalize(13), color: Colors.brown }} >Show More</Text>
              </View>
            </View>
            <View style={{ flex: 1, marginLeft: normalize(20), marginVertical: normalize(10) }} >
              <FlatList
                showsHorizontalScrollIndicator={false}
                data={data}
                keyExtractor={this._keyExtractor}
                renderItem={this._renderItemPopular}
                horizontal
              />
            </View>
          </View>


          <View style={{
             opacity: 0.5,
            height: normalizeHeight(220), marginVertical: normalizeHeight(10), marginHorizontal: normalize(20)
          }} >
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
                 <View style={{
                   left:0, right:0,
                   justifyContent:'center', alignItems:'center',
              position: 'absolute', bottom: normalizeHeight(15),
            }} >
              <Text
                style={{
                  color: Colors.white, fontSize: normalize(15), fontWeight:'bold', 
                }}>
                OUTDOOR & ADVENTURE
          </Text>
            </View>
              </View>

              <View style={{ flex:2, marginLeft: normalize(10) }}>
                <View style={{ flex: 1 }}>
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
                        <View style={{
                   left:0, right:0,
                   justifyContent:'center', alignItems:'center',
              position: 'absolute', bottom: normalizeHeight(15),
            }} >
              <Text
                style={{
                  color: Colors.white, fontSize: normalize(15), fontWeight:'bold', 
                }}>
               TEAM BUILDING
          </Text>
            </View>
                </View>
                <View style={{ flex: 1, flexDirection: 'row', marginTop: normalize(10) }}>
                  <View style={{ flex: 2, }}>
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
                          <View style={{
                   left:0, right:0,
                   justifyContent:'center', alignItems:'center',
              position: 'absolute', bottom: normalizeHeight(15),
            }} >
              <Text
                style={{
                  color: Colors.white, fontSize: normalize(15), fontWeight:'bold', 
                }}>
                TOURS
          </Text>
            </View>
                  </View>
                  <View style={{ flex: 1.5, marginLeft: normalize(10), opacity: 0.7 }}>
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
                          <View style={{
                   left:0, right:0,
                   justifyContent:'center', alignItems:'center',
              position: 'absolute', bottom:0,top:0
            }} >
              <Text
                style={{
                  color: Colors.white, fontSize: normalize(15), fontWeight:'bold', 
                }}>
                13+
          </Text>
            </View>
                  </View>
                </View>
              </View>
            </View>

          </View>


        </ScrollView>
      </View>
    )
  }
}



export default connect(null, null)(Explore)




