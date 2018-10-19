import React, { PureComponent } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import IonicIcon from 'react-native-vector-icons/Ionicons'
import { Image, Button } from '../../Components'
import { Images, Colors } from '../../Themes'
import { normalize, normalizeHeight } from '../../Themes/Metrics';

export default class HelpCenter extends PureComponent {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: <View>
        <Text style={{ fontSize: normalize(20), fontWeight: 'bold', color: Colors.black }}>
          Help Center
      </Text></View>,

      headerLeft: (<TouchableOpacity onPress={() => navigation.goBack(null)}>
        <View style={{ paddingHorizontal: normalize(10) }}>
          <IonicIcon name="md-arrow-back" color={Colors.primary} size={normalize(30)} />
        </View>
      </TouchableOpacity>),
    }
  }
  moveScreen = (screen) => ()=> {
    this.props.navigation.navigate(screen)
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: Colors.white }} >
        <View flex={1} style={{ justifyContent: 'center', alignItems: 'center' }}>
          {/* <Text style={{ marginBottom: normalizeHeight(35), fontWeight: 'bold', fontSize: normalize(25), color: Colors.black }}>
            Help Center
      </Text> */}
          <Image uri={Images.badgerLogo} height={normalize(65)} width={normalize(40)} />
          <Text style={{ fontSize: normalize(15), color: Colors.black, marginTop: normalizeHeight(25) }}>
            How can we help you?
      </Text>
        </View>

        <View flex={1}>
          <Button onPress={this.signIn} style={{
            marginHorizontal: normalize(10),
            marginTop: 10, borderColor: Colors.red,
          }}
            textStyle={{ color: Colors.red, }}
            label="FAQ"
          />
          <Button onPress={this.signUp} style={{
            marginHorizontal: normalize(10),
            marginTop: 15, borderColor: Colors.red,
          }}
            textStyle={{ color: Colors.red }}
            label="Contact us"
            onPress={this.moveScreen('ContactNavigation')}
          />
          <Button onPress={this.signUp} style={{
            marginHorizontal: normalize(10),
            marginTop: 15, borderColor: Colors.red,
          }}
            textStyle={{ color: Colors.red }}
            label="Terms and Privacy Policy"
          />
        </View>



      </View>



    );
  }
}

