import React, { PureComponent } from 'react';
import { Text, View, TouchableOpacity, TextInput } from 'react-native';
import IonicIcon from 'react-native-vector-icons/Ionicons'
import { Image, TextInputLabel, Badger } from '../../Components'
import { Images, Colors } from '../../Themes'
import { normalize, normalizeHeight } from '../../Themes/Metrics';

export default class UserInfomation extends PureComponent {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: <View><Text style={{ fontSize: normalize(20), fontWeight: 'bold', color: Colors.black }}> User Infomation </Text></View>,

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
      pictureChoose: 0
    }
  }
  setPictureChoose = (value) => () => {
    this.setState({
      pictureChoose: value
    })
  }
  render() {
    const { pictureChoose } = this.state
    return (
      <View style={{ backgroundColor: Colors.white, flex: 1, }}>
        <View style={{ flex: 1, marginHorizontal: normalize(10) }}>

          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: normalize(12), color: Colors.yellow, marginTop: normalize(10) }}>
              USING TRAVEL BADGER'S AVATAR
      </Text>
            <View style={{
              flex: 1,
              flexDirection: 'row', justifyContent: 'center', alignItems: 'center'
            }} >
              <TouchableOpacity onPress={this.setPictureChoose(0)} >
                <View style={pictureChoose === 0 ? { borderColor: Colors.primary, borderWidth: 1 } : {}}>
                  <Image uri={Images.badgerLogo}
                    style={{ marginVertical: normalize(20), marginHorizontal: normalize(30) }}
                    height={normalize(50)} width={normalize(25)} />

                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={this.setPictureChoose(1)} >

                <View style={pictureChoose === 1 ? { borderColor: Colors.primary, borderWidth: 1 } : {}}>
                  <Image
                    style={{ marginVertical: normalize(20), marginHorizontal: normalize(30) }}
                    uri={Images.badgerLogo} height={normalize(50)} width={normalize(30)} />

                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.setPictureChoose(2)} >

                <View style={pictureChoose === 2 ? { borderColor: Colors.primary, borderWidth: 1 } : {}}>
                  <Image
                    style={{ marginVertical: normalize(20), marginHorizontal: normalize(30) }}

                    uri={Images.badgerLogo} height={normalize(50)} width={normalize(30)} />
                </View>
              </TouchableOpacity>
            </View>
          </View>

          <View style={{ flex: 2 }}>
            <TextInputLabel label="Name" placeholder='Full name' style={{ marginHorizontal: normalize(10) }}
            />

            <TextInputLabel label="E-mail" placeholder='Email' style={{ marginHorizontal: normalize(10) }}
            />
            <TextInputLabel label="Phone number" placeholder='Phone number' style={{ marginHorizontal: normalize(10) }}
            />

            <View style={{
              borderBottomWidth: 1,
              borderColor: '#D5D3D3',
              flexDirection: 'row', marginHorizontal: normalize(10)
            }} >
              <Text style={{
                color: Colors.brown, paddingVertical: normalize(13),
                flex: 1
              }} >
                Gender
              </Text>
              <View flex={3} style={{ alignItems: 'center', flexDirection: 'row' }} >
                <Badger label='Male' backgroundColor={Colors.white} color={Colors.brown} style={{ borderColor: Colors.brown, borderWidth: 1 }} />
                <Badger label='Female' backgroundColor={Colors.white} color={Colors.brown} style={{ borderColor: Colors.brown, borderWidth: 1, marginLeft: normalize(15) }} />
              </View>
            </View>

            <View style={{
              borderBottomWidth: 1,
              borderColor: '#D5D3D3',
              flexDirection: 'row', marginHorizontal: normalize(10)
            }} >
              <Text style={{
                color: Colors.brown, paddingVertical: normalize(13),
                flex: 1
              }} >
                Gender
              </Text>

             <View style={{ flex: 3, flexDirection: 'row', justifyContent:'center',alignItems:'center' }} >
            <TextInput
                    placeholder='MM/DD/YY'
              style={{
                marginLeft: normalize(10),
                flex: 1,
                paddingVertical: normalize(13),
              }}
            />
             <View style={{ paddingLeft: normalize(10),  
justifyContent:'center',alignItems:'center' }} >
<TouchableOpacity>
<IonicIcon name="ios-calendar" color={Colors.primary} size={normalize(30)} />
  </TouchableOpacity>
            </View>
          </View>


            </View>



          </View>

        </View>
      </View>
    );
  }
}

