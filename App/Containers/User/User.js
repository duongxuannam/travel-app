import React, {PureComponent} from 'react';
import {  Text, View, Image} from 'react-native';
import { Images } from '../../Themes'


export default class User extends PureComponent {

    static navigationOptions = ({ navigation }) => {
        return {
          tabBarIcon: ({ tintColor }) => (
            <Image
              resizeMode='contain'
              source={Images.user}
              style={ {height:26,width:26, tintColor }}
            />
          ),
        }
      }
  render() {
    return (
      <View >
        <Text >user</Text>
      </View>
    );
  }
}

