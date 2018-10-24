import React, { PureComponent } from 'react';
import { Text, View, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import { Badger, Image } from '../../Components'
import { Colors, Images } from '../../Themes'
import { normalize, normalizeHeight } from '../../Themes/Metrics'

data = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]


export default class MyBookings extends PureComponent {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: <View>
      <Text style={{ fontSize: normalize(20), fontWeight: 'bold', color: Colors.black }}>
      History   
       </Text>
      </View>,
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
          flex: 2, justifyContent: 'center', alignItems: 'center'
        }} >
          <Image uri={Images.badgerLogo} height={normalize(60)} width={normalize(40)} />

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
        <View style={{
          flex: 1.7, alignItems: 'center',
          marginTop: normalize(4)
        }}>
          <Badger label='Expired' backgroundColor={Colors.grey} color={Colors.white} />

        </View>
      </View>
    </TouchableOpacity>
  );
  _keyExtractor = (item, index) => index.toString()

  render() {
    return (
      <ScrollView flex={1} style={{ backgroundColor: Colors.white }}  >
   
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

