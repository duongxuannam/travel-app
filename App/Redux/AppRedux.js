import { createActions, createReducer } from 'reduxsauce'
import Immutable from 'seamless-immutable'
import I18n from 'react-native-i18n'
import moment from 'moment'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  startup: null,
  startupSuccess: null,
  changeLanguage: ['language'],
  connectivityChange: ['isConnected'],
  handleError: ['error'],
  closeError: null,
  showIndicator: null,
  hideIndicator: null,
  language:null,

})

export const AppTypes = Types
export default Creators


export const INITIAL_STATE = Immutable({
  isReady: false,
  isConnected: true,
  isShowingError: false,
  error: false,
  isShowingIndicator: false,

})



const startupSuccess = (state) => {
  return state.merge({ isReady: true })
}
// change language
const changeLanguage = (state, { language }) => {
  I18n.locale = language
  moment.locale(language)
  return state.merge({ language })
}


// handler connectivity change
const connectivityChange = (state, { isConnected }) => {
  return state.merge({ isConnected })
}

const handleError = (state, { error }) => {
  return state.merge({error: true })
}
const closeError = (state, { error }) => {
  return state.merge({error: false })
}


// handler show indicator
const showIndicator = (state) => {
  return state.merge({ isShowingIndicator: true })
}

// handler hide indicator
const hideIndicator = (state) => {
  return state.merge({ isShowingIndicator: false })
}

export const reducer = createReducer(INITIAL_STATE, {

  [Types.CHANGE_LANGUAGE]: changeLanguage,
  [Types.STARTUP_SUCCESS]: startupSuccess,
  [Types.CONNECTIVITY_CHANGE]: connectivityChange,
  [Types.HANDLE_ERROR]: handleError,
  [Types.CLOSE_ERROR]: closeError,
  [Types.SHOW_INDICATOR]: showIndicator,
  [Types.HIDE_INDICATOR]: hideIndicator,
})
