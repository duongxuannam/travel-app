import React, { PureComponent } from 'react';
import { View, Animated, ScrollView, StatusBar, Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import IonicIcon from 'react-native-vector-icons/Ionicons'
import Swiper from './Swiper'
import Info from './Info'
import Description from './Description'
import Included from './Included'
import AddOptions from './AddOptions'
import Picture from './Picture'
import Location from './Location';
import Review from './Review'
import Footer from './Footer'
import { normalize, normalizeHeight, } from '../../Themes/Metrics';
import { Colors, Metrics } from '../../Themes'

data = [{ id: 1 }, { id: 2 }, { id: 3 }]
const HEADER_MAX_HEIGHT = normalizeHeight(200);
const HEADER_MIN_HEIGHT = 60;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

class ActivitiesDetail extends PureComponent {

  static navigationOptions = ({ navigation }) => {
    return {
      header: null
    }
  }
  constructor(props) {
    super(props);
    this.state = {
      scrollY: new Animated.Value(0),
    };
  }
  _renderScrollViewContent = () => {
    return (
      <View style={{ marginTop: HEADER_MAX_HEIGHT }}>
        < Info />
        < Description />
        < Included />
        < AddOptions />
        < Picture />
        <Location />
        <Review />
      </View>
    )
  }

  goBack = () => {
    this.props.navigation.goBack(null)
  }
  render() {
    const headerHeight = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE],
      outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
      extrapolate: 'clamp',
    });
    const imageOpacity = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
      outputRange: [1, 1, 0],
      extrapolate: 'clamp',
    });
    const imageTranslate = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE],
      outputRange: [0, -50],
      extrapolate: 'clamp',
    });
    return (
      <View style={{ flex: 1, backgroundColor: Colors.white, }} >
        <StatusBar barStyle="light-content" />
        <ScrollView style={{ marginBottom: normalizeHeight(50), flex: 1 }}
          scrollEventThrottle={16}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: this.state.scrollY } } }]
          )}
        >
          {this._renderScrollViewContent()}
        </ScrollView>
        <Animated.View style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          overflow: 'hidden',
          height: headerHeight,
          backgroundColor: Colors.white,

        }}>
          <Animated.View
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              width: null,
              height: HEADER_MAX_HEIGHT,
              resizeMode: 'cover',
              opacity: imageOpacity,
              transform: [{ translateY: imageTranslate }],
            }}
          >
            < Swiper data={data} goBack={this.goBack} />

          </Animated.View>

          <View style={{
            height: normalizeHeight(60),
          }}>
            <TouchableOpacity onPress={this.goBack} style={{ marginTop: normalizeHeight(20), marginLeft: normalize(15) }}>
              <IonicIcon name="md-arrow-back" color={Colors.primary} size={normalize(30)} />
            </TouchableOpacity>

          </View>
        </Animated.View>

        <Footer />
      </View>

    )
  }
}



export default connect(null, null)(ActivitiesDetail)




