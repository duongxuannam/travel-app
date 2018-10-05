import React, { PureComponent } from 'react'
import { View, Text, TextInput } from 'react-native'
import FastImage from 'react-native-fast-image'
import Ionicon from 'react-native-vector-icons/Ionicons'
import { Colors } from '../../Themes'
import { normalize } from '../../Themes/Metrics'

export default class Avatar extends PureComponent {

  render() {
    const { size } = this.props
    return (
          <FastImage
            style={{ height: size, width: size, borderRadius: size/2 }}
            source={{
              uri: 'https://unsplash.it/400/400?image=1',
              headers: { Authorization: 'someAuthToken' },
              priority: FastImage.priority.normal,
            }}
            resizeMode={FastImage.resizeMode.contain}
          />
    )
  }
}

