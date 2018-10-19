import React, { PureComponent } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import IonicIcon from 'react-native-vector-icons/Ionicons'
import { Button, TextInputCustom } from '../../Components'
import { normalize } from '../../Themes/Metrics';
import { Colors } from '../../Themes'

export default class SignIn extends PureComponent {

  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: (<TouchableOpacity onPress={() => navigation.goBack(null)}>
        <View style={{ paddingHorizontal: normalize(10) }}>
          <IonicIcon name="md-arrow-back" color={Colors.primary} size={normalize(30)} />
        </View>
      </TouchableOpacity>)
    }
  }
  forgotPassword = () => {
    this.props.navigation.navigate('ForgotPasswordNavigation')
  }
  render() {
    return (
      <View flex={1} style={{ backgroundColor: Colors.white }}>
        <View flex={1} style={{ justifyContent: 'center' }} >
          <Text style={{ fontSize: normalize(30), textAlign: 'center' }} >
            Sign In
        </Text>
        </View>
        <View flex={1}>
          <TextInputCustom style={{
            marginHorizontal: normalize(25),
            borderBottomWidth: 1,
            borderColor: '#D5D3D3',
          }} placeHolder="Username" />
          <TextInputCustom style={{
            marginHorizontal: normalize(25),
            borderBottomWidth: 1,
            borderColor: '#D5D3D3',
          }}
            placeHolder="Password"
            showIcon
            password />

          <TouchableOpacity
            onPress={this.forgotPassword}
            style={{ alignItems: 'flex-end', marginTop: normalize(10), marginRight: normalize(25) }}>
            <Text style={{ color: Colors.red }} >Forgot password</Text>
          </TouchableOpacity>
        </View>
        <View flex={1} >
          <Button style={{
            backgroundColor: Colors.primary,
            borderColor: Colors.primary,
            marginHorizontal: normalize(30),
          }}
            textStyle={{ color: Colors.white }}
            label="Sign In" />
        </View>
      </View >
    )
  }
}





