import React, { PureComponent } from 'react'
import { View, Text, } from 'react-native'
import { normalize } from '../../Themes/Metrics'

export default class Badger extends PureComponent {

  render() {
    const { label, style, backgroundColor, color } = this.props
    return (
      <View style={[{ 
        justifyContent: 'center', 
        borderRadius: 3, 
        backgroundColor, padding: 5 },style]}>
        <Text style={{ fontSize: normalize(13), fontWeight: 'bold', color }} >
          {label}
    </Text>
      </View>
    )
  }
}

