import React, { PureComponent } from 'react';
import { View, Text, TouchableOpacity } from 'react-native'
import { normalize, normalizeHeight } from '../../Themes/Metrics';
import { Colors, } from '../../Themes'

export default class Description extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      seeMore: false,
    }
  }
  seeMore = () => {
    this.setState({
      seeMore: !this.state.seeMore
    })
  }
  render() {
    const { seeMore } = this.state
    const text = seeMore ? "Show less" : "See more"
    return (
      <React.Fragment>
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
            <Text style={{ textAlign: 'center', fontSize: normalize(17), color: Colors.primary }}>{text}</Text>
          </TouchableOpacity>
        </View>
      </React.Fragment>

    )
  }
}




