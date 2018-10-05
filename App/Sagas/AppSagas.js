import { all, takeLatest,select, put,call } from 'redux-saga/effects'
import I18n from 'react-native-i18n'
import { delay } from 'redux-saga'
import moment from 'moment'
import AppActions, { AppTypes } from '../Redux/AppRedux'

function* appRootSagas() {
  yield all([
    yield takeLatest(AppTypes.STARTUP, startup),
    yield takeLatest(AppTypes.HANDLE_ERROR, handleError),
  ])
}

function* startup() {
  try {
    yield put(AppActions.showIndicator())
    const language = yield select(state => state.app.language)
    if(language) {
      I18n.locale = language
      moment.locale(language)
      yield put(AppActions.hideIndicator())
      return  yield put(AppActions.startupSuccess())
    }
    I18n.locale = 'vi'
    moment.locale('vi')
    yield put(AppActions.hideIndicator())

    return  yield put(AppActions.startupSuccess())
  } catch(error) {
    handleError()
    yield put(AppActions.hideIndicator())

    yield put(AppActions.startupSuccess())
  }
}


function* handleError(action) { // eslint-disable-line
  let { error } = action // eslint-disable-line
  try {
    // show error
  } catch(error) {
    // show error
  }
}

export default appRootSagas
