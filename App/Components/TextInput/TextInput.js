import React, { PureComponent } from 'react'
import { View, TextInput, TouchableOpacity } from 'react-native'
import IonicIcon from 'react-native-vector-icons/Ionicons'
import { Colors } from '../../Themes'
import { normalize } from '../../Themes/Metrics'

export default class TextInputCustom extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      readPassword: false
    }
  }
  clickIcon = () => {
    this.setState({
      readPassword: !this.state.readPassword
    })
  }

  render() {
    const { readPassword } = this.state
    const icon = !readPassword ? 'md-eye' : 'md-eye-off'
    const { style, placeHolder, password, showIcon } = this.props
    if (password) {
      return (
        <View style={[{
          flexDirection: 'row'
        }, style]} >
          <TextInput placeholder={placeHolder}
            secureTextEntry={!readPassword}
            placeholderTextColor={Colors.brown}
            style={{
              paddingVertical: normalize(13), flex: 1
            }} />
          {showIcon && <TouchableOpacity onPress={this.clickIcon}
            style={{ alignSelf: 'flex-end', paddingVertical: normalize(13), paddingHorizontal: normalize(10) }} >
            <IonicIcon name={icon} color={Colors.brown} size={normalize(22)} />
          </TouchableOpacity>}
        </View>

      )
    }
    return (
      <View style={[{
        flexDirection: 'row'
      }, style]} >
        <TextInput placeholder={placeHolder}
          placeholderTextColor={Colors.brown}

          style={{
            paddingVertical: normalize(13),

          }} />
      </View>

    )
  }
}
