import { call, put, takeLatest, all, select } from 'redux-saga/effects'
import _ from 'lodash'
import UserActions, { UserTypes } from '../Redux/UserRedux'
import UserApi from '../Services/UserAPI'
import AppActions from '../Redux/AppRedux'
import { setAuthorizationToken } from '../Services/AxiosConfig'

function* userRootSagas() {
  yield all([
    yield takeLatest(UserTypes.SIGN_UP_REQUEST, signUpRequest),
    yield takeLatest(UserTypes.SIGN_IN_REQUEST, signInRequest),
  ])
}

export function* signUpRequest(actions) {
  const { params, actionSuccess, actionFailure } = actions
  yield put(AppActions.showIndicator())
  try {
    // const isConnected = yield select(state => state.app.isConnected)
    // if (!isConnected) {
    //   yield put(UserActions.loginFailure())
    //   yield put(AppActions.handleError('ConnectionError'))
    //   yield put(AppActions.hideIndicator())
    // } else {
    const res = yield call(UserApi.signUp, params)
    const { user } = res
    // yield put(AppActions.hideStartup())
    yield put(UserActions.signUpSuccess(user))
    yield put(AppActions.hideIndicator())
    setAuthorizationToken(user.token)
    actionSuccess && actionSuccess()
    // }
  } catch (error) {
    actionFailure && actionFailure(error.data.message)
    yield put(AppActions.handleError(error))
    yield put(AppActions.hideIndicator())
    yield put(UserActions.signUpFailure())
  }
}


export function* signInRequest(actions) {
  const { params, actionSuccess, actionFailure, } = actions
  yield put(AppActions.showIndicator())
  try {
    const res = yield call(UserApi.signIn, params)
    const { user } = res
    yield put(UserActions.signInSuccess(user))
    yield put(AppActions.hideStartup())
    yield put(AppActions.hideIndicator())
    setAuthorizationToken(user.token)
  } catch (error) {
    actionFailure && actionFailure( _.get(error, [ 'data','message']))
    yield put(AppActions.handleError(error))
    yield put(AppActions.hideIndicator())
    yield put(UserActions.signInFailure())
  }
}


export default userRootSagas