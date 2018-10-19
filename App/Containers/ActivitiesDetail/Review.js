import React, { PureComponent } from 'react';
import { View, Text,TouchableOpacity } from 'react-native'
import { Badger } from '../../Components'
import { normalize,  } from '../../Themes/Metrics';
import { Colors, } from '../../Themes'

export default class Review extends PureComponent {
  render() {
    return (
    
      <View style={{
        marginHorizontal: normalize(10),
      }} >
        <Text style={{ fontSize: normalize(18), fontWeight: 'bold' }} >
          Reviews and Tips
        </Text>

        <View style={{
          marginTop: normalize(20)
        }} >
          <View style={{ marginBottom: normalize(10) }} >
            <View style={{ flexDirection: 'row' }} >
              <View>
                <Text style={{ fontSize: normalize(15), fontWeight: 'bold' }}>Alex Standall</Text>
              </View>
              <View style={{ alignItems: 'flex-end', flex: 1 }} >
                <Text style={{ fontSize: normalize(15) }}>7/3/2018</Text>
              </View>
            </View>
            <View style={{ flexDirection: 'row', marginVertical: normalize(10) }} >
              {/* <View style={{ backgroundColor: Colors.primary, borderBottomLeftRadius: 5, borderTopLeftRadius: 5, padding: normalize(5) }} >
                <Text style={{ fontSize: normalize(15), fontWeight: 'bold', color: Colors.white }}>4.3</Text>
              </View> */}
              <Badger  label='4.3' backgroundColor={Colors.primary} color={Colors.white}/>
              <View style={{ padding: normalize(5), borderBottomRightRadius: 5, borderTopRightRadius: 5, borderColor: Colors.primary, borderWidth: 1 }} >
                <Text style={{ fontSize: normalize(15), color: Colors.primary }}>Great</Text>
              </View>
            </View>

            <View style={{ backgroundColor: Colors.defaultColorView, padding: normalize(10) }} >
              <Text>
                Mot doan van ban dai ngoang ngeo dai khai la danh gia cac kieu cd mdsak m fdmsf dm fejfn smdnf s
              </Text>
            </View>
          </View>


          <View style={{ marginBottom: normalize(10) }} >

            <View style={{ flexDirection: 'row' }} >
              <View>
                <Text style={{ fontSize: normalize(15), fontWeight: 'bold' }}>Alex Standall</Text>
              </View>
              <View style={{ alignItems: 'flex-end', flex: 1 }} >
                <Text style={{ fontSize: normalize(15) }}>7/3/2018</Text>
              </View>
            </View>
            <View style={{ flexDirection: 'row', marginVertical: normalize(10) }} >
              <View style={{ backgroundColor: Colors.primary, borderBottomLeftRadius: 5, borderTopLeftRadius: 5, padding: normalize(5) }} >
                <Text style={{ fontSize: normalize(15), fontWeight: 'bold', color: Colors.white }}>4.3</Text>
              </View>
              <View style={{ padding: normalize(5), borderBottomRightRadius: 5, borderTopRightRadius: 5, borderColor: Colors.primary, borderWidth: 1 }} >
                <Text style={{ fontSize: normalize(15), color: Colors.primary }}>Great</Text>
              </View>
            </View>
            <View style={{ backgroundColor: Colors.defaultColorView, padding: normalize(10) }} >
              <Text>
                Mot doan van ban dai ngoang ngeo dai khai la danh gia cac kieu cd mdsak m fdmsf dm fejfn smdnf s
              </Text>
            </View>
          </View>
          <TouchableOpacity>
            <Text style={{ fontSize: normalize(17), color: Colors.black, textAlign: 'center', marginBottom: normalize(10) }} >
              Read All Reviews
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}




