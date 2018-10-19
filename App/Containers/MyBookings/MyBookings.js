import React, { PureComponent } from 'react';
import { Text, View, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import FastImage from 'react-native-fast-image'
import { Image } from '../../Components'
import { Images, Colors } from '../../Themes'
import { normalize, normalizeHeight } from '../../Themes/Metrics'

data = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]


export default class MyBookings extends PureComponent {
  static navigationOptions = ({ navigation }) => {
    return {
      headerRight: (
        <TouchableOpacity onPress={() => navigation.navigate('HistoryNavigation')}>
          <Text style={{ paddingHorizontal: 10 }} >
            History
          </Text>
        </TouchableOpacity>

      )
    }
  }
  _renderItem = ({ item }) => (
    <TouchableOpacity onPress={this.goDetail}>
      <View style={{
        flexDirection: 'row',
        height: normalizeHeight(80),
        borderRadius: 5, marginTop: normalize(20),
        borderBottomWidth: 1, borderBottomColor: Colors.grey
      }} >
        <View style={{
          flex: 2, justifyContent:'center', alignItems:'center',
        }} >
        <Image uri={Images.badgerLogo} height={normalize(60)} width={normalize(40)}/>
        </View>
        <View style={{
          flex: 4,
        }} >
          <Text numberOfLines={2} style={{
            fontSize: normalize(15),
            color: Colors.black, fontWeight: 'bold',
          }} >
            Museum   Museum  Museum  Museum  Museum  Museum  Museum  Museum  Museum  Museum  Museum  Museum  Museum  Museum
          </Text>
          <Text numberOfLines={1} style={{ fontSize: normalize(15), color: Colors.black, position: 'absolute', bottom: normalize(10) }} >
            Museum o
          </Text>
        </View>
        <View style={{ flex: 1.5, alignItems: 'center', marginTop: normalize(4) }}>
          <View style={{
            height: normalize(20), width: normalize(20),
          }} >
            <Image uri={Images.message} />
          </View>
          <Text style={{ fontSize: normalize(13), position: 'absolute', bottom: normalize(10) }} >
            In 2 days
</Text>

        </View>
      </View>
    </TouchableOpacity>

  )
  _keyExtractor = (item, index) => index.toString()

  render() {
    return (
      <ScrollView flex={1} style={{ backgroundColor: Colors.white }}  >
        <Text style={{
          marginVertical: normalize(10),
          textAlign: 'center', fontSize: normalize(22), fontWeight: 'bold', color: Colors.black
        }}>My Bookings</Text>
        <View style={{ marginHorizontal: normalize(10) }} >

          <FlatList
            data={data}
            keyExtractor={this._keyExtractor}
            renderItem={this._renderItem}
          />
        </View>

      </ScrollView>

    );
  }
}

