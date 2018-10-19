import React, { PureComponent } from 'react'
import FastImage from 'react-native-fast-image'

export default class Image extends PureComponent {

  static defaultProps = {
    height: '100%',
    width:'100%',
   uri:{
    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmmOjMSr9ExVEeNXceiunCmjm2UrPty-LRckxBfrkRG55pLrjR',
   } 
  }

  render() {
    const { height, width, uri,style } = this.props
    return (
      <FastImage
          style={[{
            height,
            width,
          },style]}
          source={uri}
          resizeMode={FastImage.resizeMode.stretch}
        />

    )
  }
}

