import React from 'react'
import PropTypes from 'prop-types'
import { BackHandler, Platform } from 'react-native'
import { addNavigationHelpers } from 'react-navigation'
import { createReduxBoundAddListener } from 'react-navigation-redux-helpers'
import { connect} from 'react-redux'
import AppNavigation from './AppNavigation'

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

  componentWillUnmount () {
    if (Platform.OS === 'ios') return
    BackHandler.removeEventListener('hardwareBackPress')
  }

  render () {
    // return <AppNavigation navigation={addNavigationHelpers({ dispatch: this.props.dispatch, state: this.props.nav, addListener: createReduxBoundAddListener('root') })} />
    return <AppNavigation />

  }
}
const mapStateToProps = state => ({
  nav: state.nav
})
// const mapStateToProps = state => ({ nav: state.nav })
// export default connect(mapStateToProps)(ReduxNavigation)

export default connect(mapStateToProps, null)(ReduxNavigation)