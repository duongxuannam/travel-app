import React, { PureComponent } from 'react'
import { TouchableWithoutFeedback, View,Text } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import _ from 'lodash'
import styles from './style'
import { normalize } from '../../Themes/Metrics';
import { Metrics,Colors } from '../..//Themes'

class TabBar extends PureComponent {

  static propTypes = {
    configTabBar: PropTypes.object,
    token:PropTypes.string,
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
    const paramMybooking = { title:'My Bookings', description:'View your activity bookings' }
    const paramMyAccount = { title:'My Account', description:'Sign In or Join' }
    return _.get(navigationState, ['routes']).map((route, index) => {
      return (
        <TouchableWithoutFeedback
          key={index}
          onPress={() => { 
              // navigation.navigate(_.get(navigation, ['state', 'routes', index]))
              if ((route.key === 'MyBookingsNavigation' || route.key === 'AccountNavigation') && !this.props.token) {
              const param = route.key === 'MyBookingsNavigation' ? paramMybooking: paramMyAccount
                navigation.navigate( 'LogInNavigation',param)
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
  token: _.get(state, [ 'user','token'])
})
const mapDispatchToProps = dispatch => ({
  dispatch,

})
export default connect(mapStateToProps, mapDispatchToProps)(TabBar)

