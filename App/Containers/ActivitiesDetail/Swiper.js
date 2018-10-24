import React, { PureComponent } from 'react';
import { View, Text, TouchableOpacity } from 'react-native'
import IonicIcon from 'react-native-vector-icons/Ionicons'
import Swipe from 'react-native-swiper'
import { Image, TextInImage } from '../../Components'
import { normalize, normalizeHeight } from '../../Themes/Metrics';
import { Colors, Metrics, } from '../../Themes'

export default class Swiper extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      index: 0,
    }
  }
  renderPagination = () => {
    const { index } = this.state
    const { data } = this.props
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
        <Image uri={{ uri: 'https://unsplash.it/400/400?image=1' }} />

        <TextInImage style={{ width: (Metrics.screenWidth) }} >
          <View style={{ width: (Metrics.screenWidth * 3) / 4 }} >
            <Text numberOfLines={2} style={{
              color: '#fff',
              fontSize: normalize(18),
              fontWeight: 'bold',
              marginBottom: 10,
              paddingLeft: normalize(10)
            }}>Hightline Food Tour tour tour tour tour tour tour tour tou tr tou toe ojsdf jsdjfdks</Text>
            <Text numberOfLines={2} style={{
              color: '#fff',
              fontSize: normalize(12),
              fontWeight: 'bold',
              marginBottom: 10,
              paddingLeft: normalize(10)
            }}>Food and Culture Walking Tour</Text>
          </View>
        </TextInImage>
      </View>
    )
  }
  goBack = () => {
    this.props.navigation.goBack(null)
  }
  render() {
    const {goBack} = this.props
    return (
      <View style={{ height: normalizeHeight(200) }} >
        {/* <View style={{
          position: 'absolute',
          zIndex: 10,
          top: normalizeHeight(25),
          paddingHorizontal: 10
        }} >
          <TouchableOpacity onPress={goBack}>
            <IonicIcon name="md-arrow-back" color={Colors.white} size={normalize(30)} />

          </TouchableOpacity>
        </View> */}
        <Swipe autoplay
          onIndexChanged={index => this.setState({ index })}
          showsPagination={false}>
          {
            data.map((item, index) => this.renderSliderView(item, index))
          }
        </Swipe>
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

    )
  }
}




