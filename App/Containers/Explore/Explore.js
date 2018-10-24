import React, { PureComponent } from 'react';
import { View, Text, TouchableOpacity, ScrollView,  } from 'react-native'
import IonicIcon from 'react-native-vector-icons/Ionicons'
import { connect } from 'react-redux'
import { Swiper as SwiperComponent } from '../../Components'
import TrendingActivities from './TrendingActivities'
import PopularActivities from './PopularActivities'
import PopularActivitiesType from './PopularActivitiesType'
import Receive from './Receive'
import AppActions from '../../Redux/AppRedux'
import { normalize, normalizeHeight } from '../../Themes/Metrics';
import { Colors,  } from '../../Themes'

data = [{ id: 1 }, { id: 2 }, { id: 3 }]

class Explore extends PureComponent {

  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: (
        <Text style={{
          marginLeft: normalize(20),
          fontSize: normalize(25), fontWeight: 'bold', color: Colors.black
        }}>
          Explore
        </Text>),
      headerRight: (
        <TouchableOpacity>
          <IonicIcon
            style={{ paddingHorizontal: normalize(20), fontWeight: 'bold' }}
            name="ios-search"
            size={normalize(25)}
            color={Colors.black}
          />
        </TouchableOpacity>)
    }
  }


  goTours = () => {
    this.props.navigation.navigate("ActivitiesTypeNavigation")
  }
  luuApp = () => this.props.luuApp()
  render() {
    console.log('rerender')
    return (
      <View flex={1} style={{ backgroundColor: Colors.white }}>
        <ScrollView showsVerticalScrollIndicator={false}>


          {/* Recommended */}
          <View style={{ marginHorizontal: normalize(20), height: normalizeHeight(350) }} >
            <TouchableOpacity onPress={this.luuApp}>
              <Text style={{
                fontWeight: 'bold',
                fontSize: normalize(20), color: Colors.primary, marginVertical: normalize(10)
              }} >
                Recommended
              </Text>
            </TouchableOpacity>
            <SwiperComponent data={data} />
          </View>

          {/* Trending */}
          <TrendingActivities data={data} />


          {/* Popular */}
          <PopularActivities data={data} />

          {/* Receive */}
          <Receive />


          {/* Popular activity type*/}
          <PopularActivitiesType goTours={this.goTours}/>
       


        </ScrollView>
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  token: state
})
const mapDispatchToProps = (dispatch) => ({
  // luuApp: () => dispatch(AppActions.saveToken()),
  luuApp: () => dispatch(AppActions.showStartup()),

})

export default connect(mapStateToProps, mapDispatchToProps)(Explore)




