import React, { PureComponent } from 'react'
import { View, Text } from 'react-native'
import Swipe from 'react-native-swiper'
import { Image, TextInImage } from '../../Components'
import { normalize } from '../../Themes/Metrics'

export default class Swiper extends PureComponent {
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
        <Image uri={{
          uri: 'https://unsplash.it/400/400?image=1'
        }} />
        <TextInImage>
          <Text numberOfLines={2} style={{
            color: '#fff',
            fontSize: normalize(15),
            fontWeight: 'bold',
            marginTop: normalize(20),
            marginBottom: normalize(20),
            marginHorizontal: normalize(10)
          }}>
            Day la cai tieu de rat la dai dai ad dai dai da ida id aida dia idadia idadia
         </Text>
        </TextInImage>
      </View>
    )
  }
  render() {
    const { data } = this.props
    return (
      <View style={{ flex: 1 }}  >
        <Swipe autoplay
          onIndexChanged={index => this.setState({ index })}
          showsPagination={false}>
          {
            data.map((item, index) => this.renderSliderView(item, index))
          }
        </Swipe>

        {this.renderPagination()}
      </View>
    )
  }
}

