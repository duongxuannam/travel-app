import React, { PureComponent } from 'react';
import { View, Text, TouchableOpacity } from 'react-native'
import { NavigationActions } from 'react-navigation'
import { connect } from 'react-redux'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import IonicIcon from 'react-native-vector-icons/Ionicons'
import { Button, TextInputCustom } from '../../Components'
import { checkEmaill } from '../../Services/validator'
import UserActions from '../../Redux/UserRedux'
import AppActions from '../../Redux/AppRedux'
import { normalize, normalizeHeight } from '../../Themes/Metrics';
import { Colors } from '../../Themes'

class SignIn extends PureComponent {

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
      email: '',
      password: '',
      errorEmail: '',
      errorPassword: '',
      errorServer: ''
    }
  }
  forgotPassword = () => {
    this.props.navigation.navigate('ForgotPasswordNavigation')
  }

  renderErrorEmail = () => {
    return (
      <Text style={{
        marginHorizontal: normalize(25), marginVertical: normalize(5),
        color: Colors.red, fontSize: normalize(13)
      }} >
        {this.state.errorEmail}
      </Text>
    )
  }
  renderErrorPassword = () => {
    return (
      <Text style={{
        marginHorizontal: normalize(25), marginVertical: normalize(5),
        color: Colors.red, fontSize: normalize(13)
      }} >
        {this.state.errorPassword}
      </Text>
    )
  }
  renderErrorServer = () => {
    return (
      <Text style={{
        marginHorizontal: normalize(25), marginVertical: normalize(5),
        color: Colors.red, fontSize: normalize(13)
      }} >
        {this.state.errorServer}
      </Text>
    )
  }
  signInRequest = () => {
    const { password, email, errorEmail, errorPassword } = this.state
    if (email === '') this.setState({ errorEmail: 'Email is require' })
    if (password === '') return this.setState({ errorPassword: 'Password is require' })
    if (errorEmail || errorPassword) return
    const params = {
      password, email
    }
    this.props.signInRequest(params,
       () =>   {
         console.log('lai loi');
         this.props.navigation.navigate('TabNavigation');
         console.log('nua roi')}
      , (errorServer) => this.setState({ errorServer }))
  }


  render() {
    const { password, email, errorEmail, errorPassword, errorServer } = this.state
    return (
      <View flex={1} style={{ backgroundColor: Colors.white }}>
        <KeyboardAwareScrollView>

          <View style={{ justifyContent: 'center', marginVertical: normalizeHeight(40) }} >
            <Text style={{ fontSize: normalize(30), textAlign: 'center' }} >
              Sign In
        </Text>
          </View>
          <View style={{ marginBottom: normalizeHeight(40) }}>
            <TextInputCustom style={{
              marginHorizontal: normalize(25),
              borderBottomWidth: 1,
              borderColor: '#D5D3D3',
            }}
              keyboardType="email-address"
              returnKeyType='next'
              onChange={email => {
                this.setState(
                  { email, errorServer: '' }
                  , () => {
                    if (!checkEmaill(this.state.email)) {
                      this.setState({ errorEmail: 'Email is not format' });
                      if (this.state.email === '') {
                        this.setState({ errorEmail: 'Email is require' })
                      }
                    } else {
                      this.setState({ errorEmail: '' })
                    }
                  })
              }}
              placeHolder="Email" />
            {!!errorEmail && this.renderErrorEmail()}
            <TextInputCustom style={{
              marginHorizontal: normalize(25),
              borderBottomWidth: 1,
              borderColor: '#D5D3D3',
            }}
              placeHolder="Password"
              showIcon
              password
              onChange={password => {
                this.setState(
                  { password, errorServer: '' }
                  , () => {
                    if (this.state.password.length < 5) {
                      this.setState({ errorPassword: 'Password is least 5 characters' });
                      if (this.state.password === '') {
                        this.setState({ errorPassword: 'Password is require' })
                      }
                    } else {
                      this.setState({ errorPassword: '' })
                    }
                  })
              }}
            />
            {!!errorPassword && this.renderErrorPassword()}
            {!!errorServer && this.renderErrorServer()}
            <TouchableOpacity
              onPress={this.forgotPassword}
              style={{ alignItems: 'flex-end', marginTop: normalize(10), marginRight: normalize(25) }}>
              <Text style={{ color: Colors.red }} >Forgot password</Text>
            </TouchableOpacity>
          </View>
          <View flex={1} >
            <Button style={{
              backgroundColor: Colors.primary,
              borderColor: Colors.primary,
              marginHorizontal: normalize(30),
            }}
              onPress={this.signInRequest}
              textStyle={{ color: Colors.white }}
              label="Sign In" />
          </View>
        </KeyboardAwareScrollView>

      </View >
    )
  }
}
const mapDispatchToProps = (dispatch) => ({
  luuApp: () => dispatch(AppActions.luuApp()),
  signInRequest: (params, actionSuccess, actionFailure) => dispatch(UserActions.signInRequest(params, actionSuccess, actionFailure)),
})

export default connect(null, mapDispatchToProps)(SignIn)





