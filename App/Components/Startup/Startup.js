import React, { PureComponent } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Swiper from 'react-native-swiper'
import Button from '../Button'
import Image from '../Image'
import { Colors, Images } from '../../Themes'
import { normalize } from '../../Themes/Metrics'

export default class Startup extends PureComponent {

  next = () => {
    this.props.skip()
  }
  signIn = () => {
    this.props.navigation.navigate('SignInNavigation')
  }
  signUp = () => {
    this.props.navigation.navigate('SignUpNavigation')
  }
  render() {
    return (
      <Swiper loop={false} style={{backgroundColor:Colors.white}}>
        <View style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image uri={Images.startup} />
        </View>
        <View style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image uri={Images.startup2} />
        </View>
              <View style={{
          flex: 1,
        }}>
          <View style={{ flex: 1, justifyContent:'center', alignItems:'center' }} >
            <View style={{
              position: 'absolute',
              top: normalize(10),
              right: normalize(10)
            }}>
              <TouchableOpacity style={{ padding: 10 }}
                onPress={this.next} >
                <Text style={{ fontSize: normalize(18), color: Colors.primary }}>
                  Skip
                </Text>
              </TouchableOpacity>
            </View>
            <Image uri={Images.logostartup} style={{ height:normalize(55), width:normalize(200) }} />
            <Image uri={Images.curatedByMillennia} style={{ height:normalize(35),width:normalize(120), marginTop:normalize(20) }} />
          </View>
          <View style={{ flex: 1 }} >
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
      </Swiper>
    )
  }
}

