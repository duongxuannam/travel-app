import React, { PureComponent } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux'
import UserActions from '../../Redux/UserRedux'
import { TextInfo, Image } from '../../Components'
import { Images, Colors } from '../../Themes'
import { normalize, normalizeHeight } from '../../Themes/Metrics';

class Account extends PureComponent {

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
  logOut = () =>{ this.props.logOut(); this.props.navigation.goBack(null)}
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
              borderBottomColor: Colors.grey, borderBottomWidth: 0.5,
              paddingVertical:normalize(8),
            }}
              fontSize={normalize(15)}
              showRightArrow label='Personalize' icon={Images.additionalInfo} 
              onPress={this.moveScreen('PersonalizeNavigation')} />
            <TextInfo
              fontSize={normalize(15)}
              style={{
                borderBottomColor: Colors.brown, borderBottomWidth: 0.8,
                paddingVertical:normalize(8)
              }} showRightArrow label='Payment Infomation' icon={Images.payment} 
              onPress={this.moveScreen('PaymentNavigation')}
              />
            <TextInfo
              fontSize={normalize(15)}
              style={{ 
                borderBottomColor: Colors.brown, borderBottomWidth: 0.8,
                paddingVertical:normalize(8)
              }} showRightArrow label='Promotion Code' icon={Images.promotion}
              onPress={this.moveScreen('PromotionNavigation')}

              />
            <TextInfo
              fontSize={normalize(15)}
              style={{ 
                borderBottomColor: Colors.brown, borderBottomWidth: 0.8,
                paddingVertical:normalize(8)
              }} showRightArrow label='Account Settings' icon={Images.accountSetting}
              onPress={this.moveScreen('AccountSettingNavigation')}
              />
            <TextInfo
              fontSize={normalize(15)}
              style={{
                borderBottomColor: Colors.brown, borderBottomWidth: 0.8
                ,paddingVertical:normalize(8)
              }} showRightArrow label='Help Center' icon={Images.helpCenter}
              onPress={this.moveScreen('HelpCenterNavigation')}
              />

            <View style={{ flex: 1, justifyContent: 'flex-end', }}>
              <TextInfo
                fontSize={normalize(15)
                }
                onPress={this.logOut}
                label='Logout' icon={Images.logOut} 
                style={{ paddingVertical:normalize(8)}} />
            </View>

          </View>

        </View>
      </View>
    );
  }
}
// const mapStateToProps = (state) => ({
//   token: _.get(state, [ 'user','token'])
// })

const mapDispatchToProps = (dispatch) => ({
  logOut: () => dispatch(UserActions.logOut()),

})
export default connect(null, mapDispatchToProps)(Account)


