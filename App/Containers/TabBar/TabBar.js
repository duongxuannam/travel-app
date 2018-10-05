import React, { PureComponent } from 'react'
import { TouchableWithoutFeedback, View } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import _ from 'lodash'
import styles from './style'

class TabBar extends PureComponent {

  static propTypes = {
    configTabBar: PropTypes.object,
    token:PropTypes.bool,
  }
  renderTabBar = () => {
    const {
      navigationState,
      navigation,
      activeTintColor,
      inactiveTintColor,
      renderIcon } = this.props.configTabBar
    const currentIndex = _.get(navigationState, ['index'])
    return _.get(navigationState, ['routes']).map((route, index) => {
      return (
        <TouchableWithoutFeedback
          key={index}
          onPress={() => { 
              navigation.navigate(_.get(navigation, ['state', 'routes', index]))
            } 
          }
        >
          <View
            style={styles.icon}
          >
            {renderIcon({
              route,
              index,
              tintColor: currentIndex === index ? activeTintColor : inactiveTintColor,
              focused: currentIndex === index,
            })}
          </View>
        </TouchableWithoutFeedback>
      )
    })
  }

  render() {
    return (
      <View
        style={styles.container}
      >
        {this.renderTabBar()}
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = dispatch => ({
})
export default connect(mapStateToProps, mapDispatchToProps)(TabBar)

