import React, { PureComponent } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native'
import IonicIcon from 'react-native-vector-icons/Ionicons'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Button, TextInputLabel } from '../../Components'
import { normalize, normalizeHeight } from '../../Themes/Metrics';
import { Colors } from '../../Themes'

export default class ForgotPassword extends PureComponent {

  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: (<TouchableOpacity onPress={() => navigation.goBack(null)}>
        <View style={{ paddingHorizontal: normalize(10) }}>
          <IonicIcon name="md-arrow-back" color={Colors.primary} size={normalize(30)} />
        </View>
      </TouchableOpacity>)
    }
  }
  sendPassword = () => {
    Alert.alert(
      'Temporary password',
      'A temporary password was successsfully sent to your email.',

      [
        { text: 'OK', onPress: () => this.props.navigation.navigate('SignInNavigation') },
      ],
      { cancelable: false }
    )
  }

  render() {
    return (

      <View flex={1} style={{ backgroundColor: Colors.white }}>
          <KeyboardAwareScrollView>

        <View flex={1} style={{ justifyContent: 'center', marginTop:normalizeHeight(50) }} >
            <Text style={{ fontWeight: '500', margin: normalize(20), fontSize: normalize(20), textAlign: 'center' }} >
              Forgot password
        </Text>
            <Text style={{ color: Colors.brown, marginHorizontal: normalize(40), fontSize: normalize(15), textAlign: 'center' }} >
              Enter your email eddress to receive a temporary password
        </Text>
        </View>
          <View flex={1} style={{marginTop:normalizeHeight(50) }}>
            <TextInputLabel label="Email" style={{
              marginHorizontal: normalize(25),
            }} />
          </View>

          <View flex={1}  style={{marginTop:normalizeHeight(50) }}>
            <Button
              onPress={this.sendPassword}
              style={{
                backgroundColor: Colors.primary,
                borderColor: Colors.primary,
                marginHorizontal: normalize(30),
              }}
              textStyle={{ color: Colors.white }}
              label="Send Password" />

        </View>
        </KeyboardAwareScrollView>

      </View >

    )
  }
}





