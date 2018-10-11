import React, { PureComponent } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Swiper from 'react-native-swiper'
import Button from '../Button'
import { Colors, Metrics } from '../../Themes'
import { normalize } from '../../Themes/Metrics'

export default class Startup extends PureComponent {

  next = () => {
    this.props.luuApp()
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
        }}>
          <View style={{ flex: 1 }} >

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
        <View style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>

          <Text >1</Text>
        </View>
        <View style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <Text >2</Text>
        </View>

       
      </Swiper>
    )
  }
}

