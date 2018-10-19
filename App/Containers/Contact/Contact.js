import React, { PureComponent } from 'react';
import { Text, View, TouchableOpacity, TextInput } from 'react-native';
import IonicIcon from 'react-native-vector-icons/Ionicons'
import {  Colors } from '../../Themes'
import { normalize, normalizeHeight } from '../../Themes/Metrics';

export default class Contact extends PureComponent {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: <View>
        <Text style={{ fontSize: normalize(20), fontWeight: 'bold', color: Colors.black }}>
          Contact Us
      </Text></View>,

      headerLeft: (<TouchableOpacity onPress={() => navigation.goBack(null)}>
        <View style={{ paddingHorizontal: normalize(10) }}>
          <IonicIcon name="md-arrow-back" color={Colors.primary} size={normalize(30)} />
        </View>
      </TouchableOpacity>),
    }
  }
  constructor(props) {
    super(props)
    this.state = {
      text: '',
      limit:false
    }
  }
  onChangeText = (text) => {
    if(text.length < 201){
      this.setState({
        text, limit:false
      })
    }
    this.setState({
      limit:true
    })

  }
  render() {
    const { text } = this.state 
    const limitStyle = text.length === 200 ? { color:Colors.red } : ''
    return (
      <View style={{ flex: 1, backgroundColor: Colors.white }} >
        <View style={{ marginHorizontal: normalize(10) }} >
          <Text style={{ fontSize: normalize(14), fontWeight: 'bold', marginTop: normalizeHeight(20) }} >
            Please describe your inquiry below.
            
     </Text>
          <View style={{
            marginTop: normalizeHeight(20), borderColor: Colors.brown, borderWidth: 1,
            paddingBottom: normalize(10),
            paddingHorizontal: normalize(10),
            borderRadius:3
          }} >
            <TextInput
              style={{ height: normalizeHeight(115) }}
              value={this.state.text}
              multiline={true}
              numberOfLines={10}
              onChangeText={this.onChangeText}
            />
          </View>
          <View style={{ marginTop:normalizeHeight(10), alignItems:'flex-end' }} >
          <Text  style={{ fontSize:normalize(14),  }}>
            <Text style={limitStyle} >{text.length}</Text>/200
          </Text>
          </View>
     <TouchableOpacity  >
     <View style={{ borderRadius:3, borderColor:Colors.primary, borderWidth:1, marginTop:normalize(20) }}>
<Text style={{ fontSize:normalize(15),color:Colors.primary, paddingVertical:normalizeHeight(10), textAlign:'center' }} >
  Send
</Text>
</View>
       </TouchableOpacity>    

        </View>

      </View>



    );
  }
}

