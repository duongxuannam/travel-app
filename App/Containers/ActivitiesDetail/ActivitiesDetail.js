import React, { PureComponent } from 'react';
import { View, Text, ScrollView, StatusBar, TouchableOpacity } from 'react-native'
import IonicIcon from 'react-native-vector-icons/Ionicons'
import EntypoIcon from 'react-native-vector-icons/Entypo'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'
import { connect } from 'react-redux'
import FastImage from 'react-native-fast-image'
import Swiper from 'react-native-swiper'
import MapView, { Marker } from 'react-native-maps';
import { Button } from '../../Components'
import { normalize, normalizeHeight } from '../../Themes/Metrics';
import { Colors, Metrics, Images } from '../../Themes'

data = [{ id: 1 }, { id: 2 }, { id: 3 }]

class ActivitiesDetail extends PureComponent {

  static navigationOptions = ({ navigation }) => {
    return {
      header: null
    }
  }

  constructor(props) {
    super(props)
    this.state = {
      index: 0,
      seeMore: false,

      region: {
        latitude: 10.925937010125281,
        latitudeDelta: 0.04203643733102069,
        longitude: 106.76560140906179,
        longitudeDelta: 0.02499999999992042
      },
      markers: [
        {
          latlng: {
            latitude: 10.925937010125281, longitude: 106.76560140906179,
          },
          description: 'nani'
        },
        {
          latlng: {
            latitude: 10.93008805303404, longitude: 106.76586430642884,
          },
          description: 'nani'

        },
        {
          latlng: {
            latitude: 10.930922878800757, longitude: 106.77173508791307
          },
          description: 'nani',
          title: 'nani'

        }
      ],

    }
  }
  seeMore = () => {
    this.setState({
      seeMore: !this.state.seeMore
    })
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
            backgroundColor: Colors.white,
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
        <View style={{
          position: 'absolute', bottom: 10, paddingLeft: 10,
          width: (Metrics.screenWidth * 3) / 4,
        }} >
          <Text numberOfLines={2} style={{
            color: '#fff',
            fontSize: normalize(18),
            fontWeight: 'bold',
            marginBottom: 10,
          }}>Hightline Food Tour tour tour tour tour tour tour tour tou tr tou toe ojsdf jsdjfdks</Text>
          <Text numberOfLines={2} style={{
            color: '#fff',
            fontSize: normalize(12),
            fontWeight: 'bold',
            marginBottom: 10,
          }}>Food and Culture Walking Tour</Text>
        </View>
      </View>
    )
  }
  goBack = ()=>{
    console.log(this.props.navigation)
    this.props.navigation.goBack(null)
  }
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: Colors.white, }} >

        <ScrollView style={{ marginBottom: normalize(50) }}>
          <StatusBar barStyle="light-content" />
          <View style={{ height: normalizeHeight(190) }} >



        

            <View style={{
              position: 'absolute',
              zIndex: 10,
              top: normalizeHeight(25),
              paddingHorizontal: 10
            }} >
            <TouchableOpacity onPress={this.goBack}>
            <IonicIcon name="md-arrow-back" color={Colors.white} size={normalize(30)} />

            </TouchableOpacity>
            </View>
            <Swiper autoplay
              onIndexChanged={index => this.setState({ index })}
              showsPagination={false}>
              {
                data.map((item, index) => this.renderSliderView(item, index))
              }
            </Swiper>
            <View style={{
              position: 'absolute',
              zIndex: 10,
              bottom: 10,
              right: 0,
              paddingRight: 20
            }} >
              {this.renderPagination()}
            </View>
          </View>



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
              <View style={{ justifyContent: 'center', borderRadius: 3, backgroundColor: Colors.badgerColor, padding: 5 }}>
                <Text style={{ fontSize: normalize(13), fontWeight: 'bold', color: Colors.white }} >
                  4.2
              </Text>
              </View>
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
            <View style={{ flexDirection: 'row', marginBottom: normalize(13) }} >
              <View style={{ justifyContent: 'center' }}>
                <FastImage
                  style={{
                    height: normalize(20),
                    width: normalize(20),
                  }}
                  source={Images.location}
                  resizeMode={FastImage.resizeMode.contain}
                />
              </View>
              <View style={{ justifyContent: 'center', flex: 1, marginLeft: normalize(20) }}>
                <Text style={{ fontSize: normalize(13), color: Colors.black }} >
                  NYC</Text>
              </View>
            </View>

            <View style={{ flexDirection: 'row', marginBottom: normalize(13) }} >
              <View style={{ justifyContent: 'center', }}>
                <FastImage
                  style={{
                    height: normalize(20),
                    width: normalize(20),
                  }}
                  source={Images.timeOpen}
                  resizeMode={FastImage.resizeMode.contain}
                />
              </View>
              <View style={{ justifyContent: 'center', flex: 1, marginLeft: normalize(20) }}>
                <Text style={{ fontSize: normalize(13), color: Colors.black }} >
                  3 hours total</Text>
              </View>
            </View>


            <View style={{ flexDirection: 'row', }} >
              <View style={{ justifyContent: 'center', }}>
                <FastImage
                  style={{
                    height: normalize(20),
                    width: normalize(20),
                  }}
                  source={Images.language}
                  resizeMode={FastImage.resizeMode.contain}
                />
              </View>
              <View style={{ justifyContent: 'center', flex: 1, marginLeft: normalize(20) }}>
                <Text style={{ fontSize: normalize(12), color: Colors.black }} >
                  Offered in English
                </Text>
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


            <View style={{ flexDirection: 'row', marginBottom: normalize(13) }} >
              <View style={{ justifyContent: 'center' }}>
                <FastImage
                  style={{
                    height: normalize(20),
                    width: normalize(20),
                  }}
                  source={Images.checkIn}
                  resizeMode={FastImage.resizeMode.contain}
                />
              </View>
              <View style={{ justifyContent: 'center', flex: 1, marginLeft: normalize(20) }}>
                <Text style={{ fontSize: normalize(13), color: Colors.black }} >
                  Mobile Check-in
                </Text>
              </View>
            </View>

            <View style={{ flexDirection: 'row', marginBottom: normalize(13) }} >
              <View style={{ justifyContent: 'center', }}>
                <FastImage
                  style={{
                    height: normalize(20),
                    width: normalize(20),
                  }}
                  source={Images.timeOpen}
                  resizeMode={FastImage.resizeMode.contain}
                />
              </View>
              <View style={{ justifyContent: 'center', flex: 1, marginLeft: normalize(20) }}>
                <Text style={{ fontSize: normalize(13), color: Colors.black }} >
                  9:30am/10:00am/5:00pm(certain dates)
                </Text>
              </View>
            </View>


            <View style={{ flexDirection: 'row', }} >
              <View style={{ justifyContent: 'center', }}>
                <FastImage
                  style={{
                    height: normalize(20),
                    width: normalize(20),
                  }}
                  source={Images.cancel}
                  resizeMode={FastImage.resizeMode.cosntain}
                />
              </View>
              <View style={{ justifyContent: 'center', flex: 1, marginLeft: normalize(20) }}>
                <Text style={{ fontSize: normalize(12), color: Colors.black }} >
                  Free cancellation up to 72 hours prior to activity
                </Text>
              </View>
            </View>
          </View>




          <View style={[{
            marginHorizontal: normalize(10),
            marginTop: normalize(10),

          }, this.state.seeMore ? {} : { height: normalizeHeight(160) }]} >

            <Text style={{ fontSize: normalize(18), fontWeight: 'bold' }} >
              Description
</Text>
            <View style={{ marginTop: normalize(10), }} >
              <Text style={{ fontSize: normalize(16) }} >
                Day la mot doan van ban cu ki dai luon do ban a
                no chi co kich thuoc hon hai chuc dong ma thoi
                vui long dung bo them nhieu chu vo nua co duoc khong vay a
                Day la mot doan van ban cu ki dai luon do ban a
                no chi co kich thuoc hon hai chuc dong ma thoi
                vui long dung bo them nhieu chu vo nua co duoc khong vay a
                Day la mot doan van ban cu ki dai luon do ban a
                no chi co kich thuoc hon hai chuc dong ma thoi
                vui long dung bo them nhieu chu vo nua co duoc khong vay a
                Day la mot doan van ban cu ki dai luon do ban a
                no chi co kich thuoc hon hai chuc dong ma thoi
                vui long dung bo them nhieu chu vo nua co duoc khong vay a
                Day la mot doan van ban cu ki dai luon do ban a
                no chi co kich thuoc hon hai chuc dong ma thoi
                vui long dung bo them nhieu chu vo nua co duoc khong vay a
            </Text>
            </View>
          </View>




          <View style={{ marginTop: normalizeHeight(10) }} >
            <TouchableOpacity onPress={this.seeMore} >
              <Text style={{ textAlign: 'center', fontSize: normalize(17), color: Colors.primary }} >See more</Text>
            </TouchableOpacity>
          </View>



          <View style={{
            marginHorizontal: normalize(10),
            marginVertical: normalize(15),
            paddingBottom: normalize(15),
            borderBottomWidth: 0.8,
            borderBottomColor: Colors.brown
          }} >
            <Text style={{ fontSize: normalize(18), fontWeight: 'bold' }} >
              What's Included
            </Text>

            <View style={{
              backgroundColor: Colors.defaultColorView,
              borderRadius: 8,
              marginTop: normalize(10)
            }} >
              <View style={{ flexDirection: 'row', marginBottom: normalize(13), marginTop: normalize(22) }} >
                <View style={{ justifyContent: 'center', }}>
                  <FastImage
                    style={{
                      height: normalize(20),
                      width: normalize(20),
                    }}
                    source={Images.check}
                    resizeMode={FastImage.resizeMode.contain}
                  />
                </View>
                <View style={{ justifyContent: 'center', flex: 1, marginLeft: normalize(20) }}>
                  <Text style={{ fontSize: normalize(13), color: Colors.black }} >
                    All Food Tastings (7 on-the-go and 1 seated)
                </Text>
                </View>
              </View>
              <View style={{ flexDirection: 'row', marginBottom: normalize(13) }} >
                <View style={{ justifyContent: 'center', }}>
                  <FastImage
                    style={{
                      height: normalize(20),
                      width: normalize(20),
                    }}
                    source={Images.check}
                    resizeMode={FastImage.resizeMode.contain}
                  />
                </View>
                <View style={{ justifyContent: 'center', flex: 1, marginLeft: normalize(20) }}>
                  <Text style={{ fontSize: normalize(13), color: Colors.black }} >
                    One Bottle of Water
                </Text>
                </View>
              </View>
              <View style={{ flexDirection: 'row', marginBottom: normalize(13) }} >
                <View style={{ justifyContent: 'center', }}>
                  <FastImage
                    style={{
                      height: normalize(20),
                      width: normalize(20),
                    }}
                    source={Images.check}
                    resizeMode={FastImage.resizeMode.contain}
                  />
                </View>
                <View style={{ justifyContent: 'center', flex: 1, marginLeft: normalize(20) }}>
                  <Text style={{ fontSize: normalize(13), color: Colors.black }} >
                    A Charming Tour Guide
               </Text>
                </View>
              </View>
              <View style={{ flexDirection: 'row', marginBottom: normalize(22) }} >
                <View style={{ justifyContent: 'center', }}>
                  <FastImage
                    style={{
                      height: normalize(20),
                      width: normalize(20),
                    }}
                    source={Images.check}
                    resizeMode={FastImage.resizeMode.contain}
                  />
                </View>
                <View style={{ justifyContent: 'center', flex: 1, marginLeft: normalize(20) }}>
                  <Text style={{ fontSize: normalize(13), color: Colors.black }} >
                    Our Insider Guide
                </Text>
                </View>
              </View>
            </View>
          </View>


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
                  </View>
                  <View style={{ flex: 1, marginTop: normalize(5), backgroundColor: 'blue' }} >
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
                  </View>
                </View>
                <View style={{ flex: 3 }} >
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
                </View>
              </View>

              <View style={{ height: normalizeHeight(80), flexDirection: 'row', marginTop: normalize(10) }}>
                <View flex={1} style={{ marginRight: normalize(5) }}>
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
                </View>
                <View flex={1} style={{ marginLeft: normalize(5) }}>
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
                </View>
              </View>

              <View style={{ flexDirection: 'row', height: normalizeHeight(180), marginTop: normalize(10) }} >
                <View style={{ flex: 3 }} >
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
                </View>

                <View style={{
                  flex: 2,
                  marginLeft: normalize(10),
                }} >
                  <View style={{
                    flex: 1, marginBottom: normalize(5),
                    borderRadius: 5
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
                  </View>
                  <View style={{ flex: 1, marginTop: normalize(5), backgroundColor: 'blue' }} >
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
                  </View>
                </View>

              </View>

            </View>
          </View>


          <View style={{
            marginHorizontal: normalize(10),
            marginVertical: normalize(10)
          }} >
            <Text style={{ fontSize: normalize(18), fontWeight: 'bold' }} >
              Location
            </Text>

            <View style={{
              marginTop: normalize(10),
              height: normalizeHeight(220)
            }} >
              <MapView
                style={{ flex: 1 }}
                region={this.state.region}
                onRegionChange={this.onRegionChange}
              >
                {this.state.markers.map((marker,index) => (
                  <Marker
                  key={index}
                    coordinate={marker.latlng}
                    title={marker.title}
                    description={marker.description}
                  />
                ))}

                {/* <Marker draggable
      coordinate={this.state.markerDrag}
      // description={marker.description}
      onDragEnd={(e) => this.setState({ markerDrag: e.nativeEvent.coordinate })}

    /> */}


              </MapView>

<View style={{ 
position:'absolute', 
zIndex:100,
left:normalize(10), 
right:normalize(10), 
bottom:normalize(10),
backgroundColor:Colors.white, 
justifyContent:'center',
alignItems:'center',
paddingVertical:normalizeHeight(10),
borderRadius:5
}} >
<Text  style={{ fontWeight:'bold' }}> Chelsea Market/High Line </Text>
<Text> Tour meets near 9 Ave. & 15th St. </Text>
<Text> Exac location released upon booking </Text>
</View>

            </View>
          </View>



          <View style={{
            marginHorizontal: normalize(10),
          }} >
            <Text style={{ fontSize: normalize(18), fontWeight: 'bold' }} >
              Reviews and Tips
            </Text>

            <View style={{
              marginTop: normalize(20)
            }} >
              <View style={{ marginBottom: normalize(10) }} >
                <View style={{ flexDirection: 'row' }} >
                  <View>
                    <Text style={{ fontSize: normalize(15), fontWeight: 'bold' }}>Alex Standall</Text>
                  </View>
                  <View style={{ alignItems: 'flex-end', flex: 1 }} >
                    <Text style={{ fontSize: normalize(15) }}>7/3/2018</Text>
                  </View>
                </View>
                <View style={{ flexDirection: 'row', marginVertical: normalize(10) }} >
                  <View style={{ backgroundColor: Colors.primary, borderBottomLeftRadius: 5, borderTopLeftRadius: 5, padding: normalize(5) }} >
                    <Text style={{ fontSize: normalize(15), fontWeight: 'bold', color: Colors.white }}>4.3</Text>
                  </View>
                  <View style={{ padding: normalize(5), borderBottomRightRadius: 5, borderTopRightRadius: 5, borderColor: Colors.primary, borderWidth: 1 }} >
                    <Text style={{ fontSize: normalize(15), color: Colors.primary }}>Great</Text>
                  </View>
                </View>

                <View style={{ backgroundColor: Colors.defaultColorView, padding: normalize(10) }} >
                  <Text>
                    Mot doan van ban dai ngoang ngeo dai khai la danh gia cac kieu cd mdsak m fdmsf dm fejfn smdnf s
                  </Text>
                </View>
              </View>


              <View style={{ marginBottom: normalize(10) }} >

                <View style={{ flexDirection: 'row' }} >
                  <View>
                    <Text style={{ fontSize: normalize(15), fontWeight: 'bold' }}>Alex Standall</Text>
                  </View>
                  <View style={{ alignItems: 'flex-end', flex: 1 }} >
                    <Text style={{ fontSize: normalize(15) }}>7/3/2018</Text>
                  </View>
                </View>
                <View style={{ flexDirection: 'row', marginVertical: normalize(10) }} >
                  <View style={{ backgroundColor: Colors.primary, borderBottomLeftRadius: 5, borderTopLeftRadius: 5, padding: normalize(5) }} >
                    <Text style={{ fontSize: normalize(15), fontWeight: 'bold', color: Colors.white }}>4.3</Text>
                  </View>
                  <View style={{ padding: normalize(5), borderBottomRightRadius: 5, borderTopRightRadius: 5, borderColor: Colors.primary, borderWidth: 1 }} >
                    <Text style={{ fontSize: normalize(15), color: Colors.primary }}>Great</Text>
                  </View>
                </View>
                <View style={{ backgroundColor: Colors.defaultColorView, padding: normalize(10) }} >
                  <Text>
                    Mot doan van ban dai ngoang ngeo dai khai la danh gia cac kieu cd mdsak m fdmsf dm fejfn smdnf s
                  </Text>
                </View>
              </View>
              <TouchableOpacity>
                <Text style={{ fontSize: normalize(17), color: Colors.black, textAlign: 'center', marginBottom: normalize(10) }} >
                  Read All Reviews
                </Text>
              </TouchableOpacity>


            </View>
          </View>
        </ScrollView>
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
              label="Book now" />
          </View>
        </View>

      </View>

    )
  }
}



export default connect(null, null)(ActivitiesDetail)




