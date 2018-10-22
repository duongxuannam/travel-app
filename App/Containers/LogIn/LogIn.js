import React, { PureComponent } from 'react';
import { View, Text, TouchableOpacity } from 'react-native'
import IonicIcon from 'react-native-vector-icons/Ionicons'
import { Button, Image } from '../../Components'
import { normalize, normalizeHeight } from '../../Themes/Metrics';
import { Colors, Images } from '../../Themes'

export default class SignIn extends PureComponent {

  static navigationOptions = ({ navigation }) => {
    return {
      // headerLeft: (<TouchableOpacity onPress={() => navigation.goBack(null)}>
      //   <View style={{ paddingHorizontal: normalize(10) }}>
      //     <IonicIcon name="md-arrow-back" color={Colors.primary} size={normalize(30)} />
      //   </View>
      // </TouchableOpacity>)
      header: null,

    }
  }
  goBack = () => {
    this.props.navigation.goBack(null)
  }
  signIn = () => {
    this.props.navigation.navigate('SignInNavigation')
  }
  signUp = () => {
    this.props.navigation.navigate('SignUpNavigation')
  }
  render() {
    const { navigation } = this.props
    const title = navigation.getParam('title');
    const description = navigation.getParam('description');

    return (
      <View style={{ flex: 1, backgroundColor: Colors.white }} >
        <View flex={1.5} style={{ justifyContent: 'center', alignItems: 'center' }}>
          <View style={{
            position: 'absolute',
            top: normalize(10),
            right: normalize(10)
          }}>
            <TouchableOpacity style={{ padding: 10 }}
            >
              <Text style={{ fontWeight: 'bold', fontSize: normalize(18), color: Colors.grey }}>
                Privacy
                </Text>
            </TouchableOpacity>
          </View>
          <View style={{
            position: 'absolute',
            top: normalize(10),
            left: normalize(0)
          }}>
            <TouchableOpacity style={{ padding: 10 }}
              onPress={this.goBack}  >
              <View style={{ paddingHorizontal: normalize(10) }}>
                <IonicIcon name="md-arrow-back" color={Colors.primary} size={normalize(30)} />
              </View>
            </TouchableOpacity>
          </View>
          <Text style={{ marginBottom: normalizeHeight(45), fontWeight: 'bold', fontSize: normalize(25), color: Colors.black }}>
            {title}
          </Text>
          <Image uri={Images.badgerLogo} height={normalize(65)} width={normalize(40)} />
          <Text style={{ fontSize: normalize(15), color: Colors.primary, marginTop: normalizeHeight(25) }}>
            {description}
          </Text>
        </View>

        <View flex={1}>
          <Button onPress={this.signIn} style={{
            marginHorizontal: normalize(30),
            marginTop: 10, borderColor: Colors.primary,
          }}
          onPress={this.signIn}
            textStyle={{ color: Colors.primary, }}
            label="Sign In"
          />
          <Button onPress={this.signUp} style={{
            marginHorizontal: normalize(30),
            marginTop: 15, borderColor: Colors.primary,
          }}
          onPress={this.signUp}

            textStyle={{ color: Colors.primary }}
            label="Join"
          />
        </View>



      </View>
    )
  }
}





