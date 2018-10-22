import { all } from 'redux-saga/effects'
import appRootSagas from './AppSagas'
import userRootSagas from './UserSagas'


export default function * root () {
  yield all([
    appRootSagas(),
    userRootSagas()
  ])
}
