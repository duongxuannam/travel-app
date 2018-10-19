import React, { PureComponent } from 'react'
import { View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

export default class TextInImage extends PureComponent {
  static defaultProps = {
 
  }
  render() {
     const { children, style,styleGradient } = this.props
    return (
      <View style={[{
        position: 'absolute', bottom: 0, right: 0, left: 0,
      },style]} >
        <LinearGradient
          colors={['rgba(0, 0, 0,0)', 'rgba(0, 0, 0,0.68)']} style={styleGradient} >
      {children}
        </LinearGradient>
      </View>

    )
  }
}

