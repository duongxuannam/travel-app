import React, { PureComponent } from 'react';
import { Text, View, TouchableOpacity, } from 'react-native';
import IonicIcon from 'react-native-vector-icons/Ionicons'
import { TextInputLabel, Button } from '../../Components'
import { Colors } from '../../Themes'
import { normalize, normalizeHeight } from '../../Themes/Metrics';

export default class Payment extends PureComponent {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: <View>
        <Text style={{ fontSize: normalize(20), fontWeight: 'bold', color: Colors.black }}>
          Payment
      </Text></View>,

      headerLeft: (<TouchableOpacity onPress={() => navigation.goBack(null)}>
        <View style={{ paddingHorizontal: normalize(10) }}>
          <IonicIcon name="md-arrow-back" color={Colors.primary} size={normalize(30)} />
        </View>
      </TouchableOpacity>),
    }
  }

  render() {
    return (
      <View style={{ backgroundColor: Colors.white, flex: 1, }}>
        <View style={{ marginHorizontal: normalize(10), marginTop: normalizeHeight(70) }} >
          <TextInputLabel label='Credit card' />
          <View style={{ flexDirection: 'row' }} >
            <TextInputLabel flexLabel={1.2} flexInput={1} label='Expiration date' style={{ flex: 2, marginRight: normalize(10) }} />
            <TextInputLabel flexLabel={1} flexInput={1} label='CCV' style={{ flex: 1 }} />
          </View>
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

