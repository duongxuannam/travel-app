import React from 'react'
import PropTypes from 'prop-types'
import { BackHandler, Platform, Text, TouchableOpacity, StyleSheet, View } from 'react-native'
import { connect } from 'react-redux'
import AppNavigation from './AppNavigation'
import AppActions from '../Redux/AppRedux'
import Startup from './StartupNavigation';


class ReduxNavigation extends React.Component {
  static propTypes = {
    nav: PropTypes.object,
  }

  UNSAFE_componentWillMount() {
    if (Platform.OS === 'ios') return
    BackHandler.addEventListener('hardwareBackPress', () => {
      const { dispatch, nav } = this.props
      // change to whatever is your first screen, otherwise unpredictable results may occur
      if (nav.routes.length === 1 && nav.routes[0].index === 0 &&
        nav.routes[0].routes[0].routes.length === 1 && nav.routes[0].routes[0].index === 0) {
        return false
      }
      // if (shouldCloseApp(nav)) return false
      dispatch({ type: 'Navigation/BACK' })
      return true
    })
  }

  componentWillUnmount() {
    if (Platform.OS === 'ios') return
    BackHandler.removeEventListener('hardwareBackPress')
  }
  luuApp = () => {
    this.props.luuApp()
  }
  getView = () => {
    const { firstTime } = this.props.app
    if (firstTime) {
      return (
        <Startup />
      )
    }
    return (
      <AppNavigation />
    ) // <AppNavigation navigation={addNavigationHelpers({ dispatch: this.props.dispatch, state: this.props.nav, addListener: createReduxBoundAddListener('root') })} />
  }
  render() {
    return this.getView()
     
 
  }
}
const mapStateToProps = state => ({
  nav: state.nav,
  app: state.app
})

const mapDispatchToProps = (dispatch) => ({
  luuApp: () => dispatch(AppActions.luuApp()),
})

export default connect(mapStateToProps, mapDispatchToProps)(ReduxNavigation)