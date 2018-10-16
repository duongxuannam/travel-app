import React, { PureComponent } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import IonicIcon from 'react-native-vector-icons/Ionicons'
import { Button } from '../../Components'
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
  render() {
    return (
      <View style={{ flex: 1, backgroundColor:Colors.white}} >
      <View flex={1} >

      </View>
      <View flex={1}>
      <Button onPress={this.signIn} style={{
        marginHorizontal: normalize(30),
         marginTop: 10, borderColor: Colors.primary,
      }}
        textStyle={{ fontSize: normalize(20), color: Colors.primary}}
        label="Sign In"
      />
      <Button onPress={this.signUp} style={{
        marginHorizontal: normalize(30),
         marginTop: 15, borderColor: Colors.primary,
      }}
        textStyle={{ color: Colors.primary }}
        label="Join"
      />
      </View>
   


    </View>
    )
  }
}





