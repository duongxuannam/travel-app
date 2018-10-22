import React, { PureComponent } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import IonicIcon from 'react-native-vector-icons/Ionicons'
import { connect } from 'react-redux'
import { Button, TextInputLabel } from '../../Components'
import UserActions from '../../Redux/UserRedux'
import { checkEmaill } from '../../Services/validator'
import { normalize, normalizeHeight } from '../../Themes/Metrics';
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
      email: '',
      password: '',
      confirm: '',
      errorEmail: '',
      errorPassword: '',
      errorConfirm: '',
      errorServer: ''
    }
  }
  SignUpStep2 = () => {
    this.props.navigation.navigate('SignUpStep2Navigation')
  }
  signUpRequest = () => {
    const { password, email, confirm, errorConfirm, errorEmail, errorPassword } = this.state
    if (email === '') this.setState({ errorEmail: 'Email is require' })
    if (password === '') this.setState({ errorPassword: 'Password is require' })
    if (confirm === '') return this.setState({ errorConfirm: 'Confirm is require' })
    if (errorConfirm || errorEmail || errorPassword) return
    const params = {
      password, email
    }
    this.props.signUpRequest(params,
      this.SignUpStep2, (errorServer) => this.setState({ errorServer }))
  }
  onChangeEmail = (email) => () => {
    return (checkEmaill(email))
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
  renderErrorConfirm = () => {
    return (
      <Text style={{
        marginHorizontal: normalize(25), marginVertical: normalize(5),
        color: Colors.red, fontSize: normalize(13)
      }} >
        {this.state.errorConfirm}
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
  render() {
    const { confirm, password, email, errorEmail, errorPassword, errorConfirm, errorServer } = this.state
    const checkIcon = confirm === password && confirm !== '' ? true : false
    return (
      <View flex={1} style={{ backgroundColor: Colors.white }}>
        <View style={{ justifyContent: 'center', marginTop: normalizeHeight(50), marginBottom: normalizeHeight(20) }} >
          <Text style={{ fontSize: normalize(30), textAlign: 'center' }} >
            Sign Up
        </Text>
        </View>

        <View flex={1}>

          <TextInputLabel label="E-mail" style={{ marginHorizontal: normalize(25) }}
            onChange={email => {
              this.setState(
                { email,errorServer:'' }
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

          />
          {!!errorEmail && this.renderErrorEmail()}
          <TextInputLabel label="Password" style={{ marginHorizontal: normalize(25) }}
            password
            value={password}
            onChange={password => {
              this.setState(
                { password, confirm: '', errorConfirm: '' }
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
          <TextInputLabel
            value={confirm}
            style={{ marginHorizontal: normalize(25) }}
            label="Confirm"
            password
            showIcon
            checkIcon={checkIcon}
            onChange={confirm => {
              this.setState(
                { confirm }
                , () => {
                  if (this.state.confirm !== this.state.password) {
                    this.setState({ errorConfirm: 'Confirm is not correct' });
                  } else {
                    this.setState({ errorConfirm: '' })
                  }
                })
            }}
          />
          {!!errorConfirm && this.renderErrorConfirm()}
          {!!errorServer && this.renderErrorServer()}
        </View>
        <View flex={1} style={{ marginTop: normalizeHeight(50) }} >
          <Button
            // onPress={this.SignUpStep2}
            onPress={this.signUpRequest}

            style={{
              backgroundColor: Colors.primary,
              borderColor: Colors.primary,
              marginHorizontal: normalize(30),
            }}
            textStyle={{ color: Colors.white }}
            label="Next" />
        </View>
      </View >
    )
  }
}

const mapStateToProps = (state) => ({
  token: state
})


const mapDispatchToProps = (dispatch) => ({
  signUpRequest: (params, actionSuccess, actionFailure) => dispatch(UserActions.signUpRequest(params, actionSuccess, actionFailure)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)







