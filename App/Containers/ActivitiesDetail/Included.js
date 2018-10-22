import React, { PureComponent } from 'react';
import { View, Text, } from 'react-native'
import { TextInfo } from '../../Components'
import { normalize, } from '../../Themes/Metrics';
import { Colors, Images } from '../../Themes'

export default class Included extends PureComponent {

  render() {
    return (



      <View style={{
        marginHorizontal: normalize(10),
        marginVertical: normalize(15),
        paddingBottom: normalize(15),
        borderBottomWidth: 0.8,
        borderBottomColor: Colors.brown,
        backgroundColor:Colors.white

      }} >
        <Text style={{ fontSize: normalize(18), fontWeight: 'bold' }} >
          What's Included
        </Text>

        <View style={{
          backgroundColor: Colors.defaultColorView,
          borderRadius: 8,
          marginTop: normalize(10),
          paddingHorizontal: normalize(10)
        }} >

          <TextInfo label="All Food Tastings (7 on-the-go and 1 seated)"
            fontSize={normalize(13)} icon={Images.check} height={normalize(20)}
            width={normalize(20)}
          />
            <TextInfo label="One Bottle of Water"
            fontSize={normalize(13)} icon={Images.check} height={normalize(20)}
            width={normalize(20)}
          />
            <TextInfo label="A Charming Tour Guide"
            fontSize={normalize(13)} icon={Images.check} height={normalize(20)}
            width={normalize(20)}
          />
            <TextInfo label="Our Insider Guide"
            fontSize={normalize(13)} icon={Images.check} height={normalize(20)}
            width={normalize(20)}
          />
        </View>
      </View>
    )
  }
}




