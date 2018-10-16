import React, { PureComponent } from 'react'
import { TouchableWithoutFeedback, View,Text } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import _ from 'lodash'
import { NavigationActions } from 'react-navigation'
import styles from './style'
import { normalize } from '../../Themes/Metrics';
import { Metrics,Colors } from '../..//Themes'

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
      getLabel,
      renderIcon } = this.props.configTabBar
    const currentIndex = _.get(navigationState, ['index'])
    return _.get(navigationState, ['routes']).map((route, index) => {
      const scene = { route, index  }
      return (
        <TouchableWithoutFeedback
          key={index}
          onPress={() => { 
              // navigation.navigate(_.get(navigation, ['state', 'routes', index]))
              if ((route.key === 'MyBookingsNavigation' || route.key === 'AccountNavigation') && !this.props.token) {
                navigation.navigate({ routeName: 'LogInNavigation'})
              }else{
                navigation.navigate(_.get(navigation, ['state', 'routes', index]))
              }
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
            <Text style={{ marginTop:4,fontSize:normalize(10) ,color: currentIndex === index ? activeTintColor : inactiveTintColor,  }} >
             {getLabel({
              route
            })}
            </Text>
          </View>
        </TouchableWithoutFeedback>
      )
    })
  }

  render() {
    return (
      <View
        style={{
          flexDirection: 'row',
          height: Metrics.screenHeight/11, alignItems:'center',
          backgroundColor: Colors.white,
          borderTopWidth:1,
          borderTopColor:'#7B7B7B'
        }}
      >
        {this.renderTabBar()}
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  token: !!state.app.token,

})
const mapDispatchToProps = dispatch => ({
  dispatch,

})
export default connect(mapStateToProps, mapDispatchToProps)(TabBar)

