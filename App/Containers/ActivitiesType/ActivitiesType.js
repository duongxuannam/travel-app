import React, { PureComponent } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import IonicIcon from 'react-native-vector-icons/Ionicons'
import { connect } from 'react-redux'
import FastImage from 'react-native-fast-image'
import { normalize, normalizeHeight } from '../../Themes/Metrics';
import { Colors, Metrics } from '../../Themes'

data = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]

class ActivitiesType extends PureComponent {

  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: (<TouchableOpacity onPress={() => navigation.goBack(null)}>
        <View style={{ paddingHorizontal: normalize(10) }}>
          <IonicIcon name="md-arrow-back" color={Colors.primary} size={normalize(30)} />
        </View>
      </TouchableOpacity>),
      title: 'Tours',
    }
  }

  goDetail = () => {
    this.props.navigation.navigate('ActivitiesDetailNavigation')
  }
  _keyExtractor = (item, index) => index;
  _renderItemTrending = ({ item }) => (
    <TouchableOpacity onPress={this.goDetail}>
    <View style={{
      shadowOpacity: 0.5, shadowOffset: { width: 1, height: 1 }, shadowRadius: 3,
      flexDirection: 'row',
      height: normalizeHeight(100),
      backgroundColor: '#F6F6F6',borderRadius: 5, marginTop:normalize(20)
    }} >
      <View style={{ flex: 1.5 }} >
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
    </TouchableOpacity>

  );

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: Colors.white, }} >
        <View flex={1} style={{ marginHorizontal: normalize(10) }}>
          <FlatList
            data={data}
            keyExtractor={this._keyExtractor}
            renderItem={this._renderItemTrending}
          />
        </View>
      </View>

    )
  }
}



export default connect(null, null)(ActivitiesType)




