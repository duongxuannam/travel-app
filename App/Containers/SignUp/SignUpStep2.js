import React, { PureComponent } from 'react';
import { View, Text, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import IonicIcon from 'react-native-vector-icons/Ionicons'
import { connect } from 'react-redux'
import AppActions from '../../Redux/AppRedux'
import { Button, TextInputLabel } from '../../Components'
import { normalize } from '../../Themes/Metrics';
import { Colors } from '../../Themes'

class SignUp extends PureComponent {

  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: (<TouchableOpacity onPress={() => navigation.goBack(null)}>
        <View style={{ paddingHorizontal: normalize(10) }}>
          <IonicIcon name="md-arrow-back" color={Colors.primary} size={normalize(30)} />
        </View>
      </TouchableOpacity>)
    }
  }
  constructor(props) {
    super(props)
    this.state = {
      bestPrice: false,
      quality: false,
      luxury: false
    }
  }
  goMain = () => {
    this.props.luuApp()
    // this.props.navigation.navigate('TabNavigation')
  }
  render() {
    const { quality, bestPrice, luxury } = this.state
    console.log(this.state)
    return (
      <View flex={1} style={{ backgroundColor: Colors.white }}>
        <ScrollView style={{ flex: 1 }}>

          <View flex={1} style={{ justifyContent: 'center' }} >
            <Text style={{ fontWeight: '500', margin: normalize(10), fontSize: normalize(20), textAlign: 'center' }} >
              Personalize
        </Text>
            <Text style={{ color: Colors.brown, marginHorizontal: normalize(40), fontSize: normalize(15), textAlign: 'center' }} >
              Tell us more about yourself to help us personalize your experience
        </Text>
          </View>

          <View flex={3}
            style={{
              marginHorizontal: normalize(25),
            }} >
            <Text style={{
              color: Colors.brown, fontSize: normalize(15), marginTop: normalize(15),
            }} >
              OFFERING PREFERENCE        </Text>
            <Button
              onPress={() => this.setState({ bestPrice: !bestPrice })}
              style={{
                marginTop: normalize(15),
                backgroundColor: bestPrice ? Colors.success : Colors.white,
                borderColor: bestPrice ? Colors.white : Colors.red,
              }}
              textStyle={{ color: bestPrice ? Colors.white : Colors.red }}
              label="Best Price" />
            <Button
              onPress={() => this.setState({ quality: !quality })}
              style={{
                marginTop: normalize(15),
                backgroundColor: quality ? Colors.success : Colors.white,
                borderColor: quality ? Colors.white : Colors.red,
              }}
              textStyle={{ color: quality ? Colors.white : Colors.red }}
              label="Quality & Value" />
            <Button
              onPress={() => this.setState({ luxury: !luxury })}
              style={{
                marginTop: normalize(15),
                backgroundColor: luxury ? Colors.success : Colors.white,
                borderColor: luxury ? Colors.white : Colors.red,
              }}
              textStyle={{ color: luxury ? Colors.white : Colors.red }}
              label="Luxury" />
            <TextInputLabel label="Country" style={{ marginTop:normalize(10) }} />
            <TextInputLabel label="Job Industry" />
            <Text style={{ color: Colors.brown, fontSize: normalize(15), marginVertical: normalize(15) }} >
              We offer exclusive activities for users from different countries and job industries!        </Text>
            <Button
              onPress={this.goMain}
              style={{
                backgroundColor: Colors.primary,
                borderColor: Colors.primary,
                marginBottom: normalize(15)
              }}
              textStyle={{ color: Colors.white }}
              label="Join" />

          </View>



        </ScrollView>


      </View>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  luuApp: () => dispatch(AppActions.luuApp()),
})

export default connect(null, mapDispatchToProps)(SignUp)




