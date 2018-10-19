import React, { PureComponent } from 'react';
import { View, Text, ScrollView, StatusBar } from 'react-native'
import { connect } from 'react-redux'
import FastImage from 'react-native-fast-image'
import Swiper from './Swiper'
import Info from './Info'
import Description from './Description'
import Included from './Included'
import AddOptions from './AddOptions'
import Picture from './Picture'
import Location from './Location';
import Review from './Review'
import Footer from './Footer'
import { normalize, } from '../../Themes/Metrics';
import { Colors, Metrics } from '../../Themes'

data = [{ id: 1 }, { id: 2 }, { id: 3 }]

class ActivitiesDetail extends PureComponent {

  static navigationOptions = ({ navigation }) => {
    return {
      header: null
    }
  }


  goBack = () => {
    console.log(this.props.navigation)
    this.props.navigation.goBack(null)
  }
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: Colors.white, }} >

        <ScrollView style={{ marginBottom: normalize(50) }}>
          <StatusBar barStyle="light-content" />
          {/* swiper */}
          <Swiper data={data} goBack={this.goBack} />

          {/* info */}

          <Info />

          {/* description */}
          <Description />


          {/* Included */}
          <Included />


          {/* Add Optons */}
          <AddOptions />


          {/* picture */}
          <Picture />

          <Location />
          <Review />

        </ScrollView>
        <Footer />

      </View>

    )
  }
}



export default connect(null, null)(ActivitiesDetail)




