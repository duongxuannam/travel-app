import React, { PureComponent } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { TextInfo, Image } from '../../Components'
import { Images, Colors } from '../../Themes'
import { normalize, normalizeHeight } from '../../Themes/Metrics';


export default class Account extends PureComponent {

  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: null,
      title: "My Account",
      headerTitleStyle: {
        textAlign: 'center', alignSelf: 'center',
        fontSize: normalize(20), fontWeight: 'bold', color: Colors.black
      },
    }
  }
  moveScreen = (screen) => () => {
    this.props.navigation.navigate(screen)
  }
  render() {
    return (
      <View style={{ backgroundColor: Colors.white, flex: 1, }}>
        <View style={{ flex: 1, marginHorizontal: normalize(10) }}>


          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <TouchableOpacity onPress={this.moveScreen('UserInfomationNavigation')} >
          <View style={{ flexDirection: 'row' }}>
              <Image uri={Images.badgerLogo} height={normalize(60)} width={normalize(35)} />
              <View style={{ flexDirection: 'row', alignItems: 'flex-end', marginLeft: normalize(10) }}>
                <Image uri={Images.edit} height={normalize(18)} width={normalize(18)} />
              </View>
            </View>
          </TouchableOpacity>
       
            <Text style={{ fontSize: normalize(15), marginTop: normalizeHeight(10) }}>Nam dang yeu</Text>
          </View>




          <View style={{ flex: 2 }}>
            <TextInfo style={{  
              borderBottomColor: Colors.brown, borderBottomWidth: 1,
              paddingVertical:normalize(8)
            }}
              fontSize={normalize(20)}
              showRightArrow label='Personalize' icon={Images.additionalInfo} 
              onPress={this.moveScreen('UserInfomationNavigation')} />
            <TextInfo
              fontSize={normalize(20)}
              style={{ borderBottomColor: Colors.brown, borderBottomWidth: 1
                ,paddingVertical:normalize(8)
              }} showRightArrow label='Payment Infomation' icon={Images.payment} />
            <TextInfo
              fontSize={normalize(20)}
              style={{ borderBottomColor: Colors.brown, borderBottomWidth: 1
                ,paddingVertical:normalize(8)
              }} showRightArrow label='Promotion Code' icon={Images.promotion} />
            <TextInfo
              fontSize={normalize(20)}
              style={{ borderBottomColor: Colors.brown, borderBottomWidth: 1,
                paddingVertical:normalize(8)
              }} showRightArrow label='Account Settings' icon={Images.accountSetting} />
            <TextInfo
              fontSize={normalize(20)}
              style={{ borderBottomColor: Colors.brown, borderBottomWidth: 1
                ,paddingVertical:normalize(8)
              }} showRightArrow label='Help Center' icon={Images.helpCenter} />

            <View style={{ flex: 1, justifyContent: 'flex-end', }}>
              <TextInfo
                fontSize={normalize(20)
                }
  
                label='Logout' icon={Images.logOut} 
                style={{ paddingVertical:normalize(8)}} />
            </View>

          </View>

        </View>
      </View>
    );
  }
}

