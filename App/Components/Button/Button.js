import React, { PureComponent } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { normalize } from '../../Themes/Metrics'

export default class Avatar extends PureComponent {

  render() {
    const { onPress,style, textStyle, label } = this.props
    return (
      <TouchableOpacity
        onPress={ onPress }>
        <View style={[style,{
           alignItems:'center',
           borderWidth: 1,
           borderRadius: 40,
        paddingVertical: normalize(10)}]}>
          <Text style={[textStyle,{fontSize: normalize(15),fontWeight: 'bold' }]}>{label}</Text>
        </View>
      </TouchableOpacity>
    )
  }
}

