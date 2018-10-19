import React, { PureComponent } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import IonicIcon from 'react-native-vector-icons/Ionicons'
import {  TextInputLabel, Button } from '../../Components'
import {  Colors } from '../../Themes'
import { normalize, normalizeHeight } from '../../Themes/Metrics';

export default class Personalize extends PureComponent {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: <View>
        <Text style={{ fontSize: normalize(20), fontWeight: 'bold', color: Colors.black }}> 
     Personalize
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
<View style={{ marginVertical:normalizeHeight(20),marginHorizontal:normalize(20), alignItems:'center', justifyContent:'center' }} >
<Text style={{ fontStyle:'italic',fontSize: normalize(13),textAlign:'center', color: Colors.brown, marginTop: normalize(10) }}>
Additional infomation will be used only to match you with relevant hotels and activities most suitble for you.
      </Text>
           
</View>

<View style={{ marginHorizontal:normalize(15), marginTop:normalize(10),}} >
<Text style={{ fontSize:normalize(13), color:Colors.brown }} >
OFFERING PREFERENCE
</Text>
<Button label="Best Price" style={{ color:Colors.white, borderColor:Colors.red,marginVertical:normalizeHeight(10) }} 
textStyle={{ color:Colors.red  }}
/>
<Button label="Quality & Value" style={{  borderColor:Colors.red,marginVertical:normalizeHeight(10) }} 
textStyle={{ color:Colors.red  }}
/>
<Button label="Luxury" style={{ color:Colors.white, borderColor:Colors.red,marginVertical:normalizeHeight(10) }} 
textStyle={{ color:Colors.red  }}
/>
<TextInputLabel label='Country' />
<TextInputLabel label='Job Industry' />
<Text style={{ fontSize:normalize(12), fontWeight:'bold', color:Colors.brown, marginTop:normalizeHeight(10) }} >
We offer exclusive activities for users from different countries and job industries!
</Text>

</View>
<View style={{ position:'absolute', bottom:0, right:0,left:0 }} >
<Button label='Save' style={{
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

