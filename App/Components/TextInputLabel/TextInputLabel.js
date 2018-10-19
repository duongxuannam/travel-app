import React, { PureComponent } from 'react'
import { View, TextInput, TouchableOpacity, Text } from 'react-native'
import IonicIcon from 'react-native-vector-icons/Ionicons'
import { Colors } from '../../Themes'
import { normalize } from '../../Themes/Metrics'

export default class TextInputLabel extends PureComponent {
  render() {
    const { 
      keyboardType, label, password,
       showIcon, checkIcon, onChange,style,placeholder } = this.props
    if (password) {
      return (
        <View style={[{
          borderBottomWidth: 1,
          borderColor: '#D5D3D3',
          flexDirection: 'row'
        },style]} >
          <Text style={{
            color: Colors.brown, paddingVertical: normalize(13), flex: 1
          }} >
            {label}
          </Text>
          <View style={{ flex: 3, flexDirection: 'row' }} >
            <TextInput
                    placeholder={placeholder}
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
        flexDirection: 'row'
      },style]} >
        <Text style={{
          color: Colors.brown, paddingVertical: normalize(13),
          flex: 1
        }} >
          {label}
        </Text>
        <TextInput
        placeholder={placeholder}
          keyboardType={keyboardType}
          style={{
            marginLeft: normalize(10),
            flex: 3,
            paddingVertical: normalize(13),
          }} />
      </View>

    )
  }
}

