import React, { PureComponent } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import IonicIcon from 'react-native-vector-icons/Ionicons'
import { Button, TextInputLabel } from '../../Components'
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
  constructor(props) {
    super(props)
    this.state = {
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

          <TextInputLabel label="E-mail" style={{marginHorizontal: normalize(25)}}
          />
          <TextInputLabel label="Password" style={{marginHorizontal: normalize(25)}}
            password
            onChange={(password) => this.setState({ password })}
          />
          <TextInputLabel
          style={{marginHorizontal: normalize(25)}}
            label="Confirm"
            password
            showIcon
            checkIcon={checkIcon}
            onChange={(confirm) => this.setState({ confirm })}
          />
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





