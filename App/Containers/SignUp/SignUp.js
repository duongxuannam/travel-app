import React, { PureComponent } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import IonicIcon from 'react-native-vector-icons/Ionicons'
import { Button } from '../../Components'
import { normalize } from '../../Themes/Metrics';
import { Colors } from '../../Themes'

export default class SignUp extends PureComponent {

  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: (<TouchableOpacity onPress={() => navigation.goBack(null)}>
        <View style={{ paddingHorizontal: normalize(10) }}>
          <IonicIcon name="md-arrow-back" color={Colors.primary} size={normalize(30)} />
        </View>
      </TouchableOpacity>)
    }
  }
  constructor(props){
    super(props)
    this.state= {
      password: '',
      confirm: ''
    }
  }
  SignUpStep2 = () => {
    this.props.navigation.navigate('SignUpStep2Navigation')
  }
  render() {
    const { confirm, password } = this.state
    const checkIcon = confirm === password && confirm !== '' ? true : false
    return (
      <View flex={1} style={{ backgroundColor: Colors.white }}>
        <View flex={1} style={{ justifyContent: 'center' }} >
          <Text style={{ fontSize: normalize(30), textAlign: 'center' }} >
            Sign Up
        </Text>
        </View>

        <View flex={1}>
          <View style={{
            marginHorizontal: normalize(25),
            borderBottomWidth: 1,
            borderColor: '#D5D3D3',
            flexDirection: 'row'
          }} >
            <Text style={{
              color: Colors.brown, paddingVertical: normalize(13),
              flex: 1
            }} >
              E-mail
          </Text>
            <TextInput
              keyboardType='email-address'
              style={{
                marginLeft: normalize(10),
                flex: 3,
                paddingVertical: normalize(13),
              }} />
          </View>

          <View style={{
            marginHorizontal: normalize(25),
            borderBottomWidth: 1,
            borderColor: '#D5D3D3',
            flexDirection: 'row'
          }} >
            <Text style={{
              color: Colors.brown, paddingVertical: normalize(13), flex: 1
            }} >
              Password
          </Text>
            <TextInput
              secureTextEntry
              style={{
                marginLeft: normalize(10),
                flex: 3,
                paddingVertical: normalize(13),
              }} 
              onChangeText = {(password)=>this.setState({password})}             
              />
          </View>

          <View style={{
            marginHorizontal: normalize(25),
            borderBottomWidth: 1,
            borderColor: '#D5D3D3',
            flexDirection: 'row'
          }} >
            <Text style={{
              color: Colors.brown, paddingVertical: normalize(13), flex: 1
            }} >
              Confirm
          </Text>
            <TextInput
              secureTextEntry
              style={{
                marginLeft: normalize(10),
                flex: 3,
                paddingVertical: normalize(13),
              }}
              onChangeText = {(confirm)=>this.setState({confirm})}             
              />
              <View style={{ alignSelf:'flex-end', paddingLeft:normalize(10) }} >
{checkIcon && <IonicIcon name="ios-checkmark" color={Colors.success} size={normalize(30)} />
}
              </View>

          </View>


        </View>




        <View flex={1} >
          <Button 
          onPress={this.SignUpStep2}
          style={{
            backgroundColor: Colors.primary,
            borderColor: Colors.primary,
            marginHorizontal: normalize(30),
          }}
            textStyle={{ color: Colors.white }}
            label="Next" />
        </View>
      </View >
    )
  }
}





