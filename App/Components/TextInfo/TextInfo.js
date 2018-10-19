import React, { PureComponent } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Image from '../Image'
import { Images } from '../../Themes'
import { normalize } from '../../Themes/Metrics'

export default class TextInfo extends PureComponent {
  static defaultProps = {
  }
  render() {
    const { label,
       icon, 
       style, 
       showRightArrow, 
       onPress, 
       height, 
       width,
       fontSize
       } = this.props
    return (
      <TouchableOpacity onPress={onPress} >
        <View style={[{   flexDirection: 'row',justifyContent: 'center', alignItems:'center'}, style]}>
          <View style={{  }} >
            <View style={{ justifyContent:'center',width: normalize(30), height: normalize(30)}} >
              <Image style={{ borderRadius: 5 }} uri={icon} height={height} width={width}/>
            </View>
          </View>
          <View style={{ flex: 1, alignItems: 'center', flexDirection: 'row',justifyContent:'center', }} >
          <View style={{ marginLeft: normalize(20), flex: 1,}} >
          <Text style={{ fontSize, padding:5 }} >{label}</Text>

          </View>
            {showRightArrow &&  <View style={{ paddingLeft: normalize(20), paddingVertical: normalize(10), alignItems: 'flex-end' }}>
              <View style={{ width: normalize(10), height: normalize(10) }} >
                <Image style={{ borderRadius: 5 }} uri={Images.caratIcon} />
              </View>
            </View>
            }
          </View>
        </View>
      </TouchableOpacity>
    )
  }
}

