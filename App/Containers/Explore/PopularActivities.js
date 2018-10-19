import React, { PureComponent } from 'react';
import { View, Text, FlatList } from 'react-native'
import { Image, TextInImage } from '../../Components'
import { normalize, normalizeHeight } from '../../Themes/Metrics';
import { Colors, Metrics } from '../../Themes'

export default class TrendingActivities extends PureComponent {
  _keyExtractor = (item, index) => index.toString()
  _renderItemPopular = () => (
    <View style={{
      shadowOpacity: 0.5,
      shadowOffset: { width: 1, height: 1 },
      shadowRadius: 3,
      marginRight: normalize(15), backgroundColor: '#F6F6F6', borderRadius: 5,
      width: (Metrics.screenWidth - normalize(55)) / 2
    }} >

      <Image style={{ borderRadius: 5 }} uri={{ uri: 'https://unsplash.it/400/400?image=1' }} />
      <TextInImage >
        <Text
          numberOfLines={2}
          style={{
            marginHorizontal: normalize(8), color: Colors.white, fontSize: normalize(13), fontWeight: 'bold'
          }}>
          hmmm day la mot dong cu ki dai khong tau sao ban k hong xuong dong j</Text>
        <Text style={{
          marginHorizontal: normalize(8),
          marginVertical: normalize(5),
          color: Colors.white,
          fontSize: normalize(11)
        }} >
          by Manhattan Walking
        </Text>
      </TextInImage>
    </View>
  )
  render() {
    const { data } = this.props
    return (
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
    )
  }
}





