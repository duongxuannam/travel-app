import React, { PureComponent } from 'react'
import { View, StatusBar, } from 'react-native'
import { connect } from 'react-redux'
import ReduxNavigation from '../Navigation/ReduxNavigation'
import AppActions from '../Redux/AppRedux'
import { Indicator } from '../Components'

class RootContainer extends PureComponent {

  getView() {
    let { isReady } = this.props
    if (!isReady) {
      return null
    } else {
      return <ReduxNavigation />
    }
  }

  render() {
    const { isShowingIndicator } = this.props
    return (
      <View style={{ flex: 1 }}>
        <StatusBar barStyle='dark-content' />
        <Indicator isShowingIndicator={isShowingIndicator} backgroundColor={'rgba(52, 52, 52, 0.8)'} />
        {this.getView()}
      </View>
    )
  }
}


const mapStateToProps = (state) => ({
  isShowingIndicator: state.app.isShowingIndicator,
  isReady: state.app.isReady,
})
const mapDispatchToProps = (dispatch) => ({
  hideIndicator: () => dispatch(AppActions.hideIndicator()),
})

export default connect(mapStateToProps, mapDispatchToProps)(RootContainer)
