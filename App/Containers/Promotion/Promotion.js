import React, { PureComponent } from 'react';
import { Text, View, TouchableOpacity, TextInput } from 'react-native';
import IonicIcon from 'react-native-vector-icons/Ionicons'
import { Button } from '../../Components'
import { Images, Colors } from '../../Themes'
import { normalize, normalizeHeight } from '../../Themes/Metrics';

export default class Promotion extends PureComponent {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: <View>
        <Text style={{ fontSize: normalize(20), fontWeight: 'bold', color: Colors.black }}> 
     Promotion Code
      </Text></View>,

headerLeft: (<TouchableOpacity onPress={() => navigation.goBack(null)}>
<View style={{ paddingHorizontal: normalize(10) }}>
          <IonicIcon name="md-arrow-back" color={Colors.primary} size={normalize(30)} />
        </View>
      </TouchableOpacity>),
    }
  }
 
  render() {
    return (
      <View style={{ backgroundColor: Colors.white, flex: 1, }}>

       <View style={{ marginHorizontal:normalize(10) }} >
<Text style={{ fontSize:normalize(15), marginTop:normalizeHeight(40) }} >
  Please enter your Promotion Code
</Text>

   <View style={{
          borderBottomWidth: 1,
          borderColor: '#D5D3D3',
          flexDirection: 'row',alignItems:'center',
          marginTop:normalizeHeight(10) 
        }} >
          <Text style={{
            color: Colors.brown, paddingVertical: normalize(13),
             flex: 1
          }} >
            Promotion Code
          </Text>
          <View style={{ flex: 1.5, flexDirection: 'row', alignItems:'center' }} >
            <TextInput
              style={{
                marginLeft: normalize(10),
                flex: 1,
                paddingVertical: normalize(13),
              }}
            />
            <TouchableOpacity>
          <View style={{ alignSelf: 'flex-end', paddingLeft: normalize(10),justifyContent:'center' }} >
             <IonicIcon name="ios-close" color={Colors.brown} size={normalize(30)} />
            </View>
            </TouchableOpacity>
          </View>

        </View>

       </View>
       <View style={{ position:'absolute', bottom:0, right:0,left:0 }} >
<Button label='Apply' style={{
  marginHorizontal:normalize(15),
  marginBottom:normalizeHeight(10),
  backgroundColor:Colors.primary, borderColor:Colors.primary}}
textStyle={{ color:Colors.white }}
/>
        </View>
      </View>



    );
  }
}

