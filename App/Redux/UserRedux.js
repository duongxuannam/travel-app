import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'
import { Alert } from 'react-native'
import { setAuthorizationToken } from '../Services/AxiosConfig'
/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  signUpRequest: ['params','actionSuccess','actionFailure'],
  signUpSuccess: ['user'],
  signUpFailure:['error'],

  signInRequest: ['params','actionSuccess','actionFailure'],
  signInSuccess: ['user'],
  signInFailure:['error'],

  logOut: null,
})

export const UserTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  isRequest: false,
  token: null,
  user:null
})

/* ------------- Reducers ------------- */

//request signUp
const signUpRequest = (state) => {
  return state.merge({ isRequest: true })
}

// signUp success
const signUpSuccess = (state, { user }) => {
  return state.merge({ isRequest: false,token:user.token, ...user })
}


// signUp failure
const signUpFailure = (state, { error }) => {
  error && error.message && Alert.alert('', error.message)
  return state.merge({ isRequest: false })
}


//request signIn
const signInRequest = (state) => {
  return state.merge({ isRequest: true })
}

// signIn success
const signInSuccess = (state, { user }) => {
  return state.merge({ isRequest: false,token:user.token, ...user })
}


// signIn failure
const signInFailure = (state, { error }) => {
  error && error.message && Alert.alert('', error.message)
  return state.merge({ isRequest: false })
}



// handler logout
const logout = (state) => {
  setAuthorizationToken('')
  return state.merge({
    ...INITIAL_STATE,
  })
}

 
/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SIGN_UP_REQUEST]: signUpRequest,
  [Types.SIGN_UP_SUCCESS]: signUpSuccess,
  [Types.SIGN_UP_FAILURE]: signUpFailure,

  [Types.SIGN_IN_REQUEST]: signInRequest,
  [Types.SIGN_IN_SUCCESS]: signInSuccess,
  [Types.SIGN_IN_FAILURE]: signInFailure,

  [Types.LOG_OUT]: logout,
})