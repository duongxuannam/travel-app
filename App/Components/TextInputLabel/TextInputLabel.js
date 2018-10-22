import React, { PureComponent } from 'react'
import { View, TextInput, TouchableOpacity, Text } from 'react-native'
import IonicIcon from 'react-native-vector-icons/Ionicons'
import { Colors } from '../../Themes'
import { normalize } from '../../Themes/Metrics'

export default class TextInputLabel extends PureComponent {
  static defaultProps = {
  flexLabel:1,
  flexInput:3,
  }

  render() {
    const { 
      keyboardType, label, password,flexLabel, flexInput,value,
       showIcon, checkIcon, onChange,style,placeholder } = this.props
    if (password) {
      return (
        <View style={[{
          borderBottomWidth: 1,
          borderColor: '#D5D3D3',
          flexDirection: 'row',alignItems:'center'
        },style]} >
          <Text style={{
            color: Colors.brown, paddingVertical: normalize(13),
             flex: flexLabel
          }} >
            {label}
          </Text>
          <View style={{ flex: flexInput, flexDirection: 'row' }} >
            <TextInput
            value={value}
            placeholder={placeholder}
            keyboardType={keyboardType}
              secureTextEntry
              style={{
                marginLeft: normalize(10),
                flex: 1,
                paddingVertical: normalize(13),
              }}
              onChangeText={onChange}
            />
            {showIcon && <View style={{ alignSelf: 'flex-end', paddingLeft: normalize(10) }} >
              {checkIcon && <IonicIcon name="ios-checkmark" color={Colors.success} size={normalize(30)} />
              }
            </View>}
          </View>

        </View>
      )
    }
    return (
      <View style={[{
        borderBottomWidth: 1,
        borderColor: '#D5D3D3',
        flexDirection: 'row',alignItems:'center'
      },style]} >
        <Text style={{
          color: Colors.brown, paddingVertical: normalize(13),
          flex: flexLabel
        }} >
          {label}
        </Text>
        <TextInput
        placeholder={placeholder}
          keyboardType={keyboardType}
          onChangeText={onChange}
          style={{
            marginLeft: normalize(10),
            flex: flexInput,
            paddingVertical: normalize(13),
          }} />
      </View>

    )
  }
}

