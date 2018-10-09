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
    this.state={
      readPassword: false
    }
  }
  clickIcon = () => {
    this.setState({
      readPassword: !this.state.readPassword
    })
  }
  forgotPassword = ()=>{
    this.props.navigation.navigate('ForgotPasswordNavigation')
  }
  render() {
    const { readPassword } = this.state
    const icon = !readPassword ? 'md-eye' : 'md-eye-off'
    return (
      <View flex={1} style={{ backgroundColor: Colors.white }}>
        <View flex={1} style={{ justifyContent: 'center' }} >
          <Text style={{ fontSize: normalize(30), textAlign: 'center' }} >
            Sign In
        </Text>
        </View>
        <View flex={1}>
          <View style={{
            marginHorizontal: normalize(25),
            borderBottomWidth: 1,
            borderColor: '#D5D3D3',
            flexDirection:'row'
          }} >
            <TextInput placeholder="Username"
              placeholderTextColor={Colors.brown}

              style={{
                paddingVertical: normalize(13),

              }} />
          </View>

          <View style={{
            marginHorizontal: normalize(25),
            borderBottomWidth: 1, marginTop: normalize(20),
            borderColor: '#D5D3D3',
            flexDirection:'row'
          }} >
            <TextInput placeholder="Password"
              secureTextEntry = {!readPassword}
              placeholderTextColor={Colors.brown}
              style={{
                paddingVertical: normalize(13),flex:1

              }} />
              <TouchableOpacity onPress={this.clickIcon}
               style={{ alignSelf:'flex-end', paddingVertical: normalize(13), paddingHorizontal:normalize(10) }} >
              {/* <IonicIcon name="md-eye" color={Colors.brown} size={normalize(22)} /> */}
              <IonicIcon name={icon}  color={Colors.brown} size={normalize(22)} />

              </TouchableOpacity>
          </View>

          <TouchableOpacity 
           onPress={ this.forgotPassword } 
          style={{ alignItems: 'flex-end', marginTop: normalize(10), marginRight: normalize(25)}}>
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





