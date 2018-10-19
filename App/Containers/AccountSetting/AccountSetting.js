import React, { PureComponent } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import IonicIcon from 'react-native-vector-icons/Ionicons'
import {  TextInputLabel, Button } from '../../Components'
import { Colors } from '../../Themes'
import { normalize, normalizeHeight } from '../../Themes/Metrics';

export default class AccountSetting extends PureComponent {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: <View>
        <Text style={{ fontSize: normalize(20), fontWeight: 'bold', color: Colors.black }}> 
     Account Settings
      </Text></View>,

headerLeft: (<TouchableOpacity onPress={() => navigation.goBack(null)}>
<View style={{ paddingHorizontal: normalize(10) }}>
          <IonicIcon name="md-arrow-back" color={Colors.primary} size={normalize(30)} />
        </View>
      </TouchableOpacity>),
    }
  }
  constructor(props) {
    super(props)
    this.state = {
      newPassword: '',
      confirm: ''
    }
  }
 
  render() {  
    const { confirm, newPassword } = this.state
  const checkIcon = confirm === newPassword && confirm !== '' ? true : false
  return (
      <View style={{ backgroundColor: Colors.white, flex: 1, }}>
      <View style={{ marginHorizontal: normalize(10), marginTop: normalizeHeight(70) }} >
        <TextInputLabel 
        password
        flexLabel={2} flexInput={3} label='Old password' />
       <TextInputLabel 
               onChange={(newPassword) => this.setState({ newPassword })}

       password
       flexLabel={2} flexInput={3} label='New password' />
       <TextInputLabel flexLabel={2} flexInput={3} label='Confirm'
        password
        showIcon
        checkIcon={checkIcon}
        onChange={(confirm) => this.setState({ confirm })}
       />

      </View>

      <View style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}>
        <Button label='Save' style={{
          marginHorizontal: normalize(10), marginBottom: normalizeHeight(10),
          backgroundColor: Colors.primary, borderColor: Colors.primary
        }}
          textStyle={{ color: Colors.white }}
        />
      </View>
    </View>



    );
  }
}

