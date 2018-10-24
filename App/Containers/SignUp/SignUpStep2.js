import React, { PureComponent } from 'react';
import { View, Text, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import IonicIcon from 'react-native-vector-icons/Ionicons'
import { connect } from 'react-redux'
import AppActions from '../../Redux/AppRedux'
import { Button, TextInputLabel } from '../../Components'
import { normalize, normalizeHeight } from '../../Themes/Metrics';
import { Colors } from '../../Themes'

class SignUp extends PureComponent {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: <View>
        <Text style={{ fontSize: normalize(20), fontWeight: 'bold', color: Colors.black }}>
          Personalize
      </Text></View>,

      headerRight: (<TouchableOpacity 
      // onPress={() => navigation.goBack(null)}
      onPress={navigation.getParam('hideStartup')}         
      >
        <View style={{ paddingHorizontal: normalize(10) }}>
          <Text style={{ color: Colors.primary, fontSize: normalize(15) }} >Skip</Text>
        </View>
      </TouchableOpacity>),
      headerLeft: (<View></View>)
    }
  }
  componentDidMount = () => {
    const {  navigation } = this.props
    navigation.setParams({ hideStartup: this.hideStartup })
  }
  
  hideStartup = () => {
    this.props.hideStartup();
    this.props.navigation.navigate('TabNavigation')
  }

  render() {
    return (
      <View style={{ backgroundColor: Colors.white, flex: 1, }}>
        <View style={{ marginVertical: normalizeHeight(20), marginHorizontal: normalize(20), alignItems: 'center', justifyContent: 'center' }} >
          <Text style={{ fontStyle: 'italic', fontSize: normalize(13), textAlign: 'center', color: Colors.brown, marginTop: normalize(10) }}>
            Additional infomation will be used only to match you with relevant hotels and activities most suitble for you.
      </Text>

        </View>

        <View style={{ marginHorizontal: normalize(15), marginTop: normalize(10), }} >
          <Text style={{ fontSize: normalize(13), color: Colors.brown }} >
            OFFERING PREFERENCE
</Text>
          <Button label="Best Price" style={{ color: Colors.white, borderColor: Colors.red, marginVertical: normalizeHeight(10) }}
            textStyle={{ color: Colors.red }}
          />
          <Button label="Quality & Value" style={{ borderColor: Colors.red, marginVertical: normalizeHeight(10) }}
            textStyle={{ color: Colors.red }}
          />
          <Button label="Luxury" style={{ color: Colors.white, borderColor: Colors.red, marginVertical: normalizeHeight(10) }}
            textStyle={{ color: Colors.red }}
          />
          <TextInputLabel label='Country' />
          <TextInputLabel label='Job Industry' />
          <Text style={{ fontSize: normalize(12), fontWeight: 'bold', color: Colors.brown, marginTop: normalizeHeight(10) }} >
            We offer exclusive activities for users from different countries and job industries!
</Text>

        </View>
        <View style={{ position: 'absolute', bottom: 0, right: 0, left: 0 }} >
          <Button label='Save' style={{
            marginHorizontal: normalize(15),
            marginBottom: normalizeHeight(10),
            backgroundColor: Colors.primary, borderColor: Colors.primary
          }}
            textStyle={{ color: Colors.white }}
          />
        </View>
      </View>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  hideStartup: () => dispatch(AppActions.hideStartup()),
})

export default connect(null, mapDispatchToProps)(SignUp)




