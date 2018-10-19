import React, { PureComponent } from 'react';
import { View, Text, FlatList } from 'react-native'
import { Image } from '../../Components'
import { normalize, normalizeHeight } from '../../Themes/Metrics';
import { Colors, Metrics } from '../../Themes'


export default class TrendingActivities extends PureComponent {


  _keyExtractor = (item, index) => index.toString()
  _renderItemTrending = ({ item }) => (
    <View style={{
      shadowOpacity: 0.5, shadowOffset: { width: 1, height: 1 }, shadowRadius: 3,
      flexDirection: 'row',
      marginRight: normalize(15), backgroundColor: '#F6F6F6', width: Metrics.screenWidth - normalize(40), borderRadius: 5
    }} >
      <View style={{ flex: 1.8 }} >
        <Image style={{
          borderTopLeftRadius: 5,
          borderBottomLeftRadius: 5
        }} />
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
  render() {
    const { data } = this.props
    return (
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
    )
  }
}





