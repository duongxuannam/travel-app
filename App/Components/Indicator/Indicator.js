import React, { PureComponent } from 'react'
import { View, ActivityIndicator } from 'react-native'
import PropTypes from 'prop-types'
import { Metrics } from '../../Themes'

class Indicator extends PureComponent {
  static propTypes = {
    isShowingIndicator: PropTypes.bool,
    backgroundColor: PropTypes.string,
  }
  renderIndicator = () => {
    const { backgroundColor } = this.props
    return (
      <View
        style={{
          height: Metrics.screenHeight,
          width: Metrics.screenWidth,
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          zIndex: 100,
          backgroundColor: `${backgroundColor}`,
        }}>
        <ActivityIndicator animating={true} size='large' />
      </View>
    )
  }
  render() {
    const { isShowingIndicator } = this.props
    return isShowingIndicator && this.renderIndicator()
  }
}

export default Indicator