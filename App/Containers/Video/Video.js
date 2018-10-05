import React, {PureComponent} from 'react';
import {  Text, View, Image} from 'react-native';
import { Images } from '../../Themes'


export default class Video extends PureComponent {

    static navigationOptions = ({ navigation }) => {
        return {
          tabBarIcon: ({ tintColor }) => (
            <Image
              resizeMode='contain'
              source={Images.video}
              style={ {height:26,width:26, tintColor }}
            />
          ),
        }
      }
  render() {
    return (
      <View >
        <Text >Video</Text>
      </View>
    );
  }
}

